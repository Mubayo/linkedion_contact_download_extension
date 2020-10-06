var companyList=[];
function getCompanies() {
   var list = document.getElementsByClassName('search-results__result-list');
for(elt of list){
   var  person = elt.getElementsByClassName('result-lockup__position-company');
    for(el of person){
        var company = el.children[0].children[0].textContent;
        companyList.push(company);
    }
    console.log(companyList);
} 
}