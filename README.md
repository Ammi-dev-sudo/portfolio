# Portfolio - ANDRIAMANANA Ammi Joda

Portfolio full-stack développé avec **React + Vite** (frontend) et **Django REST Framework** (backend). Permet d'ajouter des projets directement depuis l'administration Django et de gérer les messages de contact.

## Identité
- Nom & Prénom : ANDRIAMANANA Ammi Joda
- Email : ammijoda5@gmail.com
- Téléphone : 0346914064
- Facebook : Ammi
- Nationalité : Malagasy (drapeau affiché discrètement dans le Hero)

## Stack
- **Frontend** : React 19 + Vite + Tailwind CSS 4 + React Router DOM
- **Backend** : Django 5.1+ + Django REST Framework + Django CORS Headers + django-filter
- **Admin** : Django Admin + django-import-export
- **Base de données** : SQLite (défaut), MySQL ou PostgreSQL
- **Images** : Pillow

## Structure du projet
```text
portfolio/
├── backend/  # Django + DRF
└── frontend/ # React + Vite
```

## Installation

### 1) Backend Django

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate   # Windows

pip install -r requirements.txt
cp .env.example .env
# Édite .env si besoin (DB_ENGINE, SECRET_KEY...)
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

L'API est accessible sur `http://localhost:8000`

Django Admin : `http://localhost:8000/admin/`

> Un superutilisateur de démo a été créé localement : **admin / admin123**
> (à supprimer ou modifier en production).

### Choix de la base de données

Dans `backend/.env`, règle `DB_ENGINE` sur :

- `sqlite3` (par défaut, aucune configuration requise)
- `mysql` → renseigne `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_PORT`
- `postgresql` → idem

Les pilotes sont **purs Python / wheels binaires** (aucune compilation requise) :
- MySQL : `PyMySQL`
- PostgreSQL : `psycopg[binary]`

### 2) Frontend React + Vite

```bash
cd frontend
npm install
cp .env.example .env   # VITE_API_URL=http://localhost:8000/api
npm run dev
```

Frontend accessible sur `http://localhost:5173`

## Ajouter des projets

1. Connecte-toi sur `http://localhost:8000/admin/`
2. Va dans **Projets > Projets** → **Ajouter un projet**
3. Remplis : Titre, Description courte/complète, Thumbnail, Technologies, Liens (demo/github), Année, etc.
4. Ajoute des images dans **Galerie d'images** (inline)
5. Coche **Publié** et/ou **Projet mis en avant**
6. Enregistre

Les projets s'affichent automatiquement sur le frontend.

**Astuce** : Utilise **Importer/Exporter** (django-import-export) pour importer un fichier CSV/JSON/XLSX avec tes projets.

## Gérer les messages de contact

Les formulaires envoyés depuis `/contact` arrivent dans **Contact > Messages de contact** dans l'admin. Tu peux marquer comme "Lu".

## Configuration CORS

Par défaut autorisé pour `http://localhost:5173`. Si tu changes le port ou déploies, ajuste `CORS_ALLOWED_ORIGINS` dans `backend/core/settings.py`.

## Déploiement rapide (idées)
- Backend : Render, Railway, PythonAnywhere
- Frontend : Vercel, Netlify
- BDD : Neon (Postgres), PlanetScale/MySQL
