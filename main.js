let countEl = document.getElementById('count-el');
let count = 0;

document.getElementById('btn').addEventListener('click', function() {
    count += 1;
    countEl.innerText = count;
});

document.getElementById('btn1').addEventListener('click', function() {
});
function save(param) {
let saveEl = document.getElementById("nap");
saveEl.textContent += " " + count
}