//var web = document.querySelector('a[class="pv-contact-info__contact-link t-14 t-black t-normal"]');
////var task = web.textContent;
function getMail(href){
//   fetch(href, {
//      method: 'GET',
//       headers: {
//    'Content-Type': 'application/json'
//  }
//      }).then(r => r.html()).then(result =>{
//    console.log(result);
//     // Result now contains the response text, do what you want...
//})
    var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", href);
//xhr.setRequestHeader("authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI0cVZCUzJhclRQRy1BTklHUGhaU01RIn0._ZPpEmSoHh7LLpFtToMB1oT2tXAy9l_yZ_97hQNlQdg");

xhr.send(data);
}
//getMail('https://linkedin.com/in/jaya')
   
//var Nightmare = require('nightmare')
//var nightmare = Nightmare({ show: true })

//nightmare
//  .goto('http://yahoo.com')
//  .type('form[action*="/search"] [name=p]', 'github nightmare')
//  .click('form[action*="/search"] [type=submit]')
//  .wait('#main')
//  .evaluate(function() {
//    return document.querySelector('#main .searchCenterMiddle li a').href
//  })
//  .end()
//  .then(function(result) {
//    console.log(result)
//  })
//  .catch(function(error) {
//    console.error('Search failed:', error)
//  })
