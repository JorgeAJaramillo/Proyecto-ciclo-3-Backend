# proyecto_ciclo_3
Integrantes:

Jorge Augusto Jaramillo Jaramillo jorgeajaramillo@yahoo.es 
Interfaz Login y Logout con cuenta de Google mediante conexión 
con Firebase.

Jhoan Alexander Pimentel Ladino japimentell@unal.edu.co 
Interfaz maestro de usuarios.

Gilber Eduardo Pimentel Ladino ing.gilberpimentel@gmail.com 
Interfaz registro de ventas.

Emanuel Londoño Ruiz emanuel.londonor@gmail.com 
Interfaz registro de productos.

Adriana Sánchez  aasanchezc@correo.udistrital.edu.co
Interfaces maestro de ventas y de productos.


Trello: https://trello.com/invite/b/Z0oHqT6g/e552cde012c321e1039d7b49ae694c5b/grupo-de-trabajo-4-los-sprinters

-------------------------------------------- SPRINT 3 ------------------------------------------------

Se define la estructura del proyecto de Backend "Los Sprinters".

Se instala, configura y se prueba el servidor de express.

Se definen las rutas asociadas al CRUD de productos y usuarios.

Se definen los controladores asociados al CRUD de productos y usuarios.

Se Configura Mongodb.

Se definen los metodos de crear, listar, eliminar y actualizar para interactuar con la Base de Datos MongoDB.

Se realizan Pruebas mediante la utilizacion de la herramienta Postmany se verifica su creación en MongoDB.


--------------------------------------------   SPRINT    2      -----------------------------------------------

DESCRIPCIÓN GENERAL

•Crear la interfaz de usuario que permita Autenticarse con un tercero en este caso Oauth 2  

Creación de la interfaz de usuario mediante login con google, se entrega en HTML y CSS. En el momento se esta 
implementando en React y ya se encuentra vinculado a Firebase. Se ejecuta con npm start y abre en http://localhost:3000, 
sé encuentra en la rama Login. 


• Crear la interfaz para el registro de los productos (identificador del producto, descripción del producto, 
valor unitario, y estado: disponible, no disponible; no se contemplan impuestos ni valores adicionales) y crear 
la interfaz del maestro de productos (se pueden ver, buscar y actualizar los productos)

Se creó la interfaz de registro de los productos donde se pueden listar, modificar y actulizar los productos, haciendo uso
de un identificador (ID), para cada uno. Se entrega en REACT.
-- Se inicializa por medio de GitBush por medio del comando: npm start


• Crear la interfaz para el registro de las ventas (Identificador de la venta, valor total
de la venta, identificador, cantidad, y precio unitario de cada producto, fecha de venta, documento de identificación 
y nombre del cliente, y además deberá contar con un encargado de gestionar dicha venta, esvdecir, vendedor) y crear
la interfaz de usuario para el maestro de las ventas (se puede listar, buscar y actualizar las ventas,esto quiere 
decir que se le puede cambiar el estado: en proceso, cancelada y entregada o editar algún campo modificable)

Se crea la interfaz de ventas, donde se pueden buscar las ventas, modificarlas y listarlas. A cada venta se le asignan los
datos del comprador y del vendedor, para poder hacerles el seguimiento. Se entrega en HTML y CSS


• Crear la interfaz de usuario del maestro de usuarios para ver y actualizar el rol (administrador y vendedor) y el estado del
usuario (pendiente / autorizado / no autorizado)

Se creó la interfaz de los usuarios donde se pueden visualizar todos los activos, innactivos, roles y desde donde se puede 
hacer la modificación de éstos. Se entrega en HTM y CSS.
