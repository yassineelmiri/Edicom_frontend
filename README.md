# Edicom Frontend

![image](https://github.com/user-attachments/assets/8948fe82-7e1f-4c1d-991c-e00377ed5751)


Bienvenue sur le dépôt du projet **Edicom Frontend**, un projet frontend développé pour un test technique. Ce projet consomme un backend basé sur **Symfony 5.4** pour gérer l'authentification des utilisateurs.

## Description

Ce projet implémente un système d'authentification complet pour permettre aux utilisateurs de se connecter à une application sécurisée. Il communique avec une API backend Symfony 5.4 pour effectuer des opérations d'authentification, telles que l'inscription, la connexion et la gestion des sessions utilisateurs.

## Fonctionnalités

- **Connexion et Inscription** : Permet aux utilisateurs de se connecter ou de s'inscrire via des formulaires interactifs.
- **Gestion de la session** : L'application gère les sessions utilisateur en stockant les informations d'authentification localement.
- **Validation des formulaires** : Utilisation de la validation côté client pour garantir que les données soumises sont correctes avant de les envoyer au backend.
- **Interface utilisateur responsive** : L'interface est adaptée aux écrans de différentes tailles, assurant une bonne expérience utilisateur sur desktop et mobile.

## Technologies utilisées

- **Frontend** : React
- **Gestion de l'état** : Redux
- **CSS** : Tailwind CSS 
- **API Backend** : Symfony 5.4 pour gérer les endpoints d'authentification (côté serveur).

## Installation

### Prérequis

Avant de commencer, assurez-vous d'avoir installé Node.js et npm (ou yarn) sur votre machine.

### Cloner le dépôt

```bash
git clone https://github.com/yassineelmiri/Edicom_frontend.git
cd Edicom_frontend
```

### Installer les dépendances

```bash
npm install
# ou si vous utilisez yarn
yarn install
```

### Lancer l'application

```bash
npm start
# ou si vous utilisez yarn
yarn start
```

L'application sera accessible à l'adresse `http://localhost:3000`.

## Utilisation

1. **Page de connexion** : Accédez à la page de connexion pour entrer vos informations d'identification.
2. **Page d'inscription** : Si vous êtes un nouvel utilisateur, vous pouvez vous inscrire via le formulaire d'inscription.
3. **Gestion des sessions** : Une fois connecté, l'application gère automatiquement la session de l'utilisateur et vous donne accès à des fonctionnalités spécifiques.

## Contribuer

Les contributions à ce projet sont les bienvenues. Si vous souhaitez ajouter des fonctionnalités ou corriger des bugs, veuillez ouvrir une issue ou soumettre une pull request.

1. Forkez ce dépôt.
2. Créez une branche pour votre fonctionnalité : `git checkout -b feature/ma-fonctionnalité`
3. Committez vos changements : `git commit -m 'Ajout d'une nouvelle fonctionnalité'`
4. Poussez vers votre branche : `git push origin feature/ma-fonctionnalité`
5. Ouvrez une pull request.

## Auteur

- **Yassine Elmiri** - [GitHub](https://github.com/yassineelmiri)
