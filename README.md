# forEach-map-filter-assignment<br>
Write the functions necessary for the tests to pass, you can find the tests in the downloaded code.<br>

forEach<br>
doubleValues<br>
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled<br>

doubleValues([1,2,3]) // [2,4,6]<br>
doubleValues([5,1,2,3,10]) // [10,2,4,6,20]<br>
onlyEvenValues<br>
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function<br>

onlyEvenValues([1,2,3]) // [2]<br>
onlyEvenValues([5,1,2,3,10]) // [2,10]<br>
showFirstAndLast<br>
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.<br>

showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]<br>
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']<br>
addKeyAndValue<br>
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object<br>

addKeyAndValue(<br>
[<br>
  {name: 'Elie'},<br>
  {name: 'Tim'},<br>
  {name: 'Matt'},<br>
  {name: 'Colt'}<br>
],<br>
  'title',<br>
  'instructor'<br>
)<br>

/*<br>
  [<br>
    {name: 'Elie', title:'instructor'},<br>
    {name: 'Tim', title:'instructor'},<br>
    {name: 'Matt', title:'instructor'},<br>
    {name: 'Colt', title:'instructor'}<br>
  ]<br>
*/
vowelCount<br>
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
<br>
vowelCount('Elie') // {e:2,i:1};<br>
vowelCount('Tim') // {i:1};<br>
vowelCount('Matt') // {a:1})<br>
vowelCount('hmmm') // {};<br>
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}<br>
map<br>
doubleValuesWithMap<br>
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled<br>

doubleValuesWithMap([1,2,3]) // [2,4,6]<br>
doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]<br>
function doubleValuesWithMap(arr) {}<br>

valTimesIndex<br>
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.<br>

valTimesIndex([1,2,3]) // [0,2,6]<br>
valTimesIndex([1,-2,-3]) // [0,-2,-6]<br>
extractKey<br>
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.<br>

extractKey(<br>
  [<br>
    {name: 'Elie'},<br>
    {name: 'Tim'},<br>
    {name: 'Matt'},<br>
    {name: 'Colt'}<br>
  ],<br>
  'name'<br>
)<br>

  // ['Elie', 'Tim', Matt', 'Colt']<br>
extractFullName
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of “first” and the value of a key with the name of “last” in each object, concatenated together with a space.<br>

/*<br>
extractFullName([<br>
  {first: 'Elie', last:"Schoppik"},<br>
  {first: 'Tim', last:"Garcia"},<br>
  {first: 'Matt', last:"Lane"},<br>
  {first: 'Colt', last:"Steele"}<br>
])<br>

  // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']<br>
*/<br>
filter<br>
filterByValue<br>
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.<br>

filterByValue(<br>
[
  {first: 'Elie', last:"Schoppik"},<br>
  {first: 'Tim', last:"Garcia", isCatOwner: true},<br>
  {first: 'Matt', last:"Lane"},<br>
  {first: 'Colt', last:"Steele", isCatOwner: true}<br>
],<br>
'isCatOwner'<br>
)<br>

/*<br>
  [<br>
    {first: 'Tim', last:"Garcia", isCatOwner: true},<br>
    {first: 'Colt', last:"Steele", isCatOwner: true}<br>
  ]<br>
*/<br>
find<br>
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.<br>

find([1,2,3,4,5], 3) // 3<br>
find([1,2,3,4,5], 10) // undefined<br>
findInObj<br>
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.<br>

findInObj(<br>
  [<br>
    {first: 'Elie', last:"Schoppik"},<br>
    {first: 'Tim', last:"Garcia", isCatOwner: true},<br>
    {first: 'att', last:"Lane"},<br>
    {first: 'Colt', last:"Steele", isCatOwner: true}<br>
  ],<br>
  'isCatOwner',<br>
  true<br>
)<br>

// {first: 'Tim', last:"Garcia", isCatOwner: true}<br>
removeVowels<br>
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.<br>

removeVowels('Elie') // ('l')<br>
removeVowels('TIM') // ('tm')<br>
removeVowels('ZZZZZZ') // ('zzzzzz')<br>
doubleOddNumbers<br>
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).<br>

doubleOddNumbers([1,2,3,4,5]) // [2,6,10]<br>
doubleOddNumbers([4,4,4,4,4]) // []<br>
