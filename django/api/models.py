from django.db import models

class Goal(models.Model):
    name = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)
