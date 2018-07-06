$(document).ready(function() {
	var chapters = [
		{ name: '正则语言', ppt: 'regular-lang' },
		{ name: '上下文无关文法', ppt: 'contextfree' }, 
		{ name: '可计算性理论', ppt: 'turing' }, 
		{ name: '可判定性', ppt: 'decidable' }, 
		{ name: '可归约性', ppt: 'reduced' }, 
		{ name: '时间复杂度', ppt: 'times' }, 
		{ name: '空间复杂性', ppt: 'space' }
	];
	HDeploy('content-bars', chapters);
	var colors = ['#4F7AFD', '#9E52FA', '#FB5F9E', '#FC9254',
		'#FDD331', '#82DD51', '#4EE7BB', '#0DB9FB'];
	$('#content-bars .index').each(function() {
		var index = parseInt($(this).text());
		$(this).css('background-color', colors[index % colors.length]);
		$(this).text(index + 1);
	});
	$('.bar div').on('click', function() {
		var ppt = $(this).parent('.bar').attr('data-ppt');
		window.location = './ppts/' + ppt + '/' + ppt + '.html';
	})
});