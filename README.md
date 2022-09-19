# JetApp

Pré-requisitos
Para rodar o projeto, primeiro pré-requisito é ter o Node.js instalado (versão 14.x ou acima) e o seu gerenciador de pacote favorito na versão mais atual. Caso você ainda não tenha instalado o pacote @angular/cli, instale-o via npm ou yarn.

Instalando com npm:

npm i -g @angular/cli@^14
Caso prefira instalar com o yarn:

yarn global add @angular/cli@^14
Passo 1 - Crie o seu primeiro projeto
Caso você já tenha um projeto criado e deseje apenas incluir o Po, pule esta etapa e vá para o Passo 1.1.

O Angular CLI se encarrega de construir toda estrutura inicial do projeto. Para isso, execute o seguinte comando:

ng new my-po-project --skipInstall
O parâmetro --skip-install permite criar o projeto, contudo, não instalará as dependências automaticamente.

Passo 1.1 - Instalando o projeto

Clone este projeto localmente para sua máquina

Instalando com npm:

npm install
Caso utilizar a versão 7 do npm pode ocorrer erro de versão das dependências, neste caso utilize npm install --legacy-peer-deps.

Caso prefira instalar com o yarn:

yarn install
Passo 2 - Instale o servidor

acesse este repositório: https://github.com/DavidStewartSB/jet-api

Clone o projeto para sua máquina localmente e execute os comandos: 

npm install

ou yarn add -- yarn build


Passo 3 - Rode o seu projeto
Agora basta executar mais um comando para subir a aplicação e ver o seu projeto rodando no browser ;).

ng serve
Abra o browser e acesse a url http://localhost:4200. Pronto!

E agora?
Agora é só abrir seu editor e verificar o código


A partir dai o seu projeto está preparado ser utilizado
