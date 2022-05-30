const readline = require('readline').createInterface(process.stdin, process.stdout);

async function getNumber(message){
   return new Promise((resolve, _) => {
     readline.question(message, userInput => {
        resolve(userInput);
      });
   });
}

async function getUsername() {
  const message = "\n\nEnter Username: \n";
  
  while(true)
  {
    const username = await getNumber(message);
    
    if(username.trim().length > 3)
      return username.trim();
      
    console.log('>>> Must be at least 4 characters long <<<\n\n');
    
  }
}
async function getInteger(message, min, max) {
  while(true)
  {
    const operation = await getNumber(message);
    
    if(!isNaN(operation))
    {
      const number = +operation;
      if(number == 0 || (number >= min && number <= max))
        return number;
    }

    console.log('>>> NOT A VALID NUMBER <<<\n\n');
    
  }
}

async function getGuess(min, max) 
{
  const stage = max - 1;
  const operationPrompt = `\n================\nSTAGE ${stage}\nGuess a Number from [${min}] to [${max}]\nPress 0 to quit\n================\n`;
  
  return await getInteger(operationPrompt, min, max);
}

function getRandom(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

module.exports = { getGuess, getRandom, getUsername }