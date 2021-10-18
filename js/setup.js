$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    //Quantos elementos serão colocados na tela de acordo com a quantidade de px
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})