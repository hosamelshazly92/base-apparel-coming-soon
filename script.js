let button = document.querySelector(".button"),
    email = document.querySelector("#email"),
    error = document.querySelector(".error"),
    tip = document.querySelector(".tip"),
    hint = document.querySelector(".hint");
//show tip
email.addEventListener("focus", function () {
    tip.style.display = "block";
});

email.addEventListener("mouseout", function () {
    tip.style.display = "none";
});

//validation
button.addEventListener("click", function () {
    if (email.value !== "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$") { 
        error.style.display = "block";
        hint.style.display = "block";
        email.style.border = "2px solid red";
    } else if (email.value == "[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$") {
        valid.style.display = "block";
    }
});

button.addEventListener("mouseout", function () {
    error.style.display = "none";
    hint.style.display = "none";
    email.style.border = "1px solid #ce9797";
});
