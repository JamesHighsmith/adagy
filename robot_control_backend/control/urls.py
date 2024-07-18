from django.urls import path
from .views import move_robot, get_robot_status

urlpatterns = [
    path('move/', move_robot, name='move_robot'),
    path('status/', get_robot_status, name='get_robot_status'),
]
