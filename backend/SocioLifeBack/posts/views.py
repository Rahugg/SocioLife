from django.http.response import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework import status, generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView

from .models import Post
from .serializers import PostSerializer
from .permissions import IsOwnerStaffOrReadOnly


class Posts(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request):
        companies = Post.objects.all()
        serializer = PostSerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes(IsAuthenticated)
def company(request, author_id):
    try:
        c = Post.objects.get(author=author_id)
    except Post.DoesNotExist:
        return Response({'message': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PostSerializer(c)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = PostSerializer(c, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        c.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
@permission_classes(IsAuthenticated)
def PostLike(request, pk):
    post = get_object_or_404(Post, id=pk)
    if post.likes.filter(id=request.user.id).exists():
        post.likes.remove(request.user)
        return Response("Like removed")

    post.likes.add(request.user)
    return Response("Like added")


class MyPosts(generics.ListCreateAPIView):
    serializer_class = PostSerializer
    permission_class = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        user = self.request.user
        queryset = Post.objects.filter(author=user.profile)
        return queryset.order_by('-created_at')

    def perform_create(self, serializer):
        serializer.save(author=self.request.user.profile)
