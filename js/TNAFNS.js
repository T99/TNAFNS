function onHover(span, text) {
	
	var bcr = span.getBoundingClientRect();
	var center = document.documentElement.clientWidth / 2;
	var middleX = bcr.left + ((bcr.right - bcr.left) / 2);
	var middleY = bcr.top + ((bcr.bottom - bcr.top) / 2);
	var left = (middleX <= center);
	var hoverbox;
	var pElement;
	
	if (left) {
		
		hoverbox = document.querySelector("div.hoverbox.left");
		pElement = document.querySelector("div.hoverbox.left p").innerHTML = text;
		
		
	} else {
		
		hoverbox = document.querySelector("div.hoverbox.right");
		pElement = document.querySelector("div.hoverbox.right p").innerHTML = text;
		
	}
	
	
	hoverbox.style.top = (middleY - 16) + "px";
	hoverbox.style.opacity = "1";
	span.style.background = "yellow";
	
}

function onUnHover(span) {
	
	document.querySelector("div.hoverbox.left").style.opacity = "0";
	document.querySelector("div.hoverbox.right").style.opacity = "0";
	span.style.background = "#EAEAEA";

}