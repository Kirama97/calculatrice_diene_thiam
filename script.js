const touches = [...document.querySelectorAll('.bouton')];
const listeClecode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector(".ecran");

// 1 attendre le click de l'utilisateur (clavier);
document.addEventListener('keydown', ecouterClavier);

function ecouterClavier(e) {
    let valeurSaisi = e.key;

    // Normaliser certaines touches
    if (valeurSaisi === '=' || valeurSaisi === 'Enter') {
        valeurSaisi = 'Enter';
    } else if (valeurSaisi === 'Escape' || valeurSaisi === 'Backspace' || valeurSaisi.toLowerCase() === 'c') {
        valeurSaisi = 'c';
    }

    calculer(valeurSaisi);
}
  
// 2 attendre le click de l'utilisateur (ecran);
document.addEventListener('click', ecouterEcran);

function ecouterEcran(e) {
    // S'assurer qu'on a bien cliqué sur un bouton
    if (e.target.classList.contains('bouton')) {
        const valeurSaisi = e.target.dataset.key;
        calculer(valeurSaisi); 
    }
}

// calculatrice
function calculer(valeurSaisi) {
    if (listeClecode.includes(valeurSaisi)) {
        switch (valeurSaisi) {
            case 'c':
                ecran.textContent = "0";
                break;
            case 'Enter':
                try {
                    // Évaluation sécurisée via bloc try/catch pour éviter les crash
                    const calcul = eval(ecran.textContent);
                    if (calcul === Infinity || Number.isNaN(calcul)) {
                        ecran.textContent = "Erreur";
                    } else if (calcul !== undefined) {
                        ecran.textContent = calcul;
                    } else {
                        ecran.textContent = "0";
                    }
                } catch (error) {
                    ecran.textContent = "Erreur";
                }
                break;
            default:
                // Si l'écran affiche 0 (au début) ou une Erreur, on remplace le contenu. Sinon on concatène.
                if (ecran.textContent === "0" || ecran.textContent === "Erreur") {
                    ecran.textContent = valeurSaisi;
                } else {
                    ecran.textContent += valeurSaisi;
                }
        }
    }    
}