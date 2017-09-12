function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}
function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string.toLowerCase) {
    var message1 = 'I can\'t hear you!';
    return message1;
  } else if (string === string.toUpperCase) {
    console.log('YES INDEED!');
  } else if (string === 'I love you, Grandma.') {
    console.log('I love you, too');
  }
}
