const lItems = document.getElementsByClassName("articleItem");
const lItemsLength = lItems.length;

//afficher au chargement que les 3 premiers articles
function loadFirst3()
{
    for(let i = 3; i < lItemsLength; i++) {
        lItems[i].style.display = "none";
      }
}

const afficherPlusBtn = document.getElementById("afficherPlusBtn");

// ajouter un écouteurd'evt
afficherPlusBtn.addEventListener("click", loadMore);

// afficher 3 résultats en + à chaque clic
function loadMore()
{
    let countArticleAdded = 0;
    
    for(let i = 3; i < lItemsLength; i++) {
        if(lItems[i].style.display == "none" ){
            lItems[i].style.display = "flex";
            countArticleAdded = countArticleAdded+1;

            // Masquer le bouton si tous les articles sont affichés
            if(i==(lItemsLength-1)){
              afficherPlusBtn.style.display = "none";
    
            }
            if (countArticleAdded==3){
                break;
            }
        }   
      }
      textResultats();
}

// afficher le nombre de résultats
function textResultats()
{
  const textResultats = document.getElementsByClassName("texteResultats")[0];
  
  let countArticleAffiche = 3;
  // boucle pour décompter le nombre d'éléments affichés
  for(let i = 3; i < lItemsLength; i++) {
    if(lItems[i].style.display == "flex" ){
      countArticleAffiche = countArticleAffiche+1;
    }   
  }
  textResultats.textContent='Vous avez vu ' + countArticleAffiche + ' résultats sur ' + lItemsLength;
}
  
