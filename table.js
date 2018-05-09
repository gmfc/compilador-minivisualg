var table = {
	A: {
		'<algoritmo>': 1
	},
	LISTADECLAR: {
		'<var>': 2,
		'<id>': 3,
		'<del|,>': 3,
		'<del|:>': 3,
		'<inicio>': 4
	},
	UNIDECLAR: {
		'<var>': 5
	},
	MULTIDECLAR: {
		'<id>': 6,
		'<del|,>': 6,
		'/e/': 6
	},
	TIPO: {
		'<inteiro>': 7,
		'<logico>': 8
	},
	IDLIST: {
		'<id>': 9,
		'<del|,>': 10,
		'<del|:>': 11,
		'<del|)>': 11
	},
	CODIGO: {
		'<id>': 12,
		'<leia>': 12,
		'<escreva>': 12,
		'<se>': 12,
		'<para>': 12,
		'<enquanto>': 12,
		'<fimalgoritmo>': 13,
		'<senao>': 13,
		'<fimpara>': 13,
		'<fimenquanto>': 13
	},
	COMANDO: {
		'<id>': 14,
		'<leia>': 15,
		'<escreva>': 16,
		'<se>': 17,
		'<para>': 18,
		'<enquanto>': 19
	},
	PASSO: {
		'<passo>': 20,
		'<faca>': 21
	},
	ATRIBUICAO: {
		'<id>': 23
	},
	STROUT: {
		'<str>': 24,
		'<id>': 25,
		'<del|,>': 27,
		'<del|)>': 28
	},
	EXPRESSAOLOGICA: {
		'<id>': 30
	},
	DATA: {
		'<num>': 31,
		'<str>': 32,
		'<verdadeiro>': 33,
		'<falso>': 34
	},
	EXPRESSAO: {
		'<id>': 36
	},
	LOGICOP: {
		'<lop|>>': 37,
		'<lop|>=>': 38,
		'<lop|<>': 39,
		'<lop|<=>': 40,
		'<lop|=>': 41,
		'<lop|<>>': 42,
		'<lop|e>': 43,
		'<lop|ou>': 44
	},
	OP: {
		'<op|+>': 45,
		'<op|->': 46,
		'<op|*>': 47,
		'<op|/>': 48,
		'<op|mod>': 49,
		'<op|exp>': 50,
		'<lop|>>': 51,
		'<lop|>=>': 51,
		'<lop|<>': 51,
		'<lop|<=>': 51,
		'<lop|=>': 51,
		'<lop|<>>': 51,
		'<lop|e>': 51,
		'<lop|ou>': 51
	}
}