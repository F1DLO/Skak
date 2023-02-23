let WIDTH = 800;
let HEIGHT = 800;

let KvadratBredde = WIDTH / 8; // For at opdele firkanterne fordi der er 8 x 8 firkanter på en skakplade

let x;
let y;
let position;

function setup() {
  createCanvas(WIDTH+100, HEIGHT+100);
}

function draw() {
  background(220);

  let brætX = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; //Rækken
  let brætY = ['8', '7', '6', '5', '4', '3', '2', '1']; //Rækken
  textSize(32);
  

  for (let række = 0; række < 8; række++) { //Her tælles rækkerne op til den 8 firkant
    for (let kolonne = 0; kolonne < 8; kolonne++) { //Her tælles kollonerne ned af til den 8 firkant
      x = kolonne * KvadratBredde + (KvadratBredde / 2); //For 0 gælde "0 * 100 + (100 / 2) = 50"
      y = række * KvadratBredde + (KvadratBredde / 2); //For 0 gælde "0 * 100 + (100 / 2) = 50"
      position = række * 8 + kolonne; //Positionen af alle firkanterne som der er fra 0 til 64 fordi der er 64 firkanter på en skakplade

      //strokeWeight(kolonne+1); //Får pladen til at se sej ud
      rect(kolonne * KvadratBredde+100, række * KvadratBredde, KvadratBredde, KvadratBredde); //Her tegner man kvadraterne (Rektanglerne)
      
    }
    text(brætX[række], 100 * (række + 1) + 40, HEIGHT+50); // 100 på x-aksen * med række + 1 for at gå 1 kvadrat ud og til sidst + 40 for at komme ind i midten
    text(brætY[række], 50, 100 * (række + 1) - 40); //Det samme som over hvor begge bruger [række] som index som der tæller fra 0 til 7
  }
}



function mousePressed() {
  nummerX = floor(mouseX/100) //floor runder altid NED til det tætteste int(heltal)
  
  /*
  Floor runder altid NED til det tætteste int(heltal)

  Derudover ganger vi med -1 for at få det til minus og derefter +8 for at rotere tallenene til den rigtige række
  */
  nummerY = floor(mouseY/100)*-1+8

  let trans = createStringDict( // "Opslagstagle" for skakbrættets position
    {
      1: 'A',
      2: 'B',
      3: 'C',
      4: 'D',
      5: 'E',
      6: 'F',
      7: 'G',
      8: 'H',
    }
  )
  
  console.log(trans.get(nummerX), nummerY)
}