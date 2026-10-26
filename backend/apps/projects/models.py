from django.db import models
from django.utils.text import slugify


class Technology(models.Model):
    name = models.CharField(max_length=50, unique=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', 'name']
        verbose_name = 'Technologie'
        verbose_name_plural = 'Technologies'

    def __str__(self):
        return self.name


class Project(models.Model):
    TYPE_CHOICES = [
        ('web', 'Web'),
        ('mobile', 'Mobile'),
        ('desktop', 'Desktop'),
        ('api', 'API'),
        ('other', 'Autre'),
    ]

    title = models.CharField(max_length=200, verbose_name='Titre')
    project_type = models.CharField(
        max_length=20, choices=TYPE_CHOICES, default='web', verbose_name='Type de projet'
    )
    slug = models.SlugField(max_length=250, unique=True, blank=True)
    short_description = models.TextField(max_length=300, verbose_name='Description courte')
    description = models.TextField(verbose_name='Description complète')
    thumbnail = models.ImageField(upload_to='projects/thumbnails/', verbose_name='Image principale', blank=True, null=True)
    technologies = models.ManyToManyField(Technology, blank=True, verbose_name='Technologies utilisées')
    role = models.CharField(max_length=100, blank=True, null=True, verbose_name='Rôle')
    client = models.CharField(max_length=100, blank=True, null=True, verbose_name='Client')
    demo_url = models.URLField(blank=True, null=True, verbose_name='Lien démo')
    github_url = models.URLField(blank=True, null=True, verbose_name='Lien GitHub')
    project_url = models.URLField(blank=True, null=True, verbose_name='Autre lien')
    year = models.PositiveIntegerField(blank=True, null=True, verbose_name='Année')
    start_date = models.DateField(blank=True, null=True, verbose_name='Date de début')
    end_date = models.DateField(blank=True, null=True, verbose_name='Date de fin')
    is_featured = models.BooleanField(default=False, verbose_name='Projet mis en avant')
    is_published = models.BooleanField(default=True, verbose_name='Publié')
    order = models.PositiveIntegerField(default=0, verbose_name='Ordre d\'affichage')
    tags = models.CharField(max_length=255, blank=True, null=True, verbose_name='Tags (séparés par virgules)')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-is_featured', 'order', '-created_at']
        verbose_name = 'Projet'
        verbose_name_plural = 'Projets'

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
            base_slug = self.slug
            counter = 1
            while Project.objects.filter(slug=self.slug).exclude(pk=self.pk).exists():
                self.slug = f"{base_slug}-{counter}"
                counter += 1
        super().save(*args, **kwargs)


class ProjectImage(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='images', verbose_name='Projet')
    image = models.ImageField(upload_to='projects/gallery/', verbose_name='Image')
    caption = models.CharField(max_length=200, blank=True, null=True, verbose_name='Légende')
    order = models.PositiveIntegerField(default=0, verbose_name='Ordre')

    class Meta:
        ordering = ['order']
        verbose_name = 'Image du projet'
        verbose_name_plural = 'Galerie d\'images'

    def __str__(self):
        return f"{self.project.title} - {self.id}"
