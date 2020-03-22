module.exports = function check(str, bracketsConfig) {
    let res = str;
    let config = bracketsConfig.map(item => item.join(''));
    let bracket = '';
    for (let j = 0; j < str.length; j++) {
        for (let i=0; i < config.length; i++) {
            if (res.includes(config[i])) {
                bracket = config[i];
                res = res.replace(bracket, '');
                i--; 
            }
        }
    }
    return (res === '' ? true : false)
  }
