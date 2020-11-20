# Diaz data videoioù

Last modification : Nov 18, 2020  
Published : Nov 18, 2020  
By : Nolwenn CHEVALIER (HTML, JS, CSS) and Liza JAKEZ-VARGAS (research)  

> __Penaos digeriñ ar fichennaoueg *DaLenn.md* evit ma vo aes da lenn ?__
> - war *GitHub* : diouzhtu war *GitHub* 
> - ma vez enrollet war un urzhiataer : 
>    - da skouer : Notepad++, Sublime Text, etc a lenn ar fichennaouegoù markdown digudenn 
>    - pe c'hoazh : Mozilla gant un astenn lenner markdown (GitLab Markdown Viewer, Markdown Viewer Webext, etc) 

## Kinnig ar raktres 

- **_DiazDataVideo.html_ :** diaz data videoioù e brezhoneg
- **_DDV.js_ :** fichennaoueg JavaScript liammet da *DiazDataVideo.html*, krouiñ a ra ar checkboxoù/boutonoù radio hag o mont-en-dro
- **_DDV.css_ :** fichennaoueg CSS liammet da *DiazDataVideo.html*

### Petra a vo kavet er fichennaoueg HTML ? 

- **Patrom  :**
```xml
<article>
    <h2>Titl</h2>
    <span class="editor">abadenn</span><br/>
    <span class="origin">orin</span> munudoù war an orin<br/>
    <span class="author">sevener·ez</span><br/>
    <span class="type">doare</span><br/>
    <span class="time">pad</span><br/>
    <span class="subtitle">istitloù</span><br/>
    <span class="topic">tagoù (anvioù boutin)</span>
    <span class="subject">tagoù (anvioù divoutin)</span><br/>
    <p>diveradenn</p><br/>
</article>
```

- Da skouer  : 
```xml
<article>
    <h2>Kontañ</h2>
    <span class="editor">Ar brezhoneg a gan</span><br/>
    <span class="origin">Brezhoweb</span> e Roazhon<br/>
    <span class="author">Dewi Siberil</span><br/>
    <span class="type">unangomz</span><br/>
    <span class="time">00:01:30</span><br/>
    <span class="subtitle">DO</span><br/>
    <span class="topic">lennegezh, glad</span>
    <span class="subject">Anatole ar Braz, Yann-Bêr Piriou</span><br/>
    <p>Penaos e vez kontet e brezhoneg ?</p><br/>
</article>
```

#### Penaos leuniañ anezhañ ?
- na leuniit nemet an titouroù a zo e diabazh ar `<span>` pe `<p>` 
- arabat touchañ an doareennoù na urzh ar balizennoù (difennet groñs eo è.é) !  
- **`<span>`** : 
    - un talvoud  : `<span>AAA</span>`
    - meur a dalvoud (dispartiet gant esaouenn+pik-skej+esaouenn)  : `<span>AAA ; BBB ; CCC</span>`
    - talvoud ebet : ` ` (`<span>` ebet)
- **`<br/>`** : an holl linennoù en un `<article>` a echu gant ur `<br/>` (estreget `<span class="topic">` ma vez heuliet gant `<span class="subject">`)
- a-raok leuniañ anv un abadenn, ur sevener·ez, etc, kit da welet e checkboxoù an HTML da welet hag-eñ e vez anezhañ dija ha penaos eo skrivet

| elfenn                    |  niver a dalvoudoù posupl   | doare               |
|---------------------------|-----------------------------|---------------------|
| `<h2>`                    | unan                        | ret                 |
| `<span class="editor">`   | unan pe +                   | diret           	|
| `<span class="origin">`   | unan                        | diret            	|
| `<span class="author">`   | unan pe +                   | ret                 |
| `<span class="type">`     | unan                        | ret                 |
| `<span class="time">`     | unan                        | ret                 |
| `<span class="subtitle">` | unan pe +                   | ret                 |
| `<span class="topic">`    | unan pe +                   | ret                 |
| `<span class="subject">`  | unan pe +                   | diret            	|
| `<p>`                     |                             | diret            	|

#### `<h2>Titl</h2>`
- titl ar video 
- kregiñ gant ur bennlizherenn 
```xml
<h2>Liammadurioù</h2>
<h2>Mont/Dont/Bezañ</h2>
<h2>Torkad, lennegezh Bro-Wened</h2>
```

#### `<span class="editor">abadenn</span>`
- titl·où an abadenn 
- er `<span>` : kregiñ gant ur bennlizherenn met pik ebet er fin 
- goude ar `<span>` (n'ez eus ket atav eus an titour-mañ) : munudoù war an abadenn (lec'h, deiziad, etc), na zisoñjit ket an esaouenn just goude ar `<span>` evit ma ne vo ket peget an titouroù 
```xml
<span class="editor">Ur sizhun, un istor</span><br/>
<span class="editor">Na petra ‘ta ; Louzaoueg Anna</span><br/>
<span class="editor">Taol Lagad</span> Here 2020<br/>
```

