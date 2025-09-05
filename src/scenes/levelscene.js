export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    this.load.spritesheet('background', 'assets/tempbg-Sheet.png', {
      frameWidth: 1200, frameHeight: 558
    });

    // Idle sheet (set frame sizes to your real values)
    this.load.spritesheet('player', 'assets/2B_idle-Sheet.png', {
      frameWidth: 128, frameHeight: 128
    });

    // Walk sheet
    this.load.spritesheet('walk', 'assets/2B(run).png', {
      frameWidth: 128, frameHeight: 128
    });

    // Pod
    this.load.spritesheet('pod', 'assets/POD-Sheet.png', {
      frameWidth: 64, frameHeight: 64
    });
  }

  create() {
    // Background anim + sprite
    this.anims.create({
      key: 'bg-anim',
      frames: this.anims.generateFrameNumbers('background', { start: 0, end: 5 }),
      frameRate: 12,
      repeat: -1
    });
    this.bg = this.add.sprite(0, 0, 'background').setOrigin(0, 0);
    this.bg.play('bg-anim');

    // Create player once
    this.player = this.physics.add.sprite(100, 400, 'player');
    this.player.setScale(1.2).setCollideWorldBounds(true);
    this.player.health = 1140
    this.player.maxHealth = 100;

    // Pod 
    this.pod = this.physics.add.sprite(300, 450, 'pod').setScale(3).setCollideWorldBounds(true);

    //  Create animations and input
    this.setupPlayerAnimations();
    this.setupPlayerMovement();

    //  Start idle
    this.player.play('player-idle');
  }

  setupPlayerAnimations() {
   
    this.anims.create({
      key: 'player-idle',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 5 }),
      frameRate: 8,
      repeat: -1
    });
  
    this.anims.create({
      key: 'player-walk',
      frames: this.anims.generateFrameNumbers('walk', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'pod-idle',
      frames: this.anims.generateFrameNumbers('pod', { start: 0, end: 9 }),
      frameRate: 8,
      repeat: -1
    });
    this.pod.play('pod-idle');
  }

  setupPlayerMovement() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.wasd = this.input.keyboard.addKeys('W,S,A,D');
  }

  update() {
    this.player.setVelocityX(0);

    if (this.cursors.left.isDown || this.wasd.A.isDown) {
      this.player.setVelocityX(-200);
      this.player.play('player-walk', true);
      this.player.flipX = true;
    } else if (this.cursors.right.isDown || this.wasd.D.isDown) {
      this.player.setVelocityX(200);
      this.player.play('player-walk', true);
      this.player.flipX = false;
    } else {
      this.player.play('player-idle', true);
    }

    
  }
}
