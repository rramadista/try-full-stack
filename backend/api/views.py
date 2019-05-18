from django.shortcuts import render

from django.contrib.auth.models import User, Group
from api.models import Office
from rest_framework import viewsets, permissions
from api.serializers import UserSerializer, GroupSerializer, OfficeSerializer

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class OfficeViewSet(viewsets.ModelViewSet):
    queryset = Office.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = OfficeSerializer