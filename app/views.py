from asyncio import constants
from cgi import test
import json
# from sys import ps1
# from signal import raise_signal
from django.contrib.auth.decorators import login_required, user_passes_test
from django.shortcuts import redirect, render
from django.views.generic import TemplateView, View, ListView
from django.contrib.auth import authenticate, login
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from django.urls import reverse
from django.contrib import messages
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django import forms


from django.http import HttpResponse, HttpResponseRedirect
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode  
from django.template.loader import render_to_string
from requests import request  
from .token import account_activation_token  
from django.contrib.sites.shortcuts import get_current_site  
from django.core.mail import EmailMessage  
from django.utils.encoding import force_bytes, force_text  
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import PasswordResetForm

from .models import ScoreBoard
from .forms import ScoreBoard_Form

class LoginRegisterView(TemplateView):
    template_name = "login-register.html"


# class LoginView(View):
#     def post(self, request, *args, **kwargs):

#         username = self.request.POST.get('username')
#         password = self.request.POST.get('password')

#         if username is not None and password:
#             self.user_cache = authenticate(self.request, username=username, password=password)
#             if self.user_cache is None:
#                 try:
#                     user_temp = User.objects.get(username=username)
#                 except:
#                     user_temp = None

#                 if user_temp is not None:
#                     login(request, self.user)
#                     messages.info(request, 'Login successfull')
#                     return redirect(reverse('home'))
#                 else:
#                     raise forms.ValidationError(
#                         self.error_messages['invalid_login'],
#                         code='invalid_login',
#                         params={'username': self.username_field.verbose_name},
#                     )

#         return redirect(reverse('home'))



class LoginView(View):
    def post(self, request, *args, **kwargs):
        username = request.POST.get('username')
        password = request.POST.get('password')

        if username == "" or password == '':
            messages.error(request, 'Both username and password is required')
            return redirect(reverse('login_register'))

        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                messages.info(request, 'Login successfull')
                return redirect(reverse('home'))
            else:
                messages.error(request, 'please activate your account')
                return redirect(reverse('login_register'))
        else:
            messages.error(request, 'Invalid credentials!')
            return redirect(reverse('login_register'))


  
class RegisterView(View):
    def post(self, request, *args, **kwargs):
        username = request.POST.get('username')
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')


        try:
            try:
                match = User.objects.get(email=email)
            except User.DoesNotExist:
                # Unable to find a user, this is fine
                # return email
                # A user was found with this as a username, raise an error.
            # raise forms.ValidationError('This email address is already in use')

                if len(password1) < 5:
                    messages.error(request, 'Password must be atleast 5 characters')
                    return redirect(reverse('login_register'))
                if password1 != password2:
                    messages.error(request, 'Password does not match')
                    return redirect(reverse('login_register'))

                

                user = User.objects.create_user(username=username, email=email, password=password1)
                user.is_active = False
                user.save()

                current_site = get_current_site(request)
                mail_subject = 'Activation link has been sent to your email id'  
                message = render_to_string('acc_active_email.html', {  
                    'user': user,  
                    'domain': current_site.domain,  
                    'uid':urlsafe_base64_encode(force_bytes(user.pk)),  
                    'token':account_activation_token.make_token(user),  
                })  
                to_email = email
                email = EmailMessage(  
                            mail_subject, message, to=[to_email]  
                )  
                email.send()  
                # return HttpResponse('Please confirm your email address to complete the registration')  


                # except Exception as e:
                    # messages.error(request, str(e))
                    # print(e)
                    # return redirect(reverse('login_register'))
                messages.success(request, 'Registration successfull please confirm your email')
                return redirect(reverse('login_register'))
            
            except:
                print("this is a problem")
            else:
                messages.error(request, 'email or username already exists')
                return redirect(reverse('login_register'))

        except:
                messages.error(request, 'email or username already exists')
                return redirect(reverse('login_register'))





