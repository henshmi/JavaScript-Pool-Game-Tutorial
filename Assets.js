let sprites = {};
let assetsStillLoading = 0;

function assetsLoadingLoop(callback){

    if(assetsStillLoading){
        requestAnimationFrame(assetsLoadingLoop.bind(this, callback));
    }
    else{
        callback();
    }

}

function loadAssets(callback){

    function loadSprite(fileName){
        assetsStillLoading++;

        let spriteImage = new Image();
        spriteImage.src = "./assets/sprites/" + fileName;

        spriteImage.onload = function(){
            assetsStillLoading--;
        }

        return spriteImage;
    }

    sprites.background = loadSprite('spr_background.png');
    sprites.stick = loadSprite('spr_stick.png');
    sprites.whiteBall = loadSprite('spr_whiteBall.png');
    sprites.redBall = loadSprite('spr_redBall.png');
    sprites.yellowBall = loadSprite('spr_yellowBall.png');
    sprites.blackBall = loadSprite('spr_blackBall.png');
    
    
    
    

    assetsLoadingLoop(callback);
}

function getBallSpriteByColor(color){

    switch(color){

        case COLOR.RED:
            return sprites.redBall;
        case COLOR.YELLOW:
            return sprites.yellowBall;
        case COLOR.BLACK:
            return sprites.blackBall;
        case COLOR.WHITE:
            return sprites.whiteBall;
    }
}