class Drop{
    constructor(x,y) {
     var options = {
        isStatic: false,
        restitution: 0,
        friction: 0.1
      }

        this.body = Bodies.rectangle(x,y,10,10,options);
         this.width = 10;
         this.height = 10;

         World.add(world, this.body);
    }

    display() {
      var pos = this.body.position;
      fill("blue");
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
    }

    update() {
      if(this.body.position.y > 1000) {
        Matter.Body.setPosition(this.body,{x: random(0,displayWidth),y:-10
        });
      } 
 }
}