from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import GoalSerializer
from .models import Goal
from django.conf import settings

@api_view(['GET'])
def api_overview(request):
    """Returns a list of available api paths"""
    return Response(settings.API_URLS)

@api_view(['GET'])
def list_goals(request):
    """Lists all goals in a database"""
    goals = Goal.objects.all()
    serializer = GoalSerializer(goals, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def view_goal(request, pk):
    """Returns the details of a goal"""
    goals = Goal.objects.get(id=pk)
    serializer = GoalSerializer(goals, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def create_goal(request):
    """Creates a new goal"""
    serializer = GoalSerializer(data=request.data);
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def update_goal(request):
    """Updates a goal"""
    goal = Goal.objects.get(id=pk)
    serializer = GoalSerializer(instance=goal, data=request.data);
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_goal(request, pk):
    """Deletes a goal"""
    goal = Goal.objects.get(id=pk)
    goal.delete()
    return Response('Goal successfully deleted')
