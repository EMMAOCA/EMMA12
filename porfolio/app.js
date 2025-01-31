document.getElementById("contact-form").addEventListener("submit", function (event){
    event.preventDefault();

    /* Las variables son un lugar de almacenamiento en donde se guarda un valor*/

    const serviceId = "service_rpy8fsh";
    const templateId = "template_sf93498";
    const apikey = "TQU6uXvnWyJFzkSac";

    emailjs.sendForm(serviceId,templateId,this,apikey).then((result)=>{
        console.log(result.text); /* imprime en la consola */
        this.reset();

        Swal.fire({
            title:"¡Mensaje Enviado!",
            text:"Gracias por contactarte",
            icon:"success",
            confirmButtonText:"Ok"
        })
    }).catch((error)=>{ /* cuando hay algun error , muestra otro mensaje */
        console.log(error);
        Swal.fire({
            title:"¡Error!",
            text:"Hubo un problema al enviar el formulario. Por favor intenta más tarde.",
            icon:"error",
            confirmButtonText:"Ok"
        })
    })

})