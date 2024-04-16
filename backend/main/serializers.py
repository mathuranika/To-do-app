from rest_framework import serializers
from django.contrib.auth.models import User
from .models import TodoList,WebsiteViews

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['first_name','last_name','username','password']
