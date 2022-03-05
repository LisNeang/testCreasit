//afficher au chargement que les 3 premiers articles
const lItems = document.getElementsByClassName("urlArticle");

function loadFirst3()
 {
    for(let i = 3; i < lItems.length; i++) {
        lItems[i].style.display = "none";
      }
 }


 function loadMore()
 {
     let countArticleAdded = 0;
     
    for(let i = 3; i < lItems.length; i++) {
        if(lItems[i].style.display == "none" ){
            lItems[i].style.display = "flex";
            countArticleAdded = countArticleAdded+1;
            if (countArticleAdded>2){
                break;
                
            }
            console.log(countArticleAdded);
        }
       
      }
   
 }
