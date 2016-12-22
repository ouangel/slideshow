
var img_play = document.getElementById("img_player");
var img_desc = document.getElementById("img_description");
var prev = document.getElementById("prev");
var next = document.getElementById("next");



var img_arr = ["garibaldi.jpg", "machi.jpg", "beach.jpg", "angel.jpg"];
var desc_arr = ["Garibaldi Lake", "Dog", "Kit", "Person"];

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
}

next.onclick = function() {
	num++;

	if (num > img_arr.length-1) {
		num = 0;
	}

	img_desc.innerHTML = desc_arr[num]+"<p>";
	img_play.src = "gallery/" + img_arr[num];
}




