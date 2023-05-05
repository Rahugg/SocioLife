from django.db import models
from userAuth.models import Profile
from posts.models import Post


# Create your models here.

class Comment(models.Model):
    author = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='comments', null=True, blank=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
