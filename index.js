"use strict"

var X = [
  {
    name: 'banana',
    alt_text: 'banana',
    emoji_unicode: '1F34C',
    emoji: '🍌'
  },
  {
    name: 'eggplant',
    alt_text: 'eggplant',
    emoji_unicode: '1F346',
    emoji: '🍆'
  },
  {
    name: 'man in suit levitating',
    alt_text: 'man in suit levitating',
    emoji_unicode: '1F574',
    emoji: '🕴'
  },
  {
    name: 'person dancing',
    alt_text: 'person dancing',
    emoji_unicode: '1F483',
    emoji: '💃'
  },
  {
    name: 'person dancing',
    alt_text: 'person dancing',
    emoji_unicode: '1F57A',
    emoji: '🕺'
  },
  {
    name: 'pants',
    alt_text: 'pants',
    emoji_unicode: '1F456',
    emoji: '👖'
  },
  {
    name: 'moon',
    alt_text: 'moon',
    emoji_unicode: '1F31D',
    emoji: '🌝'
  },
  {
    name: 'rainbows',
    alt_text: 'rainbows',
    emoji_unicode: '1F308',
    emoji: '🌈'
  },
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
