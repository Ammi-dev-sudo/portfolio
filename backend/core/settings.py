from pathlib import Path
import os

from dotenv import load_dotenv
import dj_database_url


# ============================================================
# 1. CHEMINS ET VARIABLES D'ENVIRONNEMENT
# ============================================================

BASE_DIR = Path(__file__).resolve().parent.parent

# Charge le fichier .env local s'il existe.
# Les variables déjà définies dans l'environnement sont conservées.
load_dotenv(BASE_DIR / ".env")


# ============================================================
# 2. SÉCURITÉ DJANGO
# ============================================================

SECRET_KEY = os.getenv(
    "SECRET_KEY",
    "django-insecure-local-development-key-change-me"
)

DEBUG = os.getenv("DEBUG", "False").strip().lower() == "true"

# Exemple :
# ALLOWED_HOSTS=localhost,127.0.0.1,mon-service.onrender.com
ALLOWED_HOSTS = [
    host.strip()
    for host in os.getenv(
        "ALLOWED_HOSTS",
        "localhost,127.0.0.1"
    ).split(",")
    if host.strip()
]


# ============================================================
# 3. APPLICATIONS DJANGO
# ============================================================

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    # Applications externes
    "rest_framework",
    "corsheaders",
    "import_export",
    "django_filters",

    # Applications du portfolio
    "apps.projects.apps.ProjectsConfig",
    "apps.contact.apps.ContactConfig",
]


# ============================================================
# 4. MIDDLEWARE
# ============================================================

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]


# ============================================================
# 5. CONFIGURATION GÉNÉRALE
# ============================================================

ROOT_URLCONF = "core.urls"

WSGI_APPLICATION = "core.wsgi.application"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]


# ============================================================
# 6. BASE DE DONNÉES
# ============================================================

# Priorité :
# 1. DATABASE_URL : PostgreSQL hébergé, par exemple sur Neon.
# 2. DB_ENGINE=mysql : MySQL.
# 3. DB_ENGINE=postgresql : PostgreSQL avec variables séparées.
# 4. Sinon : SQLite local.

DATABASE_URL = os.getenv("DATABASE_URL", "").strip()
DB_ENGINE = os.getenv("DB_ENGINE", "sqlite3").strip().lower()

if DATABASE_URL:
    # Connexion à une base hébergée.
    DATABASES = {
        "default": dj_database_url.parse(
            DATABASE_URL,
            conn_max_age=300,
            ssl_require=True,
        )
    }

elif DB_ENGINE == "mysql":
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.mysql",
            "NAME": os.getenv("DB_NAME", "portfolio_db"),
            "USER": os.getenv("DB_USER", "root"),
            "PASSWORD": os.getenv("DB_PASSWORD", ""),
            "HOST": os.getenv("DB_HOST", "localhost"),
            "PORT": os.getenv("DB_PORT", "3306"),
            "OPTIONS": {
                "charset": "utf8mb4",
            },
        }
    }

elif DB_ENGINE == "postgresql":
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.postgresql",
            "NAME": os.getenv("DB_NAME", "portfolio_db"),
            "USER": os.getenv("DB_USER", "postgres"),
            "PASSWORD": os.getenv("DB_PASSWORD", ""),
            "HOST": os.getenv("DB_HOST", "localhost"),
            "PORT": os.getenv("DB_PORT", "5432"),
            "OPTIONS": {
                "sslmode": "require",
            },
        }
    }

else:
    # Base locale : aucune migration de données n'est nécessaire
    # pour utiliser le fichier SQLite existant.
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.sqlite3",
            "NAME": BASE_DIR / "db.sqlite3",
        }
    }


# ============================================================
# 7. VALIDATION DES MOTS DE PASSE
# ============================================================

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": (
            "django.contrib.auth.password_validation."
            "UserAttributeSimilarityValidator"
        ),
    },
    {
        "NAME": (
            "django.contrib.auth.password_validation."
            "MinimumLengthValidator"
        ),
    },
    {
        "NAME": (
            "django.contrib.auth.password_validation."
            "CommonPasswordValidator"
        ),
    },
    {
        "NAME": (
            "django.contrib.auth.password_validation."
            "NumericPasswordValidator"
        ),
    },
]


# ============================================================
# 8. LANGUE ET HEURE
# ============================================================

LANGUAGE_CODE = "fr-fr"

TIME_ZONE = "Africa/Nairobi"

USE_I18N = True

USE_TZ = True


# ============================================================
# 9. FICHIERS STATIQUES ET IMAGES
# ============================================================

STATIC_URL = "/static/"

STATIC_ROOT = BASE_DIR / "staticfiles"

MEDIA_URL = "/media/"

MEDIA_ROOT = BASE_DIR / "media"


# ============================================================
# 10. CONFIGURATION DES CLÉS PRIMAIRES
# ============================================================

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"


# ============================================================
# 11. CONFIGURATION CORS POUR REACT
# ============================================================

# Ajoute ici l'URL exacte de ton frontend Vercel dans Render :
# FRONTEND_URL=https://ton-portfolio.vercel.app
# Plusieurs URL peuvent être séparées par des virgules.

FRONTEND_URLS = os.getenv("FRONTEND_URL", "")

CORS_ALLOWED_ORIGINS = [
    url.strip().rstrip("/")
    for url in FRONTEND_URLS.split(",")
    if url.strip()
]

# Autorise les adresses locales pour le développement.
CORS_ALLOWED_ORIGINS += [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

# Ne pas autoriser toutes les origines en production.
CORS_ALLOW_ALL_ORIGINS = DEBUG


# ============================================================
# 12. PROTECTION CSRF
# ============================================================

CSRF_TRUSTED_ORIGINS = [
    url.strip().rstrip("/")
    for url in os.getenv("CSRF_TRUSTED_ORIGINS", "").split(",")
    if url.strip()
]


# ============================================================
# 13. CONFIGURATION PRODUCTION
# ============================================================

if not DEBUG:
    SECURE_CONTENT_TYPE_NOSNIFF = True
    SESSION_COOKIE_SECURE = True
    CSRF_COOKIE_SECURE = True

    # Render utilise un proxy HTTPS.
    SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
