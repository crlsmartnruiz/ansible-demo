function getContent() {
    const element = document.getElementsByClassName("content")[0];

    fetch("http://localhost/api").then(content => {
        content.json().then(resp => {
            console.log(resp);
            element.innerHTML = JSON.stringify(resp);
        })

    }).catch(err => {
        console.log(err);
    });
}

(function () {
    getContent();
})();