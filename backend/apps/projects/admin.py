from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import Project, ProjectImage, Technology
from .resources import ProjectResource


@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    list_display = ('name', 'order')
    list_editable = ('order',)
    search_fields = ('name',)


class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1
    fields = ('image', 'caption', 'order')


@admin.register(Project)
class ProjectAdmin(ImportExportModelAdmin):
    resource_class = ProjectResource
    list_display = ('title', 'project_type', 'year', 'is_featured', 'is_published', 'order', 'created_at')
    list_filter = ('project_type', 'is_featured', 'is_published', 'year', 'technologies')
    search_fields = ('title', 'short_description', 'description', 'tags')
    list_editable = ('is_featured', 'is_published', 'order')
    prepopulated_fields = {'slug': ('title',)}
    filter_horizontal = ('technologies',)
    inlines = [ProjectImageInline]
    readonly_fields = ('created_at', 'updated_at')
    fieldsets = (
        ('Informations générales', {
            'fields': ('title', 'slug', 'project_type', 'short_description', 'description', 'thumbnail', 'tags')
        }),
        ('Détails', {
            'fields': ('technologies', 'role', 'client', 'year', 'start_date', 'end_date')
        }),
        ('Liens', {
            'fields': ('demo_url', 'github_url', 'project_url')
        }),
        ('Publication', {
            'fields': ('is_featured', 'is_published', 'order')
        }),
        ('Dates', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        })
    )


@admin.register(ProjectImage)
class ProjectImageAdmin(admin.ModelAdmin):
    list_display = ('project', 'caption', 'order')
    list_filter = ('project',)
    search_fields = ('project__title', 'caption')
