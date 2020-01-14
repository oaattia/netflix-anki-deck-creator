chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        console.log(tabs);
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    if(request.type == 'translationTextType') {
        console.log('recieved the message from content js');
        $.ajax({
            url: 'http://deen.syn.dict.cc/',
            method: "GET",
            data: { s : request.germanSub },
            success: function(data) {
                console.log('got the data in phpstorm');
                console.log(data);
                // var parseURL=/communityRateInfo:"[^"]*"/.exec(data);
                // var score = "?";
                // if(parseURL !== null){
                //     score = parseURL[0].replace(/.*"([^"]*)"/,'$1');
                //     var storageID="filmweb_"+idNetflix;
                //     saveScore(storageID, score, targetURL, v);
                // }
            }
        });
    }
});
//
// var germanSub = $('.player-timedtext-text-container').text();
//
// if(germanSub) {
//     $.ajax({
//         url: 'https://www.dict.cc/',
//         method: "GET",
//         data: { s : 'hallo' },
//         success: function(data) {
//             console.log(data);
//             // var parseURL=/communityRateInfo:"[^"]*"/.exec(data);
//             // var score = "?";
//             // if(parseURL !== null){
//             //     score = parseURL[0].replace(/.*"([^"]*)"/,'$1');
//             //     var storageID="filmweb_"+idNetflix;
//             //     saveScore(storageID, score, targetURL, v);
//             // }
//         }
//     });
// }
