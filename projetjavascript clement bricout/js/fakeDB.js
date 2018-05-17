/*
	Nom du module: fakeDB
	Version: 1.0
	Auteurs: Xavier Chamberland-Thibeault et Kim Lavoie

  Références:
	Taille: 	http://www.d20pfsrd.com/gamemastering/combat/space-reach-threatened-area-templates/ 
				http://dungeons.wikia.com/wiki/Table:_Creature_Size_and_Scale_(3.5e_Other)
	Armures:	http://www.regles-donjons-dragons.com/Page411.html
	Armes:		http://www.regles-donjons-dragons.com/Page410.html
	Races:		http://www.regles-donjons-dragons.com/Page11.html
	Classes:	http://www.regles-donjons-dragons.com/Page19.html
	Alignements:http://www.regles-donjons-dragons.com/Page205.html
	Divinités:	https://www.aidedd.org/univers/pantheon/
*/

//Début du module
//Va nous permettre d'avoir une interface publique et des fonctions privées
//Les étudiants vont pouvoir inspecter le module pour connaître l'interface public
var fakeDB = new function(){

// Table de base qui est insérée lorsque localStorage/DB est vide
// Permet également de voir la structure de la BD
var DB = 
{
		tblArmure:		[
						 {Nom:"Armure de cuire", 	Type:"Armure", 		CategoriePoids:"Légère", 			CategorieTaille:0, 	BonusDexMax:6, 		BonusCA:2,	PoidsKg:3.75},
						 {Nom:"Armure de cuire", 	Type:"Armure", 		CategoriePoids:"Légère", 			CategorieTaille:1, 	BonusDexMax:6, 		BonusCA:2,	PoidsKg:7.5},
						 {Nom:"Armure de cuire", 	Type:"Armure", 		CategoriePoids:"Légère", 			CategorieTaille:2, 	BonusDexMax:6, 		BonusCA:2,	PoidsKg:15},
						 {Nom:"Cotte de mailles", 	Type:"Armure", 		CategoriePoids:"Intermédiaire", 	CategorieTaille:0, 	BonusDexMax:3, 		BonusCA:4,	PoidsKg:10},
						 {Nom:"Cotte de mailles", 	Type:"Armure", 		CategoriePoids:"Intermédiaire", 	CategorieTaille:1, 	BonusDexMax:3, 		BonusCA:4,	PoidsKg:20},
						 {Nom:"Cotte de mailles", 	Type:"Armure", 		CategoriePoids:"Intermédiaire", 	CategorieTaille:2, 	BonusDexMax:3, 		BonusCA:4,	PoidsKg:40},
						 {Nom:"Harnois", 			Type:"Armure", 		CategoriePoids:"Lourde", 			CategorieTaille:0, 	BonusDexMax:1, 		BonusCA:8,	PoidsKg:12.5},
						 {Nom:"Harnois", 			Type:"Armure", 		CategoriePoids:"Lourde", 			CategorieTaille:1, 	BonusDexMax:1, 		BonusCA:8,	PoidsKg:25},
						 {Nom:"Harnois", 			Type:"Armure", 		CategoriePoids:"Lourde", 			CategorieTaille:2, 	BonusDexMax:1, 		BonusCA:8,	PoidsKg:50},
						 {Nom:"Targe", 				Type:"Bouclier", 	CategoriePoids:"Légère", 			CategorieTaille:0, 	BonusDexMax:null, 	BonusCA:1,	PoidsKg:1.25},
						 {Nom:"Targe", 				Type:"Bouclier", 	CategoriePoids:"Légère", 			CategorieTaille:1, 	BonusDexMax:null, 	BonusCA:1,	PoidsKg:2.5},
						 {Nom:"Targe", 				Type:"Bouclier", 	CategoriePoids:"Légère", 			CategorieTaille:2, 	BonusDexMax:null, 	BonusCA:1,	PoidsKg:5},
						 {Nom:"Écu en acier", 		Type:"Bouclier", 	CategoriePoids:"Intermédiaire", 	CategorieTaille:0, 	BonusDexMax:null, 	BonusCA:2,	PoidsKg:3.75},
						 {Nom:"Écu en acier", 		Type:"Bouclier", 	CategoriePoids:"Intermédiaire", 	CategorieTaille:1, 	BonusDexMax:null, 	BonusCA:2,	PoidsKg:7.5},
						 {Nom:"Écu en acier", 		Type:"Bouclier", 	CategoriePoids:"Intermédiaire", 	CategorieTaille:2, 	BonusDexMax:null, 	BonusCA:2,	PoidsKg:15},
						 {Nom:"Pavois", 			Type:"Bouclier", 	CategoriePoids:"Lourde", 			CategorieTaille:0, 	BonusDexMax:2, 		BonusCA:4,	PoidsKg:11.25},
						 {Nom:"Pavois", 			Type:"Bouclier", 	CategoriePoids:"Lourde", 			CategorieTaille:1, 	BonusDexMax:2, 		BonusCA:4,	PoidsKg:22.5},
						 {Nom:"Pavois", 			Type:"Bouclier", 	CategoriePoids:"Lourde", 			CategorieTaille:2, 	BonusDexMax:2, 		BonusCA:4,	PoidsKg:45}
						],
		tblArmurePerso:	[
							// {Personnage:0	,	Armure:0}
						],
		tblPersonnage:		[
							/*{
								Nom: "John",
								Divinite: 0,
								Alignement: 0,
								Classe: 0,
								Niveau: 20,
								Race: 0,
								Genre: "Male",
								Age: 30,
								CategorieTaille: 1,
								Taille: 171,
								Poids: 70,
								Langues: "Commun|Elfes",
								Yeux: "#0080ff",
								Cheveux: "#0080ff",
								Joueur: 1	
							  }
							*/
						],
		tblCaracteristiques:
						[
							/*
							{
								Personnage: 0,
								Force: 15,
								Dexterite: 16,
								Constitution: 12,
								Intelligence: 14,
								Sagesse: 17,
								Charisme: 14,
								Competences: "Acrobatie|Saut|Natation"
							}
							*/
						],
		tblClasse:		[
						 {Nom:"Barbare",	DeVie:"1d12",	BonusReflexe:2,		BonusVigueur:5,		BonusVolonte:2,		BonusCompetences:4},
						 {Nom:"Barde",		DeVie:"1d6",	BonusReflexe:5,		BonusVigueur:2,		BonusVolonte:5,		BonusCompetences:6},
						 {Nom:"Druide",		DeVie:"1d8",	BonusReflexe:2,		BonusVigueur:5,		BonusVolonte:5,		BonusCompetences:4},
						 {Nom:"Ensorceleur",DeVie:"1d4",	BonusReflexe:5,		BonusVigueur:2,		BonusVolonte:5,		BonusCompetences:2},
						 {Nom:"Guerrier",	DeVie:"1d10",	BonusReflexe:2,		BonusVigueur:5,		BonusVolonte:2,		BonusCompetences:2},
						 {Nom:"Magicien",	DeVie:"1d4",	BonusReflexe:2,		BonusVigueur:2,		BonusVolonte:5,		BonusCompetences:2},
						 {Nom:"Moine",		DeVie:"1d8",	BonusReflexe:5,		BonusVigueur:5,		BonusVolonte:5,		BonusCompetences:4},
						 {Nom:"Paladin",	DeVie:"1d10",	BonusReflexe:2,		BonusVigueur:5,		BonusVolonte:2,		BonusCompetences:2},
						 {Nom:"Prêtre",		DeVie:"1d8",	BonusReflexe:2,		BonusVigueur:5,		BonusVolonte:5,		BonusCompetences:2},
						 {Nom:"Rôdeur",		DeVie:"1d8",	BonusReflexe:5,		BonusVigueur:5,		BonusVolonte:2,		BonusCompetences:6},
						 {Nom:"Roublard",	DeVie:"1d6",	BonusReflexe:5,		BonusVigueur:2,		BonusVolonte:2,		BonusCompetences:8}
						],
		tblRace:		[
						 {Nom:"Humain",			CategorieTaille:1,	AgeAdulte:15, 	AgeAvance:53,	Langues:"Commun"},
						 {Nom:"Demie-elfe",		CategorieTaille:1,	AgeAdulte:20, 	AgeAvance:93,	Langues:"Commun|Elfe"},
						 {Nom:"Demi-orque",		CategorieTaille:1,	AgeAdulte:14, 	AgeAvance:45,	Langues:"Commun|Orque"},
						 {Nom:"Elfe",			CategorieTaille:1,	AgeAdulte:110, 	AgeAvance:350,	Langues:"Commun|Elfe"},
						 {Nom:"Gnome",			CategorieTaille:0,	AgeAdulte:40, 	AgeAvance:200,	Langues:"Commun|Gnome"},
						 {Nom:"Halfelin",		CategorieTaille:0,	AgeAdulte:20, 	AgeAvance:100,	Langues:"Commun|Halfelin"},
						 {Nom:"Nain",			CategorieTaille:1,	AgeAdulte:40, 	AgeAvance:250,	Langues:"Commun|Nain"}
						],
		tblBonusRace:	[
						 {Race:0,	Caracteristique:"Competences",	Bonus:4},
						 {Race:2,	Caracteristique:"Force",		Bonus:2},
						 {Race:2,	Caracteristique:"Intelligence",	Bonus:-2},
						 {Race:2,	Caracteristique:"Charisme",		Bonus:-2},
						 {Race:3,	Caracteristique:"Dextérité",	Bonus:2},
						 {Race:3,	Caracteristique:"Constitution",	Bonus:-2},
						 {Race:4,	Caracteristique:"Constitution",	Bonus:2},
						 {Race:4,	Caracteristique:"Force",		Bonus:-2},
						 {Race:5,	Caracteristique:"Dextérité",	Bonus:2},
						 {Race:5,	Caracteristique:"Force",		Bonus:-2},
						 {Race:6,	Caracteristique:"Constitution",	Bonus:2},
						 {Race:6,	Caracteristique:"Charisme",		Bonus:-2}
						],
		tblArme:		[
					 	 {Nom:"Dague",					Categorie:"Courante",	Type:"Corps à corps",	DeuxMains:false,	CategorieTaille:0,	Degats:"1d3"},
						 {Nom:"Dague",					Categorie:"Courante",	Type:"Corps à corps",	DeuxMains:false,	CategorieTaille:1,	Degats:"1d4"},
						 {Nom:"Dague",					Categorie:"Courante",	Type:"Corps à corps",	DeuxMains:false,	CategorieTaille:2,	Degats:"1d6"},
						 {Nom:"Masse d'armes lourde",	Categorie:"Courante",	Type:"Corps à corps",	DeuxMains:false,	CategorieTaille:0,	Degats:"1d6"},
						 {Nom:"Masse d'armes lourde",	Categorie:"Courante",	Type:"Corps à corps",	DeuxMains:false,	CategorieTaille:1,	Degats:"1d8"},
						 {Nom:"Masse d'armes lourde",	Categorie:"Courante",	Type:"Corps à corps",	DeuxMains:false,	CategorieTaille:2,	Degats:"1d10"},
						 {Nom:"Lance",					Categorie:"Courante",	Type:"Corps à corps",	DeuxMains:true,		CategorieTaille:0,	Degats:"1d6"},
						 {Nom:"Lance",					Categorie:"Courante",	Type:"Corps à corps",	DeuxMains:true,		CategorieTaille:1,	Degats:"1d8"},
						 {Nom:"Lance",					Categorie:"Courante",	Type:"Corps à corps",	DeuxMains:true,		CategorieTaille:2,	Degats:"1d10"},
						 {Nom:"Arbalète légère",		Categorie:"Courante",	Type:"Distance",		DeuxMains:true,		CategorieTaille:0,	Degats:"1d6"},
						 {Nom:"Arbalète légère",		Categorie:"Courante",	Type:"Distance",		DeuxMains:true,		CategorieTaille:1,	Degats:"1d8"},
						 {Nom:"Arbalète légère",		Categorie:"Courante",	Type:"Distance",		DeuxMains:true,		CategorieTaille:2,	Degats:"1d10"},
						 {Nom:"Hachette",				Categorie:"Guerre",		Type:"Corps à corps",	DeuxMains:false,	CategorieTaille:0,	Degats:"1d4"},
						 {Nom:"Hachette",				Categorie:"Guerre",		Type:"Corps à corps",	DeuxMains:false,	CategorieTaille:1,	Degats:"1d6"},
						 {Nom:"Hachette",				Categorie:"Guerre",		Type:"Corps à corps",	DeuxMains:false,	CategorieTaille:2,	Degats:"1d8"},
						 {Nom:"Fléau d'arme léger",		Categorie:"Guerre",		Type:"Corps à corps",	DeuxMains:false,	CategorieTaille:0,	Degats:"1d6"},
						 {Nom:"Fléau d'arme léger",		Categorie:"Guerre",		Type:"Corps à corps",	DeuxMains:false,	CategorieTaille:1,	Degats:"1d8"},
						 {Nom:"Fléau d'arme léger",		Categorie:"Guerre",		Type:"Corps à corps",	DeuxMains:false,	CategorieTaille:2,	Degats:"1d10"},
						 {Nom:"Épée à deux mains",		Categorie:"Guerre",		Type:"Corps à corps",	DeuxMains:true,		CategorieTaille:0,	Degats:"1d10"},
						 {Nom:"Épée à deux mains",		Categorie:"Guerre",		Type:"Corps à corps",	DeuxMains:true,		CategorieTaille:1,	Degats:"2d6"},
						 {Nom:"Épée à deux mains",		Categorie:"Guerre",		Type:"Corps à corps",	DeuxMains:true,		CategorieTaille:2,	Degats:"2d8"},
						 {Nom:"Arc long",				Categorie:"Guerre",		Type:"Distnace",		DeuxMains:true,		CategorieTaille:0,	Degats:"1d6"},
						 {Nom:"Arc long",				Categorie:"Guerre",		Type:"Distnace",		DeuxMains:true,		CategorieTaille:1,	Degats:"1d8"},
						 {Nom:"Arc long",				Categorie:"Guerre",		Type:"Distnace",		DeuxMains:true,		CategorieTaille:2,	Degats:"1d10"},
						 {Nom:"Nunchaku",				Categorie:"Exotique",	Type:"Corps à corps",	DeuxMains:false,	CategorieTaille:0,	Degats:"1d4"},
						 {Nom:"Nunchaku",				Categorie:"Exotique",	Type:"Corps à corps",	DeuxMains:false,	CategorieTaille:1,	Degats:"1d6"},
						 {Nom:"Nunchaku",				Categorie:"Exotique",	Type:"Corps à corps",	DeuxMains:false,	CategorieTaille:2,	Degats:"1d8"},
						 {Nom:"Hache de guerre naine",	Categorie:"Exotique",	Type:"Corps à corps",	DeuxMains:false,	CategorieTaille:0,	Degats:"1d8"},
						 {Nom:"Hache de guerre naine",	Categorie:"Exotique",	Type:"Corps à corps",	DeuxMains:false,	CategorieTaille:1,	Degats:"1d10"},
						 {Nom:"Hache de guerre naine",	Categorie:"Exotique",	Type:"Corps à corps",	DeuxMains:false,	CategorieTaille:2,	Degats:"1d12"},
						 {Nom:"Chaîne cloutée",			Categorie:"Exotique",	Type:"Corps à corps",	DeuxMains:true,		CategorieTaille:0,	Degats:"1d6"},
						 {Nom:"Chaîne cloutée",			Categorie:"Exotique",	Type:"Corps à corps",	DeuxMains:true,		CategorieTaille:1,	Degats:"2d4"},
						 {Nom:"Chaîne cloutée",			Categorie:"Exotique",	Type:"Corps à corps",	DeuxMains:true,		CategorieTaille:2,	Degats:"2d6"},
						 {Nom:"Shuriken",				Categorie:"Exotique",	Type:"Distance",		DeuxMains:false,	CategorieTaille:0,	Degats:"1"},
						 {Nom:"Shuriken",				Categorie:"Exotique",	Type:"Distance",		DeuxMains:false,	CategorieTaille:1,	Degats:"1d2"},
						 {Nom:"Shuriken",				Categorie:"Exotique",	Type:"Distance",		DeuxMains:false,	CategorieTaille:2,	Degats:"1d3"}
						],
		tblArmePerso:	[
							//{Personnage:0	,		Arme:0}
						],
		tblDivinite:	[
						 {Nom:"Aurile", 	Titre:"déesse de l'hiver",							Alignement:7},
						 {Nom:"Azouth", 	Titre:"dieu des magiciens",							Alignement:3},
						 {Nom:"Baine",  	Titre:"dieu de la tyrannie",						Alignement:6},
						 {Nom:"Beshaba",	Titre:"déesse de la malchance",						Alignement:8},
						 {Nom:"Bhaal", 		Titre:"dieu du meurtre",							Alignement:7},
						 {Nom:"Chauntéa",	Titre:"déesse de l'agriculture",					Alignement:1},
						 {Nom:"Cyric", 		Titre:"dieu du mensonge",							Alignement:8},
						 {Nom:"Déneïr", 	Titre:"dieu de l'écriture",							Alignement:1},
						 {Nom:"Eldath", 	Titre:"déesse de la paix",							Alignement:1},
						 {Nom:"Gond", 		Titre:"dieu de l'artisanat",						Alignement:4},
						 {Nom:"Heaum", 		Titre:"dieu de la protection",						Alignement:3},
						 {Nom:"Ilmater", 	Titre:"dieu de l'endurance",						Alignement:0},
						 {Nom:"Kelemvor",	Titre:"dieu de la mort",							Alignement:3},
						 {Nom:"Lathandre", 	Titre:"dieu de la naissance et du renouvellement",	Alignement:1},
						 {Nom:"Leira", 		Titre:"déesse de l'illusion",						Alignement:5},
						 {Nom:"Lliira", 	Titre:"déesse de la joie",							Alignement:2},
						 {Nom:"Loviatar", 	Titre:"déesse de la douleur",						Alignement:6},
						 {Nom:"Malar", 		Titre:"dieu de la chasse",							Alignement:8},
						 {Nom:"Mask", 		Titre:"dieu des voleurs",							Alignement:5},
						 {Nom:"Mailikki", 	Titre:"déesse des forêts",							Alignement:1},
						 {Nom:"Milil", 		Titre:"dieu de la poésie et des chants",			Alignement:1},
						 {Nom:"Myrkul", 	Titre:"dieu de la mort",							Alignement:7},
						 {Nom:"Mystra", 	Titre:"déesse de la magie",							Alignement:1},
						 {Nom:"Oghma", 		Titre:"dieu de la connaissance",					Alignement:4},
						 {Nom:"Savras", 	Titre:"dieu de la divination et du destin",			Alignement:3},
						 {Nom:"Séluné", 	Titre:"déesse de la lune",							Alignement:2},
						 {Nom:"Shar", 		Titre:"déesse des ténèbres et de l'égarement",		Alignement:7},
						 {Nom:"Sunie", 		Titre:"déesse de la beauté et de l'amour",			Alignement:2},
						 {Nom:"Sylvanus", 	Titre:"dieu de la nature sauvage",					Alignement:4},
						 {Nom:"Talona", 	Titre:"déesse des maladies et du poison",			Alignement:8},
						 {Nom:"Talos", 		Titre:"dieu des tempêtes",							Alignement:7},
						 {Nom:"Tempus", 	Titre:"dieu de la guerre",							Alignement:4},
						 {Nom:"Torm", 		Titre:"dieu du courage et du sacrifice de soi",		Alignement:0},
						 {Nom:"Tymora", 	Titre:"déesse de la bonne fortune",					Alignement:2},
						 {Nom:"Tyr", 		Titre:"dieu de la justice",							Alignement:0},
						 {Nom:"Umberlie", 	Titre:"déesse des océans",							Alignement:8},
						 {Nom:"Waukyne", 	Titre:"déesse du commerce",							Alignement:4}
						],
		tblCategorieTaille:		
						[
						 {Nom:"Petit", Abreviation:"P", 	PoidsMinKg:3.6, 	PoidsMaxKg:60, 		TailleMinCm:60, 	TailleMaxCm:122},
						 {Nom:"Moyen", Abreviation:"M", 	PoidsMinKg:27, 		PoidsMaxKg:500, 	TailleMinCm:122, 	TailleMaxCm:244},
						 {Nom:"Grand", Abreviation:"G", 	PoidsMinKg:226, 	PoidsMaxKg:4000, 	TailleMinCm:244, 	TailleMaxCm:488}
						],
		tblAlignement:	[
						 {Morale:"Loyal",		Ethique:"Bon",		Abreviation:"LB"},
						 {Morale:"Neutre",		Ethique:"Bon",		Abreviation:"NB"},
						 {Morale:"Chaotique",	Ethique:"Bon",		Abreviation:"CB"},
						 {Morale:"Loyal",		Ethique:"Neutre",	Abreviation:"LN"},
						 {Morale:"Neutre",		Ethique:"Neutre",	Abreviation:"N"},
						 {Morale:"Chaotique",	Ethique:"Neutre",	Abreviation:"CN"},
						 {Morale:"Loyal",		Ethique:"Mauvais",	Abreviation:"LM"},
						 {Morale:"Neutre",		Ethique:"Mauvais",	Abreviation:"NM"},
						 {Morale:"Chaotique",	Ethique:"Mauvais",	Abreviation:"CM"}
						],
		tblJoueur:		[
							// {NomJoueur:"bob123",		MotDePasse:"1Pwd!"}
						]
};

// Crée la base de données par défaut si elle n'existe pas déjà dans localStorage
if(!localStorage.getItem("DB"))
{
	localStorage.setItem("DB",JSON.stringify(DB));
}

this.hash = function(chaineDeCaracteresAHacher) {
    // Petite fonction de hachage trouvée sur Internet
	// Utilisée avant de stocker le mot de passe
	// Pas sécure du tout, mais utile pour montrer le principe
    var a = 1, c = 0, h, o;
    if (chaineDeCaracteresAHacher) {
        a = 0;
        /*jshint plusplus:false bitwise:false*/
        for (h = chaineDeCaracteresAHacher.length - 1; h >= 0; h--) {
            o = chaineDeCaracteresAHacher.charCodeAt(h);
            a = (a<<6&268435455) + o + (o<<14);
            c = a & 266338304;
            a = c!==0?a^c>>21:a;
        }
    }
    return String(a);
};

function validId(table, id){
	// Retourne vrai si "id" existe dans "table", faux sinon
	var db = JSON.parse(localStorage.getItem("DB"));
	return db[table][id] != null;
}

this.creerJoueur = function(nom, motDePasse){
	// Permet de créer un login pour un joueur
	var db = JSON.parse(localStorage.getItem("DB"));
	db.tblJoueur.push({
		NomJoueur: nom,
		Password: this.hash(motDePasse)
	});
	localStorage.setItem("DB", JSON.stringify(db));
	return db.tblJoueur.length - 1;
}

this.vueInfosGenerales = function(idPerso)
{
	//Simule une requête Select * From InfosGenerales WHERE id = idPerso
	//Retourne donc les infos générales pour un personnage donné
	var dataBase = JSON.parse(localStorage.getItem("DB"));
	var perso = {};
	
	perso["Nom"] = dataBase.tblPersonnage[idPerso].Nom;
	perso["Alignement"] = dataBase.tblAlignement[dataBase.tblPersonnage[idPerso].Alignememt];
	perso["NomJoueur"] = dataBase.tblJoueur[dataBase.tblPersonnage[idPerso].Joueur].NomJoueur;
	perso["Classe"] = dataBase.tblClasse[dataBase.tblPersonnage[idPerso].Classe].Nom;
	perso["Niveau"] = dataBase.tblPersonnage[idPerso].Niveau;
	perso["Divinite"] = dataBase.tblDivinite[dataBase.tblPersonnage[idPerso].Divinite].Nom;
	perso["Race"] = dataBase.tblRace[dataBase.tblPersonnage[idPerso].Race].Nom;
	perso["CategorieTaille"] = dataBase.tblCategorieTaille[dataBase.tblPersonnage[idPerso].CategorieTaille].Nom;
	perso["Taille"] = dataBase.tblPersonnage[idPerso].Taille;
	perso["Genre"] = dataBase.tblPersonnage[idPerso].Genre;
	perso["Age"] = dataBase.tblPersonnage[idPerso].Age;
	perso["Poids"] = dataBase.tblPersonnage[idPerso].Poids;
	perso["Yeux"] = dataBase.tblPersonnage[idPerso].Yeux;
	perso["Cheveux"] = dataBase.tblPersonnage[idPerso].Cheveux;
	
	return perso;
	
}

this.vueResumePersosDuJoueur = function(idJoueur)
{
	// Renvoie toutes les informations pour lister les personnages
	// appartenant à un joueur
	var dataBase = JSON.parse(localStorage.getItem("DB"));
	var persos = dataBase.tblPersonnage.filter(function(element)
															{
																return element.Joueur === idJoueur;
															});
	var listePersos =[];
	for(var i = 0; i < persos.length; i++)
	{
		var perso = {};
		perso["Id"] = dataBase.tblPersonnage.indexOf(persos[i]);
		perso["Nom"] = persos[i].Nom;
		perso["Race"] = dataBase.tblRace[persos[i].Race].Nom;
		perso["Classe"] = dataBase.tblClasse[persos[i].Classe].Nom;
		perso["Niveau"] = persos[i].Niveau;
		
		if(!dataBase.tblCaracteristiques[dataBase.tblPersonnage.indexOf(persos[i])])
		{
			console.log("Le personnage " + dataBase.tblPersonnage.indexOf(persos[i]) + " n'a pas de caractéristiques!");
			return null;
		}
		
		perso["Force"] = dataBase.tblCaracteristiques[dataBase.tblPersonnage.indexOf(persos[i])].Force;
		perso["Dexterite"] = dataBase.tblCaracteristiques[dataBase.tblPersonnage.indexOf(persos[i])].Dexterite;
		perso["Constitution"] = dataBase.tblCaracteristiques[dataBase.tblPersonnage.indexOf(persos[i])].Constitution;
		perso["Intelligence"] = dataBase.tblCaracteristiques[dataBase.tblPersonnage.indexOf(persos[i])].Intelligence;
		perso["Sagesse"] = dataBase.tblCaracteristiques[dataBase.tblPersonnage.indexOf(persos[i])].Sagesse;
		perso["Charisme"] = dataBase.tblCaracteristiques[dataBase.tblPersonnage.indexOf(persos[i])].Charisme;
		perso["CA"] = this.totalAC(dataBase.tblPersonnage.indexOf(persos[i]));
		listePersos.push(perso);
	}
	
	return listePersos;
}

function validerCaracteristiques(objetCaracteristiques){
	if(!validId("tblPersonnage", objetCaracteristiques.Personnage)){
		console.log("Habiletés inexistantes");
		return false;
	}
	if(objetCaracteristiques.Force === null || objetCaracteristiques.Force < 0){
		console.log("Force invalide");
		return false;
	}
	if(objetCaracteristiques.Dexterite === null || objetCaracteristiques.Dexterite < 0){
		console.log("Dextérité invalide");
		return false;
	}
	if(objetCaracteristiques.Constitution === null || objetCaracteristiques.Constitution < 0){
		console.log("Constitution invalide");
		return false;
	}
	if(objetCaracteristiques.Intelligence === null || objetCaracteristiques.Intelligence < 0){
		console.log("Intelligence invalide");
		return false;
	}
	if(objetCaracteristiques.Charisme === null || objetCaracteristiques.Charisme < 0){
		console.log("Charisme invalide");
		return false;
	}
	if(objetCaracteristiques.Sagesse === null || objetCaracteristiques.Sagesse < 0){
		console.log("Sagesse invalide");
		return false;
	}
	if(objetCaracteristiques.Competences === null){
		console.log("Liste de compétences invalide");
		return false;
	}
	return true;
}

this.ajouterOuModifierCaracteristiques = function(idPerso, force, dexterite, constitution, intelligence, sagesse, charisme, competences)
{
	// Permet d'ajouter ou modifier les caractéristiques/habiletés d'un personnage
	// L'identifiant est l'indice, qui doit être le même que pour le personnage
	// Exemple de relation un pour un
	// Voir tblCaracteristiques pour la structure à respecter
	// Peut-être devrait-on retirer Personnage de la liste?
	var db = JSON.parse(localStorage.getItem("DB"));
	
	var objetCaracteristiques = {
		Personnage: idPerso,
		Force: force,
		Dexterite: dexterite,
		Constitution: constitution,
		Intelligence: intelligence,
		Sagesse: sagesse,
		Charisme: charisme,
		Competences: competences
	}
	
	if(validerCaracteristiques(objetCaracteristiques)){
		db.tblCaracteristiques[objetCaracteristiques.Personnage] = objetCaracteristiques;
		localStorage.setItem("DB", JSON.stringify(db));
	}
}

this.listerArmesDuPerso = function(idPerso)
{
	//Retourne toutes les armes d'un personnage donné
	var dataBase = JSON.parse(localStorage.getItem("DB"));
	var listeArmes = dataBase.tblArmePerso.filter(function(element)
														{
															return element.Personnage === idPerso;
														});
	if(listeArmes.length == 0)
	{
		console.log("Le personage " + idPerso + " n'a pas d'arme!")
		return null;
	}
	return listeArmes;	
}

this.listerArmuresDuPerso = function(idPerso)
{
	//Retourne toutes les armures d'un personnage donné
	var dataBase = JSON.parse(localStorage.getItem("DB"));
	var listeArmures = dataBase.tblArmurePerso.filter(function(element)
														{
															return element.Personnage === idPerso;
														})
	var armures = [];
	for(var i = 0; i < listeArmures.length; i++)
	{
		armures.push(dataBase.tblArmure[listeArmures[i].Armure]);
	}		
	armures.sort(function(a,b)
						{
							if(a.BonusCA < b.BonusCA)
								return -1;
							if(a.BonusCA > b.BonusCA)
								return 1;
							
							return 0
						});
	if(listeArmures.length == 0)
	{
		console.log("Le personage " + idPerso + " n'a pas d'armure!")
		return null;
	}
	return armures;						
}

this.ajouterArmePerso = function(idPerso, idArme){
	// Permet d'ajouter une combinaison personnage/arme
	var dataBase = JSON.parse(localStorage.getItem("DB"));
	
	//On valide que la combinaison n'est pas déjà existante
	for(var i = 0; i < dataBase.tblArmePerso.length; i++){
		var ap = dataBase.tblArmePerso[i];
		if(ap.Personnage === idPerso && ap.Arme === idArme){
			console.log("Combinaison personnage/arme déjà existante")
			return;
		}
	}
	
	//Insertion
	dataBase.tblArmePerso.push({
		Personnage: idPerso,
		Arme: idArme
	});
	localStorage.setItem("DB", JSON.stringify(dataBase));
}

this.ajouterArmurePerso = function(idPerso, idArmure){
	// Permet d'ajouter une combinaison personnage/armure
	var dataBase = JSON.parse(localStorage.getItem("DB"));
	
	//On valide que la combinaison n'est pas déjà existante
	for(var i = 0; i < dataBase.tblArmurePerso.length; i++){
		var ap = dataBase.tblArmurePerso[i];
		if(ap.Personnage === idPerso && ap.Armure === idArmure){
			console.log("Combinaison personnage/armure déjà existante")
			return;
		}
	}
	
	//Insertion
	dataBase.tblArmurePerso.push({
		Personnage: idPerso,
		Armure: idArmure
	});
	localStorage.setItem("DB", JSON.stringify(dataBase));
	
}

this.retirerArmeDePerso = function(idPerso, idArme)
{
	// Enlève la combinaison personnage/arme de la table d'intersection
	// Pour les tables d'intersection, on n'utilise pas l'indice comme identifiant, alors on supprime complètement
	var dataBase = JSON.parse(localStorage.getItem("DB"));
	for(var i = 0; i < dataBase.tblArmePerso.length; i++){
		var ap = dataBase.tblArmePerso[i];
		if(ap.Personnage === idPerso && ap.Arme === idArme){
			ap.splice(i, 1);
			localStorage.setItem("DB", JSON.stringify(dataBase));
			return;
		}
	}
	console.log("Combinaison arme/personnage introuvable");
}

this.retirerArmureDePerso = function(idPerso, idArmure)
{
	// Enlève la combinaison personnage/armure de la table d'intersection
	// Pour les tables d'intersection, on n'utilise pas l'indice comme identifiant, alors on supprime complètement
	var dataBase = JSON.parse(localStorage.getItem("DB"));
	for(var i = 0; i < dataBase.tblArmurePerso.length; i++){
		var ap = dataBase.tblArmurePerso[i];
		if(ap.Personnage === idPerso && ap.Armure === idArmure){
			ap.splice(i, 1);
			localStorage.setItem("DB", JSON.stringify(dataBase));
			return;
		}
	}
	console.log("Combinaison armure/personnage introuvable");
}

this.bonusHabilete = function(idPerso)
{
	// Retourne le bonus pour chaque habilité du personnage selon son score
	var bonus = {};
	var dataBase = JSON.parse(localStorage.getItem("DB"));
	var habilitesPerso = dataBase.tblCaracteristiques[idPerso];
	
	if(habilitesPerso === null){
		console.log("Identifiant invalide");
		return null;
	}
	
	for(var champ in habilitesPerso )
	{
		//Valeur minimale d'une habilité: 1 (3d6 - 2 de modificateur)
		//Valeur maximale d'une habilité: 20 (3d6 + 2 de modificateur)
		if(champ !== "Personnage" && champ !== "Competences")
		{
			if(habilitesPerso[champ] == 1)
			{
				bonus[champ] = -5;
			}
			else if(habilitesPerso[champ] < 4)
			{
				bonus[champ] = -4;
			}
			else if(habilitesPerso[champ] < 6)
			{
				bonus[champ] = -3;
			}
			else if(habilitesPerso[champ] < 8)
			{
				bonus[champ] = -2;
			}
			else if(habilitesPerso[champ] < 10)
			{
				bonus[champ] = -1;
			}
			else if(habilitesPerso[champ] < 12)
			{
				bonus[champ] = 0;
			}
			else if(habilitesPerso[champ] < 14)
			{
				bonus[champ] = 1;
			}
			else if(habilitesPerso[champ] < 16)
			{
				bonus[champ] = 2;
			}
			else if(habilitesPerso[champ] < 18)
			{
				bonus[champ] = 3;
			}
			else if (habilitesPerso[champ] < 20)
			{
				bonus[champ] = 4;
			}
			else
			{
				bonus[champ] = 5;
			}
		}
	}
	
	return bonus;
	
}

this.totalAC = function(idPerso)
{
	//Retourne la moyenne d'AC des armures d'un perso et son total d'AC (AC + Bonus dex)
	var dataBase = JSON.parse(localStorage.getItem("DB"));
	var listeArmures = this.listerArmuresDuPerso(idPerso);
	var total = 0;	
	var maxDex = 9999999;
	var dex = dataBase.tblCaracteristiques[idPerso].Dexterite;
	var ac = {};
	
	if(listeArmures == null)
	{
		return null;
	}
	
	for(var i = 0; i < listeArmures.length; i++)
	{
		total += listeArmures[i].BonusCA;
		if(listeArmures[i].BonusDexMax != null && listeArmures[i].BonusDexMax < maxDex)
		{
			maxDex = listeArmures[i].BonusDexMax;
		}
	}
	
	ac["Moyenne"] = total/listeArmures.length;
	
	dex < maxDex? total += dex : total += maxDex;
	
	ac["Total"] = total;
	
	return ac;

}

this.nbPersoParClasse = function()
{
	//Retourne le nb de personnages de chaque classe
	var dataBase = JSON.parse(localStorage.getItem("DB"));
	var classes = dataBase.tblClasse;
	var persos = dataBase.tblPersonnage;
	var resultat = [];
	
	for(var i = 0; i < classes.length; i++)
	{
		var nb = (persos.filter(function(element)
								{
									return element.Classe === i;
								})).length;
		resultat.push({Classe: classes[i].Nom, Nb: nb});
	}
	
	return resultat;
}

function validerPerso(perso){
	// Valide que la structure de l'objet perso correspond à ce qui est attendu par la BD
	// Voir le commentaire dans tblPersonnage pour la structure à respecter
	var db = JSON.parse(localStorage.getItem("DB"));
	
	if(perso["Nom"] === null){
		console.log("Nom invalide");
		return false;
	}
	if(perso["Divinite"] === null || !validId("tblDivinite", perso.Divinite)){
		console.log("Divnité invalide");
		return false;
	}
	if(perso["Alignement"] === null || !validId("tblAlignement", perso.Alignement)){
		console.log("Alignement invalide");
		return false;	
	}
	if(perso["Classe"] === null || !validId("tblClasse", perso.Classe)){
		console.log("Classe invalide");
		return false;
	}
	if(perso["Niveau"] === null || perso.Niveau <= 0){
		console.log("Niveau invalide");
		return false;
	}
	if(perso["Race"] === null || !validId("tblRace", perso.Race)){
		console.log("Race invalide");
		return false;
	}
	if(perso["Genre"] === null){
		console.log("Genre invalide");
		return false;
	}
	if(perso["Age"] === null || perso.age <= 0){
		console.log("Age invalide");
		return false;
	}
	if(perso["CategorieTaille"] === null || !validId("tblCategorieTaille", perso.CategorieTaille)){
		console.log("Catégorie de taille invalide");
		return false;
	}
	if(perso["Taille"] === null || perso.Taille < db.tblCategorieTaille[perso.CategorieTaille].TailleMinCm || perso.Taille > db.tblCategorieTaille[perso.CategorieTaille].TailleMaxCm){
		console.log("Taille invalide");
		return false;
	}
	if(perso["Poids"] === null || perso.Poids < db.tblCategorieTaille[perso.CategorieTaille].PoidsMinKg || perso.Poids > db.tblCategorieTaille[perso.CategorieTaille].PoidsMaxKg){
		console.log("Poids invalide");
		return false;
	}
	if(perso["Langues"] === null){
		console.log("Langues invalide");
		return false;
	}
	if(perso["Yeux"] === null){
		console.log("Couleur des yeux invalide");
		return false;
	}
	if(perso["Cheveux"] === null){
		console.log("Couleur des cheveux invalide");
		return false;
	}
	if(perso["Joueur"] === null || !validId("tblJoueur", perso.Joueur)){
		console.log("Joueur invalide");
		return false;
	}
	return true;
}

this.creerPerso = function(nom, idDivinite, idAlignement, idClasse, niveau, idRace, genre, age, idCategorieTaille, taille, poids, Langues, yeux, cheveux, idJoueur)
{	
	// Permet de créer un personnage
	var db = JSON.parse(localStorage.getItem("DB"));
	
	var objetPerso = {
		Nom: nom,
		Divinite: idDivinite,
		Alignement: idAlignement,
		Classe: idClasse,
		Niveau: niveau,
		Race: idRace,
		Genre: genre,
		Age: age,
		CategorieTaille: idCategorieTaille,
		Taille: taille,
		Poids: poids,
		Langues: Langues,
		Yeux: yeux,
		Cheveux: cheveux,
		Joueur: idJoueur	
	};
	
	if(validerPerso(objetPerso)){
		db.tblPersonnage.push(objetPerso);
		localStorage.setItem("DB", JSON.stringify(db));
	}
}

this.modifierPerso = function(idPerso, nom, idDivinite, idAlignement, idClasse, niveau, idRace, genre, age, idCategorieTaille, taille, poids, Langues, yeux, cheveux, idJoueur)
{
	// Permet de modifier un personnage
	// On devrait plutôt dire "Remplacer un personnage", car on doit spécifier toute la structure
	// Voir le commentaire dans tblPersonnage pour la structure à respecter
	var db = JSON.parse(localStorage.getItem("DB"));
	
	if(!validId("tblPersonnage", idPerso)){
		console.log("L'identifiant n'existe pas")
	}
	
	var objetPerso = {
		Nom: nom,
		Divinite: idDivinite,
		Alignement: idAlignement,
		Classe: idClasse,
		Niveau: niveau,
		Race: idRace,
		Genre: genre,
		Age: age,
		CategorieTaille: idCategorieTaille,
		Taille: taille,
		Poids: poids,
		Langues: Langues,
		Yeux: yeux,
		Cheveux: cheveux,
		Joueur: idJoueur	
	};
	
	if(validerPerso(objetPerso)){
		db.tblPersonnage[id] = objetPerso;
		localStorage.setItem("DB", JSON.stringify(db));
	}
}

this.supprimerPerso = function(idPerso)
{
	// Supprime un personnage
	// Comme on se sert de l'index comme identifiant, on ne veut pas décaller les éléments
	// La solution la plus simple est de mettre la case à null
	// Dans une BD normale, on aurait probablement un champ "Actif", qu'on devrait vérifier avant de lister les personnages
	var db = JSON.parse(localStorage.getItem("DB"));
	
	if(db.tblPersonnage[idPerso] === null){
		console.log("Identifiant invalide");
		return;
	}
	db.tblPersonnage[idPerso] = null;
	// TODO: supprimer armes, armures et caractéristiques associées
	localStorage.setItem("DB", JSON.stringify(db));
}

this.listerArmuresPourTaille = function(categorieTaille)
{
	//Liste toutes les armures pour une catégorie de taille donnée
	var dataBase = JSON.parse(localStorage.getItem("DB"));
	var armures = dataBase.tblArmure;
	
	return armures.filter(function(element)
							{
								return element.Taille === categorieTaille;
							});
}

this.listerArmesPourTaille = function(categorieTaille)
{
	//Liste toutes les armes pour une catégorie de taille donnée
	var dataBase = JSON.parse(localStorage.getItem("DB"));
	var armes = dataBase.tblArme;
	
	return armes.filter(function(element)
							{
								return element.Taille === categorieTaille;
							});
}

this.listerDivinites = function()
{
	//Liste toutes les divinités
	var dataBase = JSON.parse(localStorage.getItem("DB"));
	
	return dataBase.tblDivinite;
}

this.listerRaces = function()
{
	//Liste toutes les races
	var dataBase = JSON.parse(localStorage.getItem("DB"));
	
	return dataBase.tblRace;
}

this.listerClasses = function()
{
	//Liste toutes les classes
	var dataBase = JSON.parse(localStorage.getItem("DB"));
	
	return dataBase.tblClasse;
}

this.debugBD = function(){
	console.log(JSON.parse(localStorage.getItem("DB")));
}

}(); //Fin du module