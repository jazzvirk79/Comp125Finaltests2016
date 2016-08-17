/**
 * FileName: app.js
 * 
 * @author Jagdeep Virk
 * @date August 17, 2016
 * 
 * StudentID: 300869382
 * 
 * @description This file is the main javascript file for the web site
 */var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    var stage;
    var helloLabel;
    var yDirection = 1;
    var xDirection = 1;
    var dy = 1;
    var dx = 1;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }
    
    function gameLoop() {
     
   
        stage.update();
    }
     function clickMeButton_clicked() {
        helloLabel.text = (helloLabel.text === "Hello World!") ? "Good Bye!" : "Hello World!";
    }
    function main() {
         clickMeButton = new objects.Button("../Assets/images/rollButton.png", core.CANVAS_WIDTH * 0.5, core.CANVAS_HEIGHT * 0.5, true);
        stage.addChild(clickMeButton);
        clickMeButton.on("click", clickMeButton_clicked);
        
    var die1 = createjs.Bitmap("..\Assets\images\blank.png");
    var die2 = createjs.Bitmap("..\Assets\images\blank.png");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
  
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map
 