var persons=[];
function getProfile() {
  var list = document.getElementsByClassName('search-results__result-list');
for(elt of list){
   var  person = elt.getElementsByClassName('result-lockup__name');
    for(el of person){
        var name = el.textContent;
        persons.push(name);
        
    }
    console.log(persons);
}  
}