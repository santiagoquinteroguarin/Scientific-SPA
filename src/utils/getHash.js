const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
/* 
?location.hash trae el fragmento de la url a partir de donde encuentre un #. En este caso traería #/1/.
?.slice(1) corta la url y muestra a partir del primer elemento. En este Caso el resultado es /1/.
?.toLocaleLowerCase() convierte a minúscula la cadena.
?.split(’/’) separa la cadena en un array, y elimina el / quedando un espacio vacio Ej [’’, ‘1’ ,’’].
?[1] trae el primer elemento del split anterior que en este caso es 1 (representa la id 1).
*/

export default getHash;

/* 
El hash es el contenido de una url que parte desde el signo de numero(#). Ej:

Código :

Url: http://www.example.com/index.html#algo-aqui
Hash: #algo-aqui

La forma más común de utilizarse y que quizás mucho ya conocen es la de hacer un scroll en la pantalla a la etiqueta HTML con esa ID asignada.

Si en la url el hash indica, por ejemplo… #4 (http://www.dominio.com/pagina.html#4); el navegador desplazará la pantalla hasta el elemento qué posea ese ID. Aquí tienen un ejemplo para que quede claro.

Hash con javascript

La forma de obtener el hash con javascript es la siguiente:
Código :

window.location.hash;
Sería práctico almacenarlo en una variable si lo vas a utilizar.
Código :

var jash = window.location.hash;
*/