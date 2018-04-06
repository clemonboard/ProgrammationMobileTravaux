   
     // variable globale
     var identifiant;
     var motdepasse;
     var nom;
     var prenon;
     var email;
     var telephone;
     var datenaissance;
     var couleur;
     var email2;
   
     // variable regex
     var regexidentifiant = new RegExp("^[a-zA-Z0-9]*$"); 
     var regexmotdepasse = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?@#\$%\^&\*\-])(?=.{8,})");
     var regexprenon= new RegExp("^[A-Z]+(([-][a-zA-Z ])?[a-zA-Z]*)*$");
     var regexemail= new RegExp("(\\w+\\.+\\w|\\w)+\@(gmail|hotmail)\\.(com|ca)");
     var regextel= /\(\d{3}\)\d{3}-\d{4}$/;
     var regexdate = /\d{4}-\1(0[1-9]|1[0-2])-[0-3]\d/;
     var regexadresse=/\[0-9]{0,5} [aA-zZ]* (chicoutimi|jonquiere|alma) quebec canada [aA-zZ{1}]+[0-9{1}]+[aA-zZ{1}]+[0-9{1}]+[aA-zZ{1}]+[0-9{1}]$/
   
     // objet array 
     var Tabproduct = ["raspberry","odroid","arduino"];
     var Tabprice = [60,90,40];
   
   // bouton submit principale
     function test1 (form, event)	 
			{
			  identifiant = document.getElementById("username").value;
			  motdepasse = document.getElementById("pwd").value;
			  prenon = document.getElementById("name").value;
		      nom = document.getElementById("lastname").value;
			  email= document.getElementById("mail").value;
			  telephone= document.getElementById("tel").value;
			  datenaissance= document.getElementById("birthday").value;
			  couleur = document.getElementById("color").value;
			  hexa= document.getElementById("hexa").value;
			  event.preventDefault();
			  return false;		
			}
			
			// j'ai créé les fonction pour les onblur, au depart j'ai voulue créé une fonction pour controlé tout les champs or cela ne fonctionnait pas.
			
			//valide l'identifiant si il renvoit false alors le bouton principale est desactiver.
			function validateid()
			{	
			  identifiant = document.getElementById("username").value;
			  if (regexidentifiant.test(identifiant)==false)
				{
				  document.getElementById("submitImg").disabled=true;
				}
			  else 
				{
				  document.getElementById("submitImg").disabled=false; 
				}
			}
			
		    //valide le mot de passe si il renvoit false alors le bouton principale est desactiver.
            function validatemp()
		    {
			  motdepasse = document.getElementById("pwd").value;
			  if (regexmotdepasse.test(motdepasse)==false)
				{
				  document.getElementById("submitImg").disabled=true;
				}
			  else 
				{
		   		  document.getElementById("submitImg").disabled=false; 
				}					 
			}
				 
			//valide le prenom si il renvoit false alors le bouton principale est desactiver.
			function validateprenon()				 
    		{
			  prenon = document.getElementById("name").value
		   	  if (regexprenon.test(prenon)==false)
			    {
				  document.getElementById("submitImg").disabled=true;
			    }
			  else 
				{
				  document.getElementById("submitImg").disabled=false; 
			    }
					 
			}
			//valide le nom si il renvoit false alors le bouton principale est desactiver.
			function validatenom()				 
			{
		      nom = document.getElementById("lastname").value
			  if (regexprenon.test(nom)==false)
				{
				  document.getElementById("submitImg").disabled=true;
				}
			  else 
				{
						document.getElementById("submitImg").disabled=false; 
				}					 
			}
			
			//valide le couriel si il renvoit false alors le bouton principale est desactiver.
			function validatemail()				 
			{
			  email = document.getElementById("mail").value
			  if (regexemail.test(mail)==false)
				{
				  document.getElementById("submitImg").disabled=true;
				}
			  else 
				{
				  document.getElementById("submitImg").disabled=false; 
				}					 
			}
			//valide le telephone si il renvoit false alors le bouton principale est desactiver. 
			function validatetel()				 
			{
			  telephone = document.getElementById("tel").value
			  if (regextel.test(telephone)==false)
			    {
				  document.getElementById("submitImg").disabled=true;
			    }
			  else 
				{
				  document.getElementById("submitImg").disabled=false; 
			    }					 
			}
			//valide la date de naissance si il renvoit false alors le bouton principale est desactiver.	 
		    function validatedate()
			{
			  datenaissance = document.getElementById("").value
			  if (regexdate.test(datenaissance)==false)
				{
				  document.getElementById("submitImg").disabled=true;
				}
			  else 
			    {
				  document.getElementById("submitImg").disabled=false; 
				}	 
			}
				 
			//valide le couriel numero 2 si il renvoit false alors le bouton principale est desactiver.	 
			function validatemail2()
		    {
			  email2 = document.getElementById("mail2").value
			  if (regexemail.test(email2)==false)
			    {
				  document.getElementById("submitImg").disabled=true;
				}
			  else 
				{
			      document.getElementById("submitImg").disabled=false; 
				}
			}
            // affiche la valeur hexadecimale de la couleur 
            function Couleur()
			{
			  var couleur = document.getElementById("color").value;
			  document.getElementById("hexa").value=couleur;	 
			}
			// affiche la couleur grace a la valeur hexadecimale
			function hexadecimale()
			{
			  var hexa  = document.getElementById("hexa").value;
			  document.getElementById("color").value=hexa;
		    }
            // calcule du totale taxe et sous totale lors d'un onchange
		    function calcul()
		    {
			  var prod;
			  var prix;
			  var quantity=document.getElementById("qty").value;
			  var produit = document.getElementById("pname").value;
			  for (var cpt=0;cpt<3;cpt++)
				{
				   if (produit==Tabproduct[cpt])
					{
					   prix=Tabprice[cpt];
					   var soustotal=prix*quantity;
					   document.getElementById("stotal").value=soustotal;
					   document.getElementById("taxe").value=soustotal*0.15;
					   document.getElementById("total").value=soustotal*0.15 + soustotal;
				    }					 
				}			 
			}
			// connexion verification (laboratoire 7)	 
			function verification()
			{
		       var pwd= document.getElementById("pwd2").value;
               var ident= document.getElementById("username2").value;
			   if (pwd==motdepasse&&ident==identifiant)
				 {
				   alert("vous ete bien connecter "+identifiant)
				 }
                 else 
				 {
				   alert("mot de passe ou identifiant incorrect")
				 }					 
					 
			}
				 




