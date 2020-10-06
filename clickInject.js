
var total = document.getElementById("search-spotlight-tab-ALL");
var change = document.getElementById("search-spotlight-tab-RECENT_POSITION_CHANGE");
var post = document.getElementById("search-spotlight-tab-RECENTLY_POSTED_ON_LINKEDIN");

total.addEventListener("click",function(){
    var i = 0;
		var x = setInterval(function(){
			window.scrollTo(0, i * 100);
			i++;
			if(i * 100 >= document.body.scrollHeight){
				clearInterval(x);
				chrome.runtime.sendMessage({antilazyloading: true});
			}
		}, 100);
    exportContact();
},false);
change.addEventListener("click",function(){
    var i = 0;
		var x = setInterval(function(){
			window.scrollTo(0, i * 100);
			i++;
			if(i * 100 >= document.body.scrollHeight){
				clearInterval(x);
				chrome.runtime.sendMessage({antilazyloading: true});
			}
		}, 100);
    exportContact();
},false);
post.addEventListener("click",function(){
    var i = 0;
		var x = setInterval(function(){
			window.scrollTo(0, i * 100);
			i++;
			if(i * 100 >= document.body.scrollHeight){
				clearInterval(x);
				chrome.runtime.sendMessage({antilazyloading: true});
			}
		}, 100);
    exportContact();
},false);