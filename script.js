/* =========================================================
   DESIGN PORTFOLIO — SCRIPT
   Sections: data, masonry grid render, filters, lightbox,
   loader, scroll progress, custom cursor, reveal animation,
   navbar / mobile menu, back to top.
   ========================================================= */

(function () {
  "use strict";

  /* -------------------------------------------------------
     1. PROJECT DATA
     Replace `img` paths with your own files in
     assets/images/ — the same filenames are already
     wired into the markup below.
     ------------------------------------------------------- */
  const PROJECTS = [
    { id: 1,  category: "branding",   categoryLabel: "Social Media", name: "Summer Drop Carousel",      img: "img/designs/b1.png",  ratio: 1.25 },
    { id: 2,  category: "branding",   categoryLabel: "Poster",       name: "Nightfall Music Poster",     img: "img/designs/b2.png",  ratio: 1.5  },
    { id: 3,  category: "branding",     categoryLabel: "Logo",         name: "Ember & Oak Mark",           img: "img/designs/b3.png",  ratio: 1.0  },
    { id: 4,  category: "branding",   categoryLabel: "Banner",       name: "Marketplace Launch Banner",  img: "img/designs/b4.png",  ratio: 0.65 },
    { id: 5,  category: "branding", categoryLabel: "Branding",     name: "Salt & Stone Identity",      img: "img/designs/b5.png",  ratio: 1.15 },
    { id: 6,  category: "branding",    categoryLabel: "Print",        name: "Folded Kraft Business Card", img: "img/designs/b6.png",  ratio: 1.35 },
    { id: 7,  category: "branding",   categoryLabel: "Social Media", name: "Founder Story Reel Cover",   img: "img/designs/b7.png",  ratio: 1.4  },
    { id: 8,  category: "branding",   categoryLabel: "Branding",       name: "Analog Film Fest Poster",    img: "img/designs/b8.png",  ratio: 1.0  },
    { id: 9,  category: "branding",   categoryLabel: "Banner",       name: "Studio Anniversary Banner",  img: "img/designs/b9.png",  ratio: 0.7  },
    { id: 10, category: "branding",     categoryLabel: "Logo",         name: "Northline Studio Wordmark",  img: "img/designs/b10.png", ratio: 1.2  },
    { id: 11, category: "branding", categoryLabel: "Branding",     name: "Meridian Coffee Packaging",  img: "img/designs/b11.png", ratio: 1.3  },
    { id: 12, category: "branding",   categoryLabel: "Social Media", name: "Product Drop Teaser Grid",   img: "img/designs/b12.png", ratio: 1.05 },
    { id: 13, category: "banner",    categoryLabel: "Print",        name: "Linen Wedding Invite Suite", img: "img/designs/bn1.jfif", ratio: 1.45 },
    { id: 14, category: "logo",   categoryLabel: "Logo",       name: "Gallery Opening Logo",     img: "img/designs/m1.jfif", ratio: 1.55 },
    { id: 15, category: "logo",   categoryLabel: "Logo",       name: "Seasonal Sale Web Logo",   img: "img/designs/m2.jfif", ratio: 0.6  },
    { id: 16, category: "logo", categoryLabel: "Logo",     name: "Aster & Vine Brand Kit",     img: "img/designs/m3.jfif", ratio: 1.1  },
    { id: 17, category: "logo",   categoryLabel: "Logo", name: "Weekly Quote Series",        img: "img/designs/m4.jfif", ratio: 1.0  },
    { id: 18, category: "poster",   categoryLabel: "Logo",       name: "Hollow Coast Emblem",        img: "img/designs/p1.jfif", ratio: 1.3  },
    { id: 19, category: "poster",    categoryLabel: "Print",        name: "Restaurant Menu Redesign",   img: "img/designs/p7.jfif", ratio: 1.5  },
    { id: 20, category: "poster",   categoryLabel: "Poster",       name: "City Marathon Poster",       img: "img/designs/p2.jfif", ratio: 1.2  },
    { id: 21, category: "poster",   categoryLabel: "Poster",       name: "Foundry Type Specimen",      img: "img/designs/p3.jfif", ratio: 1.4  },
    { id: 22, category: "poster",   categoryLabel: "Poster",       name: "Behind the Scenes Post",      img: "img/designs/p4.jfif", ratio: 0.95 },
    { id: 23, category: "poster",   categoryLabel: "Poster",       name: "App Launch Store Banner",    img: "img/designs/p5.jfif", ratio: 0.68 },
    { id: 24, category: "poster",   categoryLabel: "Poster",       name: "Rivermark Co. Monogram",     img: "img/designs/p6.jfif", ratio: 1.15 },
    { id: 25, category: "poster",   categoryLabel: "Poster",       name: "Hollow Coast Emblem",        img: "img/designs/p8.jfif", ratio: 1.3  },
    { id: 26, category: "poster",    categoryLabel: "Print",        name: "Restaurant Menu Redesign",   img: "img/designs/p9.jfif", ratio: 1.5  },
    { id: 27, category: "poster",   categoryLabel: "Poster",       name: "City Marathon Poster",       img: "img/designs/p10.jfif", ratio: 1.2  },
    { id: 28, category: "poster",   categoryLabel: "Poster",       name: "Foundry Type Specimen",      img: "img/designs/p11.jfif", ratio: 1.4  },
    { id: 29, category: "poster",   categoryLabel: "Poster",       name: "Behind the Scenes Post",      img: "img/designs/p12.jfif", ratio: 0.95 },
    { id: 30, category: "social",   categoryLabel: "Social Media", name: "App Launch Store Banner",    img: "img/designs/s1.png", ratio: 0.68 },
    { id: 31, category: "social",   categoryLabel: "Social Media", name: "Rivermark Co. Monogram",     img: "img/designs/s2.png", ratio: 1.15 },
    { id: 32, category: "social",   categoryLabel: "Social Media", name: "Rivermark Co. Monogram",     img: "img/designs/s3.png", ratio: 1.15 },
    { id: 33, category: "social",   categoryLabel: "Social Media", name: "Rivermark Co. Monogram",     img: "img/designs/s4.png", ratio: 1.15 },
    { id: 34, category: "social",   categoryLabel: "Social Media", name: "Rivermark Co. Monogram",     img: "img/designs/s5.png", ratio: 1.15 },
    { id: 35, category: "print",   categoryLabel: "Logo",       name: "Hollow Coast Emblem",        img: "img/designs/site1.png", ratio: 1.3  },
    { id: 36, category: "print",   categoryLabel: "Logo",       name: "Hollow Coast Emblem",        img: "img/designs/site2.png", ratio: 1.3  },
    { id: 37, category: "print",   categoryLabel: "Logo",       name: "Hollow Coast Emblem",        img: "img/designs/site3.png", ratio: 1.3  }
  ];

  const BASE_W = 600; // fallback preview image base width
  const grid = document.getElementById("portfolioGrid");

  /* -------------------------------------------------------
     2. BUILD PORTFOLIO GRID
     ------------------------------------------------------- */
  function buildGrid() {
    const frag = document.createDocumentFragment();

    PROJECTS.forEach((project) => {
      const card = document.createElement("article");
      card.className = "card";
      card.dataset.category = project.category;
      card.dataset.id = project.id;

      const fallbackH = Math.round(BASE_W * project.ratio);
      const fallbackSrc = `https://picsum.photos/seed/design${project.id}/${BASE_W}/${fallbackH}`;

      card.innerHTML = `
        <button class="card__btn" aria-label="Open ${project.name} preview" data-open="${project.id}">
          <div class="card__media">
            <img
              class="card__img"
              src="${project.img}"
              data-fallback="${fallbackSrc}"
              alt="${project.name} — ${project.categoryLabel} design"
              loading="lazy"
              onerror="this.onerror=null; this.src=this.dataset.fallback;"
            >
            <div class="card__overlay">
              <span class="card__category">${project.categoryLabel}</span>
              <span class="card__name">${project.name}</span>
            </div>
            <span class="card__view" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </span>
          </div>
        </button>
      `;
      frag.appendChild(card);
    });

    grid.appendChild(frag);
  }

  /* -------------------------------------------------------
     3. TRUE MASONRY: compute grid-row-end span per card
     from the image's real rendered height, using the
     grid's row unit + gap (matches CSS grid-auto-rows).
     ------------------------------------------------------- */
  function resizeCard(card) {
    const rowUnit = 8;   // must match .portfolio__grid grid-auto-rows
    const gap = parseFloat(getComputedStyle(grid).gap) || 22;
    const media = card.querySelector(".card__media");
    const contentHeight = media.getBoundingClientRect().height;
    const span = Math.ceil((contentHeight + gap) / (rowUnit + gap));
    card.style.gridRowEnd = `span ${span}`;
  }

  function resizeAllCards() {
    document.querySelectorAll(".card").forEach(resizeCard);
  }

  function initMasonry() {
    document.querySelectorAll(".card").forEach((card) => {
      const img = card.querySelector(".card__img");
      // Give each media block a natural height derived from the aspect ratio
      // as soon as we know it, so the grid can size correctly even before
      // (or if) the real asset loads.
      const project = PROJECTS.find((p) => String(p.id) === card.dataset.id);
      const setHeight = () => {
        const width = card.getBoundingClientRect().width;
        card.querySelector(".card__media").style.height = `${width * project.ratio}px`;
        resizeCard(card);
      };
      setHeight();
      if (img.complete) {
        setHeight();
      } else {
        img.addEventListener("load", setHeight);
      }
    });
  }

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.querySelectorAll(".card").forEach((card) => {
        const project = PROJECTS.find((p) => String(p.id) === card.dataset.id);
        const width = card.getBoundingClientRect().width;
        card.querySelector(".card__media").style.height = `${width * project.ratio}px`;
        resizeCard(card);
      });
    }, 150);
  });

  /* -------------------------------------------------------
     4. STAGGERED REVEAL FOR CARDS + GENERAL REVEAL ELEMENTS
     ------------------------------------------------------- */
  function initReveal() {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const card = entry.target;
            const delay = (Array.from(grid.children).indexOf(card) % 8) * 60;
            setTimeout(() => card.classList.add("is-in"), delay);
            cardObserver.unobserve(card);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".card").forEach((card) => cardObserver.observe(card));
  }

  /* -------------------------------------------------------
     5. FILTERS
     ------------------------------------------------------- */
  function initFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        buttons.forEach((b) => {
          b.classList.remove("is-active");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("is-active");
        btn.setAttribute("aria-selected", "true");

        // ripple
        const ripple = document.createElement("span");
        ripple.className = "ripple";
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        btn.appendChild(ripple);
        ripple.addEventListener("animationend", () => ripple.remove());

        const filter = btn.dataset.filter;
        document.querySelectorAll(".card").forEach((card) => {
          const match = filter === "all" || card.dataset.category === filter;
          if (match) {
            card.classList.remove("is-hidden");
            requestAnimationFrame(() => {
              card.style.transition = "none";
              card.classList.remove("is-in");
              requestAnimationFrame(() => {
                card.style.transition = "";
                card.classList.add("is-in");
              });
            });
          } else {
            card.classList.remove("is-in");
            card.classList.add("is-hidden");
          }
        });
        setTimeout(resizeAllCards, 60);
      });
    });
  }

  /* -------------------------------------------------------
     6. LIGHTBOX
     ------------------------------------------------------- */
  function initLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCategory = document.getElementById("lightboxCategory");
    const lightboxName = document.getElementById("lightboxName");
    const btnClose = document.getElementById("lightboxClose");
    const btnPrev = document.getElementById("lightboxPrev");
    const btnNext = document.getElementById("lightboxNext");

    let currentIndex = 0;
    let visibleProjects = PROJECTS;

    function getVisible() {
      const activeFilter = document.querySelector(".filter-btn.is-active").dataset.filter;
      return activeFilter === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeFilter);
    }

    function open(id) {
      visibleProjects = getVisible();
      currentIndex = visibleProjects.findIndex((p) => p.id === id);
      if (currentIndex === -1) currentIndex = 0;
      render();
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      btnClose.focus();
    }

    function close() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    function render() {
      const project = visibleProjects[currentIndex];
      const cardImg = grid.querySelector(`.card[data-id="${project.id}"] .card__img`);
      lightboxImg.src = cardImg ? cardImg.currentSrc || cardImg.src : project.img;
      lightboxImg.alt = `${project.name} — ${project.categoryLabel} design`;
      lightboxCategory.textContent = project.categoryLabel;
      lightboxName.textContent = project.name;
    }

    function next() {
      currentIndex = (currentIndex + 1) % visibleProjects.length;
      render();
    }
    function prev() {
      currentIndex = (currentIndex - 1 + visibleProjects.length) % visibleProjects.length;
      render();
    }

    grid.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-open]");
      if (!btn) return;
      open(Number(btn.dataset.open));
    });

    btnClose.addEventListener("click", close);
    btnNext.addEventListener("click", next);
    btnPrev.addEventListener("click", prev);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) close();
    });

    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    });

    // Swipe support
    let touchStartX = 0;
    lightbox.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    lightbox.addEventListener("touchend", (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const delta = touchEndX - touchStartX;
      if (Math.abs(delta) > 40) {
        delta < 0 ? next() : prev();
      }
    }, { passive: true });
  }

  /* -------------------------------------------------------
     7. LOADER
     ------------------------------------------------------- */
  function initLoader() {
    const loader = document.getElementById("loader");
    window.addEventListener("load", () => {
      setTimeout(() => loader.classList.add("is-hidden"), 350);
    });
    // Safety fallback in case 'load' fires very late
    setTimeout(() => loader.classList.add("is-hidden"), 2500);
  }

  /* -------------------------------------------------------
     8. SCROLL PROGRESS BAR
     ------------------------------------------------------- */
  function initScrollProgress() {
    const bar = document.getElementById("scrollProgress");
    function update() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${pct}%`;
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* -------------------------------------------------------
     9. CUSTOM CURSOR (desktop / fine-pointer only)
     ------------------------------------------------------- */
  function initCursor() {
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!supportsFinePointer) return;

    document.body.classList.add("has-cursor");
    const cursor = document.getElementById("cursor");
    const dot = document.getElementById("cursorDot");

    let mouseX = 0, mouseY = 0, dotX = 0, dotY = 0;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    });

    function animateDot() {
      dotX += (mouseX - dotX) * 0.35;
      dotY += (mouseY - dotY) * 0.35;
      dot.style.left = `${dotX}px`;
      dot.style.top = `${dotY}px`;
      requestAnimationFrame(animateDot);
    }
    animateDot();

    document.querySelectorAll(".card, .filter-btn, .navbar__logo, .social-icon, .back-to-top, a, button").forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("is-hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover"));
    });
  }

  /* -------------------------------------------------------
     10. NAVBAR / MOBILE MENU
     ------------------------------------------------------- */
  function initNav() {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    hamburger.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("is-open");
      hamburger.classList.toggle("is-open", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
      hamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("is-open");
        hamburger.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* -------------------------------------------------------
     11. BACK TO TOP
     ------------------------------------------------------- */
  function initBackToTop() {
    const btn = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
      btn.classList.toggle("is-visible", window.scrollY > 600);
    }, { passive: true });

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* -------------------------------------------------------
     INIT
     ------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    buildGrid();
    initMasonry();
    initReveal();
    initFilters();
    initLightbox();
    initLoader();
    initScrollProgress();
    initCursor();
    initNav();
    initBackToTop();

    // Recalculate masonry once fonts / late-loading fallbacks settle
    window.addEventListener("load", resizeAllCards);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(resizeAllCards);
    }
  });
})();
