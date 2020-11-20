	/* 
	========================================
			Prépraration des tableaux		
	========================================
	*/

function prepare_tableau () {

	// Compter le nombre d'entrées
	var affiches = document.getElementsByTagName("article");
    var spanNumber = document.getElementById("videoNumber");
    spanNumber.textContent = affiches.length;

    // Mise à jour de la date de mise à jour
    var spanMAJ = document.getElementById("videoMAJ");
    spanMAJ.textContent = document.lastModified;

    // Cacher les articles
	articles = document.getElementsByTagName('article');
	for (article of articles) {
		article.style.fontSize = '0%';
    }
	
	indifferents = document.getElementsByClassName('indifferent');
	for (indifferent of indifferents) {
		indifferent.checked = true;
    }

	/* Création des différents tableaux qui serviront our les filtres : 
	1. valeur 1 to radio : type
	2. valeurs + to radio : origin, editor, author, subtitle
	3. valeur 1 to radio - tratiement spécial temps : time
	4. valeurs + to checkboxes : tags
	*/
	
	// 1. valeur 1 to radio : type

	var cibles = ['type'];
	cibles.forEach(function(cible) {

		// recherche des valeurs visées
		var tablCible = [];
		var spans = document.getElementsByClassName(cible);
	    for (span of spans) {
			tablCible.push(span.textContent);
	    }

		// tri les valeurs
		var tablCible = cleanArray(tablCible);
		tablCible = tablCible.sort();
		
		// mise en place de l'espace qui va acceuillir les valeurs
		var div = document.getElementById(cible);
		var ul = document.createElement('ul');
		div.appendChild(ul);
		var li = document.createElement('li');
		var input = document.createElement('input');
		input.type = "radio";
		input.class = "indifferent";
		input.name = cible ;
		input.value = "indifferent" ;
		input.setAttribute('onclick','affiche_transformation();'); 
		li.appendChild(input);
		var label = document.createElement('label');
		label.style = "font-weight: bolder";
		var text = document.createTextNode("diforzh");
		label.appendChild(text);
		li.appendChild(label);
		ul.appendChild(li);

		// création des boutons radio
		tablCible.forEach(function(norm) {
			var input = document.createElement('input');
			input.type = "radio";
			input.id = norm ;
			input.name = cible ;
			input.value = norm ;
			input.setAttribute('onclick','affiche_transformation();'); 
			var label = document.createElement('label');
			label.for = norm ;
			var text = document.createTextNode(norm);
			label.appendChild(text);
			var li = document.createElement('li');
			li.appendChild(input);
			li.appendChild(label);
			ul.insertBefore(li,ul.lastChild);
		});

	});

	// 2. valeurs + to radio : origin, editor, author, subtitle

	var cibles = ['origin', 'editor', 'author', 'subtitle'];
	cibles.forEach(function(cible) {

		// recherche des valeurs visées
		var tablCible = [];
		var spans = document.getElementsByClassName(cible);
	    for (span of spans) {
			// separe les tags
			var temps = span.textContent.split(" ; ");
			for (temp of temps) {
				// enleve les espaces en debut de données
				temp = temp.replace(/^[\s]/, "");
				// verifie si tag existe dejà
				if(tablCible.indexOf(temp) === -1) tablCible.push(temp); 
			}			
		}

		// tri les valeurs
		var tablCible = cleanArray(tablCible);
		tablCible = tablCible.sort();

		// mise en place de l'espace qui va acceuillir les valeurs
		var div = document.getElementById(cible);
		var ul = document.createElement('ul');
		div.appendChild(ul);
			var li = document.createElement('li');
			var input = document.createElement('input');
			input.type = "radio";
			input.class = "indifferent";
			input.name = cible ;
			input.value = "indifferent" ;
			input.setAttribute('onclick','affiche_transformation();'); 
			li.appendChild(input);
			var label = document.createElement('label');
			label.style = "font-weight: bolder";
			var text = document.createTextNode("diforzh");
			label.appendChild(text);
			li.appendChild(label);
			ul.appendChild(li);

		// création des boutons radio
		tablCible.forEach(function(norm) {
			var input = document.createElement('input');
			input.type = "radio";
			input.id = norm ;
			input.name = cible ;
			input.value = norm ;
			input.setAttribute('onclick','affiche_transformation();'); 
			var label = document.createElement('label');
			label.for = norm ;
			var text = document.createTextNode(norm);
			label.appendChild(text);
			var li = document.createElement('li');
			li.appendChild(input);
			li.appendChild(label);
			ul.insertBefore(li,ul.lastChild);
		})

	});

	// 3. valeur 1 to radio - tratiement spécial temps : time

	var tablDuree = ["short", "medium", "long", "verylong"];
	
	// recherche des valeurs visées
	var spans = document.getElementsByClassName('time');
    
    // ajouter des attributs
    for (span of spans) {
    	var TimeValue = span.textContent.substring(3,5);
    	if (TimeValue <= 05) {
    		span.setAttribute("value", "short");
  		}
  		if (TimeValue >= 06 && TimeValue <= 10) {
    		span.setAttribute("value", "medium");
  		}
  		if (TimeValue >= 11 && TimeValue <= 30) {
    		span.setAttribute("value", "long");
  		}
  		if (TimeValue >= 31) {
    		span.setAttribute("value", "verylong");
  		}
    }

    // tri les valeurs
	var tablDuree = cleanArray(tablDuree);
	
	// mise en place de l'espace qui va acceuillir les valeurs
	var div = document.getElementById('time');
		var ul = document.createElement('ul');
		div.appendChild(ul);
			var li = document.createElement('li');
			var input = document.createElement('input');
			input.type = "radio";
			input.class = "indifferent";
			input.name = "time" ;
			input.value = "indifferent" ;
			input.setAttribute('onclick','affiche_transformation();'); 
			li.appendChild(input);
			var label = document.createElement('label');
			label.style = "font-weight: bolder";
			var text = document.createTextNode("diforzh");
			label.appendChild(text);
			li.appendChild(label);
			ul.appendChild(li);
	
	// création des boutons radio
	tablDuree.forEach(function(time) {
		var input = document.createElement('input');
		input.type = "radio";
		input.id = time ;
		input.name = "time" ;
		input.value = time ;
		input.setAttribute('onclick','affiche_transformation();'); 
		var label = document.createElement('label');
		label.for = time ;
		if (time == "short") {
    		var text = document.createTextNode("< 5mn");
  		}
  		if (time == "medium") {
    		var text = document.createTextNode("6 - 10mn");
  		}
  		if (time == "long") {
    		var text = document.createTextNode("10 - 30mn");
  		}
  		if (time == "verylong") {
    		var text = document.createTextNode("< 31mn");
  		}
		label.appendChild(text);
		var li = document.createElement('li');
			li.appendChild(input);
			li.appendChild(label);
			ul.insertBefore(li,ul.lastChild);
	});

	// 4. valeurs + to checkboxes : tags

	var cibles = ['subject', 'topic'];
	cibles.forEach(function(cible) {

		var tablTags = [];
		var spans = document.getElementsByClassName(cible);

		// recherche des valeurs visées
	    for (span of spans) {
			// separe les tags
			var temps = span.textContent.split(" ; ");
			for (temp of temps) {
				// enleve les espaces en debut de données
				temp = temp.replace(/^[\s]/, "");
				// verifie si tag existe dejà
				if(tablTags.indexOf(temp) === -1) tablTags.push(temp); 
			}			
		}

		// tri les valeurs
		tablTags = tablTags.sort();
		var tablTags = cleanArray(tablTags);

		// mise en place de l'espace qui va acceuillir les valeurs
		var div = document.getElementById(cible);
		var ul = document.createElement('ul');
		div.appendChild(ul);
		

		// création des checkboxes
		tablTags.forEach(function(norm) {
			var input = document.createElement('input');
			input.type = "checkbox";
			input.id = norm ;
			input.name = cible ;
			input.value = norm ;
			input.setAttribute('onclick','affiche_transformation();'); 
			var label = document.createElement('label');
			label.for = norm ;
			var text = document.createTextNode(norm);
			label.appendChild(text);
			var li = document.createElement('li');
			li.appendChild(input);
			li.appendChild(label);
			ul.insertBefore(li,ul.lastChild);
		})
	});

}

