from rest_framework.serializers import ModelSerializer
from .models import *

class drainDataSerializer(ModelSerializer):
    class Meta:
        model = Drain
        fields = '__all__'