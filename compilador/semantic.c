#include "semantic.h"

/**
  * typeTable[id] = idType
  * id: numero do id
  * idType: 0 = boolean; 1 = numeric; -1 = nao existe/inicializado
  **/
int typeTable[100];

int
_is_var_declared(struct Source *);

void
_build_typeTable(struct Source *);

int
_is_var_in_the_right_place(struct Source *source);

int
_check_3_illegal_tokens(struct Token *tkn1, struct Token *tkn2, struct Token *tkn3);

int
semantic_analysis(struct Source *source)
{

	if (!_is_var_declared(source))
		return 0;

	_build_typeTable(source);
  
  for(int i=0;i<15;++i)
    printf("%d\n",typeTable[i]);
    
  if(!_is_var_in_the_right_place(source))
    return 0;

	return 1;
}

int
_is_var_declared(struct Source *source)
{
	struct Line **program = source->program;
	unsigned int var_num = source->var_num;
	int lncnt = source->line_num;

	int *declared = NULL;
	declared = (int *) calloc(var_num, sizeof(int));

	int is_declaring = 1;

	for (int i = 0; i < lncnt; ++i)
	{
		for (int j = 0; j < program[i]->numtkns; ++j)
		{
			if (is_declaring)
			{
				if (strcmp("inicio", program[i]->tokens[j]->value) == 0) // checa se chegamos em inicio
				{
					is_declaring = 0;
				}
				else if (strcmp("<id>", program[i]->tokens[j]->to_parse) == 0)// enquanto declaramos, se temos um id
				{
					int idIndex = (int) strtol(program[i]->tokens[j]->value, (char **) NULL, 10);
					declared[idIndex] = 1; // flag como declarada
				}
			}
				/* if we're not declaring */
			else if (strcmp("<id>", program[i]->tokens[j]->to_parse) == 0)
			{
				int idIndex = (int) strtol(program[i]->tokens[j]->value, (char **) NULL, 10);
				int wasDeclared = declared[idIndex];
				if (wasDeclared == 0)
					return 0;
			}
		}
	}
	return 1;
}

/**
  * Monta typeTable
  **/
void
_build_typeTable(struct Source *source)
{
	struct Line **program = source->program;
	int lncnt = source->line_num;

	for (int i = 0; i < 100; ++i)
		typeTable[i] = -1;
	for (int i = 0; i < lncnt; ++i)
	{
		if (program[i]->numtkns > 0)
		{
			if (strcmp("inicio", program[i]->tokens[0]->value) == 0)
				break;

			if (strcmp("var", program[i]->tokens[0]->value) == 0)
				typeTable[atoi(program[i]->tokens[1]->value)] =
					(strcmp("inteiro", program[i]->tokens[3]->value) == 0) ? 1 : 0;

			if (strcmp("<id>", program[i]->tokens[0]->to_parse) == 0)
				for (int j = 0; j < program[i]->numtkns - 2; j += 2)
					typeTable[atoi(program[i]->tokens[j]->value)] =
						(strcmp("inteiro", program[i]->tokens[program[i]->numtkns - 1]->value) == 0) ? 1 : 0;
		}
	}
}

int
_is_var_in_the_right_place(struct Source *source)
{
  struct Line **program = source->program;
  int lncnt = source->line_num;
  
  for(int i=0; i < lncnt; ++i)
  {
    if(program[i]->numtkns >= 3)
      for(int j = 2; j<program[i]->numtkns; ++j)
        if(_check_3_illegal_tokens(program[i]->tokens[j-2], program[i]->tokens[j-1], program[i]->tokens[j]))
          return 0;
  }
  return 1;
}

int
_check_3_illegal_tokens(struct Token *tkn1, struct Token *tkn2, struct Token *tkn3)
{
  char *cTkn1 = tkn1->to_parse;
  if(!strcmp("<id>",cTkn1))
  {
    if(typeTable[atoi(tkn1->value)] == 0)
    {
      cTkn1 = "idBOOL";
    }
    else
    {
      cTkn1 = "idNUM";
    }
  }
  
  char *cTkn2 = tkn2->to_parse;
  if(!strcmp("<id>",cTkn2))
  {
    if(typeTable[atoi(tkn2->value)] == 0)
    {
      cTkn2 = "idBOOL";
    }
    else
    {
      cTkn2 = "idNUM";
    }
  }
  
  char *cTkn3 = tkn3->to_parse;
  if(!strcmp("<id>",cTkn3))
  {
    if(typeTable[atoi(tkn3->value)] == 0)
    {
      cTkn3 = "idBOOL";
    }
    else
    {
      cTkn3 = "idNUM";
    }
  }
  
  printf("%s, %s, %s\n", cTkn1,cTkn2,cTkn3);
  //printf("value %s, %s, %s\n", tkn1->value,tkn2->value,tkn3->value);
  //printf("%s, %s, %s\n", tkn1->body,tkn2->body,tkn3->body);
  printf("%s, %s, %s\n", tkn1->to_parse,tkn2->to_parse,tkn3->to_parse);
  printf("---\n");

  return 0;
}

/*
SE declarando:
  para cada linha de declaracao:
    SE linha declarativa : popula array de tamanho 100 da seguinte maneira:
      array[idNum] = 0 se id numerica, 1 se id logica.
    SE linha <inicio>: nao estamos mais declarando
SE nao declarando:
  Percorre tudo checando se IDs que aparecem sao index iniciados no array (declarados)
  
  Para cada 3 tokens:
    se forem:
      IDnum <- IDbool
      IDbool <- IDnum
      IDbool <op>
      <op> IDbool
      IDnum <op> IDbool
      IDnum <lop> IDbool
      IDbool <op> IDnum
      IDbool <lop> IDnum
      IDnum <lop>
      <lop> IDnum
      <para> IDbool <de>
    solta erro
*/