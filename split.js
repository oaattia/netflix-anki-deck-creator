var sentence = "Leider musste ich sie zurücklassen.";

var splittedString = sentence.split(" ");

var http = new XMLHttpRequest();

for(var wordToTranslate of splittedString) {

    jQuery.get(
        'https://www.dict.cc/',
        {s: wordToTranslate},
        function(data) {
            // var html = jQuery(data).html();

            console.log(data);

        }
    )

}