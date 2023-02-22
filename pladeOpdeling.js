function LinjeOpdeling(){
    line((width / 8) * 1, 0,(width / 8) * 1, height);
    line((width / 8) * 2, 0,(width / 8) * 2, height);
    line((width / 8) * 3, 0,(width / 8) * 3, height);
    line((width / 8) * 4, 0,(width / 8) * 4, height);
    line((width / 8) * 5, 0,(width / 8) * 5, height);
    line((width / 8) * 6, 0,(width / 8) * 6, height);
    line((width / 8) * 7, 0,(width / 8) * 7, height);


    
    line(0, height / 8, width, height / 8);
    line(0,(height / 8) * 2, width, (height / 8) * 2);
    line(0,(height / 8) * 3, width, (height / 8) * 3);
    line(0,(height / 8) * 4, width, (height / 8) * 4);
    line(0,(height / 8) * 5, width, (height / 8) * 5);
    line(0,(height / 8) * 6, width, (height / 8) * 6);
    line(0,(height / 8) * 7, width, (height / 8) * 7);
 
  }
  
  
  function FeltOpdeling() {
    
    //felt 1
  if(mouseX > 0 && mouseX < width / 8 && mouseY > 0 && mouseY < height / 8) {
      print("felt 1");
    }
    
  //felt 2
  if(mouseX > width / 3 && mouseX < width / 3 * 2 && mouseY > 0 && mouseY < height / 3) {
     felt = 2;
     print(felt);
    }
    
  //felt 3
  if(mouseX > width / 3 * 2 && mouseX < width / 3 * 3 && mouseY > 0 && mouseY < height / 3) {
     felt = 3;
     print(felt);
    }
    
  //felt 4
  if(mouseX > 0 && mouseX < width / 3 && mouseY > height / 3 && mouseY < height / 3 * 2) {
    felt = 4;
    print(felt);
  }
    
    //felt 5
  if(mouseX > width / 3 && mouseX < width / 3 * 2 && mouseY > height / 3 && mouseY < height / 3 *   2) {
    felt = 5;
    print(felt);
    }
    
  //felt 6
  if(mouseX > width / 3 * 2 && mouseX < width / 3 * 3 && mouseY > height / 3 && mouseY < height /   3 * 2) {
    felt = 6;
    print(felt);
    }
    
  //felt 7
  if(mouseX > 0 && mouseX < width / 3 && mouseY > height / 3 * 2 && mouseY < height / 3 *   3) {
    felt = 7;
    print(felt);
    }
    
  //felt 8
  if(mouseX > width / 3 && mouseX < width / 3 * 2 && mouseY > height / 3 * 2 && mouseY < height /   3 *   3) {
    felt = 8;
    print(felt);
    }
    
  //felt 9
  if(mouseX > width / 3 * 2 && mouseX < width / 3 * 3 && mouseY > height / 3 * 2 && mouseY < height / 3 *   3) {
    felt = 9;
    print(felt);
    }
    
  }