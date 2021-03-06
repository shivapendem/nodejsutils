    var md5 = require('md5');
    var crypto = require('crypto');
    var speakeasy = require("speakeasy");
    const stripHtml = require("string-strip-html");


    function isMD5(inputString) {
       return (/[a-fA-F0-9]{32}/).test(inputString);
    };
    function toTitleCase(str) {
        return str.replace(/\w\S*/g,function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    };
    function maskcode(data,limiter)
    {
        var _email=data.split("");
        for(var loopvar=3;loopvar<_email.length-4;loopvar++)
        {
          _email[loopvar]=limiter;
          
        }
        var res= _email.join("");
        return res;
    };
    function searcharray(master,position,value)
    {
        if((isNull(master)) || (isNull(position)) || (isNull(value)))
            return false;
        else
        {
            for(var vendorloopvar=0;vendorloopvar<master.length;vendorloopvar++)
            {
                if(master[vendorloopvar][position]==value)
                    return vendorloopvar;
            }
            return false;
        }
    };
    function validateEmail(email)
    {
        var re=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
        if (email == '' || !re.test(email))
        {
            return false;
        }
        else 
            return true;
    };
    function isEmail(email)
    {
      const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (email.match(regEx)) return true;
      else return false;
    };
    function validatePassword(a)
    {
        if (a.length<7)
        {
            return false;
        }
        else
        {
            var lowerCaseLetters = /[a-z]/g;
            var upperCaseLetters = /[A-Z]/g;
            var numbers = /[0-9]/g;
            if(!a.match(lowerCaseLetters)) {
                return false;
            }
            else if(!a.match(upperCaseLetters)) { 
                return false;
            }
            else if(!a.match(numbers)) {
                return false;
            }
            else if(a.length < 8) {
                return false;
            }
            else
                return true;      
        }
    };

    function getdomain (a){
        var domain = a.replace(/.*@/, "");
        return domain;
    };
    function containsspecialcharacters(data,_array=["%","*","?","[","]","!","#","^"," ","|","&","**","/*","*/","+","=","-->","\'","\"","sleep",",,,",")))"])
    {
        if(isNull(data))
            return true;
        for(_loopvar=0;_loopvar<_array.length;_loopvar++)
        {
            if((data+"").toLowerCase().indexOf(_array[_loopvar].toLowerCase())>=0)
                return false;
        }
        return true;
    };
    function generatehash(a) {
        var hash = crypto.createHash('sha1');
        data = hash.update(a, 'utf-8');
        gen_hash= data.digest('hex');
        return gen_hash;
    };
    function randomIntFromInterval (min,max) {
        return getvaluebetweenwithdecimals(min,max,0);
    };
    function getvaluebetweenwithdecimals (min,max,decimal) {
        var precision=1;
        for(var i=0;i<decimal;i++)
            precision=precision*10;
        return Math.floor(Math.random()*((max*precision)-(min+1)*precision)+min*precision)/precision;
    };
    function urlencodestring(query) {
        return encodeURIComponent(query).replace(/'/g,"%27").replace(/"/g,"%22")
    };
    function generateGauthkey() {
        var secret = speakeasy.generateSecret({length: 20});
        return secret.base32;
    };
    function getmobileauthImage (provider,name,secret) {
        var urlencoded = urlencodestring('otpauth://totp/'+name+'?secret='+secret+'&issuer='+urlencodestring(provider)+'');
        return 'https://chart.googleapis.com/chart?chs=200x200&chld=M|0&cht=qr&chl='+urlencoded+'';
    };
    function getTexttoImage (text) {
        var urlencoded = urlencodestring(text);
        return 'https://chart.googleapis.com/chart?chs=200x200&chld=M|0&cht=qr&chl='+urlencoded+'';
    };
    function validatemobileotp (key,password,delay) {
        var tokenValidates = speakeasy.totp.verify({secret: key,encoding: 'base32',token: password,window: delay});
        return tokenValidates;
    };
    function getHash(string,key){
        const hash = crypto.createHmac('sha512', key).update(string).digest('hex');
        return hash  ;
    };
    function MystripFunction(data)
    {
      stripHTMLTags(data);     
    }
    function stripHTMLTags(data)
    {
      var type = typeof data;
      //console.log(type);
      if(isNull(data))
      {
        return data;
      }
      else if(type == 'boolean')
      {
        return data;
      }
      else if(type == 'number')
      {
        return data;
      }
      else if(type == 'string')
      {
        return stripHtml(data).result;
      }
      else if(Array.isArray(data))
      {
        for(var _loopvar=0;_loopvar<data.length;_loopvar++)
        {
          data[_loopvar]=stripHTMLTags(data[_loopvar]);
        }
        return data;
      }
      else if(type == 'object')
      {
        for(var key in data) {
            var value = stripHTMLTags(data[key]);
            data[key]=value;
        }
        return data;
      }
      else
      {
        console.error("stripHTMLTags "+type);
        console.error(data);
        return data;
      }     
    }

    function strip_tags(str) {
        if(isNull(str))
            return str;
        else
        {
            str = MystripFunction(str.toString());
            return MystripFunction(str.replace(/<\/?[^>]+>/gi, ''));
        }
    };
    function customencrypt(str,algorithm='aes256',key='shivapendem') {
        var cipher = crypto.createCipher(algorithm, key);  
        var encrypted = cipher.update(str+"", 'utf8', 'hex') + cipher.final('hex');
        return encrypted;
    };
    function customdecrypt(str,algorithm='aes256',key='shivapendem') {
        try
        {
            var decipher = crypto.createDecipher(algorithm, key);
            var decrypted = decipher.update(str, 'hex', 'utf8') + decipher.final('utf8');
            return decrypted;
        }
        catch(e)
        {
            console.error(e);
            return "";
        }
    };
    function isJson(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }
    function encryptobject(str_golb) {
        if(isJson(str_golb))
        {
            try
            {
               var str=JSON.stringify(JSON.parse(str_golb));
               str_golb=str;
            }
            catch(e)
            {
                console.log(str_golb)
                console.error(e);
            }
        }
        let unescapeStr =urlencodestring(str_golb);
        return crypto.createHmac('sha512',"").update(unescapeStr).digest('hex').toString();
    };
    
    function getnumberfixeddecimal(number, decimals, nodots = false) {
        if (isNaN(Number(number))) {
            return number;
        }
        else if (decimals < 16) {
            return removeexponentials(truncateToDecimals(Number(number), decimals));
        }
        else if (nodots) {
            return removeexponentials(truncateToDecimals(Number(number), decimals));
        }
        else {
            number = removeexponentials(number);
            return (number + "").substring(0, 4) + "..." + (number + "").substring((number + "").length - 3);
        }
    };

    function removeexponentials(n) {
        var sign = +n < 0 ? "-" : "",
            toStr = n.toString();
        if (!/e/i.test(toStr)) {
            return n;
        }
        var [lead, decimal, pow] = n.toString()
            .replace(/^-/, "")
            .replace(/^([0-9]+)(e.*)/, "$1.$2")
            .split(/e|\./);
        return +pow < 0
            ? sign + "0." + "0".repeat(Math.max(Math.abs(pow) - 1 || 0, 0)) + lead + decimal
            : sign + lead + (+pow >= decimal.length ? (decimal + "0".repeat(Math.max(+pow - decimal.length || 0, 0))) : (decimal.slice(0, +pow) + "." + decimal.slice(+pow)))
    };
    function truncateToDecimals(num, dec = 0) {
        num=removeexponentials(num);
        const totalDecimal = countDecimals(num);
        if (totalDecimal === 1) {
            dec = 1;
        }
        if (totalDecimal === 2) {
            return num;
        }
        const calcDec = Math.pow(10, dec);
        return Math.trunc(num * calcDec) / calcDec;
    };
    function countDecimals(value) {
        if (Math.floor(value) === value) return 0;
        return value.toString().split(".")[1].length || 0;
    };
    function generateRandomString(length,characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%:;.,') {
        var result           = '';
        //var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%:;.,';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result;
    };


    function isEmpty(string)
    {
        if(isNull(string)) return true;
        else if (string.trim() === "") return true;
        else return false;
    };

    function isEmptyArray(array)
    {
      if (array.length === 0) return true;
      else return false;
    };

    function isValidHttpUrl(string) {
      let url;
      try {
        url = new URL(string);
      } catch (_) {
        return false;  
      }
      return url.protocol === "http:" || url.protocol === "https:";
    }
    function trimtext(text,length=12)
    {
        if(isNull(text))
            return text;
        else if(text.length>length)
            return text.substring(0,length)+"...";
        else
            return text; 
    }

    function isNull(data)
    {
        if( (data === null) || (typeof data === 'undefined') )
        { 
            return true;
        }
        return false;
    }
    function getMD5(data)
    {
        if(isJson(data))
            return md5(JSON.stringify(data));
        else
            return md5(data);
    }
    function getCurrentTimeinMilliSeconds()
    {
       return new Date().getTime();
    }
    function replaceAll(textstring,from,to)
    {
        if(isNull(textstring) || isEmpty(textstring))
            return textstring
        return textstring.split(from).join(to);
    }
    ///////

    function trim(value) {
        return value.toString().replace(/^\s+|\s+$/g, '');
    }

    function toNumber(value) {
        return Number(value);
    };

    function toBoolean(value) {
        return value.toString().toLowerCase().trim() == "true" && value != "0";
    };

    function isNumeric(number) {
        return !isNaN(number);
    };

    function isInteger(value) {
        return /^[0-9]{1,}$/.test(value);
    }

    function endsWith(value, ends, ignoreCase) {
        if (ignoreCase) {
            return value.toLowerCase().charAt(value.length - ends.length) == ends.toLowerCase();
        }
        return value.charAt(value.length - str.length) == str;  
    };

    function startsWith(value, stats, ignoreCase) {
        if (ignoreCase) {
            return value.toLowerCase().charAt(0) == stats.toLowerCase();
        }
        return value.charAt(0) == stats;
    };

    function uniquefromarray(origArr) {
        var newArr = [],
            origLen = origArr.length,
            found,
            x, y;
             
        for ( x = 0; x < origLen; x++ ) {
            found = undefined;
            for ( y = 0; y < newArr.length; y++ ) {
                if ( origArr[x] === newArr[y] ) {
                  found = true;
                  break;
                }
            }
            if ( !found) newArr.push( origArr[x] );   
        }
       return newArr;
    };
    function randomBoolean () {
        return Math.random() >= 0.5;
    };
    function isObjectEmpty(obj)
    {
        return (Object.keys(obj).length === 0);
    }
    function reversestring(string)
    {
        return string.split("").reverse().join('');
    }
    function randomHexColor()
    {
        let n= (Math.random() *0xFFFFFF*1000000).toString(16);
        return "#"+n.slice(0,6);
    }
    
    function numbertoStringWithComma(number)
    {
        if(!isNumeric(number))
        {
            return number;
        }
        else
        {
            let str=String(number);
            let s='';
            let count=0;
            for(let _loopvar=str.length-1;_loopvar>=0;_loopvar--)
            {
                s=str[_loopvar]+s;
                count++;
                if((count%3==0) && (_loopvar!=0) )
                {
                    s=','+s;
                }
            }
            return s;
        }
    }
    function removeEmptyStringinArray(array)
    {
        if(!Array.isArray(array))
        {
            return array;
        }
        else
        {
            let resultarray=[];
            for(let _loopvar=0;_loopvar < array.length;_loopvar++)
            {
                if(!isEmpty(array[_loopvar]))
                {
                    resultarray.push(array[_loopvar]);
                }
            }
            return resultarray;
        }
    }
    function replaceEmptyStringtoNullinArray(array)
    {
        if(!Array.isArray(array))
        {
            return array;
        }
        else
        {
            let resultarray=[];
            for(let _loopvar=0;_loopvar < array.length;_loopvar++)
            {
                if(!isEmpty(array[_loopvar]))
                {
                    resultarray.push(array[_loopvar]);
                }
                else
                {
                    resultarray.push(null);
                }
            }
            return resultarray;
        }
    }
    function removeNullinArray(array)
    {
        if(!Array.isArray(array))
        {
            return array;
        }
        else
        {
            let resultarray=[];
            for(let _loopvar=0;_loopvar < array.length;_loopvar++)
            {
                if(!isNull(array[_loopvar]))
                {
                    resultarray.push(array[_loopvar]);
                }
            }
            return resultarray;
        }
    }
    function replaceNulltoEmptyStringinArray(array)
    {
        if(!Array.isArray(array))
        {
            return array;
        }
        else
        {
            let resultarray=[];
            for(let _loopvar=0;_loopvar < array.length;_loopvar++)
            {
                if(!isNull(array[_loopvar]))
                {
                    resultarray.push(array[_loopvar]);
                }
                else
                {
                    resultarray.push("");
                }
            }
            return resultarray;
        }
    }
    function removeNullandEmptyStringinArray(array)
    {
        if(!Array.isArray(array))
        {
            return array;
        }
        else
        {
            let resultarray=[];
            for(let _loopvar=0;_loopvar < array.length;_loopvar++)
            {
                if((!isNull(array[_loopvar])) && (!isEmpty(array[_loopvar])))
                {
                    resultarray.push(array[_loopvar]);
                }
            }
            return resultarray;
        }
    }
    function sortarray(array,isdes=false)
    {
        if(!Array.isArray(array))
        {
            return array;
        }
        else
        {
            array= array.sort(function(a,b) {
                if(isdes)
                    return b-a;
                else
                    return a-b;
            });
            return array;
        }
    }
    function ifKeyExists(object,key)
    {
        if (object.hasOwnProperty(key)) {
            return true;
        }
        return false;
    }
    function removeUnicodeCharacters(string)
    {
        if (isNull(string)) {
            return null;
        }
        return string.replace(/[^\x00-\x7F]/g,"");;
    }
    function timeDifference(timestamp) 
    {
      const msPerMinute = 60 * 1000;
      const msPerHour = msPerMinute * 60;
      const msPerDay = msPerHour * 24;
      const msPerMonth = msPerDay * 30;
      const msPerYear = msPerDay * 365;
      const current = new Date();
      const previous = timestamp * 1000;

      var elapsed = current - previous;

      if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + " seconds ago";
      } else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + " minutes ago";
      } else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + " hours ago";
      } else if (elapsed < msPerMonth) {
        return "approximately " + Math.round(elapsed / msPerDay) + " days ago";
      } else if (elapsed < msPerYear) {
        return "approximately " + Math.round(elapsed / msPerMonth) + " months ago";
      } else {
        return "approximately " + Math.round(elapsed / msPerYear) + " years ago";
      }
    };
    function numberWithCommas(number, tofixed) 
    {
        if (tofixed)
            number = Number(number).toFixed(tofixed);
        const str = number.toString().split('.');
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');

        return str.join('.');
    }
