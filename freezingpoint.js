function isfreezingpoint(temp){
   if(temp>=0){
    return "temperature is hot";
   }
   
   else{
    return "temperature is cool";
   }
}
console.log(isfreezingpoint(-40));