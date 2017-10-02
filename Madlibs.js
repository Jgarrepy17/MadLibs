//Mad Libs
// Jake Garrepy

//Initilize variables
var sentence=[];
var replacements=[];
var index=0;

//Initilize Users
alert ("Filler, Go Away.");
alert ("End with shift+6(^)");

//Fill sentence
populate(index, sentence, "word");
alert(sentence)

index = 0;
//Specify Position
alert (replacements);
populate(index, replacements, "position");
replace(index,sentence,replacements,"part of speech")
alert(sentence)
function populate(sindex, sarray, label){
	do{
		sarray[sindex]=prompt("Next "+label+"?");
		sindex = sindex+1;
	}
	while (sarray[sindex-1]!="^");
	console.log(sarray);
	sarray.splice(-1,1);
	return sarray;
}

function replace(sindex,sarray,rarray,label){
	for (words = 0; words < rarray.length; words++){
		sarray[rarray[words]] = prompt("Next" +label+"?")
	}
	return(sarray)
}