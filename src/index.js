import * as PIXI from 'pixi.js';
import makeLoader from './sprite_loaders';

const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    resolution: window.devicePixelRatio
});

const loader = makeLoader(app);

document.body.appendChild(app.view);
