class ComputerPlayer{
    constructor(x,y,width,height){
         var options = {
             isStatic:false
         };
         

 this.body = bodies.rectangle(x,y,width,height,options);
 this.width = width;
 this.height = height;
 this.Image = loadImage("./assets/player.png");

 World.add(world.height,this.body);

 display() 

    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,width,height,);
 pop();

 }}