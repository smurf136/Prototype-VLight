var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: window.innerWidth,
  height: window.innerHeight,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);

var style;
var house;
var t1;
var t2;
var t3;
var t4;
var room1;
var statroom1;
var room2;
var statroom2;
var room3;
var statroom3;
var room4;
var statroom4;
var b0;
var r1;
var r2;
var r3;
var r4;
var b1on;
var b1off;
var b2on;
var b2off;
var b3on;
var b3off;
var b4on;
var b4off;
var tr1;
var tr2;
var tr3;
var tr4;
var message;
var graphics;
var status1 = false;
var status2 = false;
var status3 = true;
var status4 = false;

var screen = {
  width: window.innerWidth / 2,
  height: window.innerHeight / 2
};
var m = {
  sucon: 'Success to turn on',
  sucoff: 'Success to turn off',
  non: "Can 't turn on",
  noff: "Can 't turn off"
}

function preload() {
  this.load.spritesheet('status', '/img/status.png', {
    frameWidth: 150,
    frameHeight: 150
  });
};

function create() {
  this.style = {
    fontFamily: 'font1',
    fill: '#ffffff',
    align: 'center'
}
  console.log(innerHeight + " " + innerWidth);
  console.log(screen.width);
  // house = this.add.sprite(screen.width, 300, 'status');
  // house.setScale(2);
  statroom1 = this.add.sprite(0, 0, 'status').setScale(0.5);
  statroom2 = this.add.sprite(0, 0, 'status').setScale(0.5);
  statroom3 = this.add.sprite(0, 0, 'status').setScale(0.5);
  statroom4 = this.add.sprite(0, 0, 'status').setScale(0.5);

  t1 = this.add.text(0, 0, style);
  t1.setOrigin(0.5);
  t1.setText('Room1');

  t2 = this.add.text(0, 0, style);
  t2.setOrigin(0.5);
  t2.setText('Room2');

  t3 = this.add.text(0, 0, style);
  t3.setOrigin(0.5);
  t3.setText('Room3');

  t4 = this.add.text(0, 0, style);
  t4.setOrigin(0.5);
  t4.setText('Room4');

  room1 = this.add.container(150, 200, [statroom1, t1]).setInteractive(new Phaser.Geom.Circle(0, 0, 60), Phaser.Geom.Circle.Contains);;
  room2 = this.add.container(250, 200, [statroom2, t2]).setInteractive(new Phaser.Geom.Circle(0, 0, 60), Phaser.Geom.Circle.Contains);;
  room3 = this.add.container(150, 300, [statroom3, t3]).setInteractive(new Phaser.Geom.Circle(0, 0, 60), Phaser.Geom.Circle.Contains);;
  room4 = this.add.container(250, 300, [statroom4, t4]).setInteractive(new Phaser.Geom.Circle(0, 0, 60), Phaser.Geom.Circle.Contains);;

  // house = this.add.container((screen.width/2)+50, 200, [room1, room2, room3, room4]);

  this.input.on('gameobjectup', function (pointer, gameObject)
    {
        gameObject.emit('clicked', gameObject);
    }, this);

  this.anims.create({
    key: 'on',
    frames: [{
      key: 'status',
      frame: 0
    }],
    frameRate: 10
  });
  this.anims.create({
    key: 'off',
    frames: [{
      key: 'status',
      frame: 1
    }],
    frameRate: 10
  });

  b0 = this.add.text(screen.width, 100).setOrigin(0.5);
  b0.setText("VLight");
  message = this.add.text(screen.width, 400).setOrigin(0.5);
  
  tr1 = this.add.text(0, 0, style);
  tr2 = this.add.text(0, 0, style);
  tr3 = this.add.text(0, 0, style);
  tr4 = this.add.text(0, 0, style);

  tr1.setText('Room1: ');
  tr2.setText('Room1: ');
  tr3.setText('Room1: ');
  tr4.setText('Room1: ');

  b1on = this.add.sprite(150, 0, 'status').setScale(0.5).setInteractive();
  b1off = this.add.sprite(250, 0, 'status').setScale(0.5).setInteractive().play('off', true);
  b2on = this.add.sprite(150, 0, 'status').setScale(0.5).setInteractive();
  b2off = this.add.sprite(250, 0, 'status').setScale(0.5).setInteractive().play('off', true);
  b3on = this.add.sprite(150, 0, 'status').setScale(0.5).setInteractive();
  b3off = this.add.sprite(250, 0, 'status').setScale(0.5).setInteractive().play('off', true);
  b4on = this.add.sprite(150, 0, 'status').setScale(0.5).setInteractive();
  b4off = this.add.sprite(250, 0, 'status').setScale(0.5).setInteractive().play('off', true);
  
  this.text = this.add.text(screen.width, 380);
  this.text.setText('On         Off');

  r1 = this.add.container(60, 450, [tr1, b1on, b1off]).setInteractive(new Phaser.Geom.Circle(0, 0, 60), Phaser.Geom.Circle.Contains);
  r2 = this.add.container(60, 550, [tr2, b2on, b2off]).setInteractive(new Phaser.Geom.Circle(0, 0, 60), Phaser.Geom.Circle.Contains);
  r3 = this.add.container(60, 650, [tr3, b3on, b3off]).setInteractive(new Phaser.Geom.Circle(0, 0, 60), Phaser.Geom.Circle.Contains);
  r4 = this.add.container(60, 750, [tr4, b4on, b4off]).setInteractive(new Phaser.Geom.Circle(0, 0, 60), Phaser.Geom.Circle.Contains);

  // b1on.on('clicked', function(){
  //   stat1();
  // }, this);
  b1on.on('clicked', function(){
    status1 = true;
  }, this);
  b1off.on('clicked', function(){
    status1 = false;
  }, this);
  b2on.on('clicked', function(){
    status2 = true;
  }, this);
  b2off.on('clicked', function(){
    status2 = false;
  }, this);
  b3on.on('clicked', function(){
    status3 = true;
  }, this);
  b3off.on('clicked', function(){
    status3 = false;
  }, this);
  b4on.on('clicked', function(){
    status4 = true;
  }, this);
  b4off.on('clicked', function(){
    status4 = false;
  }, this);
  
 

};

function stat1(){
  if(status1){
    status1 = false;
  }else{
    status1 = true;
  }
}
function stat2(){
  if(status2){
    status2 = false;
  }else{
    status2 = true;
  }
}
function stat3(){
  if(status3){
    status3 = false;
  }else{
    status3 = true;
  }
}
function stat4(){
  if(status4){
    status4 = false;
  }else{
    status4 = true;
  }
}

function update(delta, time) {
  if(status1){
    statroom1.play('on',true);
  }else{
    statroom1.play('off',true);
  }
  if(status2){
    statroom2.play('on',true);
  }else{
    statroom2.play('off',true);
  }
  if(status3){
    statroom3.play('on',true);
  }else{
    statroom3.play('off',true);
  }
  if(status4){
    statroom4.play('on',true);
  }else{
    statroom4.play('off',true);
  }
  console.log(status1);
};