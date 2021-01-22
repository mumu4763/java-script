//https://github.com/mumu4763/java-script

function kilometerToMeter(kilometer){
var meter = kilometer*1000;
return meter;
}
 var travel =[10,8]

  var amamrMeter = kilometerToMeter(10);
  var bandubirMeter = kilometerToMeter(8);

  
function megaFriend(friends){
    
   var maxName = friends[0];
    for(var i = 0; i < friends.length; i++){
    var element = friends[i];

if(element > maxName){
    maxName = element;


return element;}
}
function budgetCalculator(watchnum, mobilenum ,laptopnum){
    var watchPrice = 50 * watchnum ; 
    var mobilePrice = 100 * mobilenum;
    var laptopPrice = 500 * laptopnum;

        var result = watchPrice + mobilePrice + laptopPrice
    return result;

}
var totalPrice = budgetCalculator(4,3,2);

 
}
var result=megaFriend(["moni", "sadia", "mumu", "mili"]);
