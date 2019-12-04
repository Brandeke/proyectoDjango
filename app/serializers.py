from .models import Cliente
from rest_framework import serializers

class ClienteSerializers(serializers.ModelSerializers):
    class Meta:
        model = Cliente
        fileds = '__all__'