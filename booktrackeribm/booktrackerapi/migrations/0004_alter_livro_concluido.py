# Generated by Django 3.2.7 on 2021-09-11 16:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booktrackerapi', '0003_alter_livro_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='livro',
            name='concluido',
            field=models.DateField(blank=True, null=True),
        ),
    ]