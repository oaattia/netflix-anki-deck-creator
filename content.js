chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.action == 'getDictCcTranslation') {
            // get the german translation in this case
            let subtitle = $('.player-timedtext-text-container').text();

            if(subtitle.length !== 0) {
                // send a message to bg
                chrome.runtime.sendMessage({action: 'sendSubtitle', subtitle: subtitle});
            }
        }
    }
);

// Allows to monitor changes in DOM.
var observer = new MutationObserver(function( mutations ) {   // based on https://gabrieleromanato.name/jquery-detecting-new-elements-with-the-mutationobserver-object/
    mutations.forEach(function( mutation ) {
        var newNodes = mutation.addedNodes; // DOM NodeList
        if( newNodes !== null ) { // If there are new nodes added
            var nodes = $( newNodes ); // jQuery set
            nodes.each(function() {
                if($(this).attr('class') !== undefined) {

                }
            });
        }
    });
});

// Configuration of the MutationObserver:
var config = {
    childList: true,
    subtree: true,
    characterData: true
};

// var target = $('#appMountPoint')[0];
// observer.observe(target, config);