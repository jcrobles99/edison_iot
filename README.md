# Interfaz IOT en Tarjeta Edison
#### Autores: Jesus Lara, Alejandro Lerma y Juan Robles
###### Fecha: Diciembre 2021
#
### OBJETIVO
Implementar la tarjeta de desarrollo Intel Edison para crear un sistema que por medio de una página HTML se controlen diversos módulos (sensores y actuadores).
### MATERIAL 
1.	Tarjeta de desarrollo Intel Edison
2.	Sensor de movimiento PIR
3.	Sensor de luz
4.	Relevador
5.	Buzzer

### DESARROLLO
Primero se definieron los puertos GPIO a utilizar para los sensores y actuadores contenidos en el kit de desarrollo Intel Edison por medio del programa Arduino.

Posteriormente se realizaron los archivos bat por medio de comunicación serial y el comando de Linux nano, estos con el fin de poder utilizar los actuadores o poder recibir las señales de los sensores.

Ya teniendo esto se prosiguió a realizar la página HTML para controlar los módulos. La página contiene un control de una alarma la cual se activa o desactiva a través de un checkbox, al estar activada se checa constantemente el sensor PIR para activar el buzzer en caso de presentarse movimiento. Además, contiene un botón que tiene la función de activar o desactivar un relevador el cual puede ser conectado a algún sistema eléctrico externo. Otra peculiaridad de la página es que tiene modo oscuro y este se activa cuando el sensor de luz la ausencia de la misma, esto con la finalidad de no cansar la vista por el brillo intenso innecesario de la pantalla.

La página está hecha a través de lenguaje HTML, las acciones de los botones y demás es con ayuda del lenguaje Javascript y el estilo de la página fue con lenguaje CSS.

![conexion]()
![interfazclaro]()
![interfazoscuro]()
