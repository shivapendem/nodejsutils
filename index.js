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
        //mask("shiva@yopmail.com","X");
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
        if((master==null) || (position==null) || (value==null))
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
       
    function validateEmail(a)
    {
        var re=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
        if (a == '' || !re.test(a))
        {
            return false;
        }
        else 
            return true;
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
    function containsspecialcharacters(data)
    {
        if(data == null)
            return true;
        var _array=getlistofexceptioncharactersname();
        for(_loopvar=0;_loopvar<_array.length;_loopvar++)
        {
            if((data+"").toLowerCase().indexOf(_array[_loopvar].toLowerCase())>=0)
                return false;
        }
        return true;
    };
    function generatehash (a) {
        var hash = crypto.createHash('sha1');
        data = hash.update(a, 'utf-8');
        gen_hash= data.digest('hex');
        return gen_hash;
    };
    function randomIntFromInterval (min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    };
    function getvaluebetweennew (min,max,decimal) {
        var precision=1;
        for(var i=0;i<decimal;i++)
            precision=precision*10;

        return Math.floor(Math.random()*((max*precision)-(min+1)*precision)+min*precision)/precision;
    };
    function urlencodestring (query) {
        return encodeURIComponent(query).replace(/'/g,"%27").replace(/"/g,"%22")
    };
    function generateGauthkey (userinfo) {
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
    function validatemobileotp (key,password) {
        var tokenValidates = speakeasy.totp.verify({secret: key,encoding: 'base32',token: password,window: 4});
        var delta=-1;
        if(tokenValidates==true)
          delta=1;
        return {delta:delta};
    };
    function getHash(string,key){
        const hash = crypto.createHmac('sha512', key).update(string).digest('hex');
        return hash  ;
    };
    function MystripFunction(data)
    {
      var type = typeof data;
      //console.log(type);
      if(data == null)
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
          data[_loopvar]=MystripFunction(data[_loopvar]);
        }
        return data;
      }
      else if(type == 'object')
      {
        //console.log(data);
        for(var key in data) {
            var value = MystripFunction(data[key]);
            data[key]=value;
            //console.log(key+"  "+value);
        }
        return data;
      }
      else
      {
        console.error("MystripFunction "+type);
        console.error(data);
        // return stripHtml(data.toString()).result;
        return data;
      }     
    }

    function strip_tags(str) {
        if(str == null)
            return str;
        else
        {
            str = MystripFunction(str.toString());
            return MystripFunction(str.replace(/<\/?[^>]+>/gi, ''));
        }
    };
    function customencrypt(str) {
        var algorithm = 'aes256'; // or any other algorithm supported by OpenSSL
        var key = 'z1x2c3v4';
        var cipher = crypto.createCipher(algorithm, key);  
        var encrypted = cipher.update(str+"", 'utf8', 'hex') + cipher.final('hex');
        return encrypted;
    };
    function customdecrypt(str) {
        var algorithm = 'aes256'; // or any other algorithm supported by OpenSSL
        var key = 'z1x2c3v4';
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
    function encryptresponse(str_golb) {
        //let unescapeStr = querystring.unescape(str);
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
    },

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
    },
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
    },
    function countDecimals(value) {
        if (Math.floor(value) === value) return 0;
        return value.toString().split(".")[1].length || 0;
    },
    function generateRandomString(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%:;.,';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result;
}