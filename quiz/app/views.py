from django.shortcuts import redirect
from django.views.generic import TemplateView, View, ListView
from django.contrib.auth import authenticate, login
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from django.urls import reverse
from django.contrib import messages
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt

from .models import ScoreBoard


class LoginRegisterView(TemplateView):
    template_name = "login-register.html"


class LoginView(View):
    def post(self, request, *args, **kwargs):
        username = request.POST.get('username')
        password = request.POST.get('password')

        if username == "" or password == '':
            messages.error(request, 'Both username and password is required')
            return redirect(reverse('login_register'))

        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            messages.info(request, 'Login successfull')
            return redirect(reverse('home'))
        else:
            messages.error(request, 'Invalid credentials!')
            return redirect(reverse('login_register'))


class RegisterView(View):
    def post(self, request, *args, **kwargs):
        username = request.POST.get('username')
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')
        if len(password1) < 5:
            messages.error(request, 'Password must be atleast 5 characters')
            return redirect(reverse('login_register'))
        if password1 != password2:
            messages.error(request, 'Password does not match')
            return redirect(reverse('login_register'))
        try:
            User.objects.create_user(
                username=username, email=email, password=password1)
        except Exception as e:
            messages.error(request, str(e))
            return redirect(reverse('login_register'))
        messages.success(request, 'Registration successfull')
        return redirect(reverse('login_register'))


class HomeView(LoginRequiredMixin, ListView):
    template_name = "home.html"
    queryset = ScoreBoard.objects.order_by('points')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['best_score'] = ScoreBoard.objects.filter(
            user=self.request.user).order_by('points').first()
        return context


class AddPointsView(LoginRegisterView, View):
    def post(self, request, *args, **kwargs):
        points = request.POST.get('points')
        ScoreBoard.objects.create(points=points, user=self.request.user)
        return JsonResponse(data={"status": 'success', "message": "Points Added Successfully"})


# @csrf_exempt
# def addPoint(request):
#     User.objects.get(username="admin")
#     points = request.POST.get('points')
#     ScoreBoard.objects.create(points=points, user=request.user)
#     return JsonResponse(data={"status": 'success', "message": "Points Added Successfully"})
