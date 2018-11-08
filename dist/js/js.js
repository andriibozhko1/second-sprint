function test() {
	var btn = document.getElementsByName('switch');
	var label = document.getElementsByClassName('twitter__switch-box');
	for(var i = 0; i < label.length && i < btn.length; i++) {
		if(btn[i].checked) {
			label[i].className += ' active';
		} else {
			label[i].className = 'twitter__switch-box';
		}
	}
}
setInterval(test,200);