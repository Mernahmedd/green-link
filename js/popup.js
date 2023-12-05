{
    let team_btns = document.querySelectorAll(".b-enroll button")
    let cancel_btn = document.querySelectorAll(".popup-module .btn-wrap-cancel button")

    team_btns.forEach(btn =>{
        btn.onclick = function () { 
            document.querySelector(".popup-module").classList.add('show')
            document.querySelector(".popup-module").classList.remove('hide')
            document.querySelector(".popup-module").style.cssText = `display: block;`
        }
    })

    cancel_btn.forEach(btn =>{
        btn.onclick = function(){
            document.querySelector(".popup-module").classList.add("hide");
            document.querySelector(".popup-module").classList.remove("show");
            document.querySelector(".popup-module").style.cssText = `display: none;`
        }
    })

    document.onclick = function(e){
        if(e.target == document.querySelector(".popup-module")){
            document.querySelector(".popup-module").classList.add("hide");
            document.querySelector(".popup-module").classList.remove("show");
            document.querySelector(".popup-module").style.cssText = `display: none;`
        }
    }
}