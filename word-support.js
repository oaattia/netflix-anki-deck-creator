var word = document.getElementsByClassName('lln-word');

for (var i = 0; i < word.length; i++) {
    word[i].addEventListener('click', function() {
        var wordToTranslate = this.innerText;
        var translation = document.getElementsByClassName('def lln-styled-scrollbar')[0].innerText;

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://127.0.0.1:8765');

        xhr.send(JSON.stringify({
                "action": "guiAddCards",
                "version": 6,
                "params": {
                    "note": {
                        "deckName": "Deutschsatzen",
                        "modelName": "Basic",
                        "fields": {
                            "Front": wordToTranslate,
                            "Back": translation
                        },
                        "options": {
                            "closeAfterAdding": false
                        },
                        "tags": [
                            "german"
                        ]
                    }
                }
            }
        ));
    }, false);
}
