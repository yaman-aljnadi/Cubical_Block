from django.urls import path
from . import views
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('', views.LoginRegisterView.as_view(), name="login_register"),
    path('login/', views.LoginView.as_view(), name="login"),
    path('register/', views.RegisterView.as_view(), name="register"),
    path('home/', views.HomeView.as_view(), name="home"),
    path('add-points/', views.AddPointsView.as_view(), name="add_points"),
    path('logout/', auth_views.LogoutView.as_view(template_name="blog/html_main.html"), name='logout')
]
