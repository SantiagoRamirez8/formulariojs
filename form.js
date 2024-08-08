const form = document.getElementById('contact-form');
form.addEventListener('submit', sendEmail);
const serviceId = 'service_g3hssmz';
const templateId = 'template_p5gznna';
const apiKey = 'W5bx3aX5Z-qNmSka-';

function sendEmail(event) {
    event.preventDefault();
    
    emailjs.init(apiKey);
    
    emailjs.sendForm(serviceId, templateId, form)
        .then(result => {
            Swal.fire("Su mensaje se ha enviado con éxito");
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Hubo un error al enviar el mensaje, inténtelo más tarde"
            });
        });
}