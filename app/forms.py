from django import forms
from django.db.models import fields
from django.contrib.auth.forms import PasswordResetForm
from django.contrib.auth.models import User

from .models import ScoreBoard

class ScoreBoard_Form(forms.ModelForm):
    class Meta:
        model = ScoreBoard
        managed = False
        fields = ('user', 'points', 'DB_combined', 'Dark_Theam')


class EmailValidationOnForgotPassword(PasswordResetForm):
    def clean_email(self):
        email = self.cleaned_data['email']
        if not User.objects.filter(email__iexact=email, is_active=True).exists():
            msg = ("There is no user registered with the specified E-Mail address.")
            self.add_error('email', msg)
        return email
