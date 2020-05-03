import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  title= "browser-game"
  constructor() {
    this.config = {
      type: Phaser.AUTO,
      scene: [MainScene],
      parent: 'scenewindow',
      scale: {
        parent: 'scenewindow',
        mode: Phaser.Scale.CENTER_BOTH
      },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 100 }
        }
      }
    };
  }
  ngOnInit() {
    this.phaserGame = new Phaser.Game(this.config);
  }
}

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  create() {
    console.log('create method');
  }
  preload() {
    console.log('preload method');
  }
  update() {
    console.log('update method');
  }
}
