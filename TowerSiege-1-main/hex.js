class hex {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution : 0.3,
          friction: 0.5,
          density: 1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.img = loadImage("polygon.png");
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.img,pos.x, pos.y, this.width, this.height);
    }
  }