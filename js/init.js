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
}

function fade(a, b) {
	$(a).hide();
	$(b).show();
	$(a + "Button").css("backgroundColor", "black");
	$(b + "Button").css("backgroundColor", "#0288d1");
}