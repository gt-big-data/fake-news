// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        var firstHref = $("a[href^='http']").eq(0).attr("href");
  
        console.log(firstHref);
  
        // This line is new!
        chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
      }
    }
  );

document.addEventListener('mouseup',function(event)
{
    //console.log(window.getSelection().toString());
    let sel = window.getSelection().toString();
    if(sel.length)
        chrome.extension.sendRequest({'message':'setText','data': sel},function(response){})
});