function LinjeOpdeling(){
  //Horisontale linjer fra side til side
    line((width / 8) * 1, 0,(width / 8) * 1, height);
    line((width / 8) * 2, 0,(width / 8) * 2, height);
    line((width / 8) * 3, 0,(width / 8) * 3, height);
    line((width / 8) * 4, 0,(width / 8) * 4, height);
    line((width / 8) * 5, 0,(width / 8) * 5, height);
    line((width / 8) * 6, 0,(width / 8) * 6, height);
    line((width / 8) * 7, 0,(width / 8) * 7, height);

  //Vertikale linjer fra top til bund
    line(0, height / 8, width, height / 8);
    line(0,(height / 8) * 2, width, (height / 8) * 2);
    line(0,(height / 8) * 3, width, (height / 8) * 3);
    line(0,(height / 8) * 4, width, (height / 8) * 4);
    line(0,(height / 8) * 5, width, (height / 8) * 5);
    line(0,(height / 8) * 6, width, (height / 8) * 6);
    line(0,(height / 8) * 7, width, (height / 8) * 7);
 
  }
  
  
  function FeltOpdeling() {
//Linje 8 -----------------------------------------------------------------------------------------------------
  //a8
  if(mouseX > 0 && mouseX < width / 8 && mouseY > 0 && mouseY < height / 8) {
      print("a8");
    }
  //b8
  if(mouseX > width / 8 && mouseX < (width / 8) * 2 && mouseY > 0 && mouseY < height / 8) {
     print("b8");
    }
  //c8
  if(mouseX > (width / 8) * 2 && mouseX < (width / 8) * 3 && mouseY > 0 && mouseY < height / 8) {
    print("c8");
   }
  //d8
  if(mouseX > (width / 8) * 3 && mouseX < (width / 8) * 4 && mouseY > 0 && mouseY < height / 8) {
    print("d8");
   }
   //e8
   if(mouseX > (width / 8) * 4 && mouseX < (width / 8) * 5 && mouseY > 0 && mouseY < height / 8) {
    print("e8");
   }
   //f8
   if(mouseX > (width / 8) * 5 && mouseX < (width / 8) * 6 && mouseY > 0 && mouseY < height / 8) {
    print("f8");
   }
   //g8
   if(mouseX > (width / 8) * 6 && mouseX < (width / 8) * 7 && mouseY > 0 && mouseY < height / 8) {
    print("g8");
   }
   //h8
   if(mouseX > (width / 8) * 7 && mouseX < (width / 8) * 8 && mouseY > 0 && mouseY < height / 8) {
    print("h8");
   }


//Linje 7 -----------------------------------------------------------------------------------------------------
  //a7
  if(mouseX > 0 && mouseX < width / 8 && mouseY > height / 8 && mouseY < (height / 8) * 2) {
    print("a7");
  }
  //b7
  if(mouseX > width / 8 && mouseX < (width / 8) * 2 && mouseY > height / 8 && mouseY < (height / 8) * 2) {
    print("b7");
    }
  //c7
  if(mouseX > (width / 8) * 2 && mouseX < (width / 8) * 3 && mouseY > height / 8 && mouseY < (height / 8) * 2) {
    print("c7");
  }
  //d7
  if(mouseX > (width / 8) * 3 && mouseX < (width / 8) * 4 && mouseY > height / 8 && mouseY < (height / 8) * 2) {
    print("d7");
  }
  //e7
  if(mouseX > (width / 8) * 4 && mouseX < (width / 8) * 5 && mouseY > height / 8 && mouseY < (height / 8) * 2) {
    print("e7");
  }
  //f7
  if(mouseX > (width / 8) * 5 && mouseX < (width / 8) * 6 && mouseY > height / 8 && mouseY < (height / 8) * 2) {
    print("f7");
  }
  //g7
  if(mouseX > (width / 8) * 6 && mouseX < (width / 8) * 7 && mouseY > height / 8 && mouseY < (height / 8) * 2) {
    print("g7");
  }
  //h7
  if(mouseX > (width / 8) * 7 && mouseX < (width / 8) * 8 && mouseY > height / 8 && mouseY < (height / 8) * 2) {
    print("h7");
  }


//Linje 6 -----------------------------------------------------------------------------------------------------
  //a6
  if(mouseX > 0 && mouseX < width / 8 && mouseY > (height / 8) * 2 && mouseY < (height / 8) * 3) {
    print("a6");
  }
  //b6
  if(mouseX > width / 8 && mouseX < (width / 8) * 2 && mouseY >  (height / 8) * 2 && mouseY < (height / 8) * 3) {
    print("b6");
    }
  //c6
  if(mouseX > (width / 8) * 2 && mouseX < (width / 8) * 3 && mouseY >  (height / 8) * 2 && mouseY < (height / 8) * 3) {
    print("c6");
  }
  //d6
  if(mouseX > (width / 8) * 3 && mouseX < (width / 8) * 4 && mouseY >  (height / 8) * 2 && mouseY < (height / 8) * 3) {
    print("d6");
  }
  //e6
  if(mouseX > (width / 8) * 4 && mouseX < (width / 8) * 5 && mouseY >  (height / 8) * 2 && mouseY < (height / 8) * 3) {
    print("e6");
  }
  //f6
  if(mouseX > (width / 8) * 5 && mouseX < (width / 8) * 6 && mouseY >  (height / 8) * 2 && mouseY < (height / 8) * 3) {
    print("f6");
  }
  //g6
  if(mouseX > (width / 8) * 6 && mouseX < (width / 8) * 7 && mouseY >  (height / 8) * 2 && mouseY < (height / 8) * 3) {
    print("g6");
  }
  //h6
  if(mouseX > (width / 8) * 7 && mouseX < (width / 8) * 8 && mouseY >  (height / 8) * 2 && mouseY < (height / 8) * 3) {
    print("h6");
  }

//Linje 5 -----------------------------------------------------------------------------------------------------
  //a5
  if(mouseX > 0 && mouseX < width / 8 && mouseY > (height / 8) * 3 && mouseY < (height / 8) * 4) {
    print("a5");
  }
  //b5
  if(mouseX > width / 8 && mouseX < (width / 8) * 2 && mouseY >  (height / 8) * 3 && mouseY < (height / 8) * 4) {
    print("b5");
    }
  //c5
  if(mouseX > (width / 8) * 2 && mouseX < (width / 8) * 3 && mouseY >  (height / 8) * 3 && mouseY < (height / 8) * 4) {
    print("c5");
  }
  //d5
  if(mouseX > (width / 8) * 3 && mouseX < (width / 8) * 4 && mouseY >  (height / 8) * 3 && mouseY < (height / 8) * 4) {
    print("d5");
  }
  //e5
  if(mouseX > (width / 8) * 4 && mouseX < (width / 8) * 5 && mouseY >  (height / 8) * 3 && mouseY < (height / 8) * 4) {
    print("e5");
  }
  //f5
  if(mouseX > (width / 8) * 5 && mouseX < (width / 8) * 6 && mouseY >  (height / 8) * 3 && mouseY < (height / 8) * 4) {
    print("f5");
  }
  //g5
  if(mouseX > (width / 8) * 6 && mouseX < (width / 8) * 7 && mouseY >  (height / 8) * 3 && mouseY < (height / 8) * 4) {
    print("g5");
  }
  //h5
  if(mouseX > (width / 8) * 7 && mouseX < (width / 8) * 8 && mouseY >  (height / 8) * 3 && mouseY < (height / 8) * 4) {
    print("h5");
  }

  //Linje 4 -----------------------------------------------------------------------------------------------------
  //a4
  if(mouseX > 0 && mouseX < width / 8 && mouseY > (height / 8) * 4 && mouseY < (height / 8) * 5) {
    print("a4");
  }
  //b4
  if(mouseX > width / 8 && mouseX < (width / 8) * 2 && mouseY >  (height / 8) * 4 && mouseY < (height / 8) * 5) {
    print("b4");
    }
  //c4
  if(mouseX > (width / 8) * 2 && mouseX < (width / 8) * 3 && mouseY >  (height / 8) * 4 && mouseY < (height / 8) * 5) {
    print("c4");
  }
  //d4
  if(mouseX > (width / 8) * 3 && mouseX < (width / 8) * 4 && mouseY >  (height / 8) * 4 && mouseY < (height / 8) * 5) {
    print("d4");
  }
  //e4
  if(mouseX > (width / 8) * 4 && mouseX < (width / 8) * 5 && mouseY >  (height / 8) * 4 && mouseY < (height / 8) * 5) {
    print("e4");
  }
  //f4
  if(mouseX > (width / 8) * 5 && mouseX < (width / 8) * 6 && mouseY >  (height / 8) * 4 && mouseY < (height / 8) * 5) {
    print("f4");
  }
  //g4
  if(mouseX > (width / 8) * 6 && mouseX < (width / 8) * 7 && mouseY >  (height / 8) * 4 && mouseY < (height / 8) * 5) {
    print("g4");
  }
  //h4
  if(mouseX > (width / 8) * 7 && mouseX < (width / 8) * 8 && mouseY >  (height / 8) * 4 && mouseY < (height / 8) * 5) {
    print("h5");
  }


//Linje 3 -----------------------------------------------------------------------------------------------------
  //a3
  if(mouseX > 0 && mouseX < width / 8 && mouseY > (height / 8) * 5 && mouseY < (height / 8) * 6) {
    print("a3");
  }
  //b3
  if(mouseX > width / 8 && mouseX < (width / 8) * 2 && mouseY >  (height / 8) * 5 && mouseY < (height / 8) * 6) {
    print("b3");
    }
  //c3
  if(mouseX > (width / 8) * 2 && mouseX < (width / 8) * 3 && mouseY >  (height / 8) * 5 && mouseY < (height / 8) * 6) {
    print("c3");
  }
  //d3
  if(mouseX > (width / 8) * 3 && mouseX < (width / 8) * 4 && mouseY >  (height / 8) * 5 && mouseY < (height / 8) * 6) {
    print("d3");
  }
  //e3
  if(mouseX > (width / 8) * 4 && mouseX < (width / 8) * 5 && mouseY >  (height / 8) * 5 && mouseY < (height / 8) * 6) {
    print("e3");
  }
  //f3
  if(mouseX > (width / 8) * 5 && mouseX < (width / 8) * 6 && mouseY >  (height / 8) * 5 && mouseY < (height / 8) * 6) {
    print("f3");
  }
  //g3
  if(mouseX > (width / 8) * 6 && mouseX < (width / 8) * 7 && mouseY >  (height / 8) * 5 && mouseY < (height / 8) * 6) {
    print("g3");
  }
  //h3
  if(mouseX > (width / 8) * 7 && mouseX < (width / 8) * 8 && mouseY >  (height / 8) * 5 && mouseY < (height / 8) * 6) {
    print("h3");
  }


//Linje 2 -----------------------------------------------------------------------------------------------------
  //a2
  if(mouseX > 0 && mouseX < width / 8 && mouseY > (height / 8) * 6 && mouseY < (height / 8) * 7) {
    print("a2");
  }
  //b2
  if(mouseX > width / 8 && mouseX < (width / 8) * 2 && mouseY >  (height / 8) * 6 && mouseY < (height / 8) * 7) {
    print("b2");
    }
  //c2
  if(mouseX > (width / 8) * 2 && mouseX < (width / 8) * 3 && mouseY >  (height / 8) * 6 && mouseY < (height / 8) * 7) {
    print("c2");
  }
  //d2
  if(mouseX > (width / 8) * 3 && mouseX < (width / 8) * 4 && mouseY >  (height / 8) * 6 && mouseY < (height / 8) * 7) {
    print("d2");
  }
  //e2
  if(mouseX > (width / 8) * 4 && mouseX < (width / 8) * 5 && mouseY >  (height / 8) * 6 && mouseY < (height / 8) * 7) {
    print("e2");
  }
  //f2
  if(mouseX > (width / 8) * 5 && mouseX < (width / 8) * 6 && mouseY >  (height / 8) * 6 && mouseY < (height / 8) * 7) {
    print("f2");
  }
  //g2
  if(mouseX > (width / 8) * 6 && mouseX < (width / 8) * 7 && mouseY >  (height / 8) * 6 && mouseY < (height / 8) * 7) {
    print("g2");
  }
  //h2
  if(mouseX > (width / 8) * 7 && mouseX < (width / 8) * 8 && mouseY >  (height / 8) * 6 && mouseY < (height / 8) * 7) {
    print("h2");
  }

  //Linje 1 -----------------------------------------------------------------------------------------------------
  //a1
  if(mouseX > 0 && mouseX < width / 8 && mouseY > (height / 8) * 7 && mouseY < (height / 8) * 8) {
    print("a1");
  }
  //b1
  if(mouseX > width / 8 && mouseX < (width / 8) * 2 && mouseY >  (height / 8) * 7 && mouseY < (height / 8) * 8) {
    print("b1");
    }
  //c1
  if(mouseX > (width / 8) * 2 && mouseX < (width / 8) * 3 && mouseY >  (height / 8) * 7 && mouseY < (height / 8) * 8) {
    print("c1");
  }
  //d1
  if(mouseX > (width / 8) * 3 && mouseX < (width / 8) * 4 && mouseY >  (height / 8) * 7 && mouseY < (height / 8) * 8) {
    print("d1");
  }
  //e1
  if(mouseX > (width / 8) * 4 && mouseX < (width / 8) * 5 && mouseY >  (height / 8) * 7 && mouseY < (height / 8) * 8) {
    print("e1");
  }
  //f1
  if(mouseX > (width / 8) * 5 && mouseX < (width / 8) * 6 && mouseY >  (height / 8) * 7 && mouseY < (height / 8) * 8) {
    print("f1");
  }
  //g1
  if(mouseX > (width / 8) * 6 && mouseX < (width / 8) * 7 && mouseY >  (height / 8) * 7 && mouseY < (height / 8) * 8) {
    print("g1");
  }
  //h1
  if(mouseX > (width / 8) * 7 && mouseX < (width / 8) * 8 && mouseY >  (height / 8) * 7 && mouseY < (height / 8) * 8) {
    print("h1");
  }
}