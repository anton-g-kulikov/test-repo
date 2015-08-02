$(function () {

	$('#study').on('click', function(){
		$('.cover').removeClass('hidden').addClass('js-cover visible');
		$('.definition').addClass('js-header');
		$('.description').removeClass('visible').addClass('js-text hidden');
		$('.gotit').removeClass('visible').addClass('js-button hidden');
	});
	
	$('#read').on('click', function(){
		$('.cover').removeClass('js-cover visible').addClass('hidden');
		$('.definition').removeClass('js-header');
		$('.description').removeClass('js-text hidden').addClass('visible');
		$('.gotit').removeClass('js-button visible').addClass('hidden');
	});

    $(document).on('click', '.js-cover', function() {
		$(this).removeClass('visible').addClass('hidden');
		$(this).parents('section').find('.js-button').toggleClass('hidden');
	});

	$(document).on('click', '.js-header', function(){
		$(this).next('.js-text').toggleClass('hidden');
	});

	$(document).on('click', '.js-button', function(){
		$(this).parents('section').find('.js-cover').removeClass('hidden').addClass('visible');
		$(this).addClass('hidden');
	});

});

