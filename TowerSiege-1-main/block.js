class block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution: 0.6,
          friction : 0.7,
          density : 0.2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visiblity = 255; 
    }
    display(){
      push();
      
      var pos =this.body.position;
      rectMode(CENTER);
      fill("cyan");
      rect(pos.x, pos.y, this.width, this.height);
     ;

      if(this.body.speed > 3)
      {
        this.Visiblity = this.Visiblity -5 ;
        tint(255,this.Visiblity);
      }
      pop();
    }
  }