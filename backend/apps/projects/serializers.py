from rest_framework import serializers

from .models import Project, ProjectImage, Technology


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ["id", "name", "order"]


class ProjectImageSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = ProjectImage
        fields = ["id", "image", "caption", "order"]

    def get_image(self, obj):
        request = self.context.get("request")

        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)

        return None


class ProjectListSerializer(serializers.ModelSerializer):
    thumbnail = serializers.SerializerMethodField()
    technologies = TechnologySerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "project_type",
            "slug",
            "short_description",
            "thumbnail",
            "technologies",
            "role",
            "client",
            "demo_url",
            "github_url",
            "project_url",
            "year",
            "start_date",
            "end_date",
            "is_featured",
            "tags",
            "created_at",
            "updated_at",
        ]

    def get_thumbnail(self, obj):
        request = self.context.get("request")

        if obj.thumbnail and request:
            return request.build_absolute_uri(obj.thumbnail.url)

        return None


class ProjectDetailSerializer(ProjectListSerializer):
    images = ProjectImageSerializer(many=True, read_only=True)

    class Meta(ProjectListSerializer.Meta):
        fields = ProjectListSerializer.Meta.fields + [
            "description",
            "images",
        ]