from django.contrib import admin

from .models import Project, ProjectImage, Technology


class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1
    fields = ["image", "caption", "order"]


@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    list_display = ["name", "order"]
    list_editable = ["order"]
    search_fields = ["name"]


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = [
        "title",
        "project_type",
        "year",
        "is_featured",
        "is_published",
        "order",
    ]
    list_filter = [
        "project_type",
        "is_featured",
        "is_published",
        "year",
        "technologies",
    ]
    search_fields = ["title", "description", "short_description"]
    prepopulated_fields = {"slug": ("title",)}
    filter_horizontal = ["technologies"]
    inlines = [ProjectImageInline]


@admin.register(ProjectImage)
class ProjectImageAdmin(admin.ModelAdmin):
    list_display = ["project", "caption", "order"]
    list_filter = ["project"]
    search_fields = ["caption", "project__title"]