///////

function isNil(value) {
    return value === null || isUndefined(value);
}

function isFunction(value) {
    return typeof value === "function";
}

function isArray(value) {
    return Array.isArray(value);
}

function isString(value) {
    return Object.prototype.toString.call(value) === "[object String]";
}

function isBoolean(value) {
    return typeof value === "boolean" || value instanceof Boolean;
}

function isUndefined(value) {
    return value === undefined;
}


function isNumber(value) {
    return typeof value === "number" || value instanceof Number;
}


function isObject(value) {
    return typeof value === "object" || isFunction(value);
}

function isRegExp(value) {
    return Object.prototype.toString.call(value) === "[object RegExp]";
}


module.exports = {
  isMD5,toTitleCase,maskcode,searcharray,validateEmail,validatePassword,getdomain ,containsspecialcharacters,generatehash ,randomIntFromInterval ,getvaluebetweenwithdecimals ,urlencodestring ,generateGauthkey ,getmobileauthImage ,getTexttoImage ,validatemobileotp ,getHash,MystripFunction,strip_tags,customencrypt,customdecrypt,isJson,encryptobject,getnumberfixeddecimal,removeexponentials,truncateToDecimals,countDecimals,generateRandomString,
  isEmail,isEmpty,isEmptyArray,isValidHttpUrl,trimtext,isNull,getMD5,getCurrentTimeinMilliSeconds,replaceAll,stripHTMLTags,trim,toNumber,toBoolean,isNumeric,isInteger,endsWith,startsWith,uniquefromarray,randomBoolean,isObjectEmpty,reversestring,randomHexColor,numbertoStringWithComma,removeEmptyStringinArray,replaceEmptyStringtoNullinArray,removeNullinArray,replaceNulltoEmptyStringinArray,removeNullandEmptyStringinArray,sortarray,ifKeyExists,
  removeUnicodeCharacters,
  timeDifference,numberWithCommas,
  isNil,isFunction,isArray,isString,isBoolean,isUndefined,isNumber,isEmpty,isObject,isRegExp
}