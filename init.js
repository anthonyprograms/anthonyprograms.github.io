function initLVT() {
	var keepThisOffset = -1;

	$("#portfolioButton").click(function() {
		if(keepThisOffset == -1) {
			keepThisOffset = $(this).offset().top - 30;
			$('html,body').animate({scrollTop: keepThisOffset}, 200);
		}
		fade("#resume", "#portfolio");
	});
	$("#resumeButton").click(function() {
		if(keepThisOffset == -1) {
			keepThisOffset = $(this).offset().top - 30;
			$('html,body').animate({scrollTop: keepThisOffset}, 200);
		}
		fade("#portfolio", "#resume");
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
	$(c + "Button").css("backgroundColor", "#00F2A2");
}