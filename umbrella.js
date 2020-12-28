class Umbrella {
    constructor(x,y,width,height) {
        var options = {
            isStatic:true,
            restitution:0.5
        }
     this.image = loadImage('images/Walking Frame/walking_1.png','images/Walking Frame/walking_2.png','images/Walking Frame/walking_3.png','images/Walking Frame/walking_4.png','images/Walking Frame/walking_5.png','images/Walking Frame/walking_6.png','images/Walking Frame/walking_7.png','images/Walking Frame/walking_8.png');

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.height = height;
      this.width = width;
      World.add(world,this.body)
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
     image(this.image,0,0,this.width,this.height)
       pop();
    }
    }
 