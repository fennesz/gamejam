/// <reference path="../_d.ts/phaser/phaser.d.ts"/>
"use strict";
import BaseGameApp  = require("./lib/BaseGameApp");
import MapState = require("./lib/MapState");
import GameState = require("./states/GameState");

/**
 * GameApp class
 */

class GameApp extends BaseGameApp {
  constructor(containerId: string, fullScreen?: boolean) {
    super(containerId, 960, 540, fullScreen);
    var maps = [ "start", "settings" ];
    for (var i in maps) {
      this.eng.state.add(maps[i] + "_state", new GameState(this, maps[i] + "_map", "assets/maps/" + maps[i] + ".json"));
    }
    maps = [ "game" ];
    for (var i in maps) {
      this.eng.state.add(maps[i] + "_room", new GameState(this, maps[i] + "_map", "assets/maps/" + maps[i] + ".json"));
    }
    this.saveFile.set("room", "mountain_room", true);
  }

  goTo(state: string) {
    super.goTo(state);
    switch (state) {
      case "win_state":
        this.saveFile.delete();
        break;
    }
  }

  switchTo(state: string) {
    super.switchTo(state);
    if (state.indexOf("_room") > 0) {
      this.saveFile.set("room", state);
    }
  }

}
export = GameApp;
