$(document).ready(function(){
	setBindings();

});

function setBindings() {

	$("nav ul li a").click(function(e){
		e.preventDefault();
		var sectionID = e.currentTarget.id + "1";
		
		$("html body").animate({
			scrollTop: $("#" + sectionID).offset().top
		}, 1000)
	})

}
