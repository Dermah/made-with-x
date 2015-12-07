"use strict"

var X = [
	{
		name: 'banana',
		emoji_unicode: '1F34C',
		alt_text: 'Banana'
	},
	{
		name: 'eggplant',
		emoji_unicode: '1F346',
		alt_text: 'Eggplant'
	}
];

let things = document.getElementsByClassName('made-with-x');

Array.prototype.forEach.call(things, function(thing) {
	thing.innerHTML = '&#x' + X[0].emoji_unicode;
})
