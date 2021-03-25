var bullet, wall;
var speed, weight;
var damage,thickness;

function setup() {
  createCanvas(1600, 400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22,83);
  console.log(speed);
  bullet = createSprite(50, 200, 80, 5);
  bullet.shapeColor = color(255,255,255);
  bullet.velocityX = speed;
  wall = createSprite(900, 200, thickness, height / 2);
  wall.shapeColor = color(80,80,80);
}

function draw()
 {
  background(0);

  if (wall.x - bullet.x < (wall.width  + bullet.width )/2 &&
    bullet.x - wall.x < (wall.width  + bullet.width )/2 ) 
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness;
    if (damage > 10) 
    {
      bullet.shapeColor = color(255, 0, 0);
    }
    
    if (damage < 10) 
    {
      bullet.shapeColor = color(0, 255, 0);
    }
  }
  drawSprites();
}
