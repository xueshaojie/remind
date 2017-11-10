$(function(){
	$('#J_back').click(function(){
		if($(this).attr('data-back')){
			window.location.href = $(this).attr('data-back');
		}else{
			window.history.go(-1);
		}
	});
});