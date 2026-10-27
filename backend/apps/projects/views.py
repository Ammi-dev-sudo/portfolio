from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.response import Response

from .models import Project, Technology
from .serializers import (
    ProjectDetailSerializer,
    ProjectListSerializer,
    TechnologySerializer,
)


class TechnologyListAPIView(generics.ListAPIView):
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer


class ProjectListAPIView(generics.ListAPIView):
    serializer_class = ProjectListSerializer

    def get_queryset(self):
        queryset = Project.objects.filter(is_published=True)

        project_type = self.request.query_params.get("type")
        technology = self.request.query_params.get("technology")
        featured = self.request.query_params.get("featured")

        if project_type:
            queryset = queryset.filter(project_type=project_type)

        if technology:
            queryset = queryset.filter(technologies__name__iexact=technology)

        if featured in ["true", "True", "1"]:
            queryset = queryset.filter(is_featured=True)

        return queryset


class ProjectDetailAPIView(generics.RetrieveAPIView):
    serializer_class = ProjectDetailSerializer
    lookup_field = "slug"

    def get_queryset(self):
        return Project.objects.filter(is_published=True)

    def retrieve(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        project = get_object_or_404(queryset, slug=kwargs["slug"])
        serializer = self.get_serializer(project)

        return Response(serializer.data)