var followSets = {
	'A': [ '$'],
	'LISTADECLAR': [ '<inicio>'],
	'UNIDECLAR': [ '<var>','<id>','<del|,>','<del|:>','<inicio>'],
	'MULTIDECLAR': [ '<var>','<id>','<del|,>','<del|:>','<inicio>'],
	'TIPO': [ '<var>','<id>','<del|,>','<del|:>','<inicio>'],
	'IDLIST': [ '<del|:>','<del|)>'],
	'CODIGO': [ '<fimalgoritmo>','<senao>','<fimpara>','<fimenquanto>'],
	'COMANDO': [ '<id>','<leia>','<escreva>','<se>','<para>','<enquanto>','<fimalgoritmo>','<senao>','<fimpara>','<fimenquanto>'],
	'PASSO': [ '<faca>'],
	'ATRIBUICAO': [ '<id>','<leia>','<escreva>','<se>','<para>','<enquanto>','<fimalgoritmo>','<senao>','<fimpara>','<fimenquanto>'],
	'STROUT': [ '<del|)>'],
	'EXPRESSAOLOGICA': [ '<entao>','<faca>'],
	'DATA': [ '<id>','<leia>','<escreva>','<se>','<para>','<enquanto>','<fimalgoritmo>','<senao>','<fimpara>','<fimenquanto>','<entao>','<faca>'],
	'EXPRESSAO': [ '<id>','<leia>','<escreva>','<se>','<para>','<enquanto>','<fimalgoritmo>','<senao>','<fimpara>','<fimenquanto>'],
	'LOGICOP': [ '<id>','<num>','<str>','<verdadeiro>','<falso>'],
	'OP': [ '<id>','<num>','<str>','<verdadeiro>','<falso>'],
  }