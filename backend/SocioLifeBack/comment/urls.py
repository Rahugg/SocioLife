from django.urls import path
from .views import *


urlpatterns = [
    path('comment/', PostCommentsListView.as_view(), name='comments'),
    path('comment/<int:pk>/', CommentDetailView.as_view(), name='updateComment')
]