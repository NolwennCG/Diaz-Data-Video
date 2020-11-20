# Base de données de vidéos en breton

Last modification : Nov 18, 2020  
Published : Nov 18, 2020  
By : Nolwenn CHEVALIER (HTML, JS, CSS) and Liza JAKEZ-VARGAS (research)  

> __Où ouvrir ce fichier ReadMe.md pour une lecture agréable ?__
> - sur GitHub : immédiatement sur GitHub
> - s'il est rensegistré sur un ordinateur :
>    - par exemple : NotEpad++, SubLime texT, etc lisent très bien les fichiers markdown
>    - ou encore : MozIlla avec une extension pour lire le markdown (gitLab marKdown vieWer, marKdown vieWer webExt, etc)

## Préparation du projet

1. La base de données a été préparée sur tableur puis exporté en XML
2. 

## Présentation du projet

- **_DiazDataVideo.html_ :** base de données de vidéo en breton
- **_DDV.js_ :** fichier JavaScript lié à *DiazDataVideo.html*, créé les checkboxes/bontons radio et assure leur fonctionnement
- **_DDV.css_ :** fichier CSS lié à *DiazDataVideo.html*

### Que trouve-t-on dans le fichier HTML ?

- **Modèle :**
```xml
<article>
    <h2>Titre</h2>
    <span class="editor">émission</span><br>
    <span class="origin">origine</span> détails sur l'origine<br>
    <span class="author">réalisateur·rices</span><br>
    <span class="type">type</span><br>
    <span class="time">durée</span><br>
    <span class="subtitle">sous-titrage</span><br>
    <span class="topic">tags (noms communs)</span>
    <span class="subject">tags (noms propres)</span><br>
    <p>résumé</p><br>
</article>
```

- Par exemple : 
```xml
<article>
    <h2>Kontañ</h2>
    <span class="editor">Ar brezhoneg a gan</span><br>
    <span class="origin">Brezhoweb</span> e Roazhon<br>
    <span class="author">Dewi Siberil</span><br>
    <span class="type">unangomz</span><br>
    <span class="time">00:01:30</span><br>
    <span class="subtitle">DO</span><br>
    <span class="topic">lennegezh, glad</span>
    <span class="subject">Anatole ar Braz, Yann-Bêr Piriou</span><br>
    <p>Penaos e vez kontet e brezhoneg ?</p><br>
</article>
```

#### *Comment le remplir ?*
- ne remplissez que le contenu des `<span>` ou `<p>`
- ne touchez ni les attributs ni l'ordre des balises (c'est défendu è.é) !
- **`<span>`** : 
    - une valeur : `<span>AAA</span>`
    - plusieurs valeurs (séparées par espace+point virgule+espace) : `<span>AAA ; BBB ; CCC</span>`
