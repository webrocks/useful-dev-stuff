// Replace href in bulk
const replaceHrefInBulk = (el, regexp, newSubstr) => {
	const newHrefArr = [...document.querySelectorAll(el)].map((url) => url.toString().replace(regexp, newSubstr));
	return [...document.querySelectorAll(el)].map((url, idx) => url.setAttribute('href', newHrefArr[idx]));
}

replaceHrefInBulk("a[href^='http://127.0.0.1/']", /127.0.0.1/, "localhost");

// Emmet shortcut for testing
ul>li*8>a[href="http://127.0.0.1/"]{test link $}