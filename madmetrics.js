$(document).ready(function() {


	// var buttonA=alert("Congrats! on looking at your analytics!")


//the following is how we're going to find Total Pixels scrolled
	var lastFixPos = 0;
	var totalPixelsScrolled = 0
		$(window).on('scroll', function(){
  		totalPixelsScrolled += Math.abs($(window).scrollTop() - lastFixPos);
  		lastFixPos = $(window).scrollTop();
 		// console.log(totalPixelsScrolled);

	// $(window).scroll(function(){
	//          var screenheight = parseInt($(document).height());
	//          var scrolledpx = parseInt($(window).scrollTop());     
	//          var sum = screenheight+scrolledpx;
	//          console.log($(this).scrollTop());
	//          console.log("screen: " + screenheight);
	//          console.log("sum=" + sum);
	//          $("div.content").height(sum);
	     // });
	});

		//the code below demonstrates the percentage of the page that was viewed.

	var initalWindow = 0;
	var totalWindow = 0;
	var windowScroll = 0;
	var windowViewPercent = 0;
	var percentScrolled = 0;
	var pageViewPercent = 0;
	var maxScroll = 0;

	$(window).on('scroll', function() {

		initalWindow = $(window).height();
		totalWindow = $(document).height();
		windowScroll = $(window).scrollTop();

		windowViewPercent = (initalWindow / totalWindow) * 100;
		// console.log('Percent of window viewed: ' , windowViewPercent);

		percentScrolled = (windowScroll / (totalWindow - initalWindow) * 100);
		// console.log('Percent scrolled: ' , percentScrolled); 

		if (percentScrolled > maxScroll) {

			maxScroll = percentScrolled;

		}

		// console.log('maXScroll is: ' , maxScroll);

		});
		// timer for click t o sign up
	
		var timer=new Date().getTime()
		var timerDif;
		var timesign;
		$('.buttonB').on('click',function(){
			timesign=new Date().getTime()
			timerDif=(timesign-timer)/1000

		});

		// how long spent in a section

		var mouseHi=0;
		var mouseBye=0;
		var mouseDif=0;
		var mouseobj={};
		var secTime=function(section){
			mouseBye=new Date().getTime();
			mouseDif=(mouseBye-mouseHi)/1000;
			mouseobj[section]=mouseDif;
		}

		$('.firstSection').on('mouseenter', function(){
				mouseHi=new Date().getTime();

		}).on('mouseleave', function(){
			secTime('firstSection');
			console.log(mouseobj.firstSection);
		});









		







	});

