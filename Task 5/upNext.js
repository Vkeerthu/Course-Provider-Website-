const loop = (next, index) => {
	var div = document.createElement('div');
	div.id = index;
	div.setAttribute("class", "next-bar");
	if(index === 0) {
		div.classList.add('active');
	}
	const num = index + 1;
	div.innerHTML = " "+ num + "   " + next.text;
	document.getElementById('up-next').appendChild(div); 
};


const setVideo = (id, indexes) => {
	resetColor();
	document.getElementById(id).classList.add('active');
	document.getElementById('video').innerHTML = indexes[id].video;
};

const resetColor = () => {
	const element = document.getElementsByClassName('next-bar');
	for (var i = 0; i < element.length; i++) {
		element[i].classList.remove('active');
	}
}

export { loop, setVideo, resetColor };
