           //ajout divinite par la fakeDB
           remplirListeDeroulantes();
           listerlesarme()
	       document.getElementById("lstarme").value= fakeDB.listerArmesPourTaille( document.getElementById("categtaille").value)
           function remplirListeDeroulantes()
           {
	       //Remplie les listes des divinitées
	       remplirListe(document.getElementById("lstDiv"), fakeDB.listerDivinites());
	       remplirListe(document.getElementById("lstRace"), fakeDB.listerRaces());
	       remplirListe(document.getElementById("lstCla"), fakeDB.listerClasses());
	       document.getElementById("lstarme").value= fakeDB.listerArmesPourTaille( document.getElementById("categtaille").value)
           }
           var hash
           function MaxChck() 
           { 
	       var a = document.getElementsByName("chk");
	       var newvar = 0;
	       var count;
	       for(count = 1; count<a.length; count++){
		   if(a[count].checked == true){
		   newvar = newvar + 1;
		   }
	       }
	       if(newvar>=3){
		   alert("maximum de 3 cases à cocher!");
		   return false;
	       }
           }

           var nomduj;
           var pwdj;
           var iddujoueur
           function creationperso()
           {
	       nomduj = document.getElementById("nomj").value;
	       pwdj = document.getElementById("pwd").value; 
	       iddujoueur=fakeDB.creerJoueur(nomduj, pwdj);	
           }
           var optalign;
           var changalign;
           var cpt;
           function appel()
           {
	       changalign =document.getElementById("lstDiv").value;
	       for(cpt = 0; cpt<= 36; cpt++)
	       {
		   if(changalign == fakeDB.listerDivinites()[cpt].Nom)
		   {
			optalign= fakeDB.listerDivinites()[cpt].Alignement;
			var db = JSON.parse(localStorage.getItem("DB"));
	        document.getElementById("align").value = db.tblAlignement[optalign].Morale
	       }
		
	       }
           }
  
           var race;
           var cpts;
           var optrace;
           function appel2()
           {
	       race =document.getElementById("lstRace").value;
	       for(cpts = 0; cpts<= 7; cpts++)
	       {
		   if(race == fakeDB.listerRaces()[cpts].Nom)
		   {	
	       optrace = fakeDB.listerRaces()[cpts].CategorieTaille;
	       var db = JSON.parse(localStorage.getItem("DB"));
	       document.getElementById("categtaille").value = db.tblCategorieTaille[optrace].Nom;
		   }
	       }
           }
		   
            function remplirListe(idSelected, list)
            {
	        //idSelected.innerHTML = " ";
	
	        for (var j = 0; j < list.length; j++)
            {
    	    var objetDivinite = list[j];
    	    var nom = objetDivinite.Nom;
    	    idSelected.options.length = list.length;
    	    idSelected.options[j].value = nom;
     	    idSelected.options[j].text = nom;
            }
            }

            function determinertaille()
            {
	        var cpt;
	        var taillemax;
	        var taillemin;
	        var categtaille= document.getElementById("categtaille").value;
	        var taille= document.getElementById("taille").value;
	        var db = JSON.parse(localStorage.getItem("DB"));
	        for(cpt=0; cpt<=2;cpt++)
	        {
		    if (categtaille==db.tblCategorieTaille[cpt].Nom)
		    {
			taillemax= db.tblCategorieTaille[cpt].TailleMaxCm;
			taillemin= db.tblCategorieTaille[cpt].TailleMinCm;	
		    }	
	        }
	        if (taille< taillemin || taille > taillemax)
	        {
		    alert("la taille doit etre en accord avec la categorie taille");
	        }
	
            }
   
            var categtaille;
            function determinerpoid()
            {
	        var cpt;
	        var poidsmin;
	        var poidsmax;
	        categtaille= document.getElementById("categtaille").value;
	        var poids= document.getElementById("poids").value;
	        var db = JSON.parse(localStorage.getItem("DB"));
	        for(cpt=0; cpt<=2;cpt++)
	        {
		    if (categtaille==db.tblCategorieTaille[cpt].Nom)
		    {
			poidsmax= db.tblCategorieTaille[cpt].PoidsMaxKg;
			poidsmin= db.tblCategorieTaille[cpt].PoidsMinKg;	
		    }	
	        }
	        if (poids< poidsmin || taille > poidsmax)
	        {
		    alert("le poid doit etre en accord avec la categorie taille");
	        }
            }

			
            function listerlesarme()
            {
	        var cpt;
	        for(cpt=0;cpt<=36;cpt++)
	        {
	        var list= fakeDB.listerArmesPourTaille(categtaille)[cpt].Nom;	
	        }
	        document.getElementById("lstarme").value=list;
            }

            function determinerage()
            {	
	        var cpt;
	        var agemax;
	        var agemin;
	        var race= document.getElementById("race").value;
	        var age= document.getElementById("taille").value;
	        var db = JSON.parse(localStorage.getItem("DB"));
	        for(cpt=0; cpt<=12;cpt++)
	        {
		    if (race==db.tblRace[cpt].Nom)
		    {
			agemax= db.tblRace[cpt].AgeAvance;
			agemin= db.tblRace[cpt].AgeAdulte;	
		    }	
	        }
	        if (age< agemin || age >agemax )
	        {
		    alert("l'age doit etre en accord avec la race");
	        }
            }
	 
	 
            function AjouterInfo()
            {
	        document.getElementById("divinite").innerHTML+=divin.nom+"<br/>";
            }



            //liste des regex
            var utilisateur;
            var passw;
            var	mail ;
			var uti;
			var reguti = /^([a-zA-Z0-9]{4,})*$/;
			var regpwd = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?@#\$%\^&\*\-])(?=.{8,})/;
			var regnom = /^[A-Z]+(([-][A-Z])?[a-zA-Z]*)*$/;
			var regpren = /^[A-Z]+(([-][A-Z])?[a-zA-Z]*)*$/;
			var regemail = /(\w+\.+\w|\w)+\@(gmail|hotmail)\.(com|ca)/;
			var regtel = /\(\d{3}\)\d{3}-\d{4}$/;
			var regnais= /\d{4}-\1(0[1-9]|1[0-2])-[0-3]\d/;
			var regnomp = /^[a-zA-Z]{4,}$/;
			var regniv = /^(([0-1]{1}[0-9]){1}|([2]{1}[0]{1}))$/;
			var regage = /^[0-9]{3}$/;
			var regtaille = /^[0-9]{3}$/;
			var db = JSON.parse(localStorage.getItem("DB")).value;
			var idperso= db.tblPersonnage.length;
			
			
			function testcreation(form,event)
			{
		    appel();
			creationperso();
			determinerage();
			var niveau = document.getElementById("niveau").value;
			var genre= document.getElementById("genre").value;
			var age= document.getElementById("age").value;
			var taille= document.getElementById("taille").value;
			var poids= document.getElementById("poids").value;
			var lamgue= document.getElementById("langues").value;
			var yeux= document.getElementById("coloryeux").value;
			var cheveux= document.getElementById("colorcheveux");
				// j'ai essayer de creer un personnage mais la fonction me retourne taille invalide alors que la taille est correct, j'ai fais plusieur test en inserant moi meme des données		
			//fakeDB.creerPerso(nomduj,1,2,3,niveau,2,genre,age,2,80,poids,lamgue,yeux,cheveux,iddujoueur)
			    var changer = document.getElementById("submitBtn").onclick = function(){
			    location.href = "Consultation.html?idjoueur="+iddujoueur+"&&idperso="+idperso;
				};
				event.preventDefault();
				return false;
			}
			
			
			function test1(form,event)
			{
			var uti = document.getElementById("username").value;
			var	pwd = document.getElementById("pwd").value;
			var nom = document.getElementById("nom").value;
			var pren = document.getElementById("prenom").value;			
			
			/*var	nomp = document.getElementById("nomp").value;
			var niv = document.getElementById("niveau").value;*/
			utilisateur = uti;
			passw = pwd;
			event.preventDefault();
			return false;
			}
			
			
			var couleur;
			var couleur2;
			function couleurs()
			{
				 couleur = document.getElementById("coloryeux").value;
				 couleur2 = document.getElementById("colorcheveux").value;
				document.getElementById("hexadecimalyeux").value = couleur;
				document.getElementById("hexadecimalcheveux").value = couleur2;
				
			}
			
			
			function hexa()
			{
				var hexa = document.getElementById("hexadecimalyeux").value;
				var hexa2 = document.getElementById("hexadecimalcheveux").value;
				document.getElementById("coloryeux").value= hexa;
				document.getElementById("colorcheveux").value= hexa2;
				
			}
			
			
			var	niv;
			function validationniv()
			{
				niv = document.getElementById("niveau").value;
				if(regnomp.test(niv) == false)
				{
					alert("Ca marche pas niv");
				}
			}
			
			
			var	nomp;
			function validationnomp()
			{
				nomp = document.getElementById("nomp").value;
				if(regnomp.test(nomp) == false)
				{
					alert("Ca marche pas nomp");
				}
			}
			
			
			function validationuti()
			{
				uti = document.getElementById("nomj").value;
				if (reguti.test(uti)== false)
				{
					alert("Ca marche pas uti");
				}
			}
				
			
			var pwd;
			function validationpwd()
			{
				pwd = document.getElementById("pwd").value;
				if (regpwd.test(pwd)== false)
				{
					alert("Ca marche pas pwd");
				}				
			}
			
			
			var nom;
			function validationnom()
			{
				nom = document.getElementById("nom").value;
				if (regnom.test(nom)== false)
				{
					alert("Ca marche pas nom");
				}
			}
			
			
			var pren;
			function validationpren()
			{
				pren = document.getElementById("prenom").value;			
				if (regpren.test(pren)== false)
				{
					alert("Ca marche pas pren");
				}
			}
			
			
             var uti1;
             var pwd1;	
			 
             function test2(form,event)
			{					
				uti1 = document.getElementById("username11").value;
				pwd1 = document.getElementById("pwd11").value;
				
				
				if (utilisateur==uti1 && passw == pwd1)
				{	
					var changer = document.getElementById("submit").onclick = function(){
					location.href = "Creation.html";};
					alert ("valide");
					
				}
				
				else 	
				{			
					alert ("incorect");
				}					
			event.preventDefault();
			return false;				
			}

			//produit un nombre aléatoire de 1 à 6 pour les caractéristiques
			function getRandomInt()
			{
				var rndforce = document.getElementById("force");
				var rnddex = document.getElementById("dext");
				var rndconst = document.getElementById("const");
				var rndintel = document.getElementById("intel");
				var rndsag = document.getElementById("sag");
				var rndchar = document.getElementById("char");
				var rndSomme = document.getElementById("rndSomme");
				rndforce.value = (Math.round(Math.random() *5)+1);
				rnddex.value = (Math.round(Math.random() *5)+1);
				rndconst.value = (Math.round(Math.random() *5)+1);
				rndintel.value = (Math.round(Math.random() *5)+1);
				rndsag.value = (Math.round(Math.random() *5)+1);
				rndchar.value = (Math.round(Math.random() *5)+1);				
				document.getElementById("btnrandom").disabled = true;
				event.preventDefault();
			return false;
			}
			
			// fonction que j'ai creer pour rejouter un select arme mais cela ne fonctionne pas
			function rajouterarme()
			{
				document.getElementById("rajouterarme").innertHTML="<div class='col-6' style='background-color:lavender; border-style: solid; border-width: 0.5px;'>Armure</div> <div class='col-6' style='background-color:lavender; border-style: solid; border-width: 0.5px;'><label for='ref'></label><input id='ref' name='ref' type='number' </div>";
				
			}
			
			// fonction que tu nous a donner qui permet de recupere id du joueur et id perso, cela ne fonctionne pas car j,ai eter capable de creer un perso
			function parseURLParams() {
    var url = window.location.href;
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}
