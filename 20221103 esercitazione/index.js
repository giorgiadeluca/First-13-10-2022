let myString = "my first string"
console.log("type of string -> string", typeof(myString))
console.log("type of string ->", myString)

let myStringDoubleApo = "my\"first string"
console.log("myStringDoubleApo ->", myStringDoubleApo)

let myStringNLine = "my\n\"first string\""
console.log(myStringNLine)

let myStringLength = "my\n \"first string\""
console.log(myStringNLine.length)

let myStringOrig = "my first string"
let myStringOrigSliced = "my first string".slice(3, 6)
console.log("myStringOrig --- myStringOrigSliced -->", myStringOrig, myStringOrigSliced)

let myStringOrigSubstr = "my first string".substr(2, 4)
console.log("myStringOrigSubstr -->", myStringOrigSubstr)

let myStringRepl = "my first string".replace("first", "second")
console.log("myStringRepl -->", myStringRepl)

let myStringReplTwo = "my first string".replaceAll("first", "second")
console.log("myStringReplTwo -->", myStringRepl)

let myStringCatWithPlus = "my first string" + " added string"
console.log( myStringCatWithPlus)

//convertire numero a stringa
let numToStr = 3
console.log(numToStr, numToStr.toString())

let strCharAt = "test"
console.log(strCharAt.CharAt(2), strCharAt.substr(2,1))

