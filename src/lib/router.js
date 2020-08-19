import { routeLogin } from './views/templateLogin.js';
import { routeRegistry } from './views/templateRegistration.js';
import { routeError } from './views/templateRecuperationPassword.js';
import { routeHome } from './views/templateWall.js';
// import { routeProfile } from './views/templateProfile.js';
import { routeEvents } from './views/templateEventos.js';

export const changeRoute = (hash) => {
    switch (hash) {
    case '#/inicio-sesion':
        routeLogin();
        break;
    case '#/registro':
        routeRegistry();
        break;
    case '#/recuperar-contrasena':
        routeError();
        break;
    case '#/muro':
        routeHome();
        break;
    case '#/conozca':
        routeEvents();
        break;
    default:
        routeLogin();
    }
};
