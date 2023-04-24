function navigateToSection(event) {
    event.preventDefault();
    var seccionId = event.target.dataset.target;
    var seccion = document.getElementById(seccionId);
    window.scrollTo({
      top: seccion.offsetTop,
      behavior: 'smooth'
    });
  }
  