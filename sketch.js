var forestImg, forest;
var zombieAni, zombieBlue;
var inviGround;
var log1, log2, log3, log4, logGroup
var owl, owlAni
var bullet, bulletImg, bulletGroup

function preload(){
forestImg = loadImage("images/Forest3.jpg")
zombieAni = loadAnimation("images/catcher_1.png","images/catcher_2.png","images/catcher_3.png",
"images/catcher_4.png","images/catcher_5.png","images/catcher_6.png")
log1 = loadImage("images/rock_1.png")
log2 = loadImage("images/rock_2.png")
log3 = loadImage("images/rock_3.png")
log4 = loadImage("images/rock_4.png")
standingImg = loadImage("images/standing.png")
owlAni = loadAnimation("images/OWL_1-removebg-preview.png","images/OWL_2-removebg-preview.png","images/OWL_3-removebg-preview.png",
"images/OWL_4-removebg-preview.png","images/OWL_5-removebg-preview.png","images/OWL_6-removebg-preview.png",
"images/OWL_7-removebg-preview.png","images/OWL_8-removebg-preview.png","images/OWL_9-removebg-preview.png",
"images/OWL_10-removebg-preview.png")
bulletImg = loadImage("images/bullet.png")
}

function setup(){
    createCanvas(1500,600)
    forest = createSprite(600,300)
    forest.addImage(forestImg)
    forest.scale = 0.32
    forest.velocityX = -2
    zombieBlue= createSprite(50,550)
    zombieBlue.addAnimation("walking", zombieAni)
    zombieBlue.addAnimation("standing", standingImg)
    zombieBlue.scale = 0.95
    inviGround = createSprite(0,580,3000,20)
    inviGround.visible = false
    logGroup = new Group()
    bulletGroup = new Group()

}

function draw(){
    background("white")
   
    if(forest.x < 600 ){
        forest.x = 850
    }
    if(keyDown(UP_ARROW)){
        zombieBlue.velocityY = -8
    }
    zombieBlue.velocityY = zombieBlue.velocityY+0.5
    zombieBlue.collide(inviGround)
    if(keyDown("B")){
    spawnbullet()
    }
    spawnLog()
    spawnOwl()
    drawSprites()
    
}

function spawnLog(){
    if(frameCount%200 === 0){
        var log = createSprite(1500,530)
        var rand = Math.round(random(1,4))
        switch(rand){
            case 1: log.addImage(log1)
            break
            case 2: log.addImage(log2)
            break
            case 3: log.addImage(log3)
            break
            case 4: log.addImage(log4)
            break
            default:break
        }
        log.velocityX = -2
        log.scale = 0.85
        logGroup.add(log)
    }
}

function spawnOwl(){
    if(frameCount%200 === 0 ){
        var owl = createSprite(1500,Math.round(random(20,450)))
        owl.addAnimation("flying",owlAni)
        owl.velocityX = -4 
        owl.scale = 0.5
    }
}
 function spawnbullet(){
     if(frameCount%5 === 0){
         bullet = createSprite(110,434)
         bullet.addImage(bulletImg)
         bullet.scale = 0.1
         bullet.velocityX = 2
         bulletGroup.add(bullet)
     }

 }