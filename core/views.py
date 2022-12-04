from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializer import drainDataSerializer

def index(request):
	return render(request, 'core/index.html')

def main(request):
	return render(request, 'core/base.html')

def sidebar(request):
	return render(request, 'core/sidebar.html')

@api_view(['GET',])
def getAllDrainData(request):
	drains = Drain.objects.all()
	serializer = drainDataSerializer(drains, many=True)
	return Response(serializer.data)	
