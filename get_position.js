var positions=[];
function getPosition() {
  var list = document.getElementsByClassName('search-results__result-list');
for(elt of list){
   var  person = elt.getElementsByClassName('t-14 t-bold');
    for(el of person){
        var position = el.textContent;
        positions.push(position);
    }
    console.log(positions);
}  
}