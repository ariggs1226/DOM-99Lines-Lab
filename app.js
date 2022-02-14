let friends = ['Russ', 'Mindy', 'David', 'Nikki', 'Hunter'];

for (let i = 0; i < friends.length; i++) {
    const name = friends[i];
    console.log(name + ':')
    for (let line = 99; line > 0; line--) {
        if (line > 2) {
            console.log(line + ' lines of code in the file, ' + line + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + (line - 1) + ' lines of code in the file');
        } else if(line == 2){
            console.log(line + ' lines of code in the file, ' + line + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + (line - 1) + ' line of code in the file');
        } else {
            console.log(line + ' line of code in the file, ' + line + ' line of code; ' + name +' strikes one out, clears it all out, no more lines of code in the file!');
        }
    }
 }