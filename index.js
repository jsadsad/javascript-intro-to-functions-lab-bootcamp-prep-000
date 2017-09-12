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
    console.log(message1);
  } else if (string.toUpperCase) {
    var message2 = 'YES INDEED!';
    console.log(message2);
  } else if (string === 'I love you, Grandma.') {
    var message3 = 'I love you, too';
    console.log(message3);
  }
}
