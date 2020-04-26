from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Category, Product, New
from .serializers import CategorySerializer, ProductSerializer, NewSerializer


class CategoryDetailAPIView(APIView):
    def get_object(self, category_id):
        try:
            return Category.objects.get(id=category_id)
        except Category.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, category_id):
        category = self.get_object(category_id)
        serializer = CategorySerializer(category)
        return Response(serializer.data)

    def put(self, request, category_id):
        category = self.get_object(category_id)
        serializer = CategorySerializer(instance=category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.data})

    def delete(self, request, category_id):
        category = self.get_object(category_id)
        category.delete()

        return Response({'deleted': True})

class ProductDetailsAPIView(APIView):
    def get_object(self, product_id):
        try:
            return Product.objects.get(id=product_id)
        except Product.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, product_id):
        product = self.get_object(product_id)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self, request, product_id):
        product = self.get_object(product_id)
        serializer = ProductSerializer(instance=product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'errors': serializer.errors })

    def delete(self, request, product_id):
        category = self.get_object(product_id)
        category.delete()

        return Response({'deleted':True})

class NewDetailAPIView(APIView):
    def get_object(self, new_id):
        try:
            return New.objects.get(id=new_id)
        except New.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, new_id):
        new = self.get_object(new_id)
        serializer = NewSerializer(new)
        return Response(serializer.data)

    def put(self, request, new_id):
        new = self.get_object(new_id)
        serializer = NewSerializer(instance=new, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.data})

    def delete(self, request, new_id):
        new = self.get_object(new_id)
        new.delete()

        return Response({'deleted': True})


