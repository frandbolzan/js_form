// Form
const myForm = event => {
    event.preventDefault()
    const formState = []
    const mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let edad = document.getElementById("edad");
    let email = document.getElementById("email");
    let comentario = document.getElementById("message");
    let condiciones = document.getElementById("checkbox");


    !nombre.value ? alert('Ingresa un nombre válido') :
    formState.push({ element: 'nombre', value: nombre.value })

    !apellido.value ? alert('Ingresa un apellido válido') :
    formState.push({ element: 'apellido', value: apellido.value })

    !edad.value || edad.value <= 0 ? alert('Edad inválida') :
    formState.push({ element: 'edad', value: edad.value })

    !email.value || !email.value.match(mailformat) ? alert('Ingresa un email válido') :
    formState.push({ element: 'email', value: email.value })

    !comentario.value ? alert('Deja un comentario, por favor') :
    formState.push({ element: 'comentario', value: comentario.value })

    !condiciones.value ? alert('Debes aceptar las condiciones') :
    formState.push({ element: 'condiciones', value: condiciones.value })

}