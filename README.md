# AIMAGE - TEST Frontend

## Descrizione

Questo progetto è la parte frontend di un'applicazione di autenticazione con registrazione e login, utilizzando React. L'applicazione interagisce con un backend Node.js per la gestione degli utenti e l'autenticazione.

## Prerequisiti

- Node.js

## Installazione

### Clona la Repository

git clone https://github.com/OmarBackendDeveloper/frontendTest.git
cd frontendTest


### Installazione delle Dipendenze

npm install


### Avvio del Frontend React

npm start


Il frontend sarà disponibile all'indirizzo [http://localhost:3000](http://localhost:3000).

## Struttura del Progetto

    /src
        /components
            Dashboard.js
            Login.js
            Register.js
    App.js
    axiosConfig.js
    index.css
    index.html
    index.js
    PrivateRoute.js
    reportWebVitals.js
    setupTests.js
    App.css
    App.test.js


### Funzionalità

- **Login**: Permette agli utenti di autenticarsi.
- **Registrazione**: Permette agli utenti di registrarsi.
- **Dashboard**: Visualizza i dati degli utenti (protetto da autenticazione JWT).

### Uso

### Registrazione

1. Naviga a `http://localhost:3000/register`.
2. Completa il form di registrazione con nome, cognome, telefono, email e corso di interesse.
3. Invia il form per registrare un nuovo utente.

### Login

1. Naviga a `http://localhost:3000/login`.
2. Inserisci le tue credenziali username e password (testAimage, testAimage).
3. Invia il form per autenticarti e accedere alla dashboard.

### Dashboard

1. Dopo il login, sarai reindirizzato alla dashboard.
2. La dashboard mostrerà una lista di utenti registrati.

## Tecnologie Utilizzate

- **Frontend**: React, Axios


