from rest_framework import serializers
from .models import Post
from userAuth.serializers import ProfileSerializer


class PostSerializer(serializers.ModelSerializer):
    author = ProfileSerializer(default=serializers.CurrentUserDefault(), read_only=True)
    likes = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = '__all__'
        read_only_fields = ('likes',)

    def get_likes(self, obj):
        return obj.all_likes()

    def create(self, validated_data):
        post = Post.objects.create(**validated_data)
        return post

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.question = validated_data.get('question', instance.question)
        instance.image = validated_data.get('image', instance.image)
        instance.save()
        return instance
