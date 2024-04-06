from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404

from .models import Project
from .serializers import ProjectSerializer


class ProjectAPIView(APIView):
    def get(self, request, *args, **kwargs):
        project = get_object_or_404(Project, id=1)
        serializer = ProjectSerializer(instance=project)
        return Response(serializer.data, status=status.HTTP_200_OK)
