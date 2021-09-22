const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let sport;
let name;
let meal;


 rl.question('What is an activity you like doing?: ', (answer) => {
  
  sport = answer;
  
  rl.question('What is your name?: ', (answer) => {
    
    name = answer
    


    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.): ', (answer) => {
     
     
      meal = answer;

      console.log(`My  name is ${name} and i like to eat ${meal} all day long while playing ${sport} `);
     rl.close();
    });
    
  });

  
});



