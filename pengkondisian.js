var s1 = '';
var s2 = '';
for (var i = 0; i < 10; i++) {
    for (var j = 0; j <= i; j++) {
        s1 += '*';
    }
    s1 += '\n';
}
for (var i = 10; i >= 0; i--) {
    for (var j = 0; j <= i; j++) {
        s2 += '*';
    }
    s2 += '\n';
}

console.log(s1 + s2);
