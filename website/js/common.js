var log = console.log;
$(document).ready(function() {
	var htmlregex = /[a-z\-]+\.html/;
	var curPage = window.location.pathname.match(htmlregex)[0];
	$("nav a").each(function(index) {
	    if ($(this).attr('href').match(htmlregex)[0] == curPage) {
	        $(this).find('div').addClass('nav-active');
	    }
	});
})

function HDeploy(id, data) {
	var source = $('#ht-' + id).html();
	var template = Handlebars.compile(source);
	$('#' + id).html(template(data));
}