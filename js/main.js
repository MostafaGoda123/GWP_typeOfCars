let types = document.querySelectorAll(".type .image")
let photos = document.querySelectorAll(".photo .image")

types.forEach(img =>{
   img.addEventListener("click",function () {
      types.forEach(img =>{
         img.classList.remove("active")
      })
      img.classList.add("active")
      photos.forEach(ph => {
         ph.classList.remove("active")
      })
      photos.forEach(ph => {
         if ( img.getAttribute("data-name") == ph.getAttribute("data-name") )
         {
            ph.classList.add("active")
         }
      })
   })
})
