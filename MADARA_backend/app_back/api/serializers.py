from rest_framework import serializers
from .models import Category, Product, New, Manager, User, Commentari


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(**validated_data)
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance

class NewSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    description = serializers.CharField()
    image = serializers.CharField()

    def create(self, validated_data):
        new = New.objects.create(**validated_data)
        return new

    def update(self, instance, validated_data):
        instance.description = validated_data.get('description', instance.description)
        instance.image = validated_data.get('image', instance.image)
        instance.save()
        return instance

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ['id', 'name','category','description','image','rating', 'price']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']

class ManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manager
        fields = ['id', 'username', 'email', 'password']

class CommentariSerializer(serializers.ModelSerializer):
    class Meta:
        model = Commentari
        fields = ['id', 'name', 'category']
