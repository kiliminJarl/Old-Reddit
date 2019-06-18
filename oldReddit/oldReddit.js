
//Sets new variable firstHref and grabs the current URL
var oldLink = window.location.href;

var newLink = oldLink.replace(/www/, "old");
window.location.href = newLink;

//Returns the value of current URL in the console. 
 console.log(newLink);