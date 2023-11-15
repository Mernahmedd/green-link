{
  function show(value) {
    document.querySelector(".text-box").value = value;
  }
  
  let dropdown = document.querySelector(".dropdown")
  dropdown.onclick = function() {
      dropdown.classList.toggle("active")
      // if (document.querySelector(".text-box").value = 'العربية'){
      //   console.log('oooooooooo')
      //   document.querySelector(".container").classList.add('ar_style')
      // }
      // if (document.querySelector(".text-box").value = 'English'){
      //   document.querySelector(".container").classList.remove('ar_style')
      // }
  }
  
}