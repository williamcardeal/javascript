/*O objeto global contém variáveis ​​que devem estar disponíveis em todos os lugares.

Isso inclui JavaScript embutido, como Arraye valores específicos do ambiente, como window.innerHeight– a altura da janela no navegador.

O objeto global tem um nome universal globalThis.

…Mas, com mais frequência, é referido por nomes específicos de ambientes "antigos", como window(navegador) e global(Node.js).

Devemos armazenar valores no objeto global somente se eles forem realmente globais para nosso projeto. E mantenha seu número no mínimo.

No navegador, a menos que estejamos usando módulos , funções globais e variáveis ​​declaradas com vartornam-se uma propriedade do objeto global.

Para tornar nosso código à prova de futuro e mais fácil de entender, devemos acessar as propriedades do objeto global diretamente, como window.x.*/