# Generated by Django 2.2.7 on 2019-11-18 16:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_auto_20191117_2334'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pedido',
            name='talla',
            field=models.CharField(choices=[('40', '40'), ('40.5', '40.5'), ('41', '41'), ('41.5', '41.5'), ('42', '42'), ('42.5', '42.5'), ('43', '43'), ('43.5', '43.5'), ('44', '44')], max_length=50, null=True),
        ),
    ]
