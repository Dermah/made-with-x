# Made With X
Made with literally anything but love

## Use in browser

Drop this in your page just before `</body>`

```html
<script src='index.js'></script>
```

Then drop anything except love in to your page by using

```html
<span class='made-with-x'></span>
```

This drops an emoji in to the page so your browser will have to support that.

## Use package

Install with one of:
```shell
yarn add made-with-x
```
```shell
npm install made-with-x
```

Then import with one of:
```js
import getX from 'made-with-x';
```
```js
var getX = require('made-with-x');
```

Then drop anything except love in using
```js
getX().emoji
```
`getX()` returns an object with this shape:
```JSON
{
  "name": "rainbows",
  "alt_text": "rainbows",
  "emoji_unicode": "1F308",
  "emoji": "🌈"
}
```
