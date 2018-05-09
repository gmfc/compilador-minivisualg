var grammar = {
	1: ['A', '->', '<algoritmo>', '<str>', 'B', '<inicio>', 'C', '<fimalgoritmo>'],
	2: ['B', '->', 'D', 'B'],
	3: ['B', '->', 'F', 'B'],
	4: ['B', '->', '/e/'],
	5: ['D', '->', '<var>', '<id>', '<del|:>', 'E'],
	6: ['F', '->', 'G', '<del|:>', 'E'],
	7: ['E', '->', '<inteiro>'],
	8: ['E', '->', '<logico>'],
	9: ['G', '->', '<id>', 'G'],
	10: ['G', '->', '<del|,>', '<id>', 'G'],
	11: ['G', '->', '/e/'],
	12: ['C', '->', 'H', 'C'],
	13: ['C', '->', '/e/'],
	14: ['H', '->', 'I'],
	15: ['H', '->', '<leia>', '<del|(>', 'G', '<del|)>'],
	16: ['H', '->', '<escreva>', '<del|(>', 'J', '<del|)>'],
	17: ['H', '->', '<se>', 'K', '<entao>', 'C', '<senao>', 'C', '<fimse>'],
	18: ['H', '->', '<para>', '<id>', '<de>', '<num>', '<ate>', '<num>', 'P', '<faca>', 'C', '<fimpara>'],
	19: ['H', '->', '<enquanto>', 'K', '<faca>', 'C', '<fimenquanto>'],
	20: ['I', '->', '<id>', '<op|<->', 'L'],
	21: ['I', '->', '<id>', '<op|<->', 'M'],
	22: ['J', '->', '<str>', 'J'],
	23: ['J', '->', '<id>', 'J'],
	24: ['J', '->', '<del|,>', '<id>', 'J'],
	25: ['J', '->', '<del|,>', '<str>', 'J'],
	26: ['J', '->', '/e/'],
	27: ['K', '->', 'M', 'N', 'M'],
	28: ['L', '->', '<num>'],
	29: ['L', '->', '<str>'],
	30: ['L', '->', '<verdadeiro>'],
	31: ['L', '->', '<falso>'],
	32: ['M', '->', '<id>', 'M'],
	33: ['M', '->', 'L', 'M'],
	34: ['M', '->', 'O', '<id>', 'M'],
	35: ['M', '->', 'O', 'L', 'M'],
	36: ['M', '->', '/e/'],
	37: ['N', '->', '<lop|>>'],
	38: ['N', '->', '<lop|>=>'],
	39: ['N', '->', '<lop|<>'],
	40: ['N', '->', '<lop|<=>'],
	41: ['N', '->', '<lop|=>'],
	42: ['N', '->', '<lop|<>>'],
	43: ['N', '->', '<lop|e>'],
	44: ['N', '->', '<lop|ou>'],
	45: ['O', '->', '<op|+>'],
	46: ['O', '->', '<op|->'],
	47: ['O', '->', '<op|*>'],
	48: ['O', '->', '<op|/>'],
	49: ['O', '->', '<op|mod>'],
	50: ['O', '->', '<op|exp>'],
	51: ['O', '->', 'N'],
	52: ['P', '->', '<passo>', '<num>'],
	53: ['P', '->', '/e/']
}