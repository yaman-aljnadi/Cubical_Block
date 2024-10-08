from pyexpat import model
from django.db import models
from django.contrib.auth.models import User


class ScoreBoard(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_scores")
    points = models.PositiveIntegerField(default=0)
    DB_combined = models.CharField(max_length=50)
    Big_list = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    Dark_Theam = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username}-{self.points}"

