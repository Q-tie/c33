class Snow {
constructor(x, y, r,){


 var options = {
    'restitution':0.4,
    IsStatic: false
}
this.body = Bodies.circle(x, y, r);
this.x = x;
this.y = y;
this.r = r;
this.image = loadImage("snow4.webp");
World.add(world, this.body);
}
display(){
var pos = this.body.position
var angle = this.body.angle;
push();
translate(pos.x, pos.y);
rotate(angle);
imageMode(CENTER);
image(this.image, 0, 0, 25, 25);
pop();
}
}
