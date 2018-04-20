// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;
     // je crée un objet image
     var myImg = new Image();
     // je crée mon tableau d'objet
	 var generateheroes=
    {
	description:'',
	allié:'',
	ennemie:''
    };
     // je créé une fonction pour vider la div contenu sans utiliser innertHTML
     function viderContenu()
    {
	   var element = document.getElementById("contenu");
       while (element.firstChild)
	   {
         element.removeChild(element.firstChild);
       }
	
    }
     //ce compteur permet de repeter la fonction source une seul fois.
       var cpt=0;
     // ensuite je crée une fonction qui va créée des div dans ma div contenu
     function addElement() 
	{ 
	   
       var contents =document.getElementById("contenu");
	   
	   
       // crée un nouvel élément div pour la description
       var newDiv = document.createElement("div"); 
       newDiv.id="description";
       contents.appendChild(newDiv)
	 
	  // crée un nouvel élément div pour les allié
       var newDivallié = document.createElement("div"); 
       newDivallié.id="allié"
	   contents.appendChild(newDivallié)

      // crée un nouvel élément div pour les ennemie
      var newDivennemie = document.createElement("div"); 
      newDivennemie.id="ennemie";
	  contents.appendChild(newDivennemie)

	 
	  // crée un nouvel élément div pour les images
	  var newDivimage = document.createElement("div"); 
      newDivimage.id="image"; 
	  contents.appendChild(newDivimage)
	  if (cpt==0)
	  {
	  source();
	  }
	  cpt++;
    }

	
	// cette fonction me permet de mettre les information contenue dans mon tableau d'objet sur la page html
     function addinformation()
    {
      document.getElementById("description").innerHTML += generateheroes.description + "<br/>"	
      document.getElementById("allié").innerHTML += generateheroes.allié + "<br/>";
      document.getElementById("ennemie").innerHTML += generateheroes.ennemie + "<br/>";
      myImg.width=200;
      document.getElementById("image").appendChild(myImg); 
    }

     // quand un utilisateur copie du texte, il sera alerté
     function source()
    {
		
	  var cont = document.getElementById("contenu")
	  cont.addEventListener('copy', function(){
      alert("Attention, nous accepton la copie de nos pages mais veuiller nous citer");});
		
    }

     // voici la partie ou j'ajoute l'information, les image ect ainsi que les appele de fonction

     function spiderman()
    {
       viderContenu();
       addElement();
       generateheroes.description="<h2>Description</h2><p>de son vrais nom peter parker, spiderman doit ses puvoire a une piqure d'arraigné. <br/>Spider-Man possède une agilité, une force, une vitesse et des réflexes surhumains.</br> Il peut adhérer à n'importe quelle surface et donc grimper sur des parois verticales et se tenir sur un plafond par exemple.</br>  Il possède une sorte de sixième sens qui l'avertit du danger.</br>  Il utilise une paire de lance-toiles fixés à ses poignets pour projeter une substance chimique particulièrement adhésive</br>  qu'il utilise pour se déplacer d'immeubles en immeubles ou pour ligoter des adversaires.</p>";
       generateheroes.allié="<h2>Allié</h2><br/><p>Tony stark alias (Iron man)<br/>Harry ozborn</p>";
       generateheroes.ennemie="<h2>Ennemie</h2><br/><p>le bouffon vert <br/> Dr Ozborn alias(le reptilien)</p>";
       myImg.src = 'image/spiderman.jpg';
       addinformation(); 
    }

     function Superman()
    {
	   viderContenu();
       addElement();
       generateheroes.description="<h2>Description</h2><p>de son vrais nom Clark Kent, superman doit ses pouvoir a son aancien monde kripton. Superman est l'être le plus puissant de la planète Terre.<br/> Né Kal-El, il est un extraterrestre venant de la planète Krypton, il est le fils de Jor-El et Lara Lor-Van, tous les deux furent tués lors de l'explosion de la planète.<br/> Clark fut un des seuls survivants, il fut envoyé sur Terre avant le massacre. <br/>L'enfant fut recueillit par Martha et Jonathan Kent.<br/> Il fut élevé comme un adolescent ordinaire à Smallville, Kansas.<br/></p>";
       generateheroes.allié="<h2>Allié</h2><br/><p>Batman <br/> Flash <br/></p>";
       generateheroes.ennemie="<h2>Ennemie</h2><br/><p>le Generale ZOD <br/> Lex Luttor<br/></p>";
       myImg.src = 'image/superman.png';
       addinformation();
	}

     function Batman()
    {
	   viderContenu();
       addElement();
       generateheroes.description="<h2>Description</h2><p>Pour combattre les criminels, Bruce Wayne crée une nouvelle identité.<br/> Ainsi naît le Bat-Man qui, la nuit, chasse les malfaiteurs et les saisit d'effroi. <br/>Constamment sur le qui-vive, il exerce un contrôle total sur ses sentiments et est prêt à tout pour atteindre son but.<br/> Batman mesure environ 1,90 mètres et pèse 85 kilos.Certains des ennemis de Batman ont réussi à découvrir sa véritable identité,<br/> comme le docteur Hugo Strange, Bane, etc. Le Joker semble également la connaître mais ne paraît pas s'en soucier,<br/> considérant que Batman est sa véritable identité</p>"
       generateheroes.allié="<h2>Allié</h2><br/><p>wonder woman <br/> Flash <br/></p>";
       generateheroes.ennemie="<h2>Ennemie</h2><br/><p>le Joker <br/> Bane <br/></p>";	
       myImg.src = 'image/batman.jpg';
       addinformation();
    }

     function Wolverine()
    {	
       viderContenu();
       addElement();
       generateheroes.description="<h2>Description</h2><p>Wolverine possède un facteur auto-guérisseur qui lui permet de guérir de tous types de blessures en un rien de temps.<br/> Ses cinq sens sont extrêmement développés. Son squelette est entièrement recouvert d'adamantium, un métal réputé incassable.<br/> Il possède 3 griffes rétractables dans chaque avant-bras, également recouvertes d'adamantium.<br/> Son esprit est illisible, même pour les meilleurs télépathes.<br/></p>";
       generateheroes.allié="<h2>Allié</h2><br/><p>Professeur Xavier <br/> jean <br/></p>";
       generateheroes.ennemie="<h2>Ennemie</h2><br/><p>Baron Strucker <br/> Magneto <br/></p>";
       myImg.src = 'image/wolverine.jpg';
       addinformation();
    }

      function deadpool()
    {	
       viderContenu();
       addElement();
       generateheroes.description="<h2>Description</h2><p> de son vrais nom Wade T. Wilson, Il possède un facteur de régénération semblable à celui de Wolverine.<br/> Il peut donc guérir de n'importe quelle blessure à une vitesse incroyable.<br/> Deadpool est un assassin sans foi ni loi guidé par son amour de l'argent.<br/> Il n'est pas contre changer de camp en plein combat si on lui fait une offre suffisante.<br/> Mais Deadpool est surtout la plus grande gueule de l'univers, il ne peut s'empêcher de vanner ses adversaires même au bord de la mort.<br/> Cela masque les doutes profonds qu'a Wade et qu'ils l'ont conduit un moment à embrasser <br/>la carrière super héroïque mais qui à d'autres l'incitent à tuer tout ceux qu'il croise.<br/></p>";
       generateheroes.allié="<h2>Allié</h2><br/><p> negasonic teenager warrior<br/> spiderman <br/></p>";
       generateheroes.ennemie="<h2>Ennemie</h2><br/><p>Ajax <br/> Angel dust <br/></p>";
       myImg.src = 'image/deadpool.jpg';
       addinformation();
    }





