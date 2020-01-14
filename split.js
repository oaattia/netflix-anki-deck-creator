var sentence = "Abwechslung vom Müll auf Hendersons Schreibtisch.";

var splittedString = sentence.split(" ");

for(var wordToTranslate of splittedString) {
    $.ajax({
        url: 'https://www.dict.cc/',
        method: "GET",
        data: { s : wordToTranslate },
        crossDomain: true,
        success: function (data) {
            console.log(data);
            alert(data);
        }
    });
}