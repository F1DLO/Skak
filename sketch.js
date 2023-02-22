let WIDTH = 800;
let HEIGHT = 800;

let KvadratBredde = WIDTH / 8; // For at opdele firkanterne fordi der er 8 x 8 firkanter på en skakplade

let x;
let y;
let position;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  
}

function draw() {
  background(220);
  for (let række = 0; række < 8; række++) { //Her tælles rækkerne op til den 8 firkant
    for (let kolonne = 0; kolonne < 8; kolonne++) { //Her tælles kollonerne ned af til den 8 firkant
      x = kolonne * KvadratBredde + (KvadratBredde / 2); //For 0 gælde "0 * 100 + (100 / 2) = 50"
      y = række * KvadratBredde + (KvadratBredde / 2); //For 0 gælde "0 * 100 + (100 / 2) = 50"
      position = række * 8 + kolonne; //Positionen af alle firkanterne som der er fra 0 til 64 fordi der er 64 firkanter på en skakplade

      
      //strokeWeight(kolonne+1); //Får pladen til at se sej ud
      rect(kolonne * KvadratBredde, række * KvadratBredde, KvadratBredde, KvadratBredde); //Her tegner man kvadraterne (Rektanglerne)
      
    }
  }
}

function mousePressed() {
  console.log(position);
}