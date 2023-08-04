const closeIcon = document.querySelector(".close-icon");
const bxMenu = document.querySelector(".bx-menu");
const moonBut = document.querySelector(".moon");
const sunBut = document.querySelector(".sun");
const section = document.querySelector("section");

const menuListPhone = document.querySelector(".menuListPhoneMode");

sunBut.addEventListener("click", () => {
    document.body.style.backgroundColor = "var(--light)";
    document.body.style.color = "black";
    moonBut.style.display = "block";
    sunBut.style.display = "none";
});

moonBut.addEventListener("click", () => {
    document.body.style.backgroundColor = "var(--dark)";
    document.body.style.color = "var(--dark-grey)";

    sunBut.style.display = "block";
    moonBut.style.display = "none";
});

closeIcon.addEventListener("click", () => {
    if (menuListPhone.style.display !== "none") {
        menuListPhone.style.display = "none";
        bxMenu.classList.remove("invisible");
    }
});
bxMenu.addEventListener("click", () => {
    menuListPhone.style.display = "flex";
    bxMenu.classList.add("invisible");
});
