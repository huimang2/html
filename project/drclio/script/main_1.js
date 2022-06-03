
    const image = document.querySelectorAll(".DB_img > a");
    const menu = document.querySelectorAll(".DB_menu > a");
    
    var interval = setInterval(changeImage, 4000);

    function changeImage(a=1) {
        let i;
        for(i=0; i<image.length; i++) {
            if(image[i].classList.contains("selected")){
                break;
            }
        }
        image[i].classList.remove("selected");
        menu[i].classList.remove("selected");
        if(i==image.length-1 && a==1) {
            i=-1;
        }
        else if(i==0 && a==-1){
            i=image.length
        }
 
        image[i+a].classList.add("selected");
        menu[i+a].classList.add("selected");
    }
    
    for(let i=0; i<menu.length; i++){
        menu[i].addEventListener("click",(e)=>{
            clearInterval(interval);
            // console.log(menu[i]);
            document.querySelector(".DB_menu > a.selected").classList.remove("selected");
            document.querySelector(".DB_img > a.selected").classList.remove("selected");
            menu[i].classList.add("selected");
            image[i].classList.add("selected");
            interval = setInterval(changeImage, 4000);
        });
    }

    
    
