var companyList=[];
function getOneCompany(id) {
   var list = document.getElementsByClassName('search-results__result-list');
for(elt of list){
   var  person = elt.getElementsByClassName('result-lockup__position-company');
    for(el of person){
        var company = el.textContent;
        companyList.push(company);
    }
    console.log(companyList);
    console.log(person[id]);
}
}