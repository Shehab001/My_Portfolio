var swiper = new Swiper(".slide-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  sliderPerGroup: 1,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function SendMail() {
  // alert("hi");
  var params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  //console.log(params);
  emailjs
    .send("service_gfqrgba", "template_mbpip0a", params)
    .then(function (res) {
      console.log(res, typeof res);
      if (res.status === 200) {
        alert("Mail Sent");
        document.getElementById("name").innerHTML(" ");
      }
    });
}
