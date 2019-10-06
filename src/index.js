import { Application } from '@pixi/app';
const app = new Application({
    width: window.innerWidth,
    height: window.innerHeight,
    resolution: window.devicePixelRatio
});

document.body.appendChild(app.view);
