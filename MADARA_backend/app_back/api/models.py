from django.db import models
# Create your models here.
class Category(models.Model):

    class Meta:
        verbose_name_plural = 'categories'

    name = models.CharField(max_length=200)

class Product(models.Model):
    class Meta:
        verbose_name_plural = 'products'

    name = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField(default=' ')
    image = models.CharField(max_length=500)
    rating = models.FloatField(default=0.0)
    price = models.FloatField(default=0.0)

class New(models.Model):
    class Meta:
        verbose_name_plural = 'news'
    description = models.CharField(max_length=300)
    image = models.CharField(max_length=500)

class Commentari(models.Model):
    class Meta:
        verbose_name_plural = 'commentaries'
    name = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)


class User(models.Model):
    username = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    password = models.CharField(max_length=30)

class Manager(User):
    pass