- **`<br>`** : toutes les lignes dans `<article>` finissent par un `<br>` (sauf `<span class="topic">` s'il est suivi de `<span class="subject">`)

| élément                   | nombre de valeurs possibles | caractère               |
|---------------------------|-----------------------------|-------------------------|
| `<h2>`                    | une                         | obligatoire             |
| `<span class="editor">`   | une  ou +                   | facultatif              |
| `<span class="origin">`   | une                         | facultatif              |
| `<span class="author">`   | une  ou +                   | obligatoire             |
| `<span class="type">`     | une                         | obligatoire             |
| `<span class="time">`     | une                         | obligatoire             |
| `<span class="subtitle">` | une  ou +                   | obligatoire             |
| `<span class="topic">`    | une  ou +                   | obligatoire             |
| `<span class="subject">`  | une  ou +                   | facultatif              |
| `<p>`                     |                             | facultatif              |

#### `<h2>Titre</h2>`
- titre de la vidéo
- commence par une majuscule
```xml
<h2>Liammadurioù</h2>
<h2>Mont/Dont/Bezañ</h2>
<h2>Torkad, lennegezh Bro-Wened</h2>
```

#### `<span class="editor">émission</span><br>`
- titre de l'émission
- dans le `<span>` : commence par une majuscule mais pas de point à la fin
- après le `<span>` (information n'existant pas toujours) : détails sur l'émission (lieu, date, etc), n'oubliez pas l'espace juste après le `<span>` pour que les informations ne soient pas collées
```xml
<span class="editor">Ur sizhun, un istor</span><br>
<span class="editor">Bali Breizh</span> e Douarnenez<br>
<span class="editor">Taol Lagad</span> Here 2020<br>
```

#### `<span class="origin">origine</span>`
- nom de l'éditeur ou diffuseur
- commence par une majuscule
- cas particulier : aucune nom d'émission + nom d'une chaîne Youtube (à placer entre parenthèses)
```xml
<span class="origin">Frañs 3 Breizh</span><br/>
<span class="origin">Brezhoweb</span><br/>
<span class="origin">Youtube</span> endangered language alliance<br/>
```

#### `<span class="author">réalisateur·rices</span><br>`
- nom·s des réalisateur·rices
- s'il y en a plusieurs : les séparer par un point virgule+espace
- ne pas terminer par un point virgule ou un espace !
```xml
<span class="author">Yann-Herle Gourves</span><br>
<span class="author">Ronan Hirrien ; Dewi Siberil</span><br>
```

#### `<span class="type">type</span><br>`
- une seule valeur possible à choisir entre celles-ci : diviz, film, teulfilm, keleier, unangomz, pennad-kaoz
- pas de majuscule, copier strictement une des valeurs proposées
```xml
<span class="type">keleier</span><br>
<span class="type">unangomz</span><br>
```

#### `<span class="time">durée</span><br>`
- durée de la vidéo
- 00:00:00 soit (heure:minute:seconde)
```xml
<span class="time">pad</span><br>
```

#### `<span class="subtitle">sous-titres</span><br>`
- sous-titres possibles attachés à la vidéo
- plusieurs valeurs possibles à choisir entre celles-ci : DO, DOIBZHG, DOIGALL, treuzskrivadenn
    - DO : sans sous-titres
    - DOIBZHG : sous-titré en breton
    - DOIGALL : sous-titré en français
    - treuzskrivadenn : avec un fichier de la retranscription
```xml
<span class="subtitle">DO</span><br/>
<span class="subtitle">DOIGALL ; treuzskrivadenn</span><br/>
```

#### `<span class="topic">tags</span>`
- étiquette·s pour décrire·nt le contenu : catégorie·s principal·aux de la vidéo (noms communs)
- plusieurs valeurs possibles à choisir entre celles-ci : 
    - **A-F** : arme, boued, brezel, brezhoneg, bugale, buhez pemdez, douaroniezh, ekologiezh, ekonomiezh, endro, ereadurezh
    - **G-L** : glad, hengoun, istor, kelenn, kleweled, lennegezh, loened
    - **M-R** : micher, mojennoù, mor, natur, pennad-kaoz, plant, politikerezh, rekipe, relijion
    - **R-Z** : sevenadur, skiantoù, sokiologiezh, sonerezh, sport, stourm, teknologiezh, teknologiezhioù, yezhadur
- copiez précisement les valeurs proposées
```xml
<span class="topic">buhez pemdez ; politikerezh</span><br>
<span class="topic">ekologiezh</span><br>
<span class="topic">istor ; boued ; skiantoù</span><span class="subject">...</span><br>
```

#### `<span class="subject">tags</span><br>`
- étiquette·s pour décrire·nt le contenu : sujet·s principal·aux de la vidéo (noms propres)
- plusieurs valeurs possibles à choisir entre celles-ci : 
    - **A-F** : an Ardeven, Anatole ar Braz, Anjela Duval, ar Folgoad, Breizh, Brest, Daniel Doujet, Diwan, Douarnenez, Frañsez Kervella
    - **G-L** : Gireg Konan, Glenmor, Gwengamp, Gwenrann, Gwerledan, Gwiseni, Karnag, Landelo, Lannuon, Lokoal-Mendon, Lokorn, Lukian Kergoat
    - **M-Z** : Mari Kermarreg, Martial Ménard, Menez Are, Naoned
    - **R-Z** : Roazhon, Rostrenenn, Tronoan, Yann-Bêr Kalloc’h, Yann-Bêr Piriou, Youenn Gwernig
- copiez précisement les valeurs proposées
```xml
<span class="subject">Douarnenez</span><br>
<span class="subject">Diwan ; Karnag</span><br>
```

#### `<p>résumé</p><br>`
- une phrase ou deux pour présenter la vidéo
- comment faire des guillemets ? « ABC » : `Alt+174 Alt+0160 ABC Alt+0160 Alt+175`
```xml
<p>Ur sizhun soubidigezh e brezhoneg gant staj KEAV e Kastellin. </p><br/>
<p>War roudoù ar c’hamp viking kozh. </p><br/>
```

### Que trouve-t-on dans le fichier JS ?

- création automatique de checkboxes et boutons radio et assure leur fonctionnement
- compte le nombre d'entrées
- mise à jour de la dernière date de mise à jour