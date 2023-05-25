import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav ul');
  const checkbox = menuToggle.querySelector('input[type="checkbox"]');

  menuToggle.addEventListener('click', function () {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !isExpanded);
  nav.classList.toggle('slide');
  });

  checkbox.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
     event.preventDefault();
     const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
     menuToggle.setAttribute('aria-expanded', !isExpanded);
     nav.classList.toggle('slide');
  }
  });

  checkbox.addEventListener('focus', function () {
  menuToggle.classList.add('focused');
  });

  checkbox.addEventListener('blur', function () {
  menuToggle.classList.remove('focused');
  });

  menuToggle.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
     event.preventDefault();
     checkbox.click();
  }
  });