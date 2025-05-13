// DOM yüklendiğinde çalışacak
document.addEventListener("DOMContentLoaded", function () {
  const forumForm = document.getElementById("forumForm");
  const yorumlarDiv = document.getElementById("yorumlar");

  if (forumForm) {
    forumForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Sayfa yenilenmesin

      const isim = document.getElementById("isim").value.trim();
      const mesaj = document.getElementById("mesaj").value.trim();

      if (isim && mesaj) {
        const yorum = document.createElement("div");
        yorum.classList.add("yorum");
        yorum.innerHTML = `<strong>${isim}</strong><p>${mesaj}</p>`;
        yorumlarDiv.appendChild(yorum);

        // Formu temizle
        forumForm.reset();
      }
    });
  }
});
// Hamburger menü
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }

  // Forum yorum sistemi
  const forumForm = document.getElementById("forumForm");
  const yorumlarDiv = document.getElementById("yorumlar");

  if (forumForm) {
    forumForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const isim = document.getElementById("isim").value.trim();
      const mesaj = document.getElementById("mesaj").value.trim();

      if (isim && mesaj) {
        const yorum = document.createElement("div");
        yorum.classList.add("yorum");
        yorum.innerHTML = `<strong>${isim}</strong><p>${mesaj}</p>`;
        yorumlarDiv.appendChild(yorum);
        forumForm.reset();
      }
    });
  }
});
