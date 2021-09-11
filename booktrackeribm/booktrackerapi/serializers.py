from django.db.models import fields
from rest_framework import serializers
from booktrackerapi.models import Livro

class LivroSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Livro
        fields = '__all__'