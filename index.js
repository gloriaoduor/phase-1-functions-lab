//Returns the number of blocks from Scuber's headquarters to the pickup location.

function distanceFromHqInBlocks(pickupLocation){
    if (pickupLocation > 42){
        return pickupLocation - 42;
    } else {
        return 42 - pickupLocation;
    }
}

// Returns the number of feet from Scuber's headquarters to the pickup location.
function distanceFromHqInFeet(pickuplocation){
    
    return distanceFromHqInBlocks(pickuplocation)*264;
}

//Calculates the number of feet a passenger travels given a starting block and an ending block
function distanceTravelledInFeet(start, destination){
    if (start < destination){
        return (destination - start)* 264; 
    } else 
        return (start - destination)*264;
}

//return the fare for the customer
function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination)<400){
        return 0;

    } else if ((distanceTravelledInFeet(start, destination)> 400) && (distanceTravelledInFeet(start, destination)<= 2000)){
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02;

    } else if (distanceTravelledInFeet(start, destination)> 2000 && distanceTravelledInFeet(start, destination) < 2500){
        return 25;

    } else {
        return "cannot travel that far";
    }

}

console.log(distanceFromHqInFeet(50))
console.log(distanceFromHqInBlocks(50))
console.log(distanceTravelledInFeet(50, 42))
console.log(calculatesFarePrice(44, 42))