# Portfolio - ANDRIAMANANA Ammi Joda

Portfolio full-stack développé avec **React + Vite** (frontend) et **Django REST Framework** (backend). Permet d'ajouter des projets directement depuis l'administration Django.

## Fonctionnalités
- Mode clair, sombre ou automatique (suit le thème de l'ordinateur), mémorisé dans le navigateur.
- Page contact sans formulaire : WhatsApp, email et Facebook en accès direct.
- Projets et technologies gérés depuis Django Admin.

## Identité
- Nom & Prénom : ANDRIAMANANA Ammi Joda
- Profil : Étudiant en L3 Informatique, parcours SIO — ESMIA Innovation, Antananarivo
- Formation : L3 Informatique parcours SIO (2025–2026), L2 (2024–2025), L1 Tronc Commun (2023–2024) — ESMIA Innovation, Antanimena ; Baccalauréat — ACEEM Andravoahangy (2023)
- Objectif : stage en développement back-end à partir du 21 décembre 2026
- Email : ammijoda5@gmail.com
- Téléphone / WhatsApp : 0346914064 (+261 34 69 140 64)
- Adresse : Lot IVE 17 bis Anosisoa, Ambohimanarina, Antananarivo
- GitHub : [Ammi-dev-sudo](https://github.com/Ammi-dev-sudo)
- Facebook : Ammi
- Langues : français (courant), anglais (intermédiaire), malagasy (natif)
- Nationalité : Malagasy (drapeau affiché discrètement dans le Hero)
- Technologies : Java, Java EE, Python, PHP, SQL, React, React Native, Django, MySQL, SQLite, PostgreSQL, Git/GitHub, Merise/UML, MVC/DAO
- Projets : Tantsaha Connecte, Taxiko, Rencontre des Samy Tia, Énergie de bâtiment, Vente Fictive, Biblio, Portfolio

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
cp .env.example .env   # VITE_API_URL=http://127.0.0.1:8000 (sans /api)
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

En local, `http://localhost:5173` est autorisé par défaut. En production, définis la variable `FRONTEND_URL` du backend avec l'URL Vercel (ex. `https://portfolio-acme-8eb4.vercel.app`) : elle alimente automatiquement CORS et CSRF.

## Déploiement Render + Vercel

Le fichier `render.yaml` décrit le backend (service web Python + PostgreSQL) et `frontend/vercel.json` le frontend (SPA Vite).

### URLs de production

| Service | URL |
| --- | --- |
| Frontend (Vercel) | https://portfolio-acme-8eb4.vercel.app |
| Alias de branche | https://portfolio-git-main-acme-8eb4.vercel.app |
| Backend (Render) | `https://<service>.onrender.com` (URL exacte dans le dashboard Render) |
| Admin Django | `https://<service>.onrender.com/admin/` |
| API projets | `https://<service>.onrender.com/api/projects/` |

> Remplace `<service>` par le nom exact affiché dans le dashboard Render. Le sous-domaine `portfolio-api.onrender.com` peut déjà être utilisé par un autre compte : Render ajoute alors un suffixe au nom du service.

### Déploiement automatique

- **Frontend** : chaque `git push` sur la branche `main` déclenche un nouveau déploiement Vercel.
- **Backend** : Render redéploie le service si le Blueprint est connecté au repo et si l'auto-deploy est activé.
- **Base de données** : `DATABASE_URL` est fourni par la base Render `portfolio-db`.

### 1) Backend sur Render

1. Pousse le repo sur GitHub.
2. Sur [render.com](https://render.com) : **New > Blueprint**, sélectionne le repo.
3. Render détecte `render.yaml`. Renseigne `FRONTEND_URL` avec l'URL Vercel et les identifiants Cloudinary (`CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`).
4. Déploie. L'API est disponible sur `https://<service>.onrender.com` (admin sur `/admin/`).
5. Crée le superutilisateur : **Shell** Render → `python manage.py createsuperuser`.

Variables utiles :

| Variable | Valeur |
| --- | --- |
| `SECRET_KEY` | généré par Render |
| `DEBUG` | `False` |
| `ALLOWED_HOSTS` | `localhost,127.0.0.1` (Render ajoute automatiquement son domaine) |
| `FRONTEND_URL` | `https://portfolio-acme-8eb4.vercel.app` |
| `DATABASE_URL` | fourni par la base Render |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary → Dashboard → Product Environment Credentials |
| `CLOUDINARY_API_KEY` | idem |
| `CLOUDINARY_API_SECRET` | idem |

> Le plan gratuit Render ne conserve pas les fichiers uploadés sur son disque local. Les images sont donc stockées sur Cloudinary (variable `CLOUDINARY_URL` possible à la place des trois identifiants). En local, sans identifiants Cloudinary, le backend continue d'utiliser `backend/media/`.
>
> Les images uploadées avant la mise en place de Cloudinary ont été perdues avec le redémarrage de Render : ré-uploade-les depuis l'admin Django après le déploiement.

### 2) Frontend sur Vercel

1. Sur [vercel.com](https://vercel.com) : **Add New > Project**, importe le repo.
2. **Root Directory** : `frontend`.
3. Framework : Vite (détecté). Build : `npm run build`, Output : `dist`.
4. Variables d'environnement : `VITE_API_URL=https://<service>.onrender.com` (sans `/api`) et `VITE_FACEBOOK_URL=https://www.facebook.com/ton-profil`.
5. Déploie, puis reporte l'URL Vercel dans `FRONTEND_URL` sur Render et redéploie le backend.

### 3) Vérifications après déploiement

```bash
# Le frontend répond (200)
curl -I https://portfolio-acme-8eb4.vercel.app

# L'API renvoie la liste des projets (JSON)
curl https://<service>.onrender.com/api/projects/
```

Parcours à tester : `/`, `/projects`, `/about`, `/contact`.

### Protection Vercel

> État actuel : l'URL de production redirige vers `vercel.com/sso-api`. La protection d'authentification Vercel est donc active et le portfolio n'est pas accessible publiquement.

Pour la désactiver :

1. Vercel → projet **portfolio** → **Settings** → **Deployment Protection**.
2. Désactive **Vercel Authentication** (ou choisis **Standard Protection** pour ne protéger que les previews).
3. Redéploie si nécessaire.

> Vérifie aussi que `VITE_API_URL` sur Vercel pointe vers l'URL exacte du backend Render. Le sous-domaine `portfolio-api.onrender.com` renvoie actuellement une réponse qui ne provient pas de ce projet Django : l'URL du service peut être suffixée par Render.

### Mettre à jour le site

```bash
cd frontend
npm run lint && npm run build
cd ..
git add README.md frontend
git commit -m "Met à jour le portfolio et le déploiement"
git push origin main
```

Vercel et Render redéploient automatiquement. Vérifie ensuite les URLs ci-dessus.

### Autres options
- Backend : Railway, PythonAnywhere
- Frontend : Netlify
- BDD : Neon (Postgres), PlanetScale/MySQL
