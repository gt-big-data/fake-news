// background.js

// Called when the user clicks on the browser action.
localStorage.setItem('seltext', "No text has been highlighted yet");
localStorage.setItem('prediction', "No prediction has been made yet");

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
    let seltext = request.data;
    localStorage.setItem('seltext', seltext);
    const data = {seltext};
    fetch('http://localhost:5000/send', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body : JSON.stringify(data),
    }).then(res => res.json().then(data => {
      localStorage.setItem('prediction', data.prediction)
    }))
});
 