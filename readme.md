<h1 align="center">@abhijithvijayan/styler</h1>
<p align="center">CSS Modules Style Helper</p>
<div align="center">
  <a href="https://www.npmjs.com/package/@abhijithvijayan/styler">
    <img src="https://img.shields.io/npm/v/@abhijithvijayan/styler" alt="NPM" />
  </a>
  <a href="https://travis-ci.com/abhijithvijayan/styler">
    <img src="https://travis-ci.com/abhijithvijayan/styler.svg?branch=main" alt="Travis Build" />
  </a>
  <a href="https://david-dm.org/abhijithvijayan/styler">
    <img src="https://img.shields.io/david/abhijithvijayan/styler.svg?colorB=orange" alt="DEPENDENCIES" />
  </a>
  <a href="https://github.com/abhijithvijayan/styler/blob/main/license">
    <img src="https://img.shields.io/github/license/abhijithvijayan/styler.svg" alt="LICENSE" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20%40abhijithvijayan%2Fstyler%21%20by%20%40_abhijithv%0A%0ACSS%20Modules%20Style%20Helper%0Ahttps%3A%2F%2Fgithub.com%2Fabhijithvijayan%2Fstyler%0A%0A%23css%20%23scss%20%23sass%20%23modules%20%23styler%20%23util">
     <img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social" alt="TWEET" />
  </a>
</div>
<h3 align="center">🙋‍♂️ Made by <a href="https://twitter.com/_abhijithv">@abhijithvijayan</a></h3>
<p align="center">
  Donate:
  <a href="https://www.paypal.me/iamabhijithvijayan" target='_blank'><i><b>PayPal</b></i></a>,
  <a href="https://www.patreon.com/abhijithvijayan" target='_blank'><i><b>Patreon</b></i></a>
</p>
<p align="center">
  <a href='https://www.buymeacoffee.com/abhijithvijayan' target='_blank'>
    <img height='36' style='border:0px;height:36px;' src='https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png' border='0' alt='Buy Me a Coffee' />
  </a>
</p>
<hr />

❤️ it? ⭐️ it on [GitHub](https://github.com/abhijithvijayan/styler/stargazers) or [Tweet](https://twitter.com/intent/tweet?text=Check%20out%20%40abhijithvijayan%2Fstyler%21%20by%20%40_abhijithv%0A%0ACSS%20Modules%20Style%20Helper%0Ahttps%3A%2F%2Fgithub.com%2Fabhijithvijayan%2Fstyler%0A%0A%23css%20%23scss%20%23sass%20%23modules%20%23styler%20%23util) about it.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Issues](#issues)
	- [🐛 Bugs](#-bugs)
- [LICENSE](#license)

## Installation

Ensure you have [Node.js](https://nodejs.org) 18 or later installed. Then run the following:

```
# via npm
npm install @abhijithvijayan/styler

# or yarn
yarn add @abhijithvijayan/styler
```

## Usage

```js
import Styler from '@abhijithvijayan/styler';
import * as React from 'react';

import styles from './styles.scss';


function App({theme = {}, show = false}) {
	const styler = new Styler(styles, theme);

	return (
		<div className={styler.get("wrapper")}>
			<p className={styler.get(["heading", show && "show"])}>hello world</p>
			<p className={styler.get(["message"], ["static-class-name"])}>new message</p>
		</div>
	);
}
```

## API

## Issues

_Looking to contribute? Look for the [Good First Issue](https://github.com/abhijithvijayan/styler/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22good+first+issue%22)
label._

### 🐛 Bugs

Please file an issue [here](https://github.com/abhijithvijayan/styler/issues/new) for bugs, missing documentation, or unexpected behavior.

[**See Bugs**](https://github.com/abhijithvijayan/styler/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22type%3A+bug%22)

### Linting & TypeScript Config

- Shared Eslint & Prettier Configuration - [`@abhijithvijayan/eslint-config`](https://www.npmjs.com/package/@abhijithvijayan/eslint-config)
- Shared TypeScript Configuration - [`@abhijithvijayan/tsconfig`](https://www.npmjs.com/package/@abhijithvijayan/tsconfig)

## License

MIT © [Abhijith Vijayan](https://abhijithvijayan.in)
