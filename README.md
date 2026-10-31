# Portfolio - ANDRIAMANANA Ammi Joda

Portfolio full-stack développé avec **React + Vite** (frontend) et **Django REST Framework** (backend). Permet d'ajouter des projets directement depuis l'administration Django.

## Fonctionnalités
- Mode clair, sombre ou automatique (suit le thème de l'ordinateur), mémorisé dans le navigateur.
- Page contact sans formulaire : WhatsApp, email et Facebook en accès direct.
- Projets et technologies gérés depuis Django Admin.

## Identité
- Nom & Prénom : ANDRIAMANANA Ammi Joda
- Email : ammijoda5@gmail.com
- Téléphone / WhatsApp : 0346914064 (+261 34 69 140 64)
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

Le thème (clair / sombre / système) se choisit via le bouton dans la barre de navigation. Le choix est conservé dans le `localStorage` du navigateur.

### Lien Facebook

Renseigne `VITE_FACEBOOK_URL` avec l'URL complète de ton profil Facebook dans `frontend/.env` (et dans les variables d'environnement Vercel) pour que les boutons Facebook ouvrent directement ton profil.

```env
VITE_FACEBOOK_URL=https://www.facebook.com/ton-profil
```

## Ajouter des projets

1. Connecte-toi sur `http://localhost:8000/admin/`
2. Va dans **Projets > Projets** → **Ajouter un projet**
3. Remplis : Titre, Description courte/complète, Thumbnail, Technologies, Liens (demo/github), Année, etc.
4. Ajoute des images dans **Galerie d'images** (inline)
5. Coche **Publié** et/ou **Projet mis en avant**
6. Enregistre

Les projets s'affichent automatiquement sur le frontend.

**Astuce** : Utilise **Importer/Exporter** (django-import-export) pour importer un fichier CSV/JSON/XLSX avec tes projets.

## Contact

La page `/contact` ne contient plus de formulaire. Elle affiche directement :

- **WhatsApp** : le bouton ouvre `wa.me` avec une conversation vers le numéro `+261 34 69 140 64` (l'utilisateur reste connecté à son compte WhatsApp sur son ordinateur).
- **Email** : `mailto:` ouvre l'application mail avec l'adresse `ammijoda5@gmail.com`.
- **Facebook** : le bouton ouvre le profil `Ammi`, où le visiteur peut t'ajouter ou t'envoyer un message.
- **Téléphone** : appel direct via `tel:`.

Les coordonnées sont centralisées dans `frontend/src/data/contact.js`.

## Configuration CORS

En local, `http://localhost:5173` est autorisé par défaut. En production, définis la variable `FRONTEND_URL` du backend (ex. `https://mon-portfolio.vercel.app`) : elle alimente automatiquement CORS et CSRF.

## Déploiement Render + Vercel

Le fichier `render.yaml` décrit le backend (service web Python + PostgreSQL) et `frontend/vercel.json` le frontend (SPA Vite).

### 1) Backend sur Render

1. Pousse le repo sur GitHub.
2. Sur [render.com](https://render.com) : **New > Blueprint**, sélectionne le repo.
3. Render détecte `render.yaml`. Renseigne `FRONTEND_URL` avec l'URL Vercel (tu peux mettre une valeur provisoire puis la corriger).
4. Déploie. L'API est disponible sur `https://<service>.onrender.com` (admin sur `/admin/`).
5. Crée le superutilisateur : **Shell** Render → `python manage.py createsuperuser`.

Variables utiles : `SECRET_KEY` (généré), `DEBUG=False`, `DATABASE_URL` (fourni par la base Render), `FRONTEND_URL`, `SERVE_MEDIA=True`.

> Le plan gratuit Render ne conserve pas les fichiers uploadés (images) entre deux déploiements. Pour un portfolio durable, utilise un stockage externe (Cloudinary/S3) ou un disque persistant Render.

### 2) Frontend sur Vercel

1. Sur [vercel.com](https://vercel.com) : **Add New > Project**, importe le repo.
2. **Root Directory** : `frontend`.
3. Framework : Vite (détecté). Build : `npm run build`, Output : `dist`.
4. Variables d'environnement : `VITE_API_URL=https://<service>.onrender.com` et `VITE_FACEBOOK_URL=https://www.facebook.com/ton-profil`.
5. Déploie, puis reporte l'URL Vercel dans `FRONTEND_URL` sur Render et redéploie le backend.

> Chaque `git push` sur la branche `main` déclenche automatiquement un nouveau déploiement Vercel. Le mode clair/sombre et la nouvelle page contact seront donc actifs sur le site en ligne après le push.

### Autres options
- Backend : Railway, PythonAnywhere
- Frontend : Netlify
- BDD : Neon (Postgres), PlanetScale/MySQL
