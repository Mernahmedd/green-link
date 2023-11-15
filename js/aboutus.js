{
    let about_btns = document.querySelectorAll(".about-btns button");
    about_btns = Array.from(about_btns)
    let about_change = document.querySelectorAll(".about-change section")
    let header_btns = document.querySelectorAll(".header-btns li span");
    header_btns = Array.from(header_btns);
    let header_details = document.querySelectorAll('.fades div');
    let img_container = document.querySelectorAll('.img-container img')

    about_btns.forEach((btn) =>{
        btn.onclick = function(){
            about_btns.forEach(btn =>{
                btn.classList.remove('active')
            })
            this.classList.add('active')
            about_change.forEach((c) =>{
                c.classList.remove('active')
            })
            about_change[about_btns.indexOf(this)].classList.add("active");
        }
    })
}