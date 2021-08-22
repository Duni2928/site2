function contentFilter() {
const filter = document.querySelectorAll("[data-filter]");
const cat = document.querySelectorAll(".projects__col");


cat.forEach(element => {
  let category = element.dataset.cat;

  filter.forEach(item => {
  let datafilter = item.dataset.filter;

  item.addEventListener("click", event => {
    event.preventDefault();
    if (datafilter=="all" || datafilter == category ) {
      element.classList.remove("hide")
    } else {
      element.classList.add("hide")
    }
    });

    });

  })
};
contentFilter();

function modal() {
  let id = document.querySelectorAll('#modal');
  let body = document.body;
  id.forEach(item => {
    item.addEventListener("click", event => {
      event.preventDefault();
      let modal = document.querySelectorAll(".modal");

      modal.forEach(el => {
        if (el.dataset.id == item.dataset.modal) {
          el.classList.add("show");
          body.classList.add("no-scroll");
          setTimeout(() =>{
            let childElement = el.getElementsByClassName("modal__dialog");
            childElement[0].style.transform="rotateX(0deg)"
          }, 200)
        }
      });

    })
  });

  let modalClose = document.querySelectorAll(".modal-close");
  modalClose.forEach(item => {
    item.addEventListener("click", event => {
    event.preventDefault();
    //let modal = document.querySelectorAll(".modal");
    //  modal.forEach(item => {
    //    item.classList.remove("show");
    //  });
    let childElement = item.parentNode.parentNode.getElementsByClassName("modal__dialog");
    childElement[0].style.transform="rotateX(90deg)"
    setTimeout(() =>{
      item.parentNode.parentNode.classList.remove("show");
      body.classList.remove("no-scroll")
    }, 200)
    //  let itemParent = item.closest('.modal');
    //  itemParent.classList.remove("show")
    });
    });

    let modal = document.querySelectorAll(".modal");
    modal.forEach(item => {
      item.addEventListener("click", event => {
        event.preventDefault();
        let childElement = item.getElementsByClassName("modal__dialog");
        childElement[0].style.transform="rotateX(90deg)"
        setTimeout(() =>{
          item.classList.remove("show");
          body.classList.remove("no-scroll")
        }, 200)
      });
    });

    let modalDialog = document.querySelectorAll(".modal__dialog");
    modalDialog.forEach(item => {
      item.addEventListener("click", event => {
        event.stopPropagation();
      });
    });


};
 modal();

 function burger() {
   let burger = document.querySelector(".burger");
   let nav = document.querySelector(".nav");
   burger.addEventListener("click", function (event) {
     event.preventDefault();
     burger.classList.toggle("active");
     nav.classList.toggle("active");
   })
 };

 burger();
