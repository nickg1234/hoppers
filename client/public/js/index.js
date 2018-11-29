function showMessage(message) {
	alert(message);
}

function moveFrog(top1, left) {
	var hoppers = document.getElementById('hoppers');
	hoppers.style.top = top1;
	hoppers.style.left = left;
}