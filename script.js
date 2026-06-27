const touches = [...document.querySelectorAll('.bouton')];
const listeClecode = touches.map (touche => touche.dataset.key );
const ecran = document.querySelector(".ecran");

// 1 attendre le click de l'utilisateur (clavier);

document.addEventListener('keydown', ecouterClavier);

  function ecouterClavier(e) {
     const valeurSaisi = e.keyCode.toString();
     calculer(valeurSaisi);
  };
  
// 2 attendre le click de l'utilisateur (ecran);

document.addEventListener('click' , ecouterEcran );

function ecouterEcran(e) {
     const valeurSaisi = e.target.dataset.key;
     calculer(valeurSaisi); 
}

// calculatrice

function calculer(valeurSaisi) {
     
  if(listeClecode.includes(valeurSaisi)){
     switch(valeurSaisi){
          case '67' :
               ecran.textContent = "";
               break;
          case '13' :
            const calcul = eval(ecran.textContent);
            ecran.textContent = calcul;
            break;
          default:
               const indexClecode = listeClecode.indexOf(valeurSaisi);
               const touche = touches[indexClecode];
               ecran.textContent += touche.innerHTML;

               // ecran.textContent = ecran.textContent + touche.innerHTML;
     }
  };    
}

window.addEventListener('error', erreur);

function erreur(e){

     alert("une erreur est survenue dans votre calcul : " + " " + e.message);

}