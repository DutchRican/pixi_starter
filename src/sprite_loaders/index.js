import { Loader, Sprite } from 'pixi.js';

const makeLoader = (app) => {
    const loader = new Loader();

    loader.add('cat', 'assets/cat.png')
        .load(setup);

    function setup () {
        let cat = new Sprite(loader.resources['cat'].texture);
        app.stage.addChild(cat);
    }
    return loader;
}

export default makeLoader;
