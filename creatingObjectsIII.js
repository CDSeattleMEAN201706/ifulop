function VehicleConstructor(name, wheels, passengers, speed){
    var distance_travelled = 0;
    
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;
    
    var updateDistanceTravelled = function(){
        distance_travelled += speed;
    }
    this.checkMiles = function(){
        console.log(distance_travelled);
    }
    this.move = function(){
        updateDistanceTravelled();
        this.makeNoise();
    }
}

VehicleConstructor.prototype.makeNoise = function(){
    console.log("vroom vroom");
}

VehicleConstructor.prototype.generateVin = Math.floor((Math.random()*8999)+1000);

var bike = new VehicleConstructor("bike", 2, 0, 12);
bike.makeNoise = function(){
    console.log("ring ring");
}

var sedan = new VehicleConstructor("sedan", 4, 0, 45);
sedan.makeNoise = function(){
    console.log("honk honk");
}

var bus = new VehicleConstructor("bus", 4, 0, 35);
bus.pickUp = function(newPassengers){
    this.passengers += newPassengers;
}

bike.makeNoise();
sedan.makeNoise();
bus.makeNoise();
bus.move();
bus.checkMiles();
console.log(bus.generateVin);
