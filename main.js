//import { Start } from './scenes/Start.js';
import GameScene from "./scenes/levelscene.js";

const config = {
    type: Phaser.AUTO,// phasor will uses webgl or canvas api
    title: 'Bootscene',
    description: '',
    parent: 'game-container',
    width: 1200,
    height: 480,
    backgroundColor: '#000000',
    pixelArt: true,
     antialias: false,        //  blurry edges fix
    roundPixels: true,       
    physics: {
        default: 'arcade' ,
         arcade: {
        gravity: { y: 500 },
        //debug: false
    }   
    },
    
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
     scene: [ GameScene ]
};

new Phaser.Game(config);
            