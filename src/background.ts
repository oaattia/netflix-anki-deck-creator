import {getSubtitle} from './split';
import * as $ from 'jquery';

export default class ChromeExtension {
    constructor() {
        chrome.browserAction.onClicked.addListener(function(tab) {
            if(tab.title === 'Netflix') {
                chrome.notifications.create({
                    type: 'basic',
                    iconUrl: chrome.runtime.getURL('icon.png'),
                    title: 'User Update',
                    message: 'Dear User XYZ U have received an update',
                });

                chrome.tabs.sendMessage(tab.id, {action: 'getDictCcTranslation'});
            }
        });

        chrome.runtime.onMessage.addListener(function(request, sender, callback) {
            if (request.action === 'sendSubtitle') {
                let words = getSubtitle(request.subtitle);

                for(let i=0; i < words.length; i++) {
                    $.ajax({
                        url: 'http://deen.syn.dict.cc/',
                        method: "GET",
                        data: {s: words[i]},
                        success: function (data) {
                            let content = $(data);
                            // console.log(content.find('#tr1').first('.td7nl').text());

                            // var parseURL=/communityRateInfo:"[^"]*"/.exec(data);
                            //             // var score = "?";
                            //             // if(parseURL !== null){
                            //             //     score = parseURL[0].replace(/.*"([^"]*)"/,'$1');
                            //             //     var storageID="filmweb_"+idNetflix;
                            //             //     saveScore(storageID, score, targetURL, v);
                            //             // }
                            //         }
                        }
                    });
                }
            }
        });
    }
}