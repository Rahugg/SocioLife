from django.db import models
from django.contrib.auth.models import User

from backend.SocioLifeBack.userAuth.models import Profile


class Post(models.Model):
    name = models.CharField(max_length=255)
    author = models.ForeignKey(Profile, on_delete=models.CASCADE, null=True, blank=True)
    description = models.TextField()
    question = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='post_images/', default='post_images/blank-user-profile.png')
    likes = models.ManyToManyField(User, related_name='recipeLike')

    def __str__(self):
        return self.name

    def all_likes(self):
        return self.likes.count()
