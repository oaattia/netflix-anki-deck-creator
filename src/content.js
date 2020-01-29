chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.action === 'getDictCcTranslation') {
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
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        const newNodes = mutation.addedNodes; // DOM NodeList
        if( newNodes !== null ) { // If there are new nodes added
            const nodes = $( newNodes ); // jQuery set
            nodes.each(() => {
                if($(this).attr('class') !== undefined) {

                }
            });
        }
    });
});

// Configuration of the MutationObserver:
const config = {
    childList: true,
    subtree: true,
    characterData: true
};

// var target = $('#appMountPoint')[0];
// observer.observe(target, config);