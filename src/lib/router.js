import { routeLogin } from './views/templateLogin.js';
import { routeRegistry } from './views/templateRegistration.js';
import { routeError } from './views/templateError.js';
import { routeHome } from './views/templateHome.js';

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
    default:
        routeLogin();
    }
};
