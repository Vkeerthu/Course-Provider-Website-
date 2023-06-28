import { loop, setVideo } from "./upNext.js";

const indexes = [
	{
		text:'What is DS',
		video: `<iframe  src="https://www.youtube.com/embed/X3paOmcrTjQ" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Learn Python',
		video: `<iframe  src="https://www.youtube.com/embed/rfscVS0vtbw" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'What is Pandas',
		video: `<iframe  src="https://www.youtube.com/embed/fAxjxoNqU9o" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Learn Pandas',
		video: `<iframe  src="https://www.youtube.com/embed/dcqPhpY7tWk" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text:'What is Numpy',
		video: `<iframe  src="https://www.youtube.com/embed/QUT1VHiLmmI" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Learn Numpy',
		video: `<iframe  src="https://www.youtube.com/embed/xECXZ3tyONo" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Beginner Python',
		video: `<iframe  src="https://www.youtube.com/embed/hEgO047GxaQ" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Part 2',
		video: `<iframe  src="https://www.youtube.com/embed/WvhQhj4n6b8" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Intermediate Python',
		video: `<iframe  src="https://www.youtube.com/embed/HGOBQPFzWKo" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Advanced Python',
		video: `<iframe  src="https://www.youtube.com/embed/tdn9_MZ0lN4" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'Simple website',
		video: `<iframe  src="https://www.youtube.com/embed/BDi3SD7E6no" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
	},
	{
		text: 'End',
		video: `<iframe  src="https://www.youtube.com/embed/m2__px9YJlg" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
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