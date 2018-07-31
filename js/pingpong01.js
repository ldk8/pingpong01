var KEY={
	UP:38,
	DOWN:40,
	W:87,
	S:83
}

var pingpong={};
pingpong.pressedKeys=[];
pingpong.ball={
	speed:5,
	x:150,
	y:100,
	directionX:1,
	directionY:1
}

$(function(){
	pingpong.timer=setInterval(gameloop,30);

	$(document).keydown(
		function(e){
			pingpong.pressedKeys[e.which]=true;
		});
	$(document).keyup(
		function(e){
			pingpong.pressedKeys[e.which]=false;
		});
});

function gameloop(){
	moveBall();
	movePaddles();
};

function movePaddles(){
	if(pingpong.pressedKeys[KEY.UP]){
		var top=parseInt($("#paddleB").css("top"));
		$("#paddleB").css("top",top-5);
	}
	if(pingpong.pressedKeys[KEY.DOWN]){
		var top=parseInt($("#paddleB").css("top"));
		$("#paddleB").css("top",top+5);
	}
	if(pingpong.pressedKeys[KEY.W]){
		var top=parseInt($("#paddleA").css("top"));
		$("#paddleA").css("top",top-5);
	}
	if(pingpong.pressedKeys[KEY.S]){
		var top=parseInt($("#paddleA").css("top"));
		$("#paddleA").css("top",top+5);
	}
};
function moveBall(){
	var playgroundWidth=parseInt($("#playground").width());
	var playgroundHeight=parseInt($("#playground").height());
	var ball=pingpong.ball;
	//检测底边
	if(ball.y+ball.speed*ball.directionY>playgroundHeight){
		ball.directionY=-1;
	}
	//检测上边
	if(ball.y+ball.speed*ball.directionY<0){
		ball.directionY=1;
	}
	//检测底边
	if(ball.x+ball.speed*ball.directionX>playgroundWidth){
		ball.directionX=-1;
	}
	//检测底边
	if(ball.x+ball.speed*ball.directionX<0){
		ball.directionX=1;
	}
	ball.x+=ball.speed*ball.directionX;
	ball.y+=ball.speed*ball.directionY;
	$("#ball").css({
		"left":ball.x,
		"top":ball.y
	});
};
