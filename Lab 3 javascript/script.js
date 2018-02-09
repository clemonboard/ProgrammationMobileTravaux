function ajouterContenu(message)
{
	document.getElementById("resultat").innerHTML += message + "<br/>";
	
	
}
function Exercice1()
	{
	var nombre;
	document.getElementById("resultat").innerHTML = "";
	    nombre = prompt("Entrer un chiffre"); 
        for (i = 1; i <= 10; i++)
	    {   
	document.getElementById("resultat").innerHTML += nombre+ " x " +i+ " = "+nombre*i+ "<br/>";
          
        } 
	  
	}
	
function viderContenu()
{
	document.getElementById("resultat").innerHTML = "";
}


function Exercice2()
{
	do
	{
document.getElementById("resultat").innerHTML = "";
var resultat;

var nbr1=prompt("entrer un premier nombre");
parseInt(nbr1);

var nbr2=prompt("entrer un deuxieme nombre");
parseInt(nbr2);

var operateur=prompt("entrer un operateur ")



if (operateur=="+")
{
     plus();
	 
}

 if (operateur=="-")
{
	moin();
}
 if (operateur=="*")
{
	multiplier();
}
 if (operateur=="/")
{
	divise();
}

var confirmation=confirm("voulervous recommencer");



	}
     while (confirmation==true);



	  function plus()
{	
resultat=parseFloat(nbr1)+parseFloat(nbr2);
	
document.getElementById("resultat").innerHTML +=" le resultat est"+resultat + "<br/>";
}

     function moin()

	 {
		 resultat=parseFloat(nbr1)-parseFloat(nbr2);
document.getElementById("resultat").innerHTML +=" le resultat est"+resultat + "<br/>";

	 }
	 
	 function divise()
	 {
		 resultat=parseFloat(nbr1)/parseFloat(nbr2);
document.getElementById("resultat").innerHTML += "le resultat est"+resultat + "<br/>";

	 }
	 
	 function multiplier()
	 
	 {
		  resultat=parseFloat(nbr1)*parseFloat(nbr2);
document.getElementById("resultat").innerHTML +=" le resultat est"+resultat + "<br/>";

	 }
	 
 
}



	var words = ["clement", "michael", "celine","catherine","pascal"];

function checkAdult(word)
 {
	
    return words;
}
function  map(words)
{
 return words+" bricout";
}

function Exercice3() {
	document.getElementById("resultat").innerHTML = "";
    document.getElementById("resultat").innerHTML = words.filter(checkAdult) + "<br/>";
	 var confirmation=confirm("vouler vous voir les nom de famille");
	 if (confirmation==true)
	 {
	 document.getElementById("resultat").innerHTML = words.map(map) + "<br/>";
	  
	 }
	 
}

function Exercice4()

{
	document.getElementById("resultat").innerHTML = "";
	var indice = prompt("combien vouler vous de ligne ")
	var triangle="*"
	var i;
	
	for (i=1;i<=indice;i++)
	{
		
		document.getElementById("resultat").innerHTML +=triangle+"<br/>";  
		triangle=triangle+"*"
		
		
	}
	
	
	
	
}

function Defi()

{
		document.getElementById("resultat").innerHTML = "";
	var indice = prompt("combien vouler vous de ligne ")
	var triangle="*"
	var i;
	
	for (i=1;i<=indice;i++)
	{
		
		document.getElementById("resultat").innerHTML +=triangle+"<br/>";  
		triangle=triangle+"*"
		
		
	}
}




