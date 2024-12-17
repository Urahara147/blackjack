let messages = ["hello there", "welcome","is there anything you need"]
 let subEl = document.getElementById("sub")
for (let i = 0; i < 4; i += 1) {
 subEl.textContent += " " + messages [i]
}