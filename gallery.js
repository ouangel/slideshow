
var img_play = document.getElementById("img_player");
var img_desc = document.getElementById("img_description");
var prev = document.getElementById("prev");
var next = document.getElementById("next");



var img_arr = ["bay.jpg", "city.jpg", "lake.jpg", "lakewithmountain.jpg"];
var desc_arr = ["Bay", "Vancouver City", "Lake", "Lake with mountain"];

var num = 0;
img_desc.innerHTML = desc_arr[num]+"<p>";
img_play.src = "gallery/" + img_arr[num];


prev.onclick = function() {
	num--;

	if (num < 0) {
		num = 1;
	}

	img_desc.innerHTML = desc_arr[num]+"<p>";
	img_play.src = "gallery/" + img_arr[num];
	// img_play.style.width = "100%";
}

next.onclick = function() {
	num++;

	if (num > img_arr.length-1) {
		num = 0;
	}

	img_desc.innerHTML = desc_arr[num]+"<p>";
	img_play.src = "gallery/" + img_arr[num];
	// img_play.style.width = "100%";
}




