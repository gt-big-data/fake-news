function call_py() {
    let seltext = localStorage.getItem('seltext');
    if (seltext != null) {
        chrome.tabs.create({url: ' http://127.0.0.1:5000/get-results?claim=' + seltext});
    }
}

window.onload = function(){
    let seltext = localStorage.getItem('seltext');
    console.log(seltext);
    document.getElementById("run").onclick = call_py;
    if (seltext != null) {
        document.getElementById('highlighted').innerHTML = seltext;
    } else {
        document.getElementById('highlighted').innerHTML = "No text has been highlighted";
    }
};