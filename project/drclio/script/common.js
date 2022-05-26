window.onload = function() {

    document.querySelector("header").classList.toggle("top", !window.scrollY);

    window.addEventListener("scroll", (event) => {
        document.querySelector("header").classList.toggle("top", !this.scrollY);
    });

    document.querySelector("nav").addEventListener("mouseover", ()=>{
        document.querySelector("header").classList.remove("top");
    });

    document.querySelector("nav").addEventListener("mouseout", ()=>{
        document.querySelector("header").classList.toggle("top", !window.scrollY);
    });

    document.querySelectorAll("a[href='#']").forEach(v=>{
        v.addEventListener("click", e=>{
            e.preventDefault();
        });
    });

    document.querySelector("footer").classList.toggle("line", !document.querySelector("section.contact"));
}