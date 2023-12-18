// Toggle class active navbar
  const navbarNav = document.querySelector('#navbar');

  document.querySelector('#navbar-button').onclick = (e) => {
    navbarNav.classList.toggle('hidden');
    e.preventDefault();
  };