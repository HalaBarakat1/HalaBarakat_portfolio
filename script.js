// زر العودة للأعلى
document.getElementById("home-btn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// تأكد من أن الكود ينتظر DOM
window.addEventListener("DOMContentLoaded", () => {
  const successMsg = document.getElementById("success-message");
  const okBtn = document.getElementById("ok-btn");

  // اخفاء الرسالة عند فتح الصفحة
  successMsg.style.display = "none";

  // معالجة الفورم
  document
    .getElementById("recommendation-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("rec-name").value;
      const msg = document.getElementById("rec-msg").value;

      const newRec = document.createElement("div");
      newRec.classList.add("recommendation");
      newRec.innerText = msg + " – " + name;

      document.getElementById("recommendations-list").appendChild(newRec);

      // عرض الرسالة فقط عند إرسال التوصية
      successMsg.style.display = "flex";

      this.reset();
    });

  // إخفاء الرسالة عند الضغط على OK
  okBtn.addEventListener("click", () => {
    successMsg.style.display = "none";
  });
});