class Paper {
    constructor(x, y, width, height) {
        var options = {
 'isStatic':false,
 'friction': 1.0,
 'restitution':0.3,
 'density':1.5,
 };
                 
 this.x=x
 this.y=y
 this.r=this.r
 this.body = Matter.Bodies.circle(this.x, this.y, this.r/2, options);
 World.add(world, this.body);
};
 display(){
 var pos = this.body.position;
                 
 //var angle = this.body.angle;
            
 push();
 translate(pos.x, pos.y);
 //rotate(angle);
 rectMode(CENTER)  
 fill("white");
 ellipse(0,0,this.r,this.r) 
 pop();
    }
  };
  