class Roof {

    constructor(x,y,width,height){

        var options = {
            isStatic: true
        }

        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

    }

     display(){

        var pos = this.body.position;

        fill(211,84,0);
        strokeWeight(5);
        
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);

    }

}