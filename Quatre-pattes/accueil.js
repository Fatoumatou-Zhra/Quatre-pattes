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

function recit(animal){
    let bigOne=document.getElementById("bigOne")
    let texte=document.getElementById("texte")

    if(animal===luna){
        bigOne.setAttribute("src","Img accueil/Luna-1.png")
        texte.innerHTML="<h3>Luna</h3><br><p>Trouvée dans la rue avec une patte cassée, Luna a été soignée et a retrouvé sa joie de vivre. Elle coule maintenant des jours heureux dans sa nouvelle famille.</p><br><p>Janvier 2024</p>"
    }else if(animal===oscar){
        bigOne.setAttribute("src","Img accueil/Oscar.png") 
        texte.innerHTML="<h3>Oscar</h3><br><p>Abandonné dans une forêt, Oscar était terrifié par les humains. Après des mois de patience et d’amour, il est devenu un chat confiant et affectueux.</p><br><p>Mars 2024</p>"
    }else if(animal===max){
        bigOne.setAttribute("src","Img accueil/Image Max.png") 
        texte.innerHTML="<h3>Max</h3><br><p>Sauvé d'un laboratoire, Max n'avait jamais connu l'amour. Aujourd'hui, il profite de sa liberté et fait le bonheur de sa famille d'accueil.</p><br><p>Février 2024</p>"
    }
    recit(animal)
}

//Testez vos connaissances
