class Roof {
    constructor(y){
    var c={isStatic:true}
this.a= Bodies.rectangle(350,y,350,30,c)
World.add(world,this.a)
    }
    display(){
        rectMode(CENTER)
        rect(350,this.a.position.y,350,30)
    }
}