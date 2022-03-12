let app = {
    // ref : initialisation d'objets;
    lItemsArticle: 0,
    lItemsArticleLength: 0,
    lItemsFiltre: 0,
    lItemsFiltreLength: 0,
    /**
     * Initialisation
     */
    init: function() {
        //articles
        app.lItemsArticle = document.getElementsByClassName("articleItem");
        app.lItemsArticleLength = app.lItemsArticle.length;
        //filtres
        app.lItemsFiltre = document.getElementsByClassName("filtreItem");
        app.lItemsFiltreLength = app.lItemsFiltre.length;


        // mise en place des écouteurs d'événements
        app.bindEvents();

        // initialisation des fonctions
        //afficherles 3 premiers articles
        app.loadFirst(3, app.lItemsArticleLength, app.lItemsArticle);
        //afficher le nombre de résultats
        app.textResultats();
        //afficher les 6 filtres
        app.loadFirst(6, app.lItemsFiltreLength, app.lItemsFiltre);
    },


    bindEvents: function() {
        // ajouter un écouteur d'evt pour afficherPlusBtn
        let afficherPlusBtn = document.getElementById("afficherPlusBtn");
        afficherPlusBtn.addEventListener("click", app.loadMore);

         // ajouter un écouteur d'evt pour plusDeFiltres
         let filtrePlusBtn = document.getElementById("filtrePlusBtn");
         filtrePlusBtn.addEventListener("click", app.loadMoreFiltres);

         // ajouter un écouteur d'evt pour moinsDeFiltres
         let filtreMoinsBtn = document.getElementById("filtreMoinsBtn");
         filtreMoinsBtn.addEventListener("click", app.loadLessFiltres);
    },


    //afficher au chargement que les 3 premiers articles
    loadFirst: function(a, b, c)
    {
        for(let i = a; i < b; i++) {
            c[i].style.display = "none";
        }
    },


    // afficher 3 articles en + à chaque clic
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
    },

     // afficher tous les filtres au clic 
     loadMoreFiltres: function()
     {
        for(let i = 0; i < app.lItemsFiltreLength; i++) {
            if(app.lItemsFiltre[i].style.display == "none"){
                app.lItemsFiltre[i].style.display = "flex";

                // Masquer le bouton si tous les filtres sont affichés
                if(i==(app.lItemsFiltreLength-1)){
                    filtrePlusBtn.style.display = "none";
                    filtreMoinsBtn.style.display = "flex";
                }
            }   
        }
     },

     // Masquer tous les filtres au clic 
     loadLessFiltres: function()
     {
        for(let i = 6; i < app.lItemsFiltreLength; i++) {
            if(app.lItemsFiltre[i].style.display == "flex"){
                app.lItemsFiltre[i].style.display = "none";

                // Masquer le bouton si tous les filtres sont affichés
                if(i==(app.lItemsFiltreLength-1)){
                    filtrePlusBtn.style.display = "flex";
                    filtreMoinsBtn.style.display = "none";
                }

            }   
        }
     }
  
};


// si on exécutait tout de suite init, on risquerait que le DOM ne soit pas encore
// chargé => donc on exécute init au moment de l'événement qui indique que le
// contenu du DOM est chargé
document.addEventListener('DOMContentLoaded', app.init);