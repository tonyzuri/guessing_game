const fs = require('fs');
const CONFIG_FILE = './details';
const userInfo = { username: null, stage: 1 };

function createIfNotExist()
{
  try
  {
    fs.readFileSync(CONFIG_FILE);
  }catch{
    fs.writeFileSync(CONFIG_FILE, '');
  }
}

function getConfig() 
{
  createIfNotExist();
  
  const details = fs.readFileSync(CONFIG_FILE)
                      .toString()
                        .split('\n');

  if(details[0])
  {
    userInfo.username = details[0];  
  }

  if(details[1] && !isNaN(details[1]))
  {
    userInfo.stage = +details[1];
  }

  return userInfo;
}

function setConfig(info) 
{
  if(info.username)
  {
    userInfo.username = info.username;
  }
  
  if(info.stage && !isNaN(info.stage))
  {
    userInfo.stage = info.stage;
  }

  fs.writeFileSync(CONFIG_FILE, `${userInfo.username}\n${userInfo.stage}`); 
}

module.exports = { getConfig, setConfig };