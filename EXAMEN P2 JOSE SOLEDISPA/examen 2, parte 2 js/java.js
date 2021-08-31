//Crear una función JavaScript para guardar los datos de clientes 
//(Cédula, apellidos, nombres, dirección, teléfono, correo electrónico). 
//Poner el código en la respuesta Y enviar el enlace de GitLab al correo institucional

const {nombredeusuario,primernombre,apellidos,email,cedula,direccion,telefono,date} =
req.body;
	const date = new Date();
		database.query('INSERT INTO mp_cedula SET ?',
		{		
		  user:nombredeusuario,
		  cedula: cedula,
		  user_apellidos: apellidos,
		  user_nombres: primernombre,
		  user_direccion: direccion,
		  user_telef: telefono,
		  user_email: email,
		  user_date:date,
		})