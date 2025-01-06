document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section"); // Selecciona todas las secciones en el documento
  const darkModeToggle = document.getElementById("dark-mode-toggle"); // Obtiene el interruptor de modo oscuro del documento

  // Verificar el estado del interruptor al cargar la página
  if (localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode(); // Si el modo oscuro está habilitado, aplica los estilos oscuros
    darkModeToggle.checked = true; // Marca el interruptor como activado
  }

  // Agrega un event listener al interruptor de modo oscuro
  darkModeToggle.addEventListener("change", function() {
    if (this.checked) {
      enableDarkMode(); // Si el interruptor está activado, habilita el modo oscuro
      localStorage.setItem("darkMode", "enabled"); // Almacena el estado en localStorage
    } else {
      disableDarkMode(); // Si el interruptor está desactivado, deshabilita el modo oscuro
      localStorage.setItem("darkMode", "disabled"); // Almacena el estado en localStorage
    }
  });

  // Función para habilitar el modo oscuro
  function enableDarkMode() {
    document.body.classList.add("dark-mode"); // Agrega la clase "dark-mode" al body
    sections.forEach(section => {
      section.style.backgroundColor = "#2c3e50"; // Cambia el color de fondo de las secciones en modo oscuro
    });
  }

  // Función para deshabilitar el modo oscuro
  function disableDarkMode() {
    document.body.classList.remove("dark-mode"); // Elimina la clase "dark-mode" del body
    sections.forEach(section => {
      section.style.backgroundColor = "#ecf0f1"; // Restaura el color de fondo de las secciones en modo claro
    });
  }
});