def activate(request, uidb64, token):  
    User = get_user_model()
    try:  
        uid = force_text(urlsafe_base64_decode(uidb64))  
        user = User.objects.get(pk=uid)  
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):  
        user = None  
    if user is not None and account_activation_token.check_token(user, token):  
        user.is_active = True  
        user.save()  
        return HttpResponse('Thank you for your email confirmation. Now you can login your account.')  
    else:  
        return HttpResponse('Activation link is invalid!')  


# LoginRequiredMixin
class HomeView(ListView):
    template_name = "home.html"
    queryset = ScoreBoard.objects.order_by('DB_combined')

    

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        print(context)
        try:
            context['best_score'] = ScoreBoard.objects.filter(user=self.request.user).order_by('DB_combined').first()
        except:
            pass
        return context
    
    def post(self, request, *args):
        # self.object = self.get_object()
        # context = self.get_context_data(object=self.object)
        # print(request.is_ajax())
        if request.is_ajax():
            Dark_Test = ScoreBoard.objects.filter(user=self.request.user).values_list("Dark_Theam", flat=True)
            print(Dark_Test[0])
            if Dark_Test[0]:
                print("Light Theme is on")
                ScoreBoard.objects.update(Dark_Theam = False)
            else:
                print("night theme is on")
                ScoreBoard.objects.update(Dark_Theam = True)
            print(Dark_Test)
            
    


class AddPointsView(LoginRegisterView, View):
    def post(self, request, *args, **kwargs):
        points = request.POST.get('points')
        ScoreBoard.objects.create(points=points, user=self.request.user)
        return JsonResponse(data={"status": 'success', "message": "Points Added Successfully"})




@login_required
@csrf_exempt
def math_game(request, **kwargs):

    test_object = ScoreBoard.objects.filter(user=request.user).order_by('DB_combined').first()
    # Number_test = []
    # try:
    #     Number_test['best_score'] = ScoreBoard.objects.filter(user=request.user).order_by('DB_combined').first()
    # except:
    #     pass
    

    points = request.POST.get('points')
    DB_combined = request.POST.get('DB_combined')
    Big_list = request.POST.get('Big_list')
    # print(DB_combined)
    # print(points)
    # print(Big_list)
    print(request.is_ajax())

    form = ScoreBoard_Form(data = request.POST, files=request.FILES)

    try:
        prev_vlaue = ScoreBoard.objects.filter(user = request.user).values_list('points', flat=True)[0]
        # print(prev_vlaue)
    except Exception as e:
        print(e)

    if(points is not None):
        points = int(points)
        try:
            if(prev_vlaue > points):
                if request.method == 'POST':
                    if request.is_ajax():
                        ScoreBoard.objects.filter(user = request.user).delete()
                        ScoreBoard.objects.create(points = points, user = request.user, DB_combined = DB_combined, Big_list=Big_list)
                        messages.success(request, 'Your Scores have been recorded')

        
        except:
            ScoreBoard.objects.create(points = points, user = request.user, DB_combined = DB_combined, Big_list = Big_list)
            messages.success(request, 'Your Scores have been recorded')


        #     # if form.is_valid():
        #     #     form.save()
        #     #     print('im here')
        #     #     data = {
        #     #         'message': 'form is saved'
        #     #     }            
        #     #     return JsonResponse('data is saved')

        #     # else:
        #     #     print('form is invalid ', form.errors)
        # else:
        #     print('ajax is invalid')


    context = {
        'form':form,
        'test_object':test_object
        }
    return render(request, 'math_game_html.html', context)





def math_game_practice(request):
    return render(request, 'math_game_practice.html')


def pictures_game_practice(request):
    return render(request, 'pictures_game_practice.html')

class User_Profile(ListView, LoginRequiredMixin):
    template_name = "user_profile.html"
    queryset = ScoreBoard.objects.order_by('DB_combined')

    def post(self, request, *args, **kwargs):
        if request.method == 'POST':
            user = request.user
            user.delete()
            return redirect(reverse('home'))

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        try:
            context['best_score'] = ScoreBoard.objects.filter(user=self.request.user).order_by('DB_combined').first()
        except:
            pass
        return context


def Terms_and_conditions(request):
    return render(request, 'terms_and_conditions.html')

