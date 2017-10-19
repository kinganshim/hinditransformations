/**
 * Conjugate and transform Hindi verbs and nouns
 *
 * Creator: Anton Shim
 */

/**
 * Return true if the word ends with a vowel shorthand called a "matra"
 */
function EndsWithMatra(word){
  
 //truncate any nasal sound since those don't count as a vowel or letter 
 if(word.endsWith("ं") || word.endsWith("ँ")){     
    word = word.slice(0,word.len-2);  
 }
  
 //Check for matra viwel symbol 
 if(word.endsWith("ा") || word.endsWith("ि") || word.endsWith("ी") || word.endsWith("ु") ||
    word.endsWith("ॉ") || word.endsWith("ू") || word.endsWith("ृ") || word.endsWith("ै") || 
    word.endsWith("ौ")){
      return true;
 }
  
  return false;
}

/**
 * Pluralise a masculine word
 * @param word - the word to pluralise
 */
function pluraliseMasculine(word) {
  //do not change invariable words like पिता, राजा, नेता
  if(inv == "y")
    return word;
  
  //plural based on ending
  if(word.endsWith("ा")){ //aa matra
    return word.slice(0,word.length - 1) + "े"; //change aa matra to e matra - लड़का->लड़के      
  }else if(word.endsWith("आ")){
    return word.slice(0,word.length - 1) + "ए"; //change aa to ee 
  }else if(word.endsWith("आँ")){
    return word.slice(0,word.length - 2) + "एँ"; //change aaN  to eeN धूआँ -> धूएँ  
  }  
  
  //no change for masculine nouns that don't end in aa
  return word;      
}


/**
 * Pluralise a feminine word
 * @param word - the word to pluralise
 */
function pluraliseFeminine(word) {
    
 if(word.endsWith("ी") || word.endsWith("ि")){ //ii matra or i matra
   return word.slice(0,word.length - 1) + "ियाँ"; //change ii or i matra to iyaaN - लड़की->लड़कियाँ, शक्ति->शक्तियाँ
 }else if(word.endsWith("ई")){
   return word.slice(0,word.length - 1) + "इयाँ"; //change ई to इयाँ  
 }else if(word.endsWith("ू")){ //uu matra
   return word.slice(0,word.length - 1) + "ुएँ"; //change uu matra to ueN
 }else if(word.endsWith("ऊ")){
   return word.slice(0,word.length - 1) + "उएँ"; //change ऊ to उएँ
 }else if(word.endsWith("या")){
   return word + "ँ"; //add nasalisation i.e. चिड़िया -> चिड़ियाँ
 }else if(EndsWithMatra(word)){
   return word + "एँ"; 
 }
   
 return word + "ें"; //add eN matra form 
  
}

/**
 * Transform a singular noun to a plural noun
 *
 * @param word /string/- the word to transform
 * @param type /string/- "m" for masculine nouns and "f" for feminine nouns
 * @param inv /string/ - "y" if the noun is invariable
 *
 */
function PLURALISE(word, type, inv) {
  if(type != "m" && type != "f"){
    return "n/a";
  } 
  
  String.prototype.endsWith = function(suffix) {
    return this.match(suffix+"$") == suffix;
  };    
  
  if(type == "m"){
    return pluraliseMasculine(word);
  }else if(type == "f"){
    return pluraliseFeminine(word);
  }
  
  throw "invalid word gender";
}


function DUMMY(word, type, inv){
  
 return type; 
}
