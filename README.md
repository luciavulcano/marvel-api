# marvel-api

projeto em react que consome a api da marvel ('https://developer.marvel.com/').

para rodar o projeto, você primeiro ter que ir no link acima, se cadastrar e ter acesso a sua chave publica e a sua chave privada.

feito isso, na pasta src/services/api.js, colocar na linha 5 a chave pública e na linha 6, a chave privada.

os módulos usados no projeto são:
axios,
md5 e
react-router-dom.

você pode instala-los com o yarn. 

para montar o projeto, é só dar yarn start na raiz do projeto e pronto!

como a api é limitada, ela nao retorna todos os personagens ou quadrinhos que existem, mas na rota /personagens e /quadrinhos, você consegue fazer uma busca entre a resposta da api. 

