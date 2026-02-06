# Kasa – Application de location immobilière

Ce projet est une application web développée avec React dans le cadre de la formation Développeur Front-End - OpenClassrooms.

L’objectif est de créer le front-end d’une plateforme de location immobilière à partir de maquettes Figma, en utilisant React et React Router.

---

## Technologies utilisées

- React
- React Router
- JavaScript (ES6+)
- HTML5
- CSS / SCSS
- Vite

## Structure du projet

src/
├─ assets/ # Images, icônes et ressources statiques
├─ components/ # Composants réutilisables (Banner, Card, Collapse, Slideshow, Header, Footer)
├─ layout/ # Centralisation des éléments communs à toutes les pages (Header, Footer, Layout)
├─ pages/ # Pages principales (Home, Logement, About, Error)
├─ data/ # Données mockées (logements.json)
├─ styles/ # Styles globaux
├─ App.jsx # Configuration des routes
└─ main.jsx # Point d’entrée de l’application

## Fonctionnalités

- Affichage de la liste des logements disponibles
- Navigation entre les pages grâce à React Router
- Page de détails pour chaque logement
- Slideshow des images
- Sections repliables (Collapse)
- Gestion des erreurs avec une page 404
- Interface responsive conforme aux maquettes

## Installation et lancement du projet

### Prérequis

- Node.js (version recommandée : 18+)
- npm ou yarn

### Installation

```bash
npm install
```

### Lancement du serveur de développement

```bash
npm run dev
```

L’application est accessible à l’adresse indiquée dans le terminal (par défaut : http://localhost:5173).

### Données

Les données des logements sont simulées via un fichier JSON (logements.json) fourni dans le cadre du projet.
Aucune API externe n’est utilisée.

Projet réalisé par Sylvie Trollé
Dans le cadre du parcours Développeur Front-End - OpenClassrooms
