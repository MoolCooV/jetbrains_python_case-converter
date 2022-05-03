let upperButton = document.getElementById("upper-case");
let lowerButton = document.getElementById("lower-case");
let properButton = document.getElementById("proper-case");
let sentenceButton = document.getElementById("sentence-case");

let downloadButton = document.getElementById("save-text-file")

let textarea = document.getElementById("textarea");
let value = textarea.value;


function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


upperButton.addEventListener("click", () => {
    if (upperButton.classList.contains("button-active")){
        textarea.value = value;
        upperButton.classList.remove("button-active");
    }
    else {
        value = textarea.value;
        textarea.value = textarea.value.toUpperCase();

        lowerButton.classList.remove("button-active");
        properButton.classList.remove("button-active");
        sentenceButton.classList.remove("button-active");

        upperButton.classList.add("button-active");
    }
})
lowerButton.addEventListener("click", () => {
    if (lowerButton.classList.contains("button-active")){
        textarea.value = value;
        lowerButton.classList.remove("button-active");
    }
    else {
        value = textarea.value;
        textarea.value = textarea.value.toLowerCase();

        upperButton.classList.remove("button-active");
        properButton.classList.remove("button-active");
        sentenceButton.classList.remove("button-active");

        lowerButton.classList.add("button-active");
    }
})
properButton.addEventListener("click", () => {
    if (properButton.classList.contains("button-active")){
        textarea.value = value;
        properButton.classList.remove("button-active");
    }
    else {
        value = textarea.value;
        let properWords = [];
        for (let i of textarea.value.split(" ")){
            properWords.push(i[0].toUpperCase() + i.slice(1).toLowerCase());
        }
        textarea.value = properWords.join(" ");

        lowerButton.classList.remove("button-active");
        upperButton.classList.remove("button-active");
        sentenceButton.classList.remove("button-active");

        properButton.classList.add("button-active");
    }
})
sentenceButton.addEventListener("click", () => {
    if (sentenceButton.classList.contains("button-active")){
        textarea.value = value;
        sentenceButton.classList.remove("button-active");
    }
    else {
        value = textarea.value;
        textarea.value = textarea.value.toLowerCase().split('. ')
            .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1)).join('. ');

        lowerButton.classList.remove("button-active");
        properButton.classList.remove("button-active");
        upperButton.classList.remove("button-active");

        sentenceButton.classList.add("button-active");
    }
});
downloadButton.addEventListener("click", () => {
    download("text", textarea.value);
});