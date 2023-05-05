from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.shortcuts import get_object_or_404

from .serializers import CommentSerializer
from .models import Comment
from posts.models import Post
from .permissions import IsOwnerStaffOrReadOnly


# Create your views here.
class PostCommentsListView(generics.ListCreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        post_id = self.kwargs['id']
        post = get_object_or_404(Post, id=post_id)
        return post.comments.all().order_by('-created_at')

    def perform_create(self, serializer):
        post_id = self.kwargs['id']
        post_d = get_object_or_404(Post, id=post_id)
        serializer.save(author=self.request.user.profile, post=post_d)


class CommentDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CommentSerializer
    permission_classes = (IsOwnerStaffOrReadOnly,)
    lookup_url_kwarg = 'pk'

    def get_queryset(self):
        pk = self.kwargs.get('pk', None)
        comment = Comment.objects.filter(id=pk)
        return comment
