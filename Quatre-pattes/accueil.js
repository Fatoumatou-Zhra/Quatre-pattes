//Section don
let montant="20€"
let frequence="/mois"

function btnDon(){
    let boutonDon=document.getElementById("btn7")
    boutonDon.innerHTML='<img src="Img contact/heart.png" alt="cœur"> Faire un don de '+ montant+frequence
}

function don(){

    btnDon()

    document.getElementById("btn1").onclick=function(){
        montant="10€"
        btnDon()
    }

    document.getElementById("btn2").onclick=function(){
        montant="20€"
        btnDon()
    }

    document.getElementById("btn3").onclick=function(){
        montant="50€"
        btnDon()
    }

    document.getElementById("btn4").onclick=function(){
        frequence=""
        btnDon()
    }

    document.getElementById("btn5").onclick=function(){
        frequence="/mois"
        btnDon()
    }

    document.getElementById("btn6").onclick=function(){
        frequence="/an"
        btnDon()
    }

    document.getElementById("btn7").onclick=function(){
        alert("Vous avez choisi d'effectuer un don de "+montant+""+frequence+".")
    }

}
don();

//Section diapo
function un() {
    let bigOne=document.getElementById("bigOne")
    bigOne.setAttribute("src","Img accueil/Luna.jpg")
}
function deux() {
    let bigOne=document.getElementById("bigOne")
    bigOne.setAttribute("src","Img accueil/Oscar.jpg")
}
function trois() {
    let bigOne=document.getElementById("bigOne")
    bigOne.setAttribute("src","Img accueil/Image Max.jpg")
}