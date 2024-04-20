document
  .getElementById("whatsappForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se envíe el formulario por defecto

    // Obtener el mensaje del textarea
    var mensaje = document.getElementById("mensaje").value;

     // Verificar si el campo de mensaje está vacío
     if (mensaje.trim() === "") {
      // Mostrar un mensaje de error en rojo
      var mensajeError = document.createElement("div");
      mensajeError.classList.add("alert", "alert-danger");
      mensajeError.textContent = "Por favor, llena el campo de mensaje.";
      document.getElementById("whatsappForm").insertAdjacentElement("beforeend", mensajeError);
      return; // Detener la ejecución del código
  }

    // Formatear el mensaje para la URL de WhatsApp
    var mensajeWhatsApp = encodeURIComponent(mensaje);

    // Tu número de teléfono (reemplaza '543425336098' con tu número)
    var numeroTelefono = "543425336098";

    // URL de WhatsApp con el mensaje y tu número de teléfono
    var url =
      "https://api.whatsapp.com/send?phone=" +
      numeroTelefono +
      "&text=" +
      mensajeWhatsApp;

    // Redirigir a WhatsApp
    window.location.href = url;
  });
