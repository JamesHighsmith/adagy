from django.http import JsonResponse

def move_robot(request):
    # Your logic to move the robot
    return JsonResponse({'status': 'Robot moved'})

def get_robot_status(request):
    # Your logic to get the robot status
    return JsonResponse({'status': 'Robot status'})
