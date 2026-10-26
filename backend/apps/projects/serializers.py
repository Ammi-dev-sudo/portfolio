from rest_framework import serializers
from .models import Project, ProjectImage, Technology


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ['id', 'name', 'order']


class ProjectImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = ProjectImage
        fields = ['id', 'image', 'caption', 'order']


class ProjectListSerializer(serializers.ModelSerializer):
    thumbnail = serializers.ImageField(use_url=True)
    technologies = TechnologySerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = [
            'id', 'title', 'slug', 'project_type', 'short_description', 'thumbnail',
            'technologies', 'demo_url', 'github_url', 'year',
            'is_featured', 'is_published', 'order', 'tags'
        ]


class ProjectDetailSerializer(serializers.ModelSerializer):
    thumbnail = serializers.ImageField(use_url=True)
    images = ProjectImageSerializer(many=True, read_only=True)
    technologies = TechnologySerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = [
            'id', 'title', 'slug', 'project_type', 'short_description', 'description',
            'thumbnail', 'images', 'technologies', 'role', 'client',
            'demo_url', 'github_url', 'project_url', 'year', 'start_date',
            'end_date', 'is_featured', 'is_published', 'order', 'tags',
            'created_at', 'updated_at'
        ]
