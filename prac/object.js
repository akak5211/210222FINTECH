var car1 ={
    name : "sonata",
    ph : "500ph",
    start : function(){
        console.log('엔진 시작');
    
    },
    stop : function(){
        console.log("엔진 종료")
    }
}
//car.start();

var car2 ={
    name : "bmw",
    ph : "700ph",
    start : function(){
        console.log('엔진 시작');
    
    },
    stop : function(){
        console.log("엔진 종료")
    }
}

var car3 ={
    name : "k7",
    ph : "1000ph",
    start : function(){
        console.log('엔진 시작');
    
    },
    stop : function(){
        console.log("엔진 종료")
    }
}

var cars = [car1, car2, car3];



for(var i =0; i<cars.length; i++){
    var car= cars[i];
    if(car.name === "bmw"){
        console.log("!");
    }
}