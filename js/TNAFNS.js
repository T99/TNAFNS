function onHover(span) {
	
	var bcr = span.getBoundingClientRect();
	var center = document.documentElement.clientWidth / 2;
	var middleX = bcr.left + ((bcr.right - bcr.left) / 2);
	var middleY = bcr.top + ((bcr.bottom - bcr.top) / 2);
	var left = (middleX <= center);
	var hoverbox;
	
	if (left) {
		
		hoverbox = document.querySelector("div.hoverbox.left");
		
		
	} else {
		
		hoverbox = document.querySelector("div.hoverbox.right");
		
	}
	
	hoverbox.style.top = (middleY - 16) + "px";
	hoverbox.style.opacity = "1";
	
}

function onUnHover() {
	
	document.querySelector("div.hoverbox.left").style.opacity = "0";
	document.querySelector("div.hoverbox.right").style.opacity = "0";

}