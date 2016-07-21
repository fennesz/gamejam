/// <reference path="../../_d.ts/phaser/phaser.d.ts"/>
"use strict";
import Protagonist = require("./Protagonist");

/**
 * Weapon class
 */

class Weapon {

  private weapon:Phaser.Weapon;

  constructor(public prot:Protagonist) {
    this.weapon = this.prot.mapState.add.weapon(1, 'bullet_16x16');
    this.weapon.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
    this.weapon.bulletKillDistance = 350;
    this.weapon.bulletSpeed = 400;
    this.weapon.trackSprite(prot, 14, 0);
    this.weapon.bulletAngleOffset = 90;
    this.prot.mapState.objectType("bullet").add(this.weapon.bullets);
  }

  shoot()
  {
    this.weapon.fire(this.prot);
  }
}
export = Weapon;
