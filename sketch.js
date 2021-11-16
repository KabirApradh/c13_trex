
var trex ,trex_running;
var ground, ground_image;
var invisGround;
var cloud, cloud_image;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png", "trex4.png")
  ground_image = loadImage("ground2.png")
  cloud_image = loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,100,10,10)
  trex.addAnimation("running",trex_running)
  trex.scale = 0.5

  //create ground
  ground = createSprite(300,180,600,20)
  ground.addImage(ground_image)
  ground.x = ground.width / 2

  //create invisible ground
  invisGround = createSprite(300,190,600,10)
  invisGround.visible = false

  var rand = Math.round(random(50,100))
  console.log(rand)
}

function draw(){
  background(180)
  
//trex jumping
  if (keyDown("space") && trex.y > 125) {
    trex.velocityY = - 10 
  }
 
  //adding gravity to the t-rex
  trex.velocityY  = trex.velocityY + 0.8

  //making ground infinte
  ground.velocityX = -3 
  if (ground.x < 0) {
    ground.x = ground.width / 2
  }
  
  //console.log(frameCount)

  trex.collide(invisGround) 

  spawnClouds()

  drawSprites()
}

function spawnClouds() {
  
  if (frameCount % 60 == 0) {
    cloud = createSprite(600,100,10,10)
    cloud.velocityX = -5
    cloud.addImage(cloud_image)
    cloud.scale = 0.5
    cloud.y = Math.round(random(50,120))
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1
  }
}
