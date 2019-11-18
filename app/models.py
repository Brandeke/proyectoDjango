from django.db import models
from django.utils import timezone
from django.utils.translation import ugettext as _

class Pedido(models.Model):
    nombre = models.CharField(max_length=30,null=True)
    MARCAS = (
        ('Nike','Nike'),
        ('Adidas','Adidas'),
        ('Reebok','Reebok'),
    )
    marca = models.CharField(max_length=50,choices=MARCAS,null=True)
    TALLAS = (
        ('40','40'),
        ('40.5','40.5'),
        ('41','41'),
        ('41.5','41.5'),
        ('42','42'),
        ('42.5','42.5'),
        ('43','43'),
        ('43.5','43.5'),
        ('44','44'),
    )
    talla = models.CharField(max_length=50,choices=TALLAS,null=True)
    TIPOS = (
        ('Deportivas','Deportivas'),
        ('Urbanas','Urbanas'),
        ('Casuales','Casuales'),
    )
    tipo = models.CharField(max_length=50,choices=TIPOS,null=True)
    
    def __str__(self):
        return self.nombre

    class Meta:
        permissions = (
        ('administrador',_('Es administrador')),
        ('cliente',_('Es cliente')),
    )

class Cliente(models.Model):
    nombre = models.CharField(max_length=30)
    rut = models.CharField(max_length=12)
    email = models.EmailField(max_length=50)
    celular = models.CharField(max_length=12)
    contraseña = models.CharField(max_length=20)

    def __str__(self):
        return self.nombre
        
    class Meta:
        permissions = (
            ('administrador',_('Es administrador')),
            ('cliente',_('Es cliente')),
        )
