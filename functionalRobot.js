function Robot() {
	this.name;
	this.act;

	this.construct = function Robot(name, act) {
		this.name = name;
		this.act = act;
	}

	this.construct(' Robot', ' just work');

	this.work = function work() {
		console.log(' I ' + this.name + ' - I' + this.act + '!');
	}
}

function CoffeeRobot() {
	Robot.call(this);

	this.construct(' CoffeeRobot ', ' just make coffee');
}

function RobotCooker() {
	Robot.call(this);

	this.construct(' RobotCooker ', ' just cook');
}

function RobotDancer() {
	Robot.call(this);

	this.construct(' RobotDancer', ' just dance');
}

let robot = new Robot();
let coffeeRobot = new CoffeeRobot();
let robotDancer = new RobotDancer();
let robotCooker = new RobotCooker();

robot.work();
coffeeRobot.work();
robotDancer.work();
robotCooker.work();

console.log();

let robotArray = [];
robotArray[0] = robot;
robotArray[1] = coffeeRobot;
robotArray[2] = robotDancer;
robotArray[3] = robotCooker;

for (let i = 0; i < robotArray.length; i++) {
	robotArray[i].work();
}