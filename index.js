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

(function () {
  var pickX = function () {
    var pick = Math.floor((Math.random() * (X.length)));
    return X[pick];
  }

  if (typeof window !== 'undefined') {
    // replace all DOM nodes with class='made-with-x' with X
    var containers = window.document && window.document.getElementsByClassName('made-with-x');
    Array.prototype.forEach.call(containers, function(container) {
      container.innerHTML = '&#x' + pickX().emoji_unicode;
    });
  }

  if (typeof module !== 'undefined' && module.exports) {
    // export a default function for randomly picking an X
    module.exports = pickX;
  }
}())
