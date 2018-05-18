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
		   remplirListe(document.getElementById("lstarme"),fakeDB.listerArmesPourTaille());
		   remplirListe(document.getElementById("lstarmure"),fakeDB.listerArmuresPourTaille());
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

		   
		   
		     function retourneridperso()
		   {
			  
			  
			   var cpt;
			   var db = JSON.parse(localStorage.getItem("DB"));
			   var ide;
			   var fin =db.tblPersonnage.length;
               for(cpt=0; cpt<=fin;cpt++)
	           {
		    if (iddujoueur==db.tblPersonnage[cpt].Joueur)
		       {
				ide=cpt;
			
		       }			 		   
		       }
				return ide;
		   }
		   
		   function retourneridiv()
		   {
			  
			   var dom= document.getElementById("lstDiv").value;
			   var cpt;
			   var db = JSON.parse(localStorage.getItem("DB"));
			   var ide;
               for(cpt=0; cpt<=36;cpt++)
	           {
		    if (dom==db.tblDivinite[cpt].Nom)
		       {
				ide=cpt;
			
		       }			 		   
		       }
				return ide;
		   }
		   
		   function retournericlas()
		   {
			  
			   var dom= document.getElementById("lstCla").value;
			   var cpt;
			   var db = JSON.parse(localStorage.getItem("DB"));
			   var ide;
               for(cpt=0; cpt<=10;cpt++)
	           {
		    if (dom==db.tblClasse[cpt].Nom)
		       {
				ide=cpt;
			
		       }			 		   
		       }
				return ide;
		   }
		   
		      function retourneridaligne()
		   {
			  
			   var dom= document.getElementById("align").value;
			   var cpt;
			   var db = JSON.parse(localStorage.getItem("DB"));
			   var ide;
               for(cpt=0; cpt<=8;cpt++)
	           {
		    if (dom==db.tblAlignement[cpt].Morale)
		       {
				ide=cpt;
			
		       }			 		   
		       }
				return ide;
		   }
		   
		   
		       function retourneridrace()
		   {
			  
			   var dom= document.getElementById("lstRace").value;
			   var cpt;
			   var db = JSON.parse(localStorage.getItem("DB"));
			   var ide;
               for(cpt=0; cpt<=6;cpt++)
	           {
		    if (dom==db.tblRace[cpt].Nom)
		       {
				ide=cpt;
			
		       }			 		   
		       }
				return ide;
		   }
		   
		    
		   
		     function retourneridcatetaille()
		   {
			  
			   var dom= document.getElementById("categtaille").value;
			   var cpt;
			   var db = JSON.parse(localStorage.getItem("DB"));
			   var ide;
               for(cpt=0; cpt<=2;cpt++)
	           {
		    if (dom==db.tblCategorieTaille[cpt].Nom)
		       {
				ide=cpt;
			
		       }			 		   
		       }
				return ide;
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

			
			var idcategorietail;
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
				idcategorietail=cpt;
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

			
           /* function determinerage()
            {	
	        var cpt;
	        var agemax;
	        var agemin;
	        var race= document.getElementById("lstRace").value;
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
	 */
	 
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
		
			var niveau = document.getElementById("niveau").value;
			var genre= document.getElementsByTagName("gender").value;
			var age= document.getElementById("age").value;
			var taille= document.getElementById("taille").value;
			var poids= document.getElementById("poids").value;
			var lamgue= document.getElementById("langues").value;
			var yeux= document.getElementById("coloryeux").value;
			var cheveux= document.getElementById("colorcheveux");
				// j'ai essayer de creer un personnage mais la fonction me retourne taille invalide alors que la taille est correct, j'ai fais plusieur test en inserant moi meme des données		
	            fakeDB.creerPerso(nomduj,retourneridiv(),retourneridaligne(),retournericlas(),niveau,retourneridrace(),genre,age,retourneridcatetaille(),taille,poids,lamgue,yeux,cheveux,iddujoueur)
				fakeDB.ajouterOuModifierCaracteristiques(2,sommehabilite(force),sommehabilite(dext),sommehabilite(consta),sommehabilite(intel),sommehabilite(sag),sommehabilite(chari),verifierCompetances())
			    //r changer = document.getElementById("submitBtn").onclick = function(){
			    //cation.href = "Consultation.html?idjoueur="+iddujoueur+"&&idperso="+idperso;
				//
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

		
			
		
		    var force;
		    var dext;
		    var consta;
		    var intel;
		    var sag;
		    var chari;
		
	
	        function genererStats()
           {
           document.getElementById("force").value= genNbreAlea();
	       force=document.getElementById("force").value 
	       document.getElementById("dext").value = genNbreAlea();
	       dext=document.getElementById("dext").value
           document.getElementById("const").value = genNbreAlea();
           consta=  document.getElementById("const").value;
           document.getElementById("intel").value = genNbreAlea();
	       intel =  document.getElementById("intel").value;
           document.getElementById("sag").value = genNbreAlea();
	       sag= document.getElementById("sag").value;
           document.getElementById("char").value = genNbreAlea();
	       chari=  document.getElementById("char").value
           document.getElementById("genCarac").disabled = "disabled";
	       remplirbonus();
           }

           function genNbreAlea()
           {
            var random1 = Math.floor(Math.random() * Math.floor(6)+1);
            var random2 = Math.floor(Math.random() * Math.floor(6)+1);
            var random3 = Math.floor(Math.random() * Math.floor(6)+1);
            return random1.toString() + "," + random2.toString() + "," +  random3.toString();
           }

           function sommehabilite(id)
           {
	       var somme;
	       var nombre1;
	       var nombre2;
	       var nombre3;
	       nombre1=id.substr(0,1);
	       nombre2=id.substr(2,1);
	       nombre3=id.substr(4,1);
	       somme= parseInt(nombre1)+parseInt(nombre2)+parseInt(nombre3)
	       return somme;
           }


           function idPersonnage()
           {
           var id;
           var db = JSON.parse(localStorage.getItem("DB"));
           if(db.tbltblPersonnage == undefined)
           {
           id = 0;
           }
           else
           {
           var tabPersonnages = db.tbltblPersonnage;
           id = db.tabPersonnage.length;
           }
           return id;
           }

           function verifierCompetances()
           {
           var competance = document.getElementsByName("compet");
           var tabCompet = [];
           var caracCompet = "";
           for(var item of competance)
           {
           if(item.checked == true)
           {
           tabCompet.push(item.value);
           }
           }

           if(tabCompet.length > 3 || tabCompet.length == 0)
           {
           return false;
           }
           else
           {
           caracCompet += tabCompet[0];
           for(var i = 1; i < tabCompet.length; i++)
           {
           caracCompet += "|" + tabCompet[i];
           }       
            return caracCompet;  
           }
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


            var bonusforce;
            var bonusDexterite;
            var bonuscons;
            var  bonusintel;
            var bonussagesse;
            var bonuscharisme;
            function remplirbonus()
            {
	         bonusforce= sommehabilite(force) + fakeDB.bonusHabilete(2).Force;
	         bonusDexterite= sommehabilite(dext) + fakeDB.bonusHabilete(2).Dexterite;
	         bonuscons= sommehabilite(consta) + fakeDB.bonusHabilete(2).Constitution;
	         bonusintel= sommehabilite(intel) + fakeDB.bonusHabilete(2).Intelligence;
             bonussagesse= sommehabilite(sag) + fakeDB.bonusHabilete(2).Sagesse;
	         bonuscharisme= sommehabilite(chari)+ fakeDB.bonusHabilete(2).Charisme;	
	         document.getElementById("bforce").value= bonusforce;
	         document.getElementById("bdext").value= bonusDexterite;
	         document.getElementById("bconst").value= bonuscons;
	         document.getElementById("bintel").value= bonusintel;
	         document.getElementById("bsag").value= bonussagesse;
	         document.getElementById("bchar").value= bonussagesse;
	         remplirvigeuretautre() ;
            }

             function remplirvigeuretautre()
             {
	         var db = JSON.parse(localStorage.getItem("DB"));
	         var vigeur=db.tblClasse[retournericlas()].BonusVigueur;
	         var reflexe= db.tblClasse[retournericlas()].BonusReflexe;
	         var volonte= db.tblClasse[retournericlas()].BonusVolonte;
	         document.getElementById("vig").value= vigeur;
	         document.getElementById("ref").value= reflexe;
	         document.getElementById("vol").value= volonte;
             }

             function listeperso()
             {
	          var changer = document.getElementById("chBtn").onclick = function(){
	          cation.href = "ListePerso.html?idjoueur="+iddujoueur+"&&idperso="+idperso;}
             }

