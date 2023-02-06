// THE MANDALORIAN GAME

const start = `Welcome to The Mandalorian Game! Click "Ok" to start.`;

const enter = `Enter 1 or 2`;

const end = `You lost. Game Over`;

const q1 = `After a short fight in a bar on Pagodon, you acquire another criminal and
bring him back to the Razor Crest. As you take off, he asks to use the bathroom but you have a feeling he might try to escape. Do you …
1) Ignore it and continue flying
OR
2) Check he isn't trying to escape
${enter}`;

const gameOver1 = `the criminal steals an escape pod and you lose your bounty. ${end}`;

const q2 = `You find him searching for an escape but you freeze him in carbonite before he can continue. You stash him with the other frozen criminals and head to your bounty dealer, Greef Karga, on Nevarro. While one of his employees unloads your bounties, Greef tells you about the next available bounties, mostly cheap stuff that won’t even pay for fuel, except for one well payed, off-the-book bounty. He gives you the chit and you go to the employer. In exchange for a camtono of Beskar, you will retrieve an asset with the very little information they have.
Do you …
1) Forget about it and take an safer bounty
OR
2) Take the bounty and start hunting
${enter}`;

const gameOver2 = `You decide not to take the bounty and instead take a much easier bounty. You eventually go bankrupt as traveling got to expensive. ${end}`;

const q3 = `You take the tracking fob and follow it to Arvala-7. You meet a native of the planet named Kuiil who wants the criminals out of town. He informs you that there are no land speed vehicles to travel so you must travel by Blurrg. You try serval times to ride one but have no success. Do you ...
1) Keep trying
OR
2) Search for a land cruiser, surely theres one around
${enter}`;

const gameOver3 = `You search for any other way of traveling and find nothing but endless rough, course sand. You eventually die of dehydration. ${end}`;

const q4 = `You succeed at riding a Blurrg and head to the bounty. As you reach the hideout you find an incinerator droid called IG-11 also tasked with finding and killing the bounty. After realizing you are out-numbered, do you ...
1) Sneak in another way to retrieve the bounty for your self
OR
2) Team up with IG-11 to eliminate the criminals first
${enter}`;

const gameOver4 = `You sneak around the back while IG-11 ruthlessly kills the criminals. As you are walking back to the Blurrg, IG finds you and eliminates you because after all he is an incinerator droid. ${end}`

const q5 = `You team up with IG-11 and easily kill all the criminals. You both make your way to the bounty which seems to be inside a floating orb. The orb opens to reveal a baby alien that is to cute to put into words. As IG-11 pulls up his blaster, you realize that it was tasked to kill it. Do you ...
1) Kill IG-11 and take the child alive
OR
2) Let IG-11 kill it and take it in
${enter}`;

const gameOver5 = `IG-11 kills the child and take it in. You lose a ton of money after traveling to Arvala-7 and end up stuck there. ${end}`

const q6 = `You shoot IG-11 and take the child. You make your way to back to Kuiil and thank him for his kindness. He warns you about a strange power connected to that species. You head back to the Razor Crest and travel to Nevarro. On the way there as you were trying to mend your armor, you see the child with his hand raised, focused on some food. You give him some and return to flying the ship. Once your on Nevarro, you take the child back to the dealer and ask what the plan are for it, the don't answer. You take your Beskar to the Armorer for a new set. Once she is done, you can't help but think of the child and the bad feeling in your stomach. Do you ...
1) Go back and forcefully retrieve the child
OR
2) Ignore it and continue to the next bounty
${enter}`;

const gameOver6 = `You ignore the bad feeling and continue your life as normal, never really knowing what happened to the child. ${end}`

const win = `You fight through weak Stormtroopers and take the child. As you run back to the Razor Crest, every bounty hunter starts chasing after you. You escape and realize you are now on the run and will do anything to protect the child.`

alert(start);

let userInput = prompt(q1);

if (userInput === "2"){
    userInput = prompt(q2);

    if (userInput === "2"){
        userInput = prompt(q3);

        if (userInput === "1"){
            userInput = prompt(q4);
            
            if (userInput === "2"){
                userInput = prompt(q5);

                if (userInput === "1"){
                    userInput = prompt(q6);

                    if (userInput === "1"){
                        alert(win);
                    }else{
                        alert(gameOver6)
                    }
                }else{
                    alert(gameOver5)
                }
            }else{
                alert(gameOver4)
            }
        }else{
            alert(gameOver3)
        }
    }else{
        alert(gameOver2)
    }
}else{
    alert(gameOver1);
}