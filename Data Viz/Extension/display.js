function call_py() {
    let seltext = localStorage.getItem('seltext');
    const data = {seltext};
    alert(seltext)
    fetch('http://localhost:5000/send', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body : JSON.stringify(data),
    }).then(res => res.json().then(data => {
      localStorage.setItem('prediction', data.prediction)
    }))
}

window.onload = function(){
    //document.getElementById('run').onclick = call_py
    let seltext = localStorage.getItem('seltext');
    let prediction = localStorage.getItem('prediction')
    document.getElementById('highlighted').innerHTML = "Highlighted Text: " + seltext;
    document.getElementById('prediction').innerHTML = "Prediction: " + prediction;
};