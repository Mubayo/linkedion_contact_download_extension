function exportContact(node = document ){
    let buttonOnSite = node.getElementsByClassName("result-lockup__action-item");
    let buttonOnSite1 = document.getElementsByClassName("button-secondary-small result-lockup__action-button link-without-visited-and-hover-state ember-view");
    let buttonOnSite2 = document.getElementsByClassName("result-lockup__action-item m-type--tags");
let i;
    var modal = document.getElementById("myModal");
    var modal_content = document.getElementsByClassName("modal-content");
     var exportData='<div class="login-card" style=" padding: 40px;width: 300px;height:360px;background-color: #fff;margin: 1% auto 0;border-radius: 2px;box-shadow: #fff;overflow: hidden;border-radius: 15px;filter : drop-shadow(0px 1px 11.5px rgba(0,0,0,0.16));"><b>	<span class="cross" style="font-size:20px;">&#10005;</span></b><p  style="text-align: center;font-size: 22px;margin: 0;font-family: "Bahnschrift";color: #3b3b3b;font-family: "Segoe UI";display: inline-block;padding: 0 92px 0 0;ine-height: 18px;">Start Scan</p><br><form><input type="text" name="user" placeholder="Name this" style="border-radius: 10px;font-size:13px; border-color: transparent;height: 44px;font-size: 14px;width: 100%;margin-bottom: 10px;-webkit-appearance: none;background: #fff;border-radius: 7px !important;padding: 0 8px;box-sizing: border-box;-moz-box-sizing: border-box;-webkit-box-shadow: 2px 2px 61px -2px rgba(0,0,0,0.75);-moz-box-shadow: 2px 2px 59px -13px rgba(0,0,0,0.75);box-shadow: 2px -1px 11px -3px #c0bebe;color: #222222;font-family: "Bahnschrift";"><div class="button0" style="text-align: right;line-height: 5;"><p style="text-align: center;font-size: 22px;margin: 0;font-family: "Bahnschrift";color: #3b3b3b;font-family: "Segoe UI";display: inline-block;padding: 0 92px 0 0;ine-height: 18px;">How many contact<br/> to scrape ?</p><button class="button1" value="15" style="border: 0px solid #fafafa;background-color:#fafafa;color:#8c8c8c;width:50px;height: 27px;border-radius: 4px;font-weight: bold;font-family: "Segoe UI";margin: 0px -1px 0 0;display: inline-block;">15</button><button class="button2" value="All" style="border: 0px solid #fafafa;background-color: #ffffff;border-radius: 4px;color:#3b3b3b;width:46px;height: 30px;margin: -6px;height: 30px;filter: drop-shadow(0px 1px 3.5px rgba(0,0,0,0.16));display: inline-block;font-family: "Segoe UI";">All</button></div><input class="checkbox1"  type="checkbox" style=" border-radius: 10px;font-size:13px; border-color: transparent;-ms-transform: scale(1);-moz-transform: scale(1);-webkit-transform: scale(1);-o-transform: scale(1));" /><label class="label1" style="font-size: 13px;color: #3b3b3b;font-family: "Segoe UI";">  <span> Export Contacts Without Emails?500 Available</span></label></form><a id="start_scan"><input type="submit" name="Start Scan" class="login login-submit" value="Start Scan" style="border-radius: 10px;font-size:13px; border-color: transparent;width: 100%;display: block;margin-bottom: 20px;position: relative;background: rgb(77,110,255);background: linear-gradient(90deg, rgba(77,110,255,1) 0%, rgba(149,154,255,1) 80%);border: 0px;color: #fff;background-color: rgb(91, 118, 254);margin: 20px 2px 2px 2px;font-size: 15px;font-family: "Segoe UI";text-align: center;font-size: 14px;height: 66px;padding: 0 8px;"></a></div>';
 
    var exportDataPt1 = '<div class="login-card" style="padding: 10px;width: 300px;height:340px;background-color: #fff;margin: 1% auto 0;border-radius: 2px;box-shadow: #fff;border-radius: 15px;filter : drop-shadow(0px 1px 11.5px rgba(0,0,0,0.16));"><div class="main" style="margin-top:10px;"><b>	<span class="cross" style="font-size:20px;position:absolute;top:0;right:0;left:3;color:black;">&#10005;</span></b><p>Finished<br><span style="  color: #AAA7A6 ; font-size:18px; font-family: "Bahnschrift">List Name</span></p><div class="circle" style="width: 110px;height: 110px;border-radius: 100%;border: 23.299999237060547px solid #637cff;margin-left: 70px;margin-bottom: 20px;"><p class="circleText" style="padding-top: 5px;text-align: center;color:  #4a4a4a;font-size:25px;font-family: "Bahnschrift";">';
    var exportDataPt2 = ' <br> People<p></div><div class="DownText" style="line-height: 0%;padding-right: 200px;font-size: 18px;font-family: "Bahnschrift";"><p class="aa" style="padding-right: 40px;font-family: "Bahnschrift";font-size:22px;">Total :</p><p class="greyText"><b style="color:#454343; font-size:20px">';
    var exportDataPt3 = '</b> People</p></div><a id="download"><input type="submit" name="Sign in" class="login login-submit" value="Download" style="text-align: center;font-size: 14px;height: 36px;padding: 0 8px;margin-top: 10px;border-radius: 5px;border: 0px;color: #fff;background-color: rgb(91, 118, 254)"></a></div></div>';
    var ScanDataPt1 = '<div class="login-card" style="padding: 10px;width: 300px;height:340px;background-color: #fff;margin: 1% auto 0;border-radius: 2px;box-shadow: #fff;border-radius: 15px;filter : drop-shadow(0px 1px 11.5px rgba(0,0,0,0.16));"><div class="main" style="margin-top:10px;"><b>	<span class="cross" style="font-size:20px;position:absolute;top:0;right:0;left:3;color:black;">&#10005;</span></b><p>Scanning<br><span style="  color: #AAA7A6 ; font-size:18px; font-family: "Bahnschrift">List Name</span></p><div class="circle" style="width: 110px;height: 110px;border-radius: 100%;border: 23.299999237060547px solid #637cff;margin-left: 70px;margin-bottom: 20px;"><p id="myBar" class="circleText" style="padding-top: 5px;text-align: center;color:  #4a4a4a;font-size:25px;font-family: "Bahnschrift";">';
    var ScanDataPt2 = ' <br> People<p></div><div class="DownText" style="line-height: 0%;padding-right: 200px;font-size: 18px;font-family: "Bahnschrift";"><p class="aa" style="padding-right: 40px;font-family: "Bahnschrift";font-size:22px;">Total :</p><p class="greyText"><b style="color:#454343; font-size:20px">';
    var ScanDataPt3 = '</b> People</p></div></div>';
for(i=0; i< buttonOnSite.length; i++){
    parent = buttonOnSite[i].parentElement,
    next = buttonOnSite[i].nextSibling,
    button = document.createElement("div"),
     button.style['background']='linear-gradient(90deg, rgba(45,91,242,1) 0%, rgba(223,199,253,1) 100%)';
       button.style['border-radius']=' 5px';
        button.setAttribute("id",i);
        button.setAttribute("class","myButton");
       button.style['color']='#ffffff';
       button.style['padding']='0 16px';
       button.style['margin']='10px 0px';
       button.style['border']='none';
     button.style['text-decoration']='none';
     button.style['font-size']='1.4rem';
     button.style['font-weight']='600';
//       button.style['width']='20%';
        button.style['cursor']='pointer';
//button.appendChild(text);
//if (next) parent.insertBefore(button, next);
    if(parent.children.namedItem('.myButton')== true){
        
    }else{
        buttonOnSite[i].append(button);
    }
        

    let dtOnSite = buttonOnSite[i].parentElement.getElementsByTagName("a")[0];
//    let aOnSite = dtOnSite.getElementsByTagName("a")[0];
//    let url = aOnSite.getAttribute("href");
    console.log(dtOnSite);
 
     button.innerHTML = '<a style="color:white;"><div class="export" style="width:120px; height:24px;" ><img src="chrome-extension://anghnbahgkmnmdplkcmljiobgaikpcdg/export_logo.png" style="width:20px;height:20px;"> Export Contact</div></a>';
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
}
    var id;
var buttons = document.getElementsByClassName('myButton');
var ScantDataPt = ScanDataPt1 + "1" + ScanDataPt2 + "1" + ScanDataPt3;
var exportDataPt = exportDataPt1 + 1 + exportDataPt2 + 1 + exportDataPt3;
for(i=0; i<buttons.length;i++){
    id = buttons[i].getAttribute('id');
    buttons[i].onclick = function() {
    console.log(id);
  modal.style.display = "block";
    modal_content[0].innerHTML = ScantDataPt;
    i=0;
    move();
    getOneCompany(id);
    getMail('https://www.linkedin.com/sales');
    
}
    
 function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        modal_content[0].innerHTML = exportDataPt;
      } else {
        width++;
//        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
    
} 
// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
//  modal.style.display = "none";
//}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

//		chrome.runtime.sendMessage({type:'dump',}, function(response) {
//			console.log(['sent dump request',response]);
//		});
//		//chrome.storage.local.get(null, function(res) {
//			  //// Notify that we saved.
//			  //console.log('Data loaded',res);
//			//});
//  }
     
}

var targets = document.getElementsByClassName('flex full-width deferred-area ember-view');
var config = { childList: true};
var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
                                console.log("Item is mutating:" + mutation.target);
                      exportContact(mutation.target);
                                });
})
console.log("Items observed" + targets.length);
for(var idx=0; idx < targets.length; idx++){
    observer.observe(targets[idx],config);
    console.log("observing target" + targets[idx])
}
exportContact();