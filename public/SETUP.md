# 🚀 Guide de mise en ligne - GitHub Pages + Firebase

## 📋 Prérequis
1. Compte GitHub
2. Compte Google (pour Firebase)

## 🔥 Étape 1 : Configuration Firebase (10 minutes)

### 1.1 Créer le projet Firebase
1. Aller sur https://console.firebase.google.com/
2. Cliquer "Ajouter un projet"
3. Nom du projet : `sophrologie-kathleen` (ou autre)
4. Désactiver Google Analytics (pas nécessaire)
5. Cliquer "Créer un projet"

### 1.2 Configurer Firestore Database
1. Dans le menu de gauche → "Firestore Database"
2. Cliquer "Créer une base de données"
3. Choisir "Commencer en mode test" 
4. Sélectionner la région "europe-west1" (France)
5. Cliquer "Terminé"

### 1.3 Configurer l'authentification Web
1. Dans le menu de gauche → "Paramètres du projet" (roue crantée)
2. Onglet "Général" → section "Vos applications"
3. Cliquer sur l'icône "</>" (Web)
4. Nom de l'application : "Site Sophrologie"
5. **NE PAS** cocher "Configurer Firebase Hosting"
6. Cliquer "Enregistrer l'application"

### 1.4 Récupérer les clés de configuration
Après l'enregistrement, Firebase affiche un code comme ceci :
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "sophrologie-kathleen.firebaseapp.com", 
  projectId: "sophrologie-kathleen",
  storageBucket: "sophrologie-kathleen.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:xxxxxxxxxxxxxxxxxx"
};
```

**⚠️ IMPORTANT : Copier ces valeurs quelque part !**

## 📁 Étape 2 : Configuration du code

### 2.1 Modifier firebase-config.js
Ouvrir le fichier `firebase-config.js` et remplacer les valeurs par les vôtres :

```javascript
const firebaseConfig = {
  apiKey: "VOTRE_API_KEY", // ← Remplacer par votre valeur
  authDomain: "VOTRE_PROJECT_ID.firebaseapp.com", // ← Remplacer 
  projectId: "VOTRE_PROJECT_ID", // ← Remplacer
  storageBucket: "VOTRE_PROJECT_ID.appspot.com", // ← Remplacer
  messagingSenderId: "VOTRE_SENDER_ID", // ← Remplacer
  appId: "VOTRE_APP_ID" // ← Remplacer
};
```

## 🐙 Étape 3 : Mise en ligne GitHub Pages (5 minutes)

### 3.1 Créer le repository
1. Aller sur https://github.com
2. Cliquer "New repository" (bouton vert)
3. Nom du repository : `sophrologie-site`
4. Laisser "Public" 
5. **NE PAS** cocher "Add a README file"
6. Cliquer "Create repository"

### 3.2 Uploader les fichiers
1. Sur la page du nouveau repository → "uploading an existing file"
2. Glisser-déposer TOUS les fichiers du dossier :
   - `index.html`
   - `style.css` 
   - `main.js`
   - `firebase-config.js`
   - `bg-sophro.jpg`
   - `README.md`
3. Message de commit : "Site initial"
4. Cliquer "Commit changes"

### 3.3 Activer GitHub Pages
1. Aller dans "Settings" du repository (onglet en haut)
2. Dans le menu de gauche → "Pages"
3. Source : "Deploy from a branch"
4. Branch : "main" 
5. Folder : "/ (root)"
6. Cliquer "Save"

### 3.4 Récupérer l'URL
Après 2-3 minutes, votre site sera accessible à :
`https://VOTRE_USERNAME.github.io/sophrologie-site`

## 🔐 Étape 4 : Configurer les règles Firebase

### 4.1 Règles de sécurité Firestore
1. Retourner sur Firebase Console
2. "Firestore Database" → onglet "Règles" 
3. Remplacer le contenu par :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permet la lecture des témoignages approuvés
    match /testimonials/{document} {
      allow read: if resource.data.approved == true;
      allow create: if true; // Tout le monde peut créer
      allow update: if false; // Seul l'admin peut modifier (via console)
    }
    
    // Permet la création de rendez-vous
    match /appointments/{document} {
      allow read: if false; // Personne ne peut lire (sauf admin via console)
      allow create: if true; // Tout le monde peut créer
      allow update: if false; // Seul l'admin peut modifier (via console)
    }
  }
}
```

4. Cliquer "Publier"

## ✅ Étape 5 : Test final

1. Aller sur votre site : `https://VOTRE_USERNAME.github.io/sophrologie-site`
2. Tester le formulaire de rendez-vous
3. Tester l'ajout d'un témoignage
4. Se connecter à l'admin (mot de passe : `sophro2024`)

## 🔧 Administration du site

### Modération des témoignages
1. Aller sur votre site
2. Cliquer "🔧 Administration"  
3. Mot de passe : `sophro2024`
4. Onglet "Témoignages" → Approuver les nouveaux

### Voir les demandes de rendez-vous
1. Console Firebase → "Firestore Database"
2. Collection "appointments" → voir toutes les demandes

## 📞 Support
En cas de problème, vérifiez :
1. Les clés Firebase sont correctes
2. Les règles Firestore sont appliquées
3. GitHub Pages est activé
4. Attendre 5-10 minutes après chaque modification