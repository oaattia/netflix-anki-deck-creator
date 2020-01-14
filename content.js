chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            // var germanSub = document.getElementById("lln-subs").innerText;
            // var germanSub = document.getElementsByClassName('player-timedtext-text-container')[0].innerText;
            var germanSub = $('.player-timedtext-text-container').text();
            chrome.runtime.sendMessage({type: "translationTextType", germanSub: germanSub});
        }
    }
);