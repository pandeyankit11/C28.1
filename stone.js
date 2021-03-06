class stone{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image =loadImage("stone.png");
        
        this.body =Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var posi =this.body.position;   
     
        push();
        translate(posi.x,posi.y);
        ellipse(0,0,this.r,this.r);
        imageMode(CENTER);
        image(this.image,0,0,70,70);
        pop();
     }
}