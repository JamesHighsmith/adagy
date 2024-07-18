from django.db import models
from django.contrib.auth.models import User

class RobotConfiguration(models.Model):
    name = models.CharField(max_length=100)
    urdf_file = models.FileField(upload_to='urdf/')
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

class RobotStatus(models.Model):
    robot = models.ForeignKey(RobotConfiguration, on_delete=models.CASCADE)
    status = models.JSONField()
    timestamp = models.DateTimeField(auto_now_add=True)
