/* swipier script */

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 14,
  pagination: {
    /* el: ".swiper-pagination", */
    clickable: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
  },
});

/* sec3 btn script */
function change_btn(e) {
  var btns = document.querySelectorAll(".btn_style");
  btns.forEach(function (btn, i) {
    if (e.currentTarget == btn) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  console.log(e.currentTarget);
}

function changeImage1() {
  document.getElementById("images1").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024oct25_01_1024x1024.jpg?v=1728957220";
  document.getElementById("images2").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024oct25_02_1024x1024.jpg?v=1728957296";
  document.getElementById("images3").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024nov25_01_1024x1024.jpg?v=1730954482";
  document.getElementById("images4").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024nov25_02_1024x1024.jpg?v=1730954547";
  document.getElementById("images5").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024oct14_01_1024x1024.jpg?v=1727669563";
  document.getElementById("images6").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024oct14_02_1024x1024.jpg?v=1727669639";
}

function changeImage2() {
  document.getElementById("images1").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024sep25_01_1024x1024.jpg?v=1725417193";
  document.getElementById("images2").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024sep25_02_1024x1024.jpg?v=1725417244";
  document.getElementById("images3").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024sep13_02_1024x1024.jpg?v=1724811999";
  document.getElementById("images4").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024sep13_01_1024x1024.jpg?v=1724811999";
  document.getElementById("images5").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024jun25_02_1024x1024.jpg?v=1718087866";
  document.getElementById("images6").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024jun25_01_1024x1024.jpg?v=1718087866";
}

function changeImage3() {
  document.getElementById("images1").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024oct14_02_1024x1024.jpg?v=1727669639";
  document.getElementById("images2").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024oct14_01_1024x1024.jpg?v=1727669563";
  document.getElementById("images3").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024nov25_02_1024x1024.jpg?v=1730954547";
  document.getElementById("images4").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024nov25_01_1024x1024.jpg?v=1730954482";
  document.getElementById("images5").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024oct25_02_1024x1024.jpg?v=1728957296";
  document.getElementById("images6").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024oct25_01_1024x1024.jpg?v=1728957220";
}

function changeImage4() {
  document.getElementById("images1").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024jun25_01_1024x1024.jpg?v=1718087866";
  document.getElementById("images2").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024jun25_02_1024x1024.jpg?v=1718087866";
  document.getElementById("images3").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024sep13_01_1024x1024.jpg?v=1724811999";
  document.getElementById("images4").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024sep13_02_1024x1024.jpg?v=1724811999";
  document.getElementById("images5").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024sep25_02_1024x1024.jpg?v=1725417244";
  document.getElementById("images6").src =
    "https://cdn.shopify.com/s/files/1/0650/5981/5642/files/PL_2024sep25_01_1024x1024.jpg?v=1725417193";
}
