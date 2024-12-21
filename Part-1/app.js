let favNumber = 20;
let baseURL = "http://numbersapi.com";

$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
    console.log(data);
});

let favNumbers = [15, 9, 12];
$.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
    console.log(data);
});

Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${baseURL}/${favNumber}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});