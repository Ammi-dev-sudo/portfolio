from import_export import resources
from .models import Project


class ProjectResource(resources.ModelResource):
    class Meta:
        model = Project
        fields = (
            'id', 'title', 'slug', 'project_type', 'short_description', 'description',
            'role', 'client', 'demo_url', 'github_url', 'project_url',
            'year', 'start_date', 'end_date', 'is_featured', 'is_published',
            'order', 'tags', 'created_at', 'updated_at'
        )
