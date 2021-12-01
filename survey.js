const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//QUESTION ONE
// Ask a question
function profileGenerator()
{
    rl.question("What is your name? \n", (name) => { 
      console.log(`What a beautiful name, ${name}! 😘\n`); 
      rlname = name;

        rl.question("Where would you like to be right now? \n", (place) => { 
          console.log(`I'm taking notes.\n`); 
          rlplace = place;

            rl.question("How old are you? \n", (age) => {
              console.log(`Ah. As Bjork once said, you are half ancient and half child.\n`);
                rlage = age;

                rl.question("Logic 🧠 or emotion? 💓 \n", (mental) => {
                  console.log(`Hmm. I see.\n`);
                    rlmental = mental;

                    rl.question("Choose one: Green, blue, purple, pink, yellow, or red. \n", (color) => {
                        console.log(`Personally, I never play favorites. But I respect your decision.\n`);
                          rlcolor = color;

                        rl.question("What's your superpower? \n", (power) => {
                          console.log(`...that came very close to bragging.\n`);
                            rlpower = power;

                      rl.question("Would you like to relax or run around?\n", (movement) => {
                        console.log(`💭 💭 💭\n`);
                          rlmovement = movement;

    console.log(`Voila! ${rlname} is a ${rlage} year old with a magical ${rlcolor} colored aura and a relational preference for ${rlmental}.\n If they could take you anywhere, it would be ${rlplace} to ${rlmovement} and relish in their power of ${rlpower}.`);

    // CLOSE CONNECTION
                rl.close();

                })
              })
          })
        })
      })
    })
  })
}

profileGenerator();