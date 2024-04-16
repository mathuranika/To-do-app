from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.generics import ListCreateAPIView

class UserApiView(ListCreateAPIView):
    serializer_class=UserSerializer
    queryset=User.objects.all()
