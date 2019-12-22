// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
});


// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     console.log(request);die;
//     if (request.type == "notification") {
//         chrome.notifications.create('id1', request.options, function() { });
//     }
//     sendResponse();
// });
