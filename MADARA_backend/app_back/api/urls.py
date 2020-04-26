from django.urls import path
from .views_cbv import *
from .views_fbv import *
from rest_framework_jwt.views import obtain_jwt_token



urlpatterns = [
    # FBV
    path('categories/', category_list),
    path('categories/<int:category_id>/products/', product_by_categoryId),
    path('categories/<int:category_id>/comments/', comment_by_categoryId),
    path('products/', products_list),
    path('news/', new_list),

    path('login/', obtain_jwt_token),

    # CBV
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailsAPIView.as_view()),
    path('news/<int:new_id>/', NewDetailAPIView.as_view()),
]