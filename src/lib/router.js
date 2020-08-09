import { routeLogin } from './views/templateLogin.js';
import { routeRegistry } from './views/templateRegistration.js';
import { routeError } from './views/templateRecuperationPassword.js';
import { routeHome } from './views/templateWall.js';

export const changeRoute = (hash) => {
    // if (hash === '#/') {
    return showTemplate(hash)
    /* }  else if (hash === '#/registro') {
            return showTemplate(hash)
        } else if (hash === '#/recuperar_contrasena') {
            return showTemplate(hash)
        } else if (hash === '#/home') {
            return showTemplate(hash)
        } else {
            return showTemplate(hash)
        }*/
};

const showTemplate = (hash) => {
    switch (hash) {
        case '#/':
            routeLogin();
            // containerRoot.appendChild(routeLogin());
            break
        case '#/registro':
            routeRegistry();
            break
        case '#/recuperar_contrasena':
            routeError();
            break
        case '#/home':
            routeHome();
            break
        default:
            routeLogin();
    }
}