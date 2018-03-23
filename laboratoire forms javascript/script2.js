   
   /* ***********************************************************************Exercice1******************************************************************************** */
   var id;
   var pw;

   
  
     function test (form, event)
			{
				var identifiant
				var motdepasse
				identifiant = document.getElementById("username").value + "\n";
				motdepasse = document.getElementById("pwd").value + "\n";
				id=identifiant;
				pw=motdepasse;
				var message = form.birthday.value + "\n";
				document.getElementById("username").value;
				event.preventDefault();
				return false;
				
				
			}
			
     function test1 (form,event)
            {
	            var motdepasse1=document.getElementById("pwd1").value + "\n";
	            var identifiant1 = document.getElementById("username1").value + "\n";
	            if (motdepasse1==pw&&identifiant1==id)
	               {
	                alert("vous pouver vous connecter")
		           }
	               else 
	               {
		            alert("vous ne pouver pas vous connecter")
	               }	
            } 

			
			
			
			
/* ***********************************************************************Exercice2******************************************************************************** */
			
   var prod;
   //tableau pour la liste des produit
   var produitliste = ['raspberrypi2', "raspberrypi3", "lcdscreen"];  
   //tableau pour les prix
   var Tabprix = [60,70,40] ;
   // tableau objet produit
   var produit = {
       Couleur: '',
       Quantité: '',
       Nomduclient: '',
       email: '',
       Adresse: ''
  }
  
     function test2 (form,event)
            {
	         prod="";
			 var totale;
             prod += form.size.options[form.size.selectedIndex].value ;
	         produit.Couleur = document.getElementById("color").value + "\n";
             produit.Quantité= document.getElementById("nbr").value + "\n";
	         produit.Nomduclient=document.getElementById("clientname").value + "\n";
	         produit.email=document.getElementById("email").value + "\n";
	         produit.Adresse=document.getElementById("addr").value + "\n";
			  for(var cpt=0;cpt<=2;cpt++)
			 {
				if (prod==produitliste[cpt])
				{
					price=Tabprix[cpt];
					
				}	
			 }
	         price=price*produit.Quantité;
		     taxe=price*0.15
		     totale=price+taxe;
	         alert("Commande passée pour "+produit.Quantité+ prod+", au prix de "+totale+"$. La livraison se fera au "+produit.Adresse+" d’ici quelques jours. Merci beaucoup, "+produit.Nomduclient+"!")
	         event.preventDefault();
	         return false;
	        }

	// j'ai malheureusement du repeter du code pour que l'Exercice fonctionne correctement.

     function test3 (form,event)
            {
	         prod="";
			 var totale;
	         var quantity;
	         prod += form.size.options[form.size.selectedIndex].value;
	         quantity= document.getElementById("nbr1").value + "\n";
	         var price;
	         var taxe;
			 for(var cpt=0;cpt<=2;cpt++)
			 {
				if (prod==produitliste[cpt])
				{
					price=Tabprix[cpt];
					
				}	
			 }
	         price=price*quantity;
		     taxe=price*0.15
		     totale=price+taxe;
	         document.getElementById('prix').value = price;
	         document.getElementById('taxe').value = taxe;
	         document.getElementById('total').value = totale;
             event.preventDefault();
			
            }












