//scroll к тарифам оплаты  по кнопке Get started for free
document.addEventListener("DOMContentLoaded", function () {
    initGetStartedForFreeBtn();
    initGetStartedBtn();
    initLearnMoreBtn();
  });
  
  function initGetStartedForFreeBtn() {
    const btn = document.getElementById("get-started-for-free-btn");
    const pricingSection = document.getElementById("pricing");
    if (btn && pricingSection) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        pricingSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  }
  //scroll к тарифам оплаты  по кнопке Get started
  function initGetStartedBtn() {
    const btn = document.getElementById("get-started-btn");
    const pricingSection = document.getElementById("pricing");
    if (btn && pricingSection) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        pricingSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  }
  //  scroll к информации по кнопке Learn more
  function initLearnMoreBtn() {
    const btn = document.getElementById("learn-more-btn");
    const introSection = document.getElementById("intro");
    if (btn && introSection) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        introSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  }


  //Оплата тарифов на PayPal 
// переход на страницу оплаты тарифа Basic
function initBasicBtn() {
  const btn = document.querySelector(".pricing-card--basic .pricing-card__button");

  if (!btn) {
    console.error("Кнопка Basic не найдена!");
    return;
  }

  btn.addEventListener("click", function (event) {
    event.preventDefault(); 
    
    // Переход на нужную страницу оплаты
    window.location.href = "https://www.paypal.com";
  });
}

document.addEventListener("DOMContentLoaded", initBasicBtn);
// переход на страницу оплаты тарифа Standard
function initStandardBtn() {
  const btn = document.querySelector(".pricing-card--standard .pricing-card__button");

  if (!btn) {
    console.error("Кнопка Standard не найдена!");
    return;
  }

  btn.addEventListener("click", function (event) {
    event.preventDefault(); 
    
    // Переход на нужную страницу оплаты
    window.location.href = "https://www.paypal.com";
  });
}

document.addEventListener("DOMContentLoaded", initStandardBtn);



// переход на страницу оплаты тарифа Premium 
function initpremiumBtn() {
  const btn = document.querySelector(".pricing-card--premium .pricing-card__button");

  if (!btn) {
    console.error("Кнопка premium не найдена!");
    return;
  }

  btn.addEventListener("click", function (event) {
    event.preventDefault(); 
    
    // Переход на нужную страницу оплаты
    window.location.href = "https://www.paypal.com";
  });
}
document.addEventListener("DOMContentLoaded", initpremiumBtn);


// переход по сыылке Обратная связь
function initFaqLink() {
  const link = document.querySelector(".faq__footer-link");

  if (link) {
      link.addEventListener("click", function(event) {
          event.preventDefault(); // отменяет стандартное поведение ссылки

          // Открытие страницы FAQ
          window.open("Feedback.html", "_blank"); // в новой вкладке
      });
  }
}
document.addEventListener("DOMContentLoaded", function() {
  initFaqLink();
});
