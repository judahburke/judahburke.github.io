function updateCopywrite() {
    const el = document.getElementsByClassName('judah copywrite');
    const year = new Date().getFullYear();
    for (let i = 0; i < el.length; i++) {
        el[i].innerHTML = `Judah Burke &copy; ${year}`;
    }
}

if (window.addEventListener)
    window.addEventListener("load", updateCopywrite, false);
else if (window.attachEvent)
    window.attachEvent("onload", updateCopywrite);
else window.onload = updateCopywrite;
