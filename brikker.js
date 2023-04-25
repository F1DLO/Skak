class Bonde { // Definere klassen Bonde
  constructor(x,y,farve) { // Laver constructor med x, y og farven som brikken har
    this.x = x
    this.y = y
    this.farve = farve
    //console.log('MusX = ',this.x, 'MusY = ', this,y, 'temp[1] = ',this.farve)
  }

  frem(){ // en funktion som der bliver defineret til at kunne rykke vores brik frem
    if (this.farve === 's') { // hvis farven er 's' sort
      skakBræt[MusY][MusX] = '' // brikken som der bliver trykket på, bliver til en tom plads
      skakBræt[MusY + 1][MusX] = temp // pladsen + 1 af musen bliver lavet om til brikken som er defineret som variablen temp som der er en midlertidig brik

    } else if (this.farve === 'h'){ // ellers vis brikken i stedet er 'h' hvid
      skakBræt[MusY][MusX] = '' // brikken som der bliver trykket på, bliver til en tom plads
      skakBræt[MusY - 1][MusX] = temp  // pladsen - 1 af musen bliver lavet om til brikken som er defineret som variablen temp som der er en midlertidig brik
    }
  }
}

class Tårn { // Definere klassen Tårn
  constructor(x,y,farve) { // Laver constructor med x, y og farven som brikken har
    this.x = x
    this.y = y
    this.farve = farve
    //console.log('MusX = ',this.x, 'MusY = ', this,y, 'temp[1] = ',this.farve)
  }

  frem(){ // en funktion som der bliver defineret til at kunne rykke vores brik frem
    if (this.farve === 's') { // hvis farven er 's' sort
      skakBræt[MusY][MusX] = '' // brikken som der bliver trykket på, bliver til en tom plads
      skakBræt[MusY + 1][MusX] = temp // pladsen + 1 af musen bliver lavet om til brikken som er defineret som variablen temp som der er en midlertidig brik     

    } else if (this.farve === 'h'){ // ellers vis brikken i stedet er 'h' hvid
      skakBræt[MusY][MusX] = '' // brikken som der bliver trykket på, bliver til en tom plads
      skakBræt[MusY - 1][MusX] = temp // pladsen - 1 af musen bliver lavet om til brikken som er defineret som variablen temp som der er en midlertidig brik     
    }
  }
}

class Løber { // Definere klassen Løber
  constructor(x,y,farve) { // Laver constructor med x, y og farven som brikken har
    this.x = x
    this.y = y
    this.farve = farve
    //console.log('MusX = ',this.x, 'MusY = ', this,y, 'temp[1] = ',this.farve)
  }

  frem(){ // en funktion som der bliver defineret til at kunne rykke vores brik frem
    if (this.farve === 's') { // hvis farven er 's' sort
      skakBræt[MusY][MusX] = '' // brikken som der bliver trykket på, bliver til en tom plads
      skakBræt[MusY + 1][MusX + 1] = temp // pladsen + 1 af musen bliver lavet om til brikken som er defineret som variablen temp som der er en midlertidig brik     

    } else if (this.farve === 'h'){ // ellers vis brikken i stedet er 'h' hvid
      skakBræt[MusY][MusX] = '' // brikken som der bliver trykket på, bliver til en tom plads
      skakBræt[MusY - 1][MusX - 1] = temp // pladsen - 1 af musen bliver lavet om til brikken som er defineret som variablen temp som der er en midlertidig brik     
    }
  }
}

class Springer { // Definere klassen Springer
  constructor(x,y,farve) { // Laver constructor med x, y og farven som brikken har
    this.x = x
    this.y = y
    this.farve = farve
    //console.log('MusX = ',this.x, 'MusY = ', this,y, 'temp[1] = ',this.farve)
  }

  frem(){ // en funktion som der bliver defineret til at kunne rykke vores brik frem
    if (this.farve === 's') { // hvis farven er 's' sort
      skakBræt[MusY][MusX] = '' // brikken som der bliver trykket på, bliver til en tom plads
      skakBræt[MusY + 2][MusX + 1] = temp // pladsen + 1 af musen bliver lavet om til brikken som er defineret som variablen temp som der er en midlertidig brik     

    } else if (this.farve === 'h'){ // ellers vis brikken i stedet er 'h' hvid
      skakBræt[MusY][MusX] = '' // brikken som der bliver trykket på, bliver til en tom plads
      skakBræt[MusY - 2][MusX - 1] = temp // pladsen - 1 af musen bliver lavet om til brikken som er defineret som variablen temp som der er en midlertidig brik     
    }
  }
}

class Dronning extends Tårn /*Løber*/ { // Dronning nedarver fra tårn og løber, men vi har ikke mulighed nuher for at kunne rykke andre steder hen
  constructor(x,y,farve) { // Laver constructor med x, y og farven som brikken har
    super(x, y, farve) // Genbruger constructeren fra tidligere Tårn og også Løber hvis dronningen skulle have sine oprindelige egenskaber
  }

  frem(){ // en funktion som der bliver defineret til at kunne rykke vores brik frem
    super.frem() // super fra den tidligere klasse og genbruger den
  }
}

class Konge { // Definere klassen Konge
  constructor(x,y,farve) {
    this.x = x
    this.y = y
    this.farve = farve
    //console.log('MusX = ',this.x, 'MusY = ', this,y, 'temp[1] = ',this.farve)
  }

  frem(){ // en funktion som der bliver defineret til at kunne rykke vores brik frem
    if (this.farve === 's') { // hvis farven er 's' sort
      skakBræt[MusY][MusX] = '' // brikken som der bliver trykket på, bliver til en tom plads
      skakBræt[MusY + 1][MusX] = temp // pladsen + 1 af musen bliver lavet om til brikken som er defineret som variablen temp som der er en midlertidig brik     

    } else if (this.farve === 'h'){ // ellers vis brikken i stedet er 'h' hvid
      skakBræt[MusY][MusX] = '' // brikken som der bliver trykket på, bliver til en tom plads
      skakBræt[MusY - 1][MusX] = temp // pladsen - 1 af musen bliver lavet om til brikken som er defineret som variablen temp som der er en midlertidig brik     
    }
  }
}