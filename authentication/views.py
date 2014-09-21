from django.contrib.auth.models import User

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from authentication.serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
	'''
	API endpoint that allows users to be viewed or edited.
	'''
	queryset = User.objects.all()
	serializer_class = UserSerializer

class LoginAPIView(APIView):
	def post(self, request, format=None):
		return Response({ 'login': True })

class LogoutAPIView(APIView):
	def post(self, request, format=None):
		return Response({ 'logout': True })

class RegisterAPIView(APIView):
	def post(self, request, format=None):
		return Response({ 'register': True })