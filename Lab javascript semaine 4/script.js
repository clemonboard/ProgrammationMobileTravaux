function ajouterContenu(message)
{
	document.getElementById("resultat").innerHTML += message + "<br/>";

}
function viderContenu()
{
	document.getElementById("resultat").innerHTML = "";
}






 

function Exercice1(utilisateur)
{

	var utilisateur=prompt("entrer votre nom d'utilisateur");
	
	cleanUpSpecialChars(utilisateur);
	
}


 function cleanUpSpecialChars(utilisateur)
{
 var i=0;

    utilisateur = utilisateur.replace(/é|è|ê/g,"e");
	  utilisateur = utilisateur.replace(/à/g,"a");
	  	  utilisateur = utilisateur.replace(/ù/g,"u");
		  	  utilisateur = utilisateur.replace(/ï/g,"i");
			  	  utilisateur = utilisateur.replace(/ü/g,"u");
                     utilisateur = utilisateur.replace(/è/g,"e");
	document.getElementById("resultat").innerHTML += utilisateur + "<br/>";    
}
 





function Exercice2(resultat,nom,prenom,age)
{
	document.getElementById("resultat").innerHTML = "";
	var prenom=prompt("donne nous ton prenom")
	var nom=prompt("donne nous ton nom")
	var age=prompt("donne nous ta date de naissance dans le format JJMMAAAA")
	var resultat;
	
	prenom=prenom.substr(0, 1);
	nom=nom.substr(0, 3)
	age=age.substr(0,8);
	resultat=nom+prenom+age;

	
	document.getElementById("resultat").innerHTML +=resultat+"<br/>";
	

}

function voiture(tabprenom,marque,année,couleur,kilometrage,autocolant)
{

this.marque="aston martin db9";
this.année="2006";
this.couleur="noir";	
this.kilometrage="126000";
this.autocolant= tabprenom(alea);

}

function Exercice3(tabprenom,marque,année,couleur,kilometrage,autocolant)
{
	document.getElementById("resultat").innerHTML = "";
voiture();
document.getElementById("resultat").innerHTML +=this.marque+this.année+this.couleur+this.kilometrage+this.autocolant+"<br/>";

}


function annuaire()
{
	var contact=new Object();
	this.nbr1="Kim Lavoie, 777 rue des Hospitalières (418-768-2848)";
	this.nbr2="Mylène Truchon, 765 rue des oiseaux (418-654-3210)";
	this.nbr3="Clement Bricout, 568 route de pont d'ain (514-623-3260)";
    this.nbr4="ines lafontaine, 48 rue des moulinau (814-152-3220)";
    this.nbr5="rose duniaud, 5206 route de oussiat (414-263-3140)";
	
}



function Exercice4(contact)
{
     document.getElementById("resultat").innerHTML = "";	
	annuaire();
	document.getElementById("resultat").innerHTML +=this.nbr1+"<br/>"+this.nbr2+"<br/>"+this.nbr3+"<br/>"+this.nbr4+"<br/>"+this.nbr5+"<br/>";
}








function Exercice5()
{
     document.getElementById("resultat").innerHTML = "";
	var i;
    var cpt; 
	var phrase;
	var resultat;
    var nb=Math.floor(Math.random()*101);
	var personne;
	var Tabnom = new Array(10);
	var tabresultat= new Array(10);
	var personne1=prompt("entrer le prenom de la premiere personne");
	var personne2=prompt("entrer le prenom de la deuxieme personne");
	personne=personne1+personne2;
	
	
	
	if (nb>95)
	{
		phrase="Des vétérans du memes ";
		
	}
	else if (nb>50&&nb<80)
	{
		phrase="Un des deux n’apprécie pas tout le temps le bon contenu";
		
	}
	else if (nb>10&&nb<50)
	{
		phrase="ah ouai vous ete genre pas marrant ";
		
	}
	else  if (nb<10)
	{
		phrase=" ERROR 404 meme ";
		
	}
	

	resultat = personne1 +" et , "+ personne2+", on une compatibilité a "+nb+"%  :"+phrase;
	document.getElementById("resultat").innerHTML += resultat+ "<br/>";
	Tabnom(cpt)=personne;
	tabresultat(cpt)=resultat;
	cpt=cpt+1;
	
}






	
	
	
	
	





