from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class Livro(models.Model):
    id = models.AutoField(primary_key=True)
    titulo = models.CharField(max_length=1000, blank=False)
    autor = models.CharField(max_length=200, blank=False)
    adicionado = models.DateField(auto_now_add=True, blank=False)
    concluido = models.DateField(blank=True, null=True)
    nota = models.IntegerField(default=0, validators=[MinValueValidator(1), MaxValueValidator(5)])
    status = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(2)])

#Valor dos Status
#0 = Quero Ler
#1 = Lendo
#2 = Lido