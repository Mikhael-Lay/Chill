/* =======================================
   ACCOUNT DROPDOWN
======================================= */
const account = document.getElementById('accountDropdown');

account.addEventListener('click', () => {
  account.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!account.contains(e.target)) {
    account.classList.remove('active');
  }
});

/* =======================================
   FOOTER DROPDOWN (Below 1440px)
======================================= */
document.querySelectorAll('.footer-toggle').forEach((toggle) => {
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const parent = toggle.closest('.footer-item');

    if (window.innerWidth < 1440) {
      parent.classList.toggle('active');
    }
  });
});

/* =======================================
   CAROUSEL ARROWS
======================================= */
/* =======================
   ARROW BUTTON CAROUSEL
======================= */
document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
  const container = wrapper.querySelector('.content-container');
  const leftBtn = wrapper.querySelector('.arrow-btn.left');
  const rightBtn = wrapper.querySelector('.arrow-btn.right');

  // Scroll amount = width of one card (or partial scroll)
  const scrollAmount = container.clientWidth / 2;

  if (leftBtn && rightBtn && container) {
    leftBtn.addEventListener('click', () => {
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });

    rightBtn.addEventListener('click', () => {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
  }
});

