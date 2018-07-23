var chapters = [
	{index: 1, hours:8, name: '自动机与语言', en: 'Automata and Language Theory' },
	{index: 2, hours:8, name: '上下文无关文法', en: 'Context free grammars and languages' }, 
	{index: 3, hours:6, name: '丘奇-图灵论题', en: 'Church-Turing Thesis' }, 
	{index: 4, hours:6, name: '可判定性', en: 'Decidability' }, 
	{index: 5, hours:4, name: '可归约性', en: 'Reducibility' }, 
	{index: 6, hours:8, name: '时间复杂度', en: 'Time Complexity' }, 
	{index: 7, hours:8, name: '空间复杂性', en: 'Space Complexity' }
];

$(document).ready(function() {
	HDeploy('tables', chapters);
});