from django.contrib.auth.models import Group, User

from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('id', 'username', 'email', 'groups')

class GroupSerializer(serializers.ModelSerializer):
	class Meta:
		model = Group
		fields = ('id', 'name')