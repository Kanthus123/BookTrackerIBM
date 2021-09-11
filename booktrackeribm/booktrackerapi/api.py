from booktrackerapi.models import Livro
from rest_framework import viewsets, permissions
from .serializers import LivroSerializer

class LivroViewSet(viewsets.ModelViewSet):
    queryset = Livro.objects.all()
    permission_classes = [

        permissions.AllowAny

    ]

    serializer_class = LivroSerializer