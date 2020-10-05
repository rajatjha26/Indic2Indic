/* Global Options */
globalOptions = {}
/* inPage2Unicode:
 * Takes File object, reads it's content and throws it to processInput()
 * @my_sourceFName: File Object
 * @options: Override globalOptions
 */
function indicTOindic(my_sourceFName, options, callback) {
    for (option in options) {
        globalOptions[option] = options[option];
    }
    callback(processInput(my_sourceFName));
}

/* processInput:
 * Processes given binary string from the inPage file and converts it to
 * Unicode format
 * @my_Data: Binary String
 */
let processInput=(my_Data)=>{
    src = globalOptions["inp"];
    dest = globalOptions["out"];
    finalData=convertScript(my_Data,src,dest);
    return finalData;
}
let convertScript=(data,src,dest)=>{
    if(src=="hindi"){
        if(dest=="bangla")
            return scriptconv(data,2304,2431,128,"pos");
        else if(dest=="gurumukhi")
            return scriptconv(data,2304,2431,256,"pos");
        else if(dest=="gujarati")
            return scriptconv(data,2304,2431,384,"pos");
        else if(dest=="oriya")
            return scriptconv(data,2304,2431,512,"pos");
        else if(dest=="tamil")
            return scriptconv(data,2304,2431,640,"pos");
        else if(dest=="telugu")
            return scriptconv(data,2304,2431,768,"pos");
        else if(dest=="kannada")
            return scriptconv(data,2304,2431,896,"pos");
        else if(dest=="malayalam")
            return scriptconv(data,2304,2431,1024,"pos");
        else
            return data;
    }
    else if(src=="bangla"){
        if(dest=="hindi")
            return scriptconv(data,2432,2559,128,"neg");
        else if(dest=="gurumukhi")
            return scriptconv(data,2432,2559,128,"pos");
        else if(dest=="gujarati")
            return scriptconv(data,2432,2559,256,"pos");
        else if(dest=="oriya")
            return scriptconv(data,2432,2559,384,"pos");
        else if(dest=="tamil")
            return scriptconv(data,2432,2559,512,"pos");
        else if(dest=="telugu")
            return scriptconv(data,2432,2559,640,"pos");
        else if(dest=="kannada")
            return scriptconv(data,2432,2559,768,"pos");
        else if(dest=="malayalam")
            return scriptconv(data,2432,2559,896,"pos");
        else
            return data;
    }
    else if(src=="gurumukhi"){
        if(dest=="hindi")
            return scriptconv(data,2560,2687,256,"Neg");
        else if(dest=="bangla")
            return scriptconv(data,2560,2687,128,"Neg");
        else if(dest=="gujarati")
            return scriptconv(data,2560,2687,128,"pos");
        else if(dest=="oriya")
            return scriptconv(data,2560,2687,256,"pos");
        else if(dest=="tamil")
            return scriptconv(data,2560,2687,384,"pos");
        else if(dest=="telugu")
            return scriptconv(data,2560,2687,512,"pos");
        else if(dest=="kannada")
            return scriptconv(data,2560,2687,640,"pos");
        else if(dest=="malayalam")
            return scriptconv(data,2560,2687,768,"pos");
        else
            return data;
    }
    else if(src=="gujarati"){
        if(dest=="hindi")
            return scriptconv(data,2688,2815,384,"neg");
        else if(dest=="bangla")
            return scriptconv(data,2688,2815,256,"neg");
        else if(dest=="gurumukhi")
            return scriptconv(data,2688,2815,128,"neg");
        else if(dest=="oriya")
            return scriptconv(data,2688,2815,128,"pos");
        else if(dest=="tamil")
            return scriptconv(data,2688,2815,256,"pos");
        else if(dest=="telugu")
            return scriptconv(data,2688,2815,384,"pos");
        else if(dest=="kannada")
            return scriptconv(data,2688,2815,512,"pos");
        else if(dest=="malayalam")
            return scriptconv(data,2688,2815,640,"pos");
        else
            return data;
    }
    else if(src=="oriya"){
        if(dest=="hindi")
            return scriptconv(data,2816-2943,512,"neg");
        else if(dest=="bangla")
            return scriptconv(data,2816-2943,384,"neg");
        else if(dest=="gurumukhi")
            return scriptconv(data,2816-2943,256,"neg");
        else if(dest=="gujarati")
            return scriptconv(data,2816-2943,128,"neg");
        else if(dest=="tamil")
            return scriptconv(data,2816-2943,128,"pos");
        else if(dest=="telugu")
            return scriptconv(data,2816-2943,256,"pos");
        else if(dest=="kannada")
            return scriptconv(data,2816-2943,384,"pos");
        else if(dest=="malayalam")
            return scriptconv(data,2816-2943,512,"pos");
        else
            return data;
    }
    else if(src=="tamil"){
        if(dest=="hindi")
            return scriptconv(data,2944,3071,640,"neg");
        else if(dest=="bangla")
            return scriptconv(data,2944,3071,512,"neg");
        else if(dest=="gurumukhi")
            return scriptconv(data,2944,3071,384,"neg");
        else if(dest=="gujarati")
            return scriptconv(data,2944,3071,256,"neg");
        else if(dest=="oriya")
            return scriptconv(data,2944,3071,128,"neg");
        else if(dest=="telugu")
            return scriptconv(data,2944,3071,128,"pos");
        else if(dest=="kannada")
            return scriptconv(data,2944,3071,256,"pos");
        else if(dest=="malayalam")
            return scriptconv(data,2944,3071,384,"pos");
        else
            return data;
    }
    else if(src=="telugu"){
        if(dest=="hindi")
            return scriptconv(data,3072,3199,768,"neg");
        else if(dest=="bangla")
            return scriptconv(data,3072,3199,640,"neg");
        else if(dest=="gurumukhi")
            return scriptconv(data,3072,3199,512,"neg");
        else if(dest=="gujarati")
            return scriptconv(data,3072,3199,384,"neg");
        else if(dest=="oriya")
            return scriptconv(data,3072,3199,256,"neg");
        else if(dest=="tamil")
            return scriptconv(data,3072,3199,128,"neg");
        else if(dest=="kannada")
            return scriptconv(data,3072,3199,128,"pos");
        else if(dest=="malayalam")
            return scriptconv(data,3072,3199,256,"pos");
        else
            return data;
    }
    else if(src=="kannada"){
        if(dest=="hindi")
            return scriptconv(data,3200,3327,896,"neg");
        else if(dest=="bangla")
            return scriptconv(data,3200,3327,768,"neg");
        else if(dest=="gurumukhi")
            return scriptconv(data,3200,3327,640,"neg");
        else if(dest=="gujarati")
            return scriptconv(data,3200,3327,512,"neg");
        else if(dest=="oriya")
            return scriptconv(data,3200,3327,384,"neg");
        else if(dest=="tamil")
            return scriptconv(data,3200,3327,256,"neg");
        else if(dest=="telugu")
            return scriptconv(data,3200,3327,128,"neg");
        else if(dest=="malayalam")
            return scriptconv(data,3200,3327,128,"pos");
        else
            return data;
    }
    else{
        if(dest=="hindi")
            return scriptconv(data,3328,3455,1024,"neg");
        else if(dest=="bangla")
            return scriptconv(data,3328,3455,896,"neg");
        else if(dest=="gurumukhi")
            return scriptconv(data,3328,3455,768,"neg");
        else if(dest=="gujarati")
            return scriptconv(data,3328,3455,640,"neg");
        else if(dest=="oriya")
            return scriptconv(data,3328,3455,512,"neg");
        else if(dest=="tamil")
            return scriptconv(data,3328,3455,384,"neg");
        else if(dest=="telugu")
            return scriptconv(data,3328,3455,256,"neg");
        else if(dest=="kannada")
            return scriptconv(data,3328,3455,128,"neg");
        else
            return data;
    }
    
}
let scriptconv=(data,low,up,offset,dir)=>{
    result="";
    for(let j=0;j<data.length;j++){
        n = data.charCodeAt(j);
        if(n >= low && n<=up ){
            if(dir=="pos")
                n+=offset;
            else
                n-=offset;
        }
        result=result+String.fromCharCode(n);
    }
    return result;
}