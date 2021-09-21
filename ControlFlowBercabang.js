var s = '';
for (var k = 1; k <= 5; k++) {
  for (var l = 1; l <= k; l++) {
    s += '*';

  }
  s += '\n';
}
for(var i = 1; i <= 5; i++) {
  for (var j = 5; j >= i; j--) {
    s += '*';
  }
  s += '\n';
}

for(var m = 5; m >= 1; m--) {
  for (var n = 1; n <= 5; n++) {
    if (n >= m) {
      s += '*';
    } else {
      s += ' ';
    }
  }
  s += '\n';
}
for(var o = 5; o >= 1; o--) {
  for (var p = 5; p >= 1; p--) {
    if (p >= o) {
      s += ' ';
    } else {
      s += '*';
    }
  }
  s += '\n';
}
console.log(s);