class Rope{
    constructor(b1,b2,pt){
        var f={
            bodyA:b1,bodyB:b2,length:200,stiffness:0.1
        }
        this.c=Matter.Constraint.create(f)
        World.add(world,this.c)
        this.pt=pt
    }
    display(){
        line(this.c.bodyA.position.x+this.pt,this.c.bodyA.position.y,this.c.bodyB.position.x,this.c.bodyB.position.y)
    }
}