#### `<span class="origin">orin</span>`
- anv ar skigner pe an embanner
- kregiñ gant ur bennlizherenn
- degouezh ispisial : Youtube + anv ar chadenn (da lakaat etre krommelloù)
```xml
<span class="origin">Frañs 3 Breizh</span><br/>
<span class="origin">Brezhoweb</span><br/>
<span class="origin">Youtube</span> (endangered language alliance)<br/>
```

#### `<span class="author">sevener·ez</span><br/>`
- anv·ioù ar sevener·ezed 
- ma vez meur a re : dispartiañ anezho gant ur pik-skej+esaouenn 
- arabat echuiñ gant ur pik-skej pe un esaouenn ! 
```xml
<span class="author">Yann-Herle Gourves</span><br/>
<span class="author">Ronan Hirrien ; Dewi Siberil</span><br/>
```

#### `<span class="type">doare</span><br/>`
- doare ar video
- un talvoud posupl da zibab etre ar re-mañ  : diviz, film, teulfilm, keleier, unangomz, pennad-kaoz
- pennlizherenn ebet, eilit rik unan eus an talvoudoù kinniget 
```xml
<span class="type">keleier</span><br/>
<span class="type">unangomz</span><br/>
```

#### `<span class="time">pad</span><br/>`
- pad ar video
- 00:00:00 d.l.e eur:munut:eilenn
```xml
<span class="time">pad</span><br/>
```

#### `<span class="subtitle">istitloù</span><br/>`
- doare istitloù liammet ouzh ar video
- meur a dalvoud posupl da zibab etre ar re-mañ  : DO, DOIBZHG, DOIGALL, treuzskrivadenn
    - DO : istitloù ebet 
    - DOIBZHG : istitlet e brezhoneg 
    - DOIGALL : istitlet e galleg 
    - treuzskrivadenn : gant fichennaoueg an dreuzskrivadenn 
```xml
<span class="subtitle">DO</span><br/>
<span class="subtitle">DOIGALL ; treuzskrivadenn</span><br/>
```

#### `<span class="topic">tagoù</span>`
- tikedenn evit titouriñ an endalc'had : rummad·où pennañ ar video (anvioù boutin)
- meur a dalvoud posupl da zibab etre ar re-mañ : 
    - **A-F** : arme, boued, brezel, brezhoneg, bugale, buhez pemdez, douaroniezh, ekologiezh, ekonomiezh, endro, ereadurezh
    - **G-L** : glad, hengoun, istor, kelenn, kleweled, lennegezh, loened
    - **M-R** : micher, mojennoù, mor, natur, pennad-kaoz, plant, politikerezh, rekipe, relijion
    - **R-Z** : sevenadur, skiantoù, sokiologiezh, sonerezh, sport, stourm, teknologiezh, teknologiezhioù, yezhadur
- eilit rik an talvoudoù kinniget
```xml
<span class="topic">buhez pemdez ; politikerezh</span><br/>
<span class="topic">ekologiezh</span><br/>
<span class="topic">istor ; boued ; skiantoù</span><span class="subject">...</span><br/>
```

#### `<span class="subject">tagoù</span><br/>`
- tikedenn evit titourañ an endalc'had : sujed·où pennañ ar video (anvioù divoutin)
- meur a talvoud posupl da zibab etre ar re-mañ  : 
    - **A-F** : an Ardeven, Anatole ar Braz, Anjela Duval, ar Folgoad, Breizh, Brest, Daniel Doujet, Diwan, Douarnenez, Frañsez Kervella
    - **G-L** : Gireg Konan, Glenmor, Gwengamp, Gwenrann, Gwerledan, Gwiseni, Karnag, Landelo, Lannuon, Lokoal-Mendon, Lokorn, Lukian Kergoat
    - **M-Z** : Mari Kermarreg, Martial Ménard, Menez Are, Naoned
    - **R-Z** : Roazhon, Rostrenenn, Tronoan, Yann-Bêr Kalloc’h, Yann-Bêr Piriou, Youenn Gwernig
- eilit rik an talvoudoù kinniget
```xml
<span class="subject">Douarnenez</span><br/>
<span class="subject">Diwan ; Karnag</span><br/>
```

#### `<p>diweradenn</p><br/>`
- ur frazenn pe ziv evit kinnig ar video 
- penaos ober klochedigoù ?  « ABC » : `Alt+174 Alt+0160 ABC Alt+0160 Alt+175`
```xml
<p>Ur sizhun soubidigezh e brezhoneg gant staj KEAV e Kastellin. </p><br/>
<p>War roudoù ar c’hamp viking kozh. </p><br/>
```