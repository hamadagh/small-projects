function random (items){
   let item = items[Math.floor(Math.random()*items.length)];
    document.getElementById('quotes').innerHTML = item;

}
export {random};