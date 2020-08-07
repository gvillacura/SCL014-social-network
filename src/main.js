import { changeRoute } from './lib/router.js';

const init = () => {
    changeRoute(window.location.hash);
    window.addEventListener('hashchange', () => {
        console.log(window.location.hash);
        changeRoute(window.location.hash);
    });
};
window.addEventListener('load', init);

// cuando cambio pej a registry también me hace un load??

// al entrar pej a registry entra a chanRoute y a window.addEvent?? o solo a changeRoute
