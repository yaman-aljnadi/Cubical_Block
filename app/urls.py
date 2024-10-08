from tempfile import template
from unicodedata import name
from django.urls import path
from . import views, forms
from django.contrib.auth import views as auth_views
from django.conf.urls import url


urlpatterns = [
    path('login_register', views.LoginRegisterView.as_view(), name="login_register"),
    path('', views.HomeView.as_view(), name="home"),

    path("password-reset/", auth_views.PasswordResetView.as_view(template_name='password_reset.html', form_class = forms.EmailValidationOnForgotPassword), name='password_reset'),
    path("password-reset/done/", auth_views.PasswordResetDoneView.as_view(template_name='password_reset_done.html'), name='password_reset_done'),
    path("password-reset-confirm/<uidb64>/<token>/", auth_views.PasswordResetConfirmView.as_view(template_name='password_reset_confirm.html'), name='password_reset_confirm'),
    path("password-reset-complete/", auth_views.PasswordResetCompleteView.as_view(template_name='password_reset_complete.html'), name='password_reset_complete'),
    path('activate/<uidb64>/<token>/',  views.activate, name='activate'),  
    
    path('login/', views.LoginView.as_view(), name="login"),
    path('register/', views.RegisterView.as_view(), name="register"),
    path('add-points/', views.AddPointsView.as_view(), name="add_points"),
    path('logout/', auth_views.LogoutView.as_view(template_name="home.html"), name='logout'),
    path('user_profile/', views.User_Profile.as_view(template_name="user_profile.html"), name='user_profile'),
    path('terms_and_conditions.html/', views.Terms_and_conditions, name='terms_and_conditions'),

    path("math_game/", views.math_game, name="math_game"),
    path("math_game_practice/", views.math_game_practice, name="math_game_practice"),
    path("pictures_game_practice/", views.pictures_game_practice, name="pictures_game_practice"),
]
