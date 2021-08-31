//Crear un archivo JSON para almacenar los datos de 10 clientes 
//(Cédula, apellidos, nombres, dirección, teléfono). 
//Poner el código en la respuesta Y enviar el enlace de 
//GitLab al correo institucional patricia.quiroz@uleam.edu.ec *

const clientes = document.querySelectorAll('.nombre_clientes');

clientes.forEach((clientes)=>{
    clientes.addEventListener('click', (nombre)=>{
        let id=nombre.target.getAttribute('clie-id');
        bd.forEach((clientes)=>{
            if(id == clientes.Id){
                const verDetalle=cliente.target.parentElement.lastElementChild;
                verDetalle.innerHTML=`
                                    <div class="lista">

                                        <div class="nom">
                                        <h2>Cedula:</h2>
                                        <p>${clientes.Cedula}</p>
                                        </div>
                                        <div class="nom">
                                            <h2>Apellidos:</h2>
                                            <p>${clientes.Apellidos}</p>
                                        </div>
                                        <div class="nom">
                                            <h2>Nombres:</h2>
                                            <p>${clientes.Nombres}</p>
                                        </div>
                                        <div class="nom">
                                            <h2>Direccion:</h2>
                                            <p>${clientes.Direccion}</p>
                                        </div>
                                        <div class="nom">
                                            <h2>Telefono:</h2>
                                            <p>${clientes.Telefono}</p>
                                        </div>
                                       </div>`
            }
        })
    })
})