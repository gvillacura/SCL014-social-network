import { routeLogin } from './views/templateLogin.js';
import { routeRegistry } from './views/templateRegistration.js';
import { routeError } from './views/templateRecuperationPassword.js';
import { routeHome } from './views/templateWall.js';
import { routeProfile } from './views/templateProfile.js';

export const changeRoute = (hash) => {
    switch (hash) {
    case '#/':
        routeLogin();
        break;
    case '#/registro':
        routeRegistry();
        break;
    case '#/recuperar_contrasena':
        routeError();
        break;
    case '#/home':
        routeHome();
        break;
    case '#/Profile':
        routeProfile();
        break;
    default:
        routeLogin();
    }
};
