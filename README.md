# Description
    npm package for simple addons to node library.
# Installation
    `npm i nodejs-coreutils --save`
        
    let jsutil = require('nodejs-coreutils');

# Whatsnew
## Version V 0.2.5:
    added javascript level sleep function, added validations for faster response.

## Version V 0.2.3:
    added sortjson to sort json of any level

## Version V 0.2.2:
    added maskcodeFixedLength to mask and optimize data length

## Version V 0.2.1:
    Updated isJson functions, added filterJsonWebToken,getStackTrace,getdeviceinfofromRequest,getdeviceinfofromRequest,isUrl,cleartext,removenonAscii,validateIP,validateMultipleIp,isEmptyOrNull

## Version V 0.2.0:
    Updated isEmpty,isNil functions


## Version V 0.1.2:
    Added new methods for validation 
    isNil,isFunction,isArray,isString,isBoolean,isUndefined,isNumber,isEmpty,isObject,isRegExp


# How to use
Let's see about js code:
```js
    let jsutil = require('nodejs-coreutils');
    
    let _maskcode=jsutil.maskcodeFixedLength("shivapendemshivapendemshivapendemshivapendemshivapendem","x");  
    console.log(_maskcode);
        //shivxxxxxndem
    
    let _md5=jsutil.getMD5("shivapendem");  
    console.log(_md5);
        //360f72d87fd979f902a69f75d11ea498

    console.log(jsutil.isMD5(_md5));
        //true

    console.log(jsutil.maskcode("This is Sample Text","*"));
        //Thi************Text

    console.log(jsutil.toTitleCase("This is Sample Text"));
        //This Is Sample Text

    console.log(jsutil.searcharray([{"id":1,"name":"alex","age":20},{"id":2,"name":"bob","age":22}],"name","bob"));
        //1
    console.log(jsutil.searcharray([{"id":1,"name":"alex","age":20},{"id":2,"name":"bob","age":22}],"name","John"));
        //false

    console.log(jsutil.validateEmail("test@gmail.com"));
        //true
    console.log(jsutil.isEmail("test@gmail.com"));
        //true
    console.log(jsutil.validatePassword("Admin@1234"));
        //true
    console.log(jsutil.getdomain("test@gmail.com"));
        //gmail.com
    console.log(jsutil.containsspecialcharacters("Testin$?"));
        //false
    console.log(jsutil.generatehash("test"));
        //a94a8fe5ccb19ba61c4c0873d391e987982fbbd3
    console.log(jsutil.randomIntFromInterval(10,20));
        //18    
    console.log(jsutil.getvaluebetweenwithdecimals(10,20,2));
        //17.8
    console.log(jsutil.urlencodestring("index.html?data=home"));
        //index.html%3Fdata%3Dhome
    console.log(jsutil.generateGauthkey());
        //HE5DS32MKE4UCQ2JHBBHARKALBQWY5LD
    console.log(jsutil.getmobileauthImage("provider","name","HE5DS32MKE4UCQ2JHBBHARKALBQWY5LD"));
        //https://chart.googleapis.com/chart?chs=200x200&chld=M|0&cht=qr&chl=otpauth%3A%2F%2Ftotp%2Fname%3Fsecret%3DHE5DS32MKE4UCQ2JHBBHARKALBQWY5LD%26issuer%3Dprovider
    console.log(jsutil.getTexttoImage("textimage"))
        //https://chart.googleapis.com/chart?chs=200x200&chld=M|0&cht=qr&chl=textimage  
    console.log(jsutil.getTexttoImage("textimage"))
        //https://chart.googleapis.com/chart?chs=200x200&chld=M|0&cht=qr&chl=textimage  
    console.log(jsutil.validatemobileotp("HE5DS32MKE4UCQ2JHBBHARKALBQWY5LD","123456",3))
        //false
    console.log(jsutil.getHash("HE5DS32MKE4UCQ2JHBBHARKALBQWY5LD","123456"))
        //f71435280b296e1f26fe8147c34a4098ef2e2c1498a3b7482e9afc6f9b972d417a692e3c66710a982de77c6ede3da1c8e73b4637594cee19620e1b5f77f20b46
    console.log(jsutil.MystripFunction("<a href=''>Sample</a>"));   
        //Sample
    console.log(jsutil.stripHTMLTags("<a href=''>Sample</a>"));   
        //Sample
    console.log(jsutil.strip_tags("Sample 123<div> divcontent</div>"));
        //Sample 123 divcontent
    console.log(jsutil.customencrypt("sample"));
        //33d139554e3954eda1dfe68efd98f07b
    console.log(jsutil.customdecrypt("33d139554e3954eda1dfe68efd98f07b"));
        //sample
    console.log(jsutil.isJson('{"name":"value"}'))
        //true
    console.log(jsutil.encryptobject('{"name":"value"}'));  
        //34db862026beca735ac61d2b78e1f9b28d9cbcbfec4b2c70de2d5637f2841c1070fb720a22254d0dbe528c58741164dfc228bdf0a893546d23d8d8a6729ac491
    console.log(jsutil.getnumberfixeddecimal("123.456789",3));
        //123.456
    console.log(jsutil.removeexponentials(1.2345e5));
        //123450
    console.log(jsutil.countDecimals(1.2345e-5,3));
        //9
    console.log(jsutil.generateRandomString(5));
        //110j5
    console.log(jsutil.isEmpty(""));
        //true
    console.log(jsutil.isEmptyArray([]));
        //true  
    console.log(jsutil.isValidHttpUrl("https://www.google.com"));
        //true
    console.log(jsutil.trimtext("https://www.google.com",6));
        //https:...
    console.log(jsutil.isNull("test"));
        //false
    console.log(jsutil.getCurrentTimeinMilliSeconds());
        //1634466914855
    console.log(jsutil.replaceAll("Hello World","World","User"));
        //Hello User
    console.log(jsutil.trim(" Hello World "));
        //Hello World
    console.log(jsutil.toNumber(" 10 "));
        //10    
    console.log(jsutil.toBoolean(" true "));
        //trim
    console.log(jsutil.isInteger(20));
        //true
    console.log(jsutil.endsWith("Hello Word","d",true))
        //true
    console.log(jsutil.startsWith("Hello World","e",true));
        //false 
    console.log(jsutil.randomBoolean());
        //false 
    console.log(jsutil.isObjectEmpty('{"name":"value"}'));
        //false 
    console.log(jsutil.reversestring('Hello World'));
        //dlroW olleH
    console.log(jsutil.randomHexColor());
        //#952608   
    console.log(jsutil.numbertoStringWithComma(234233453453));
        //234,233,453,453   
        
    console.log(jsutil.uniquefromarray(['jeffrey', 'allie', 'patty', 'damon', 'zach', 'jeffrey', 'allie'])) 
        //[ 'jeffrey', 'allie', 'patty', 'damon', 'zach' ]

    console.log(jsutil.removeEmptyStringinArray(['jeffrey', '', 'patty', '', 'zach', 'jeffrey', 'allie']))  
        //[ 'jeffrey', 'allie', 'patty', 'damon', 'zach' ]

    console.log(jsutil.replaceEmptyStringtoNullinArray(['jeffrey', '', 'patty', '', 'zach', 'jeffrey', 'allie']))   
        //[  'jeffrey', null,  'patty',   null,  'zach',    'jeffrey',  'allie']

    console.log(jsutil.removeNullinArray(['jeffrey', '', 'patty', '', 'zach', null, 'allie']))  
        //[ 'jeffrey', '', 'patty', '', 'zach', 'allie' ]

    console.log(jsutil.replaceNulltoEmptyStringinArray(['jeffrey', '', 'patty', '', 'zach', null, 'allie']))    
        //[ 'jeffrey', '', 'patty', '', 'zach', '', 'allie' ]

    console.log(jsutil.removeNullandEmptyStringinArray(['jeffrey', '', 'patty', '', 'zach', null, 'allie']))    
        //[ 'jeffrey', 'patty', 'zach', 'allie' ]

    console.log(jsutil.sortarray([5,5,6,2,6,8,9,2],true));
    //[  9, 8, 6, 6,  5, 5, 2, 2 ]

    console.log(jsutil.sortarray([5,5,6,2,6,8,9,2],false));
    //[  2, 2, 5, 5, 6, 6, 8, 9 ]

    console.log(jsutil.timeDifference(new Date().getTime()/1000 - 10));
    //10 Seconds ago

    console.log(jsutil.numberWithCommas(10000000,5));
    //10,000,000.00000

    console.log(jsutil.filterJsonWebToken("asjdakfwrwfsdfjslkdfjsieurwerjkwenrwerkjwehr"));
    console.log(jsutil.getStackTrace());
    console.log(jsutil.getdeviceinfofromRequest(null));
    console.log(jsutil.isUrl("https://www.google.com"));
    console.log(jsutil.removesymbols("https://www.google.com24234"));
    console.log(jsutil.removenonAscii("https://www.google.com24234"));
    console.log(jsutil.validateIP("127.0.0.1"));
    console.log(jsutil.validateIP("1111:2222:3333:4444:5555:6666::"));
    console.log(jsutil.validateMultipleIp("1111:2222:3333:4444:5555:6666::;127.0.0.1",";"));

    ```
# Support

Happy to add more, and need any updates, do get in touch on my telegram over [@chigovera](https://t.me/chigovera)
