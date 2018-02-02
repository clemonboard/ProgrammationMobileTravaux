function Exercice1()
{
	
	var chocolat=confirm("Est tu un fan de chocolat ?");
	
	if (chocolat==true)
	{
		alert("cool, et qu'elle est ta marque préférée ?");
	}
		else 
		{
			alert("Quoi ??? ");
			
		}
}







function Exercice2()
{
	var naissance=prompt("qu'elle est ton anné de naissance ?")
	
	if (naissance<=1930)
	{
		alert ("Non specifier")
	}
	if (naissance>1930&&naissance<=1945)
	{
		alert ("Veteran")
	}
	if (naissance>1946&&naissance<=1964)
	{
		alert ("Baby boomers")
	}
	if (naissance>1965&&naissance<=1976)
	{
		alert ("Generation X")
	}
	if (naissance>1977&&naissance<=1991)
	{
		alert ("Generation Y")
	}
	if (naissance>1996)
	{
		alert ("Generation Z")
	}
}





function Exercice3()
{
	
	var film =['interstellar','le prodige','les chevalier du ciel'];
	var choix=prompt("choisis un nombre entre 1 et 3")
	
	switch (choix)
	{
		case "1":
	    alert(film[0]);	
		break;
		
		case "2":	
		alert(film[1]);
		break;
		
		case "3":		
		alert(film[2]);
		break;
	    default:
			alert( "tu ne sait pas entrer un chiffre entre 1 et 4!");
	}	
}






function Exercice4()
{
	
	
	var nom;
	var age;
	var majeur;
	var choix;
	var jeux;
	
	
	nom = prompt("Quel est votre nom?");
	majeur = confirm("Êtes-vous majeur(e)?");
	Age = prompt("Quel est votre âge?");
	
	
	if(majeur==true && Age > 18)
	{
		alert("Vous dites la vérité!");
		
	}
	else
	{
		alert("Vous mentez!");
		majeur = false;
	}
	
	choix =prompt("Que préférez-vous (entrez le chiffre)? \n 1 - Les RPG \n 2 - Les shooters" + 
					"\n 3 - Les RTS \n 4 - Les MOBA")
	
	switch(choix)
	{
		case "1": 
			alert(nom + " a " + Age + "ans et préfère les jeux de rôles!");
			
			break;
		case "2":
			alert(nom + " a " + Age + "ans et préfère les jeux de tirs!");
			break;
		case "3":
			alert(nom + " a " + Age + "ans et préfère les jeux de stratégies!");
			break;
		case "4":
			alert(nom + " a " + Age + "ans et préfère les jeux d'arènes de combat!");
			break;
		default:
			alert(nom + " a " + Age + "ans et ne sait pas entrer un chiffre entre 1 et 4!");
	
	     jeux=choix;
	}
}







function Exercice5()
{
	var pret=confirm("Vous ete pret a jouer ?");
	
	
	

	if (pret==true)
	{
		alert("Super c'est partie");
		
	}
	else
	{
		alert("C'est pas grave on va jouer quand même ;)")
	}
	
	var question1=prompt("combien d'état a les Etats Unis"+"\(entrez le chiffre)? \n 1 - 20 \n 2 - 40" + 
					"\n 3 - 50 \n 4 - 70");
					
					switch(question1)
{
		case "1": 
			alert("FAUX il en compte 50");
			
			break;
		case "2":
			alert("FAUX il en compte 50");
			break;
		case "3":
			alert("BRAVO tu gagne 1 point");
			point=1;
			break;
		case "4":
		alert("FAUX il en compte 50");
			break;
		default:
			alert("tu  ne sait pas entrer un chiffre entre 1 et 4?");
}
	
var question2=prompt("quelle est le plus gros pays du monde"+"\(entrez le chiffre)?\ \n 1 - canada \n 2 - Russie" + 
					"\n 3 - Chine \n 4 - USA");
					
					switch(question2)
{
		case "1": 
			alert("FAUX la bonne reponse est RUSSIE");
			
			break;
		case "2":
			alert("BRAVO tu gagne 1 point");
			point = point+1;
			break;
		case "3":
			alert("FAUX la bonne reponse est RUSSIE");
			
			break;
		case "4":
		alert("FAUX la bonne reponse est RUSSIE");
			break;
		default:
			alert("tu  ne sait pas entrer un chiffre entre 1 et 4?");
}
var question3=prompt("quelle est le pays le plus riche du monde"+"\(entrez le chiffre)?\ \n 1 - allemagne \n 2 - emirat arabe" + 
					"\n 3 - France \n 4 - Etat Unis");
					
					switch(question3)
{
		case "1": 
			alert("FAUX la bonne reponse est Etat Unis");
			
			break;
		case "2":
			alert("FAUX la bonne reponse est Etat Unis");
			
			break;
		case "3":
			alert("FAUX la bonne reponse est Etat Unis");
		
			break;
		case "4":
		alert("BRAVO tu gagne 1 point");
		point = point+1;
			break;
		default:
			alert("tu  ne sait pas entrer un chiffre entre 1 et 4?");
}
var question4=prompt("quelle est le pays le plus froid du monde"+"\(entrez le chiffre)?\ \n 1 - Serbie \n 2 - Canada" + 
					"\n 3 - Groenland \n 4 - Antarctique");
					
					switch(question4)
{
		case "1": 
			alert("FAUX la bonne reponse est antarctique");
			
			break;
		case "2":
			alert("FAUX la bonne reponse est antarctique");
			
			break;
		case "3":
			alert("FAUX la bonne reponse est antarctique ");
		
			break;
		case "4":
		alert("BRAVO tu gagne 1 point");
		point = point+1;
			break;
		default:
			alert("tu  ne sait pas entrer un chiffre entre 1 et 4?");
}

	var question5=prompt("Quelle etait la deuxieme question ?"+"\(entrez le chiffre)?\ \n 1 - Quelle est le plus gros pays du monde ? \n 2 - Quelle est le plus riche pays du monde ?" + 
					"\n 3 - Combien d'etat a les Etat Unis ?\n 4 - Aucune de ses reponse");
					
					switch(question5)
{
		case "1": 
			alert("FAUX la bonne reponse est (quelle est le plus gros pays du monde) ");
			
			break;
		case "2":	
				alert("BRAVO tu gagne 1 point");
				point = point+1;
			break;
		case "3":
			alert("FAUX la bonne reponse est (quelle est le plus gros pays du monde)");
			
			break;
		case "4":
		alert("FAUX la bonne reponse est (quelle est le plus gros pays du monde)");
			break;
		default:
			alert("tu  ne sait pas entrer un chiffre entre 1 et 4?");
}
	if (point>3)
	{
		alert("OUAH TU gagne  :"+point+" point  sur 5");
	}
	else 
	{
		alert(" TU a gagne  :"+point+" point  sur 5 je pense que tu peut mieux faire");
	}
	point=0;

}