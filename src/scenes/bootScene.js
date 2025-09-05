export class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        // Load ONLY essential assets
        this.load.image('loadingBg', 'assets/loading-bg.png');
        
        // Simple loading text
        this.add.text(640, 360, 'Loading...', {
            fontSize: '32px',
            color: '#ffffff'
        }).setOrigin(0.5);
    }

    create() {
        // Immediately go to Start scene
        this.scene.start('Start');
    }
}