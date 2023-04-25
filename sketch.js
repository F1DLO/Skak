function preload() { //Her laver jeg først en preload og inde i den preload laver vi et objekt som holder på vores skakbrikkers billeder. Før havde vi en preload hvor billederne havde et navn og en matrix hvor de havde et andet navn hvilket var unødvendigt kode når det bare kan defineres som
  brikker = {
  'hb': loadImage('h_bonde.png'),
  'hd': loadImage('h_dronning.png'),
  'hk': loadImage('h_konge.png'),
  'hl': loadImage('h_løber.png'),
  'hs': loadImage('h_springer.png'),
  'ht': loadImage('h_tårn.png'),

  'sb': loadImage('s_bonde.png'),
  'sd': loadImage('s_dronning.png'),
  'sk': loadImage('s_konge.png'),
  'sl': loadImage('s_løber.png'),
  'ss': loadImage('s_springer.png'),
  'st': loadImage('s_tårn.png')
  }
}

let WIDTH = 800; //Bredde for spillebrættet (x-aksen)
let HEIGHT = 800; //Højde for spillebrættet (y-aksen)
let KvadratBredde = WIDTH / 8; //Bredden er hvert felt på brettet


let skakBræt = [ //Det som sker herunder er at vi lavet et 2-dimentionelt array. Hvad dette kan, er at opbevare data for os. I vores tilfælde om de skalbrukker som vi bruger. b = bonde, t = tårn, s = springer, l = løber, d = dronning og k = konge. Når der står enten s eller h foran betyder det at det er enten en hvid eller sort brik
  ['st','ss','sl','sd','sk','sl','ss','st'],
  ['sb','sb','sb','sb','sb','sb','sb','sb',],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['hb','hb','hb','hb','hb','hb','hb','hb'],
  ['ht','hs','hl','hd','hk','hl','hs','ht'],
]

//console.table(skakBræt)

function setup() {
  createCanvas(WIDTH + 100, HEIGHT + 100); // Her laves vores canvas og grunden til at vi her plusser 100 til x og y er for at der er plads til vores tal og bokstaber på hver side af brættet. Dette kunne vi have defineret i width og height, men ved ikka at gøre det skal der kaves mindre matematik senere i koden(at man ikke skal til a plusse eller minusse 100 fra hele tiden).
}


function draw() {
  background(200);


  //Før var dette opdelt i 2 forskellie let variabler, men dette fylder mindre og giver den samme funktionalite ved at oprette det i er 2-dimentionelt array.
  let [brætX, brætY] = [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],['8', '7', '6', '5', '4', '3', '2', '1']];
  textSize(32);
  

  //Her tegner vi felterne ind med rektangler
  for (let kolonne = 0; kolonne < 8; kolonne++) { //Denne står for at lave 8 rektangler på x aksen.
    for (let række = 0; række < 8; række++) { //Denne linje kode står for at lave 8 rektangler på y aksen
      if((række + kolonne) % 2 === 0) { //Her bruger vi modilus til at udregne om det er et lige eller ulige nummer. Hvis der er et lige nummer (0) så vil det være et hvidt felt, men hvis det er et ulige nummer som 1 eller 3 bliver det til en brunt felt (Det har INGEN betydning for spillet, får det bare til at ligne et normalt skakbræt)
        fill(255);
      } else {
        fill(210, 166, 121);
      }
      rect(kolonne * KvadratBredde+100, række * KvadratBredde, KvadratBredde, KvadratBredde); //Dimentionerne på en 
    }
  }

  //Her tegner vi så brikkerne ind på pladen
  for (let række = 0; række < 8; række++) { 
    for (let kolonne = 0; kolonne < 8; kolonne++) {
      x = kolonne * KvadratBredde + (KvadratBredde / 2);
      y = række * KvadratBredde + (KvadratBredde / 2);
      position = række * 8 + kolonne; // Positionen af alle firkanterne
    
        let briktype = skakBræt[række][kolonne]; //I denne linje kode definere vi typen af brik, ved at sige den skal være lig med meres variabel skakBræt's række og kolonne. Dermed vil den altså kunne blive til sb og hb når den kommer der til.
        if (briktype !== ''){ // Det vi gør her er at tjekke om hvorvidt feltet ikke er lig med ''. Dette gør vi da der ikke er nogle brikker til de fekter (så en form for errorhandeling til denne specifikke for løkke). Hvis fektet ikke er lig med '', så vil den korosponderende brik blive placeret
          let billede = brikker[briktype];
          image(billede, x + KvadratBredde/1.5, y-KvadratBredde/3, KvadratBredde/1.5, KvadratBredde/1.5)
      }
    }
  }

  //Denne forløkke bruger vi for at skrive teksten ind på hver side af brættet.
  for (let række = 0; række < 8; række++){ //Som vi efterhånden har gjort mange gange, så lave vi igen en forløkke som køre 8.
    text(brætX[række], 100 * (række + 1) + 40, HEIGHT+50); // 100 på x-aksen * med række + 1 for at gå 1 kvadrat ud og til sidst + 40 for at komme ind i midten
    text(brætY[række], 50, 100 * (række + 1) - 40); //Det samme som over hvor begge bruger [række] som index som der tæller fra 0 til 7
  }
}



function mousePressed() {
  console.log(floor(mouseX/100) - 1)
  console.log(floor(mouseY/100))

  MusX = floor(mouseX/100) - 1
  MusY = floor(mouseY/100)
  
  temp = skakBræt[MusY][MusX]

  if (skakBræt[MusY][MusX] != '') {
    skakBræt[MusY][MusX] = ''
    skakBræt[MusY + 1][MusX] = temp
  }
}