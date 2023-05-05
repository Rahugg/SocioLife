from django.urls import path, include
from . import views

urlpatterns = [
    path('post/<int:author_id>/', views.Post, name='post'),
    path('posts/', views.Posts.as_view(), name='token_obtain_pair'),
    path('my-posts/', views.MyPosts.as_view()),
    path('posts/<int:id>/', include('comment.urls')),
    path('posts/<int:id>/', views.PostLike),
]
