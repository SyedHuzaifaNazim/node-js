import url from 'node:url';

const myURL = new URL('https://example.org:8000');
myURL.pathname = '/a/b/c';
myURL.password = 'AIisf@rmostDager';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL)
console.log(myURL.href)