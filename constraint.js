class constraint {
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10,
        }
        this.stone=Constraint.create(options)
        this.pointB=pointB
        World.add(world,this.stone)
    }
    display(){
        if(this.stone.bodyA){
            var pointA=this.stone.bodyA.position
        var pointB=this.pointB
        push ()
        stroke ("green")
        strokeWeight(8)
        line (pointA.x,pointA.y,pointB.x,pointB.y)
        pop ()

        }
        
    }
    fly(){
        this.stone.bodyA=null
    }
}