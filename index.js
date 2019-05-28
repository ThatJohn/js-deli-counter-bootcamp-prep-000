var count = 0;

function takeANumber(line, name) {
  // var num = line.length;
  count++;
  line.push(name);
  return `You are ticket number ${count}.`;

}

// peter 1 -0-
// sam   2 -1-
// sarah 3 -2-

function nowServing(line) {
  if(line.length >= 1) {
    var sentence = `Currently serving ticket number ${count}.`;
    line.splice(0,1);
    return sentence;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(line) {
  if (line.length < 1) {
    return "The line is currently empty.";
  } else {
    var count = []
    line.forEach(function(name,index) {
        var num = index + 1;
         count.push(` ${num}. ${name}`);
       })
       return "The line is currently:" + count;
  }
}
