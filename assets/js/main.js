// ===== Active Coaching & Education (ACE) 網站共用互動 =====

document.addEventListener("DOMContentLoaded", function () {
  // 手機版導覽選單開關
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
      });
    });
  }

  // 聯絡表單：僅前端示意，尚未串接後端寄送或資料庫
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var success = document.getElementById("form-success");
      if (success) {
        success.classList.add("show");
      }
      form.reset();
    });
  }
});
