# ChâTop - Portail de Location Saisonnière

Application full-stack TypeScript pour mettre en relation locataires et propriétaires dans une zone touristique.

## 🚀 Démarrage rapide

### Installation

#### 1. Cloner le repository

```bash
git clone https://github.com/UncleBone/Projet_3_back_end.git
```

#### 2. Installer et lancer le front-end React

```bash
cd frontend
npm install
npm run dev
```

L'application front-end sera accessible sur [http://localhost:5173](http://localhost:5173)

#### 3. Créer la base de données MySQL

```bash
mysql -u root -p < ressources/sql/schema.sql
```

Ou via MySQL Workbench / DBeaver :
1. Ouvrir le fichier `ressources/sql/schema.sql`
2. Exécuter le script

#### 4. Installer le back-end NestJS

```bash
cd backend
npm install
```

### 5. Rajouter les identifiants de connection à la BD
Dans **/backend**, rajouter le fichier **.env** contenant les identifiants de connection à la base de donnée, sur le modèle du fichier **.env.exemple** fourni.

### 6. Lancer le back-end
```
npm run start:dev
```

L'application back-end sera accessible sur [http://localhost:3001](http://localhost:3001)

## 📂 Structure du projet

```
Projet_3_back_end/
├── frontend/                # Application React 19 (déjà complète)
│   ├── src/
│   │   ├── components/     # Composants réutilisables
│   │   ├── pages/          # Pages de l'application
│   │   ├── services/       # Services API (axios)
│   │   ├── types/          # Types TypeScript
│   │   └── App.tsx
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── prisma/			 # schema prisma
│   ├── src/
│   │   ├── auth/     		 # Gestion Passport & JWT
│   │   ├── controllers/   # Contrôleurs API
│   │   ├── services/      # Services API
│   │   ├── repository/    # Accès BD
│   │   ├── dto/    		 # DTO
│   │   ├── generated/		 # généré par prisma
│   │   ├── app.module.ts
│   │   ├── main.ts
│   │   ├── prisma.config.ts
│   │   └── prisma.service.ts		#adaptateur MySQL
│   ├── uploads/			# images updloadées
│   └── .env.exemple		# modèle de fichier .env
├── ressources/
│   ├── mockoon/           # Environnement Mockoon
│   │   └── chatop-api.json
│   └── sql/               # Schéma de base de données
│       └── schema.sql
│
└── README.md
```

## URL Swagger
[http://localhost:3001/api](http://localhost:5173/api)
