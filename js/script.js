document.addEventListener("DOMContentLoaded", function () {
  // ===== Toggle Navbar untuk Tampilan Mobile =====
  const toggleBtn = document.querySelector(".togglebtn");
  const navLinks = document.querySelector(".navlinks");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      toggleBtn.classList.toggle("click");
    });

    // Menutup navbar saat mengklik di luar area navbar
    document.addEventListener("click", (e) => {
      if (
        !e.target.closest(".navlinks") &&
        !e.target.closest(".togglebtn") &&
        navLinks.classList.contains("open")
      ) {
        navLinks.classList.remove("open");
        toggleBtn.classList.remove("click");
      }
    });

    // Menutup navbar saat mengklik link navbar
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
          navLinks.classList.remove("open");
          toggleBtn.classList.remove("click");
        }
      });
    });
  }

  // ===== Smooth Scroll untuk Navigasi =====
  const anchors = document.querySelectorAll('a[href^="#"]');

  if (anchors.length > 0) {
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          if (navLinks.classList.contains("open")) {
            navLinks.classList.remove("open");
            toggleBtn.classList.remove("click");
          }
        }
      });
    });
  }

  // ===== Form Validation untuk Contact Section =====
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Ambil nilai input
      const name = contactForm.querySelector('input[type="text"]').value.trim();
      const email = contactForm
        .querySelector('input[type="email"]')
        .value.trim();
      const message = contactForm.querySelector("textarea").value.trim();

      // Validasi input
      if (name === "" || email === "" || message === "") {
        alert("Harap isi semua field!");
        return;
      }

      // Validasi email sederhana
      if (!validateEmail(email)) {
        alert("Harap masukkan email yang valid!");
        return;
      }

      // Jika semua valid, tampilkan pesan sukses
      alert("Pesan berhasil dikirim!");
      contactForm.reset();
    });
  }

  // Fungsi untuk validasi email
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // ===== Animasi Scroll =====
  const sections = document.querySelectorAll("section");

  if (sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }

  // ===== Efek Hover pada Section Shadow =====
  const shadowSections = document.querySelectorAll(".section-shadow");

  if (shadowSections.length > 0) {
    shadowSections.forEach((section) => {
      section.addEventListener("mouseenter", () => {
        section.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
        section.style.transform = "translateY(-5px)";
      });

      section.addEventListener("mouseleave", () => {
        section.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        section.style.transform = "translateY(0)";
      });
    });
  }

  // ===== Animasi Foto Profil di Header =====
  const heroPic = document.querySelector(".hero-pic img");

  if (heroPic) {
    heroPic.addEventListener("mouseenter", () => {
      heroPic.style.transform = "scale(1.2)";
    });

    heroPic.addEventListener("mouseleave", () => {
      heroPic.style.transform = "scale(1)";
    });
  }

  // ===== Animasi Ikon di Div Class Social =====
  const socialIcons = document.querySelectorAll(".hero-text .social i");

  if (socialIcons.length > 0) {
    socialIcons.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        icon.style.transform = "scale(1.2)";
        icon.style.transition = "transform 0.3s ease, color 0.3s ease";
      });

      icon.addEventListener("mouseleave", () => {
        icon.style.transform = "scale(1)";
      });
    });
  }

  // ===== Animasi Portfolio Items =====
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  if (portfolioItems.length > 0) {
    portfolioItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        item.style.transform = "translateY(-5px)";
        item.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
      });

      item.addEventListener("mouseleave", () => {
        item.style.transform = "translateY(0)";
        item.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      });
    });
  }
});
