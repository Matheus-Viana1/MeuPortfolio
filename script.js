const menuToggle = document.getElementById('menu-toggle');
  const dropdownMenu = document.getElementById('dropdown-menu');

  menuToggle.addEventListener('click', (e) => {
    dropdownMenu.classList.toggle('open');
  });

  // Fecha o menu se clicar fora dele e do botão
  document.addEventListener('click', (e) => {
    if (!dropdownMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      dropdownMenu.classList.remove('open');
    }
  });
