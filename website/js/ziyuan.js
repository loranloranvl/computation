$(document).ready(function() {
	var chapters = [
		{ name: '正则语言', href: 'resources/regular-lang.pdf' },
		{ name: '上下文无关文法', href: 'resources/contextfree.pdf' }, 
		{ name: '可计算性理论', href: 'resources/turing.pdf' }, 
		{ name: '可判定性', href: 'resources/decidable.pdf' }, 
		{ name: '可归约性', href: 'resources/reduced.pdf' }, 
		{ name: '时间复杂度', href: 'resources/times.pdf' }, 
		{ name: '空间复杂性', href: 'resources/space.pdf' }
	];

	HDeploy('ppts', chapters);

});