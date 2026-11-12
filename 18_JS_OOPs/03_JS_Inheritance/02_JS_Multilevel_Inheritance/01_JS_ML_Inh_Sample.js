
// Grandparent class
class GrandFather {
    
    displayGrandFather(){
        console.log("Im a Grand Father");
    }

}

//Parent class
class Parent extends GrandFather{
displayParent(){
    super.displayGrandFather();
    console.log("Im a parent");
}
}


class Child extends Parent{
    displayChild() {
        super.displayParent();
        // super.displayGrandFather();
        console.log("Im a child");
        
    }
}

// let parentpro=new Parent();
// parentpro.displayParent();

let childPro=new Child();
childPro.displayChild();
