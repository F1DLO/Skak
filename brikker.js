class Bonde {
  constructor(x,y,farve) {
    this.x = x
    this.y = y
    this.farve = farve
    //console.log('MusX = ',this.x, 'MusY = ', this,y, 'temp[1] = ',this.farve)
  }

  frem(){
    if (this.farve === 's') {
      skakBræt[MusY][MusX] = ''
      skakBræt[MusY + 1][MusX] = temp      

    } else if (this.farve === 'h'){
      skakBræt[MusY][MusX] = ''
      skakBræt[MusY - 1][MusX] = temp      
    }
  }
}

class Tårn {
  constructor(x,y,farve) {
    this.x = x
    this.y = y
    this.farve = farve
    //console.log('MusX = ',this.x, 'MusY = ', this,y, 'temp[1] = ',this.farve)
  }

  frem(){
    if (this.farve === 's') {
      skakBræt[MusY][MusX] = ''
      skakBræt[MusY + 1][MusX] = temp      

    } else if (this.farve === 'h'){
      skakBræt[MusY][MusX] = ''
      skakBræt[MusY - 1][MusX] = temp      
    }
  }
}

class Løber {
  constructor(x,y,farve) {
    this.x = x
    this.y = y
    this.farve = farve
    //console.log('MusX = ',this.x, 'MusY = ', this,y, 'temp[1] = ',this.farve)
  }

  frem(){
    if (this.farve === 's') {
      skakBræt[MusY][MusX] = ''
      skakBræt[MusY + 1][MusX + 1] = temp      

    } else if (this.farve === 'h'){
      skakBræt[MusY][MusX] = ''
      skakBræt[MusY - 1][MusX - 1] = temp      
    }
  }
}

class Springer {
  constructor(x,y,farve) {
    this.x = x
    this.y = y
    this.farve = farve
    //console.log('MusX = ',this.x, 'MusY = ', this,y, 'temp[1] = ',this.farve)
  }

  frem(){
    if (this.farve === 's') {
      skakBræt[MusY][MusX] = ''
      skakBræt[MusY + 2][MusX + 1] = temp      

    } else if (this.farve === 'h'){
      skakBræt[MusY][MusX] = ''
      skakBræt[MusY - 2][MusX - 1] = temp      
    }
  }
}

class Dronning extends Tårn /*Løber*/ { // Dronning nedarver fra tårn og løber, men vi har ikke mulighed nuher for at kunne rykke andre steder hen
  constructor(x,y,farve) {
    super(x, y, farve)
  }

  frem(){
    super.frem()
  }
}

class Konge {
  constructor(x,y,farve) {
    this.x = x
    this.y = y
    this.farve = farve
    //console.log('MusX = ',this.x, 'MusY = ', this,y, 'temp[1] = ',this.farve)
  }

  frem(){
    if (this.farve === 's') {
      skakBræt[MusY][MusX] = ''
      skakBræt[MusY + 1][MusX] = temp      

    } else if (this.farve === 'h'){
      skakBræt[MusY][MusX] = ''
      skakBræt[MusY - 1][MusX] = temp      
    }
  }
}