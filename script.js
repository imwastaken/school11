const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');
const form = document.getElementById('feedback-form');
const message = document.getElementById('form-message');
const visionToggle = document.getElementById('vision-toggle');
const year = document.getElementById('year');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (nav) {
      nav.classList.remove('open');
    }
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

if (visionToggle) {
  visionToggle.addEventListener('click', () => {
    document.body.classList.toggle('vision-mode');
  });
}

if (form && message) {
  form.addEventListener('submit', event => {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const text = form.message.value.trim();

    if (!name || !email || !subject || !text) {
      message.textContent = 'Пожалуйста, заполните все поля формы.';
      return;
    }

    message.textContent = 'Ваше обращение принято к рассмотрению.';
    form.reset();
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}