//slider

 function slider() {
   let sliderWrapper = document.querySelector(".slider__wrapper");
   let sliderItems = document.querySelector(".slider__items");
   let slides = document.querySelectorAll(".slide");
   let slideNavBtn = document.querySelectorAll(".slide__nav__btn");
   let currentSlide = 0;
   let translateWidth = 0;
   let navBtnId = 0;
   let switchSlider = setInterval(nextSlide, 2000);

   sliderWrapper.addEventListener("mouseover", function() {
       clearInterval(switchSlider);
   });

   sliderWrapper.addEventListener("mouseout", function() {
        switchSlider = setInterval(nextSlide, 3000);
    });

   function goToSlide(n) {
     slideNavBtn[currentSlide].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
     currentSlide = (n + slides.length) % slides.length;
     translateWidth = -currentSlide * 100;
     sliderItems.style.transform = "translateX(" +translateWidth+ "%)";
     slideNavBtn[currentSlide].style.backgroundColor = "rgba(0, 0, 0, 1)";
   };

   function nextSlide() {
     goToSlide(currentSlide+1);
   };

   function prevSlide() {
     goToSlide(currentSlide-1);
   };

   let nextBtn = document.querySelector(".next__btn");
   nextBtn.addEventListener("click", () => {
     nextSlide()
   });

   let prevBtn = document.querySelector(".prev__btn");
   prevBtn.addEventListener("click", ()=> {
     prevSlide()
   });

   slideNavBtn.forEach(item => {
     item.addEventListener("click",()=> {
       navBtnId = item.dataset.slideto;
       let navBtnIdNumber = +navBtnId
       if (navBtnIdNumber != currentSlide) {
       goToSlide(navBtnIdNumber);
        }
      });
     });

 };
 slider()

 function headerFix(){
   window.addEventListener("scroll",chekScroll);
   document.addEventListener("DOMContentLoaded", chekScroll);
   function chekScroll() {
     let header = document.querySelector(".header");
     let scrollPos = window.scrollY;
     if(scrollPos > 0) {
     header.classList.add("fixed");
     } else {
     header.classList.remove("fixed")
     };
  }
};
headerFix();
/*
 $(function() {
   $("[data-filter]").on("click", function(event) {
     event.preventDefault();
     let filter = $(this).data("filter");
     if(filter == "all") {
       $("[data-cat]").show();
     } else {
       $("[data-cat]").each(function() {
         let cat = $(this).data("cat");
         if(cat != filter) {
           $(this).hide();
         } else {
           $(this).show();
         }
       });
     }
 });
});


$(function() {
  $("[data-modal]").on("click", function(event) {
  event.preventDefault();
    let modal = $(this).data("modal");

    $("[data-id]").each(function() {
      let modalId = $(this).data("id");
      if (modal == modalId) {
        $(this).show();
        $("body").addClass("no-scroll")
        setTimeout(() => {
          $(this).find(".modal__dialog").css({
            "transform" : "rotateX(0)"
          })
        }, 200);
      }
    });
  });

  $(".modal-close").on("click", function(event) {
    event.preventDefault();
    $(this).parents(".modal").find(".modal__dialog").css({
      "transform" : "rotateX(90deg)"
    });
    setTimeout(() => {
      $(this).parents(".modal").hide();
      $("body").removeClass("no-scroll")
    }, 200);

  });

  $(".modal").on("click", function(event) {
    $(this).parents(".modal").find(".modal__dialog").css({
      "transform" : "rotateX(90deg)"
    });
    setTimeout(() => {
      $(this).hide();
      $("body").removeClass("no-scroll");
    }, 200);

  });

  $(".modal__dialog").on("click", function(event) {
    event.stopPropagation();
  })
});

$(function(){
  let sliderWrapper = $(".slider__wrapper");
  let sliderItems = $(".slider__items");
  let slides = $(".slide");
  let slideNavBtn = $(".slide__nav__btn");
  let currentSlide = 0;
  let translateWidth = 0;
  let navBtnId = 0;
  let slideMin = 0;
  let slideMax = slides.length - 1;
  let switchSlider = setInterval(nextSlide, 2000);

  sliderWrapper.mouseover(function () {
    clearInterval(switchSlider)
  });

  sliderWrapper.mouseout(function () {
    switchSlider = setInterval(nextSlide, 2000);
  })

  $(".prev__btn").on("click", function(){
    slideNavBtn[currentSlide].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    prevSlide();
    slideNavBtn[currentSlide].style.backgroundColor = "rgba(0, 0, 0, 1)";
  });

  $(".next__btn").on("click", function(){
    nextSlide()
  });

 function nextSlide() {
   slideNavBtn[currentSlide].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
   if (currentSlide == slideMax || currentSlide < 0 || currentSlide > slideMax) {
     currentSlide = 0;
   } else {
     currentSlide++;
   };
   translateWidth = -currentSlide * 100;
   sliderItems.css({
     "transform" : "translate3d(" + translateWidth + "%, 0, 0)"
   });
   slideNavBtn[currentSlide].style.backgroundColor = "rgba(0, 0, 0, 1)";
  };

  function prevSlide() {
   slideNavBtn[currentSlide].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
   if (currentSlide == slideMin) {
     currentSlide = slideMax;
   } else {
     currentSlide--;
   };
   translateWidth = -currentSlide * 100;
   sliderItems.css({
     "transform" : "translate3d(" + translateWidth + "%, 0, 0)"
   });
   slideNavBtn[currentSlide].style.backgroundColor = "rgba(0, 0, 0, 1)";
  };

  slideNavBtn.on("click", function(){
      navBtnId = $(this).index();
      if (navBtnId != currentSlide) {
      slideNavBtn[currentSlide].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      translateWidth = -navBtnId * 100;
      sliderItems.css({
        "transform" : "translate3d("+translateWidth+"%, 0, 0 )"
      });
      slideNavBtn[navBtnId].style.backgroundColor = "rgba(0, 0, 0, 1)";
      currentSlide = navBtnId;
    };
    })
});

$(function() {
  $(window).on("scroll",(chekScroll));
  $(document).ready(chekScroll);
  function chekScroll() {
    let header = $(".header");
    let scrollPos = $(window).scrollTop();
    if(scrollPos > 0) {
    header.addClass("fixed");
    } else {
    header.removeClass("fixed")
    };
 }
});

$(function() {
  $(".burger").on("click", function (event) {
    event.preventDefault();
    $(".burger").toggleClass("active");
    $(".nav").toggleClass("active");
  })
})
*/
