chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            // var subs = document.getElementsByClassName('lln-subs-wrap')[0].innerText;
            var germanSub = document.getElementById("lln-subs").innerText;
            var alternativeSub = document.getElementById("lln-translations").innerText;

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://127.0.0.1:8765');

            xhr.send(JSON.stringify({
                    "action": "guiAddCards",
                    "version": 6,
                    "params": {
                        "note": {
                            "deckName": "Deutschsatzen",
                            "modelName": "Cloze",
                            "fields": {
                                "Text": germanSub + "\n" + alternativeSub,
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
        }
    }
);