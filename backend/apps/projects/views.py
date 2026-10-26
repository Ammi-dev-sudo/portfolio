from rest_framework import generics
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from .models import Project
from .serializers import ProjectListSerializer, ProjectDetailSerializer


class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.filter(is_published=True).prefetch_related('technologies')
    serializer_class = ProjectListSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['is_featured', 'year', 'technologies', 'project_type']
    search_fields = ['title', 'short_description', 'description', 'tags']
    ordering_fields = ['order', 'year', 'created_at']
    ordering = ['-is_featured', 'order', '-created_at']


class ProjectDetailView(generics.RetrieveAPIView):
    queryset = Project.objects.filter(is_published=True).prefetch_related('technologies', 'images')
    serializer_class = ProjectDetailSerializer
    lookup_field = 'slug'
