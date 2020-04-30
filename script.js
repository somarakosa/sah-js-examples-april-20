console.log('Script file is loaded.');

//single line comment
/* multiple
lines
of comments*/

//FIRST PART//
1+1
2
12-5
7
4*3
12
5/1
5
let age
undefined
age = 34
34
aage + 5
VM356:1 Uncaught ReferenceError: aage is not defined
    at <anonymous>:1:1
(anonymous) @ VM356:1
age + 5
39
age/5
6.8
age 38/8
VM414:1 Uncaught SyntaxError: Unexpected number
age 48/8
VM436:1 Uncaught SyntaxError: Unexpected number
age = 48 / 8
6
let numberOfLegs = 4
undefined
numberOfLegs * 2
8
let numberOfLegs = 2
undefined
numberOfLegs = 2
2
let name = Adam
VM669:1 Uncaught ReferenceError: Adam is not defined
    at <anonymous>:1:12
(anonymous) @ VM669:1
name
VM684:1 Uncaught ReferenceError: name is not defined
    at <anonymous>:1:1
(anonymous) @ VM684:1
name "Adam"
VM712:1 Uncaught SyntaxError: Unexpected string
let name = 'Adam'
undefined
name
"Adam"
let sentence = "That person's cat."
undefined
sentence = 'He said: "OK."'
"He said: "OK.""
let backtick = 'backtick'
undefined
let oldEnoughToDrive = true
undefined
34 + 5
39
'Hello, ' + name
"Hello, Adam"
'Hello ' + name + 43 + 'another string'
"Hello Adam43another string"
'11' + '23'
"1123"
true && (false || (true && false))
false
let post = "This is my first post"
undefined
let post2 = "This is my second post"
undefined
let color1 = "orange"
undefined
let color2 ="blue"
undefined
let colors = ["orange", "blue", "green"]
undefined
colors[2]
"green"
let pickedColor = 2
undefined
colors[pickedColor]
"green"
colors
(3) ["orange", "blue", "green"]
colors.length
3
name.length
4
let name = "StayAtHome"
undefined
name.lenth
undefined
name.length
10
colors[3] = "lime"
"lime"
colors.push
ƒ push() { [native code] }
colors.push('purple')
5
colors
(5) ["orange", "blue", "green", "lime", "purple"]
let notGoodExample = ['text', 123, true]
undefined
(index):1 A cookie associated with a cross-site resource at http://googleusercontent.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.
DevTools failed to load SourceMap: Could not load content for chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/include.preload.js.map: HTTP error: status code 404, net::ERR_UNKNOWN_URL_SCHEME
DevTools failed to load SourceMap: Could not load content for chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/include.postload.js.map: HTTP error: status code 404, net::ERR_UNKNOWN_URL_SCHEME
let person = {
name: 'Soma',
age: 25,
favoriteColors: colors,
oldEnoughToDrive: true
}
undefined
person
{name: "Soma", age: 25, favoriteColors: Array(5), oldEnoughToDrive: true}
Soma
VM2444:1 Uncaught ReferenceError: Soma is not defined
    at <anonymous>:1:1
(anonymous) @ VM2444:1
'Hello, dear ' + person.name
"Hello, dear Soma"
person.food = 'Pizza'
"Pizza"
person
{name: "Soma", age: 25, favoriteColors: Array(5), oldEnoughToDrive: true, food: "Pizza"}