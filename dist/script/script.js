const list = document.querySelectorAll(".list>a");
const phoneMode = document.querySelector(".menuListPhoneMode");

document.addEventListener("click", (clicado) => {
    if (
        clicado.target.tagName === "A" &&
        !clicado.target.classList.contains("logout")
    ) {
        clicado.preventDefault();
        const el = clicado.target;

        if (
            phoneMode.style.display === "" ||
            phoneMode.style.display == "none"
        ) {
            for (let i = 0; i < list.length; i++) {
                list[i].classList.remove("active");
                list[i].classList.add("hoverEffect");
            }
            clicado.target.classList.add("active");
            clicado.target.classList.remove("hoverEffect");
        } else {
            phoneMode.style.display = "none"
        }

        carregaPagina(el);

        async function carregaPagina(el) {
            try {
                const href = el.getAttribute("href");
                const response = await fetch(href);

                if (response.status !== 200)
                    throw new Error(`Pagina nao encontrada ${response.status}`);

                const html = await response.text();
                carregaResultado(html);
            } catch (err) {
                console.error(err);
            }
        }
    }
    function carregaResultado(html) {
        const resultado = document.querySelector(".content");
        const h1Receive = document.querySelector("#h1Receive");
        resultado.innerHTML = html;
        h1Receive.innerHTML = resultado.children[0].textContent;
    }
});
