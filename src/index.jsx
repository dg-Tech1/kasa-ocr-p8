import React from 'react' // import de la bibliothèque react
import { BrowserRouter as Router } from 'react-router-dom' // import de 'Router' ainsi la bibliothèque react-router-dom. react-router-dom 
import {createRoot} from 'react-dom/client'; // Bibliothèque de rendu composant
import App from './App';

const rootElement = document.getElementById('root'); //Cette ligne récupère l'élément DOM avec l'ID root
const root = createRoot(rootElement); // Cette ligne crée un nouveau root pour l'application. Le root est un conteneur pour les composants de l'application.


root.render(
  <Router>
    <App />
  </Router>,
);

