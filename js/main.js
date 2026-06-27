document.addEventListener("DOMContentLoaded", () => {

    const zagruzka = document.getElementById("zagruzka");

    window.addEventListener("load", () => {
        setTimeout(() => {
            zagruzka.style.opacity = "0";

            setTimeout(() => {
                zagruzka.style.display = "none";
            }, 700);

        }, 2200);
    });

    const shapka = document.getElementById("shapka");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            shapka.classList.add("prokrutka");
        } else {
            shapka.classList.remove("prokrutka");
        }

    });

    document.querySelectorAll("#shapka a").forEach(ssilka => {

        ssilka.addEventListener("click", (e) => {
            e.preventDefault();

            const id = ssilka.getAttribute("href").replace("#", "");
            const kuda = document.getElementById(id);

            if (!kuda) return;

            window.scrollTo({
                top: kuda.offsetTop - 70,
                behavior: "smooth"
            });

        });

    });

    const skritie_bloki = document.querySelectorAll(".skrito");

    const sledilka = new IntersectionObserver((shtuki) => {

        shtuki.forEach(shtuka => {

            if (shtuka.isIntersecting) {
                shtuka.target.classList.add("pokazano");
            }

        });

    }, {
        threshold: 0.15
    });

    skritie_bloki.forEach(blok => sledilka.observe(blok));

    const sloj1 = document.querySelector(".sloj.sloj1");
    const sloj2 = document.querySelector(".sloj.sloj2");
    const sloj3 = document.querySelector(".sloj.sloj3");

    let myshX = 0;
    let myshY = 0;

    let tekX = 0;
    let tekY = 0;

    document.addEventListener("mousemove", (e) => {

        myshX = (e.clientX / window.innerWidth) - 0.5;
        myshY = (e.clientY / window.innerHeight) - 0.5;

    });

    function dvizhuha() {

        tekX += (myshX - tekX) * 0.04;
        tekY += (myshY - tekY) * 0.04;

        if (sloj1 && sloj2 && sloj3) {

            sloj1.style.transform =
                `translate(${tekX * 8}px, ${tekY * 8}px) scale(1.1)`;

            sloj2.style.transform =
                `translate(${tekX * 16}px, ${tekY * 16}px) scale(1.1)`;

            sloj3.style.transform =
                `translate(${tekX * 28}px, ${tekY * 28}px) scale(1.1)`;
        }

        requestAnimationFrame(dvizhuha);
    }

    dvizhuha();

    const zagolovok = document.querySelector("#glavnaya h1");

    if (zagolovok) {

        const teksty = [
            "Воздуханово",
            "Воздуханово.",
            "Воздуханово..",
            "Воздуханово..."
        ];

        let i = 0;

        setInterval(() => {
            zagolovok.textContent = teksty[i];
            i = (i + 1) % teksty.length;
        }, 5000);
    }

});