function cleanArray(array) {
	
	// Création des tableaux : cleanArray supprime les éléments en double dans un tableau

  var i, j, len = array.length, out = [], obj = {};
  for (i = 0; i < len; i++) {
    obj[array[i]] = 0;
  }
  for (j in obj) {
    out.push(j);
  }
  return out;
}

	/* 
	========================
			Affichage		
	========================
	*/
	
function affiche_transformation() {
	
	var tabFiltre = [];

	var checkboxes = document.querySelectorAll('input[type=radio]:checked') ; 
	for (var i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].value  != 'indifferent') {
			var nouveau = {};
			nouveau['categorie'] = checkboxes[i].name ; 
			nouveau['contenu'] = checkboxes[i].value ; 
			tabFiltre.push(nouveau);
		}
	}
	
	var checkboxes = document.querySelectorAll('input[type=checkbox]:checked') ; 
	for (var i = 0; i < checkboxes.length; i++) {
		var nouveau = {};
		nouveau['categorie'] = checkboxes[i].name ; 
		nouveau['contenu'] = checkboxes[i].value ; 
		tabFiltre.push(nouveau);
	}
	
	for (article of articles) {
		article.style.fontSize = '0%';
		var test = {};
		for (filtre of tabFiltre) {
			test[filtre.categorie]= false ;
		}	
		for (filtre of tabFiltre) {
			var spans = article.getElementsByTagName('span');
			for (span of spans) {
				if (span.getAttribute('class') == filtre.categorie) {
					if (filtre.categorie == 'time') {
						str = span.getAttribute("value");
						if (str == filtre.contenu) test[filtre.categorie] = true ;
						console.info(str+' '+filtre.contenu);
  					}else{
						str = span.textContent ;
						if ( str.includes(filtre.contenu)) test[filtre.categorie] = true ;
					}	
				}
			}
		}
		yes = true ;
		for (filtre of tabFiltre) {
			if (!test[filtre.categorie]) yes = false ;
		}
		if (yes) article.style.fontSize = '100%';
	}

	// Compte les entrées selectionnées
	var compte = [];
	coches = document.getElementsByTagName('article');
	for (coche of coches) {
		const align = coche.getAttribute("style");
		if (align == "font-size: 100%;") {
			compte.push(align);
		}
	}
	var spanNumber = document.getElementById("videoCompteur");
    spanNumber.textContent = compte.length;
	
}