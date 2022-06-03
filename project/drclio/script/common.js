window.onload = function() {

    document.querySelector("header").classList.toggle("top", !window.scrollY);

    window.addEventListener("scroll", () => {
        document.querySelector("header").classList.toggle("top", !this.scrollY);
        if(this.scrollY >= 500) document.querySelector('.gotop').classList.add("display");
        else document.querySelector('.gotop').classList.remove("display");
    });

    document.querySelector('.gotop').addEventListener("click",()=>{
        window.scrollTo(0,0);
    })

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

    document.querySelector(".search_modal").addEventListener("click", ()=>{
        document.getElementById("search_modal").click();
    });

    document.querySelector(".search_modal > .wrap").addEventListener("click", (e)=>e.stopPropagation());

    window.addEventListener("keydown", (event) => {
        if(event.keyCode == 27 && document.getElementById("site_map").checked) {
            document.getElementById("site_map").click();
        } else if( event.keyCode == 27 && !document.getElementById("site_map").checked && document.getElementById("search_modal").checked) {
            document.getElementById("search_modal").click();
        }
    });

    document.querySelector("footer").classList.toggle("line", !document.querySelector("section.contact"));
}