document.addEventListener('DOMContentLoaded', function() {
    btn = document.getElementById("summarise")
    if (btn) {
        btn.addEventListener("click", e => {
            btn.disabled = true;
            btn.innerHTML = "Summarising...";
            chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
                var url = tabs[0].url;
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "http://127.0.0.1:5000/summary?url=" + url, true);
                xhr.onload = function() {
                    var text = xhr.responseText;
                    const p = document.getElementById("output");
                    p.innerHTML = text;
                    btn.disabled = false;
                    btn.innerHTML = "Summarise";
                };
                xhr.send();
            });
        });
    }
    else
    {
        console.log("Button not working")
    }
});
