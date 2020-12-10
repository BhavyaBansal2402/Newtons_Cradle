class Rope {

    constructor(bodyA,bodyB,offsetX){

        this.offsetX = offsetX;
        
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : {x : this.offsetX,y : 0}
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x + this.offsetX,pointB.y);

    }

}