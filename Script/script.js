function generateAvatar() {
	const text = document.querySelector('#text').value;
	const fgColor = document.querySelector('#fgColor').value ;
	const bgColor = document.querySelector('#bgColor').value ;
	
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	
	canvas.width = 200;
	canvas.height = 200;
	
	ctx.fillStyle = bgColor;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.font = "bold 70px Sans-Serif";
		ctx.fillStyle = fgColor;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle"
		ctx.fillText(text, canvas.width / 2, canvas.height / 2);
		
		document.getElementById("avatar").src = canvas.toDataURL("image/png");
		document.getElementById('download-link').href = document.getElementById("avatar").src;
}

window.addEventListener("DOMContentLoaded", (event) => {
 generateAvatar();
	document.getElementById('download-link').href = document.getElementById("avatar").src;
});

