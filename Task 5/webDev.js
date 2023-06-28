import { loop, setVideo } from "./upNext.js";



// change this index text and video src links : )

const indexes = [
	{
		text:'What is HTML',
		video: `<iframe  src="https://www.youtube.com/embed/a2L8ra2TOMg" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Learn HTML',
		video: `<iframe  src="https://www.youtube.com/embed/88PXJAA6szs" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'What is CSS',
		video: `<iframe  src="https://www.youtube.com/embed/6vbgZnQrpbU" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Learn CSS',
		video: `<iframe  src="https://www.youtube.com/embed/DFs-du7Uc2w" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text:'What is Js',
		video: `<iframe  src="https://www.youtube.com/embed/J4UKL355sUo" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Learn Js',
		video: `<iframe  src="https://www.youtube.com/embed/J4UKL355sUo" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Beginner Js',
		video: `<iframe  src="https://www.youtube.com/embed/J4UKL355sUo" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Part 2',
		video: `<iframe  src="https://www.youtube.com/embed/J4UKL355sUo" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Intermediate JS',
		video: `<iframe  src="https://www.youtube.com/embed/J4UKL355sUo" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Advanced Js',
		video: `<iframe  src="https://www.youtube.com/embed/J4UKL355sUo" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Simple website',
		video: `<iframe  src="https://www.youtube.com/embed/J4UKL355sUo" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'End',
		video: `<iframe  src="https://www.youtube.com/embed/J4UKL355sUo" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
];

indexes.map((next, index) => loop(next, index));

const element = document.getElementsByClassName('next-bar');


for(var i=0; i< element.length; i++) {
	element[i].addEventListener("click", (e) => { console.log(e.target.id);
	setV(e.target.id) });
}

function setV(id) {
	setVideo(id, indexes);
};