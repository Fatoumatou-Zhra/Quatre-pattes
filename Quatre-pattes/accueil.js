let montant="20€"
let frequence="/mois"

function btnDon(){
    let boutonDon=document.getElementById("b7")
    boutonDon.innerHTML='<img src="Img contact/heart.png" alt="cœur"> Faire un don de '+ montant+frequence
}

function boutton(){

    btnDon()

    document.getElementById("b1").onclick=function(){
        montant="10€"
        btnDon()
    }

    document.getElementById("b2").onclick=function(){
        montant="20€"
        btnDon()
    }

    document.getElementById("b3").onclick=function(){
        montant="50€"
        btnDon()
    }

    // Gérer les clics sur les fréquences
    document.getElementById("b4").onclick=function(){
        frequence=""
        btnDon()
    }

    document.getElementById("b5").onclick=function(){
        frequence="/mois"
        btnDon()
    }

    document.getElementById("b6").onclick=function(){
        frequence="/an"
        btnDon()
    }

    document.getElementById("b7").onclick=function(){
        alert("Vous avez choisi d'effectuer un don de "+montant+""+frequence+".")
    }

}
window.onload=boutton;