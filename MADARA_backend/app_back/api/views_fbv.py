from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Category, Product, New, Commentari
from .serializers import CategorySerializer, ProductSerializer, NewSerializer


@api_view(['GET', 'POST'])
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'POST'])
def new_list(request):
    if request.method == 'GET':
        news = New.objects.all()
        serializer = NewSerializer(news, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = NewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def product_by_categoryId(request, category_id):
    if request.method == 'GET':
        products = Product.objects.filter(category=category_id)
        serializer = CategorySerializer(products, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def comment_by_categoryId(request, category_id):
    if request.method == 'GET':
        comments = Commentari.objects.filter(category=category_id)
        serializer = CategorySerializer(comments, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
def products_list(request):
    if request.method == 'GET':
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


