const { getConfig, setConfig } = require('./store.js');
const { getRandom, getGuess, getUsername } = require('./console.js');

const userInfo = getConfig();

async function startApp() 
{
  if(!userInfo.username) 
  {
    userInfo.username = await getUsername();
    setConfig(userInfo);
  }
  
  while(await playGame()) { }
}

async function playGame()
{
  const guessedNumber = await getGuess(1, userInfo.stage + 1);
  if(guessedNumber == 0) return false;
  const randomNumber = getRandom(1, userInfo.stage + 1);
  if(guessedNumber == randomNumber)
  {
    userInfo.stage++;
    console.log(`CONGRATS... Stage ${userInfo.stage} next.`);
    setConfig(userInfo);
  }else {
    console.log("WRONG GUESS !!");
  }
  return true;
}

startApp();