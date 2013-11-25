var app = {
	init: function() {
		var div = document.createElement("div");
		div.classList.add("smiley-face");
		document.body.appendChild(div);
	}
};

// sorry world.
window.onload = app.init;

