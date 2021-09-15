function Robot() {
	this.name;
	this.act;
}
	Robot.prototype.construct = function Robot(name, act) {
		this.name = name;
		this.act = act;
	}

	Robot.prototype.construct(' Robot', ' just work');

	Robot.prototype.work = function work() {
		console.log(' I ' + this.name + ' - I' + this.act + '!');
	}


function CoffeeRobot() {}
	
CoffeeRobot.prototype = Object.create(Robot.prototype);
CoffeeRobot.prototype.constructor = CoffeeRobot;

	CoffeeRobot.prototype.construct(' CoffeeRobot ', ' just make coffee');


function RobotCooker() {}
RobotCooker.prototype = Object.create(Robot.prototype);
RobotCooker.prototype.constructor = RobotCooker;

	RobotCooker.prototype.construct(' RobotCooker ', ' just cook');


function RobotDancer() {}
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;
	RobotDancer.prototype.construct(' RobotDancer', ' just dance');


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