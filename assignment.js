

// // Problem Number:::: 1

function kilometerToMeter(kilo) {
// kilo is used to indicate kilometer
var kilo = Math.abs(kilo)
// I used this part to convert negative number into positive number
var meter = kilo*1000 ;
return meter;
}

var kilme = kilometerToMeter(5.6);

console.log(kilme);




// Problem Number 2

function budgetCalculator(watch,phone, laptop)
{

   var watch1 = watch*50;
   var phone1 = phone*100;
   var laptop1 = laptop*500

  var totalprice = watch1 + phone1 + laptop1;

  return totalprice;
}

var price = budgetCalculator(1,2,3);
console.log(price);



// // Problem Number:::: 3

function hotelCost(stay){

   

    
    if(stay<=0){
        var totalprice = 'Please input a correct number'

    }

    else if(stay>= 1 && stay<= 10 ){
        var totalprice = stay*100;
    }
    else if(stay>= 11 && stay<= 20 ){
        
        var remaining = stay -10;

        var totalprice = (10*100) + remaining*80;
    }
    else{
        var remaining = stay-20;
        var totalprice=(10*100) + (10*80) + remaining*50;

    }
    
    return totalprice;
}

console.log(hotelCost(25));




// // Problem Number ::::4



function megaFriend(names){
    if(names.length == 0 )
        {return "There are no names!";}

    else{
        var biggerName = names[0];
        for(var i = 0; i < names.length ; i++){
            if(names[i].length <= biggerName.length){
                continue;
            }else{
                biggerName = names[i];
            }
        }

        return biggerName;
    }
}

var arrayOfNames =[ "rahim" ,"Redwansssasasasasasa", "karism", "jamalssss","LOl", "Ali reza noob"];

console.log(megaFriend(arrayOfNames));



