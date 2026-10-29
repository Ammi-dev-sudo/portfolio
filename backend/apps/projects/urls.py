from django.urls import path

from .views import (
    ProjectDetailAPIView,
    ProjectListAPIView,
    TechnologyListAPIView,
)


urlpatterns = [
    path(
        "",
        ProjectListAPIView.as_view(),
        name="project-list",
    ),
    path(
        "technologies/",
        TechnologyListAPIView.as_view(),
        name="technology-list",
    ),
    path(
        "<slug:slug>/",
        ProjectDetailAPIView.as_view(),
        name="project-detail",
    ),
]