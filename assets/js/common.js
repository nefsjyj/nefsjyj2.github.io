// navigation
var $gnb = $('#gnb');
var $snb = $('#snb');

$gnb.a = $gnb.find('a');

$gnb.a.on({
	'mouseenter': function () {
		$gnb.find('a').removeClass('a');
		$snb.find('.rows').removeClass('a');

		$(this).addClass('a');

		var snbTarget = $(this).attr('snb-target');

		if ($snb.find('.'+snbTarget).length >= 1) {
			$snb.addClass('a');
		}
	
		$snb.find('.'+snbTarget).addClass('a');
	},
	'mouseleave': function () {
	    var snbTarget = $(this).attr('snb-target');

		if (typeof snbTarget == typeof undefined || snbTarget == false) {
			$gnb.find('a').removeClass('a');
			
			var menuItem = localStorage.getItem("CurrentMenu");
			if (menuItem != null) {
				$('#' + menuItem).addClass('a');
			}
		}
	}
});

$gnb.find('.rows').find('ul').on('mouseleave', function () {
	$snb.removeClass('a');
});

$snb.on({
	'mouseenter': function () {
		$(this).addClass('a');
		/*$gnb.find('a').addClass('a');*/
	},
	'mouseleave': function () {
		$(this).removeClass('a');
	}
});
