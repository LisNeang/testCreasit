let app = {
    // ref : initialisation d'objets;
    lItemsArticle: 0,
    lItemsArticleLength: 0,
    /**
     * Initialisation
     */
    init: function() {
        //articles
        app.lItemsArticle = document.getElementsByClassName("articleItem");
        app.lItemsArticleLength = app.lItemsArticle.length;


        // mise en place des écouteurs d'événements
        app.bindEvents();

        // initialisation des fonctions
        app.loadFirst(3, app.lItemsArticleLength, app.lItemsArticle);
        app.textResultats();
        app.loadFirst(6, app.lItemsArticleLength, app.lItemsArticle);
    },


    bindEvents: function() {
        // ajouter un écouteurd'evt
        let afficherPlusBtn = document.getElementById("afficherPlusBtn");
        console.log(afficherPlusBtn);
        afficherPlusBtn.addEventListener("click", app.loadMore);
    },


    //afficher au chargement que les 3 premiers articles
    loadFirst: function(a, b, c)
    {
        for(let i = a; i < b; i++) {
            c[i].style.display = "none";
        }
    },


    // afficher 3 résultats en + à chaque clic
    loadMore: function()
    {
        let countArticleAdded = 0;
        
        for(let i = 3; i < app.lItemsArticleLength; i++) {
            if(app.lItemsArticle[i].style.display == "none" ){
                app.lItemsArticle[i].style.display = "flex";
                countArticleAdded = countArticleAdded+1;

                // Masquer le bouton si tous les articles sont affichés
                if(i==(app.lItemsArticleLength-1)){
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
        for(let i = 3; i < app.lItemsArticleLength; i++) {
            if(app.lItemsArticle[i].style.display == "flex" ){
            countArticleAffiche = countArticleAffiche+1;
            }   
        }
        textResultats.textContent='Vous avez vu ' + countArticleAffiche + ' résultats sur ' + app.lItemsArticleLength;
    }
  
};


// si on exécutait tout de suite init, on risquerait que le DOM ne soit pas encore
// chargé => donc on exécute init au moment de l'événement qui indique que le
// contenu du DOM est chargé
document.addEventListener('DOMContentLoaded', app.init);