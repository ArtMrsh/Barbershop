$(document).ready(function() {

	// Initializing responsive navigation
	$( ".handle" ).click(function() {
		$(".navigation").toggleClass("show_navigation");
	});

	// Initializing login popup
	$(".login").magnificPopup();

	// Initializing google map popup
	$(".map-link").magnificPopup();
	$(".footer__map-link").magnificPopup();

	// AJAX feedback form
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});

	// BXSlider settings
	$('.bxslider').bxSlider({
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: 'Вперед',
		prevText: 'Назад',
		controls: true,
		pager: false,
		auto: true,
		autoControls: false
	});

});
