import { changeRoute } from './lib/router.js';

const init = () => {
    changeRoute(window.location.hash);
    window.addEventListener('hashchange', () => {
        console.log(window.location.hash);
        changeRoute(window.location.hash);
    });
};

window.addEventListener('load', init);
