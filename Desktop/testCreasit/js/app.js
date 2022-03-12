let app = {
    // ref : initialisation d'objets;
    lItems: 0,
    lItemsLength: 0,
    /**
     * Initialisation
     */
    init: function() {
        app.lItems = document.getElementsByClassName("articleItem");
        app.lItemsLength = app.lItems.length;

        // mise en place des écouteurs d'événements
        app.bindEvents();

        // initialisation des fonctions
        app.loadFirst3();
        app.textResultats();
    },

    
    bindEvents: function() {
        // ajouter un écouteurd'evt
        let afficherPlusBtn = document.getElementById("afficherPlusBtn");
        console.log(afficherPlusBtn);
        afficherPlusBtn.addEventListener("click", app.loadMore);
    },


    //afficher au chargement que les 3 premiers articles
    loadFirst3: function()
    {
        for(let i = 3; i < app.lItemsLength; i++) {
            app.lItems[i].style.display = "none";
        }
    },


    // afficher 3 résultats en + à chaque clic
    loadMore: function()
    {
        let countArticleAdded = 0;
        
        for(let i = 3; i < app.lItemsLength; i++) {
            if(app.lItems[i].style.display == "none" ){
                app.lItems[i].style.display = "flex";
                countArticleAdded = countArticleAdded+1;

                // Masquer le bouton si tous les articles sont affichés
                if(i==(app.lItemsLength-1)){
                afficherPlusBtn.style.display = "none";
        
                }
                if (countArticleAdded==3){
                    break;
                }
            }   
        }
        app.textResultats();
    }, 


    // afficher le nombre de résultats
    textResultats: function()
    {
        const textResultats = document.getElementsByClassName("texteResultats")[0];
        
        let countArticleAffiche = 3;
        // boucle pour décompter le nombre d'éléments affichés
        for(let i = 3; i < app.lItemsLength; i++) {
            if(app.lItems[i].style.display == "flex" ){
            countArticleAffiche = countArticleAffiche+1;
            }   
        }
        textResultats.textContent='Vous avez vu ' + countArticleAffiche + ' résultats sur ' + app.lItemsLength;
    }
  
};


// si on exécutait tout de suite init, on risquerait que le DOM ne soit pas encore
// chargé => donc on exécute init au moment de l'événement qui indique que le
// contenu du DOM est chargé
document.addEventListener('DOMContentLoaded', app.init);