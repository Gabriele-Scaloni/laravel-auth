/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */


/*   decommento la riga  qui sotto e commento l'altra sotto (vue.component('example-component'), require...),
 quella sopra mi prende tutti i componenti con estensione .vue ,
 poi mi monta i components senza richiamarli sempre, é 'automatizzato',
 legge tutti i file in components
*/  const files = require.context('./', true, /\.vue$/i)
 files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))



/*  exemple-component é un nome che assegno per poi usarlo come tag in layouts welcome 
ma dovrei usare ogno riga per chiamare ogni componente, per questo si decommenta(e quindi usa) la funzione sopra
 */
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
*/


/* questa funzione mi permette di far leggere al js anche i dati scritti in sequenza,
 in modo da poter mettere lo script js nell'head, invece che in fondo alla pagina
*/
document.addEventListener("DOMContentLoaded", function() {
    const app = new Vue({
        el: '#app',
    });
});
