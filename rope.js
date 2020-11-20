class Rope{
    constructor(bodyA,bodyB,offsetX){
        this.offsetX=offsetX;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:0}
        }
       
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    
    display(){
       
            var posA = this.rope.bodyA.position;
            var posB = this.rope.bodyB.position;
            strokeWeight(4);
            stroke(255);
            line(posA.x, posA.y, posB.x+this.offsetX, posB.y);
        
    }
    
}