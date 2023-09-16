function updateCopywrite() {
    const el = document.getElementsByClassName('judah copy-year');
    const year = new Date().getFullYear().toString();
    for (let i = 0; i < el.length; i++) {
        el[i].innerHTML = year;
    }
}

if (window.addEventListener)
    window.addEventListener("load", updateCopywrite, false);
else if (window.attachEvent)
    window.attachEvent("onload", updateCopywrite);
else window.onload = updateCopywrite;
