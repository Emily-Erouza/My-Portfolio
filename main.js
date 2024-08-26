$(".on").hide()
$(".warning").hide()
$(".click").click(()=>{
$(".warning").toggle()

})

$('.showhide-nav').click(()=>{
    $("#title").toggle()
   $(".nav-paragraph").toggle()
   $(".search-input").toggle()
})

// $("body").click(()=>{
//     $(".warning").toggle()
// })

$("#dark-light").click(()=>{
$(".nav-bar").toggleClass("light")
$(".on").toggle()
$(".off").toggle()
})