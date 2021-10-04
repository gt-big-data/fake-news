// background.js

// Called when the user clicks on the browser action.
let seltext = "ABC";
localStorage.setItem('seltext', null);

/*chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //var activeTab = tabs[0];
    //chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    //chrome.extension.getURL()
    chrome.tabs.create({url: ' http://127.0.0.1:5000/get-results?claim=' + window.seltext});
  });
});*/

// This block is new!
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {``
    if( request.message === "open_new_tab" ) {
      chrome.tabs.create({"url": request.url});
    }
  }
);


chrome.extension.onRequest.addListener(function(request, sender, sendResponse)
{
    /*switch(request.message)
    {
        case 'setText':
            window.seltext = request.data
        break;
         
        default:
            sendResponse({data: 'Invalid arguments'});
        break;
    }*/
    window.seltext = request.data;
    localStorage.setItem('seltext', window.seltext);
    alert("Highlighted Text: " + window.seltext);
});
 