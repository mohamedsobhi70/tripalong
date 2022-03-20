

// light box
document.querySelector(".lightbox .close").addEventListener("click", () => {
  document.querySelector(".lightbox ").classList.add("d-none");
  document.querySelector(".lightbox ").classList.remove("position-fixed");
});
document.querySelector(".all-photos").addEventListener("click", () => {
  document.querySelector(".lightbox ").classList.remove("d-none");
  document.querySelector(".lightbox ").classList.add("position-fixed");
});

document
  .querySelector(".lightbox .like")
  .addEventListener("click", function () {
    this.classList.toggle("text-primary");
  });

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],

  responsive: {
    0: {
      items: 4,
    },
    600: {
      items: 6,
    },
    1000: {
      items: 7,
    },
  },
});

//   end light box

$(function () {
  var dateFormat = "mm/dd/yy",
    from = $("#checkindate")
      .datepicker({
        defaultDate: "+1w",
        numberOfMonths: 1,
      })
      .on("change", function () {
        to.datepicker("option", "minDate", getDate(this));
      }),
    to = $("#checkoutdate")
      .datepicker({
        defaultDate: "+1w",
        numberOfMonths: 1,
      })
      .on("change", function () {
        from.datepicker("option", "maxDate", getDate(this));
      });

  function getDate(element) {
    var date;
    try {
      date = $.datepicker.parseDate(dateFormat, element.value);
    } catch (error) {
      date = null;
    }

    return date;
  }
});

document.querySelectorAll(".expand").forEach((el) =>
  el.addEventListener("click", function () {
    if (el.querySelector("span").innerHTML=="Expand") {
      el.innerHTML=`<span>Collapse</span> <i class="fas fa-angle-up mx-1 "></i>`
    }else{
      el.innerHTML=` <span>Expand</span><i class="fas fa-angle-down mx-1"></i>`

    }
  })
);


