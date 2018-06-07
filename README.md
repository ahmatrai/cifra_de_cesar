# Cifra de César

Cria arquivos index.html, app.js e README.md
link index.html com app.js
No contexto global, cria função 'criptografar'.
No contexto global, cria função 'cipher'.
No contexto global, cria função 'decipher'.


No contexto da função 'criptografar', 
Cria variável 'sentence' para solicitar a frase do usuário que será criptografada, por prompt.
Cria variável 'new sentence' para armazenar a frase criptografada.
Cria variável 'element' para economizar caracteres de código.

No mesmo contexto, verifica se o campo para preencher frase está vazio, com o primeiro if.
Caso vazio, printa na tela mensagem de despedida.
No contexto do primeiro if, inicia um loop nos caracteres da sentença por meio de um for;
Pega valor decimal ASCII de cada caractere da sentença com o charCodeAt() e joga em var charNumber;
Verifica se charNumber é letra por meio do segundo if, que o compara com os intervalos das posições das letras maiúsculas e minúsculas na tabela ASCII.

No contexto do segundo if, caso charNumber não seja uma letra, printa mensagem de erro na tela informando qual caractere é inválido;
Caso seja, return false para ir para o próximo passo.

No contexto do loop for, chama função 'cipher' com parametro charNumber e joga o resultado em uma variável ('newCharNumber') para o novo número de caractere.

No contexto do loop for, converte 'newCharNumber'em caractere alfabético e joga na string newSentence.

No contexto do primeiro if, inicia outro loop nos caracteres da nova sentença por meio de um for;
No contexto do segundo for, pega valor decimal ASCII de cada caractere da sentença com o charCodeAt() e joga em var NewCharNumber;
Converte newCharNumber em caractere alfabético e joga na string sentence

No contexto do primeiro if, imprime texto criptografado (newSentence) e o texto decriptografado (sentence) na tela.

No contexto global, desenvolve função 'cipher', retornando o resultado da fórmula da cifra de césar (x - 65 + n) % 26 + 65

No contexto global, desenvolve função 'decipher', retornando o resultado da fórmula da cifra de césar (x - 33) % 26



