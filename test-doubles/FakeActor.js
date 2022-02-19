module.exports = function({application, login, password}){

    /*
        si modelamos la aplicación entonces podemos simular situaciones en las que el usuario apaga
        e inicia una nueva instancia de la aplicación.

        entonces cuál es la relación entre usuario y aplicación?? es siempre así??
        también podríamos simular el hecho de acceder por una interfaz y responder por otra aunque eso no sería necesario
        es lo mismo que utilizar dos instancias diferentes de la aplicación
        si usamos dos instancias diferentes lo que estamos comprobando es que se sincronizan, pero dependerá de dónde estemos
        es decir, aquí estamos compartiendo espacio de memoria con la aplicación, tenemos que evitar que eso influya

        lo que tenemos es un usuario que ejecuta comandos contra una interfaz

        hay un mínimo de canales de comunicación que hay que establecer entre el usuario y la aplicación para que podamos empezar
        los canales de comunicación se establecen para cada usuario, cuando el usuario se sienta delante de una pantalla
        cuando el usuario mira su móvil, o entrega su email

        el usuario tiene que empezar a escuchar a la aplicación, elige la forma de hacerlo
        la aplicación está lista, y cuando el usuario está listo para escuchar de algún modo entonces puede empezar a enviarle comandos

        y qué pasa si le envía un comando sin escuchar nada?
            podemos no permitirlo, hacer necesario que se le pase una función que la aplicación va a utilizar para comunicar cosas al usuario

            esa información se puede pasar en forma de usuario, pero entonces el usuario que le pasamos es una clase que creamos nosotros y que tiene las funciones necesarias
            pasamos un usuario con una función getCredentials y todas las demás funciones que pueda necesitar ese caso de uso
            o podemos pasarlas por separado al llamar al caso de uso

    */

    return Object.freeze({
        createObject,
        getObjects,
        hasReceivedAnObject,
        getCredentials
    })

    async function createObject(){
        await application.createObject({getCredentials})
    }

    async function getCredentials(){
        return {login, password}
    }

    async function getObjects(){}
    async function hasReceivedAnObject(){ return true}
}