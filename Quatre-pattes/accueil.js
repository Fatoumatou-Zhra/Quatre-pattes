//Section don
let chiffre="20€"
let duree="/mois"

function btnDon(){
    let boutonDon=document.getElementById("btnDon")
    boutonDon.innerHTML='<img src="Img contact/heart.png" alt="cœur"> Faire un don de '+ chiffre+duree
}

function don(){

    document.getElementById("dix").onclick=function(){
        chiffre="10€"
        btnDon()
        document.getElementById("dix").style.backgroundColor="rgba(0, 144, 101, 0.58)"
        document.getElementById("vingt").style.backgroundColor=""
        document.getElementById("cinquante").style.backgroundColor=""
    }
    document.getElementById("vingt").onclick=function(){
        chiffre="20€"
        btnDon()
        document.getElementById("vingt").style.backgroundColor="rgba(0, 144, 101, 0.58)"
        document.getElementById("dix").style.backgroundColor=""
        document.getElementById("cinquante").style.backgroundColor=""
    }
    document.getElementById("cinquante").onclick=function(){
        chiffre="50€"
        btnDon()
        document.getElementById("cinquante").style.backgroundColor="rgba(0, 144, 101, 0.58)"
        document.getElementById("dix").style.backgroundColor=""
        document.getElementById("vingt").style.backgroundColor=""
    }

    document.getElementById("jour").onclick=function() {
        duree=""
        btnDon()
        document.getElementById("jour").style.backgroundColor="#0CB981"
        document.getElementById("mois").style.backgroundColor=""
        document.getElementById("an").style.backgroundColor=""
    }
    document.getElementById("mois").onclick=function() {
        duree=" /mois"
        btnDon()
        document.getElementById("mois").style.backgroundColor="#0CB981"
        document.getElementById("jour").style.backgroundColor=""
        document.getElementById("an").style.backgroundColor=""
    }
    document.getElementById("an").onclick=function() {
        duree=" /an"
        btnDon()
        document.getElementById("an").style.backgroundColor="#0CB981"
        document.getElementById("jour").style.backgroundColor=""
        document.getElementById("mois").style.backgroundColor=""
    }
    document.getElementById("vingt").style.backgroundColor="rgba(0, 144, 101, 0.58)"
    document.getElementById("mois").style.backgroundColor="#0CB981"

    document.getElementById("btnDon").onclick=function(){
        alert("Vous avez choisi d'effectuer un don de "+chiffre+""+duree)
    }
}
don()
btnDon()

//Histoire de réussite
function luna(){
    let bigOne=document.getElementById("bigOne")
    bigOne.setAttribute("src","Img accueil/Luna-1.png")
}
function oscar(){
    let bigOne=document.getElementById("bigOne")
    bigOne.setAttribute("src","Img accueil/Oscar.png")
}
function max(){
    let bigOne=document.getElementById("bigOne")
    bigOne.setAttribute("src","Img accueil/Image Max.png")
}