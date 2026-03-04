(() => {
  const btnHamburguesa = document.getElementById("btnHamburguesa");
  const btnCerrar = document.getElementById("btnCerrar");
  const fondoMenu = document.getElementById("fondoMenu");
  const menuMovil = document.getElementById("menuMovil");

  if (!btnHamburguesa || !btnCerrar || !fondoMenu || !menuMovil) return;

  function abrirMenu() {
    document.body.classList.add("menu-abierto");
    btnHamburguesa.setAttribute("aria-expanded", "true");
    menuMovil.setAttribute("aria-hidden", "false");
    fondoMenu.setAttribute("aria-hidden", "false");
  }

  function cerrarMenu() {
    document.body.classList.remove("menu-abierto");
    btnHamburguesa.setAttribute("aria-expanded", "false");
    menuMovil.setAttribute("aria-hidden", "true");
    fondoMenu.setAttribute("aria-hidden", "true");
  }

  btnHamburguesa.addEventListener("click", abrirMenu);
  btnCerrar.addEventListener("click", cerrarMenu);
  fondoMenu.addEventListener("click", cerrarMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarMenu();
  });

  menuMovil.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", cerrarMenu);
  });
})();
