function initLVT() {
	var keepThisOffset = -1;

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		$("footer").html("<p>\"It doesn't matter if the glass is half empty or half full; all that matters is you're the one pouring the water.\" - Mark Cuban | Long Tran &copy; 2015");
 		$(".control").html('<a id="resumeButton" class="btn-floating btn-small"><i class="material-icons">assignment</i></a><a id="portfolioButton" class="btn-floating btn-small"><i class="material-icons">code</i></a><a id="eventsButton" class="btn-floating btn-small"><i class="material-icons">flight_takeoff</i></a>');
	}
	$(".introText").delay(1500).fadeOut(700);
	$(".introView").delay(1800).slideUp('fast', function() {
		$(".headerCustom").slideDown('fast', function() {
			$(".container").slideDown('fast', function() {
				$("footer").fadeIn();		
			});
		});
	});
	$("#eventsButton").click(function() {
		if(keepThisOffset == -1) {
			keepThisOffset = $(this).offset().top - 30;
			$('html,body').animate({scrollTop: keepThisOffset}, 200);
		}
		fade("#portfolio", "#resume", "#events");
	});
	$("#portfolioButton").click(function() {
		if(keepThisOffset == -1) {
			keepThisOffset = $(this).offset().top - 30;
			$('html,body').animate({scrollTop: keepThisOffset}, 200);
		}
		fade("#events", "#resume", "#portfolio");
	});
	$("#resumeButton").click(function() {
		if(keepThisOffset == -1) {
			keepThisOffset = $(this).offset().top - 30;
			$('html,body').animate({scrollTop: keepThisOffset}, 200);
		}
		fade("#events", "#portfolio", "#resume");
	});

	var $window = $(window), $stickyEl = $('.control'), elTop = $stickyEl.offset().top;
    $window.scroll(function() {
    	if($window.scrollTop() == 0) {
    		keepThisOffset = -1;
    	}
        $stickyEl.toggleClass('stickyControl', $window.scrollTop() > 411);
    });
}

function fade(a, b, c, n) {
	if(!n) {
		n = 250;
	}
	$(a).fadeOut(n);
	$(b).fadeOut(n);
	$(c).fadeIn(n);
	$(a + "Button").css("backgroundColor", "black");
	$(b + "Button").css("backgroundColor", "black");
	$(c + "Button").css("backgroundColor", "#ff3232");
	$("footer").css("position", "relative");
}