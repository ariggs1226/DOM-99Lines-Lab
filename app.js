let friends = ['Russ', 'Mindy', 'David', 'Nikki', 'Hunter'];

let singBtn = document.createElement("button");
singBtn.textContent = "Sing!";
document.body.appendChild(singBtn);
document.addEventListener('click', sing);

function sing() {
    for (let i = 0; i < friends.length; i++) {
        const name = friends[i];

        let friendDiv = document.createElement('div');
        friendDiv.className = 'friend';
        friendDiv.id = name;
       

        let friendH3 = document.createElement('h3');
        friendH3.textContent = name;
        friendDiv.appendChild(friendH3)

        for (let line = 99; line > 0; line--) {
            let friendP = document.createElement('p');
            let friendInnerP99 = document.createTextNode(line + ' lines of code in the file, ' + line + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + (line - 1) + ' lines of code in the file');
            let friendInnerP2 = document.createTextNode(line + ' lines of code in the file, ' + line + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + (line - 1) + ' line of code in the file');
            let friendInnerP1 = document.createTextNode(line + ' line of code in the file, ' + line + ' line of code; ' + name +' strikes one out, clears it all out, no more lines of code in the file!');
    
            if (line > 2) {
                friendP.appendChild(friendInnerP99);
                friendDiv.appendChild(friendP);
            } else if(line == 2) {
                friendP.appendChild(friendInnerP2);
                friendDiv.appendChild(friendP);
            } else {
                friendP.appendChild(friendInnerP1);
                friendDiv.appendChild(friendP);
            }
        }

        document.body.appendChild(friendDiv);
    }
};

