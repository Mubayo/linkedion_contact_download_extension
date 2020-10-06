var i = 0;
		var x = setInterval(function(){
			window.scrollTo(0, i * 100);
			i++;
			if(i * 100 >= document.body.scrollHeight){
				clearInterval(x);
				chrome.runtime.sendMessage({antilazyloading: true});
			}
		}, 100);
