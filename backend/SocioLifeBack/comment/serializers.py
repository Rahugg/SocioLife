from rest_framework import serializers
from .models import Comment
from userAuth.serializers import ProfileSerializer


class CommentSerializer(serializers.ModelSerializer):
    author = ProfileSerializer(default=serializers.CurrentUserDefault(), read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'author', 'post', 'created_at', 'text']
        read_only_fields = ['id', 'author', 'post', 'created_at']
