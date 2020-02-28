# Modelo Conceitual e Modelo de Dados  
  
- 1 Introdução
  * 1.1 Descrição do Documento (para que serve esse documento?)
  * 1.2 Histórico de Revisões
- 2 Modelo Conceitual
  * 2.1 Descrição das Entidades
- 3 Modelo de Dados
- 4 Dicionário de Dados
- 5 Referências
  
# 1 Introdução
 
## 1.1 Descrição do Documento

   Este documento tem como objetivo apresentar e detalhar o projeto EBook, de forma que apoie a compreensão do seu desenvolvimento. Assim sendo, é possivel identificar como ocorre a comunicação entre as entidades, os tipos de dados que serão trabalhado e os tipos de funcionalidades necessárias para pleno funcionamento do software.
  
## 1.2 Histórico de Revisões

| Data       | Versão | Descrição         | Autor           |
|------------|--------|-------------------|-----------------|
| 28/02/2020 | 1.0    | Documento Inicial | Gabriel Batista |
  
# 2 Modelo Conceitual  

![imagem](https://github.com/GabrielBFelix/EBook/blob/master/docs/ModeloConceitual.png)
  
## 2.1 Descrição das Entidades

  Usuário: Entidade que representará as pessoas que acessam o sistema. Além das próprias informações armazenadas, eles tem acesso a compra de livros que estão a venda.
  
  Endereço: Entidade dependente de usuário, contendo informações de sua localização.
  
  Livros: Produto que vai ser vendido, contendo as mais diversas informações necessarias para o comprador.
  
  Gênero: Diversos tipos de categorias que estão atribuidas aos livros.
  
  Compra: Entidade que vai estabelecer a relação entre o Usuario e o Livro que deseja comprar.
  
# 3 Modelo de Dados 

  O Modelo Entidade Relacionamento (MER) é um modelo conceitual de dados que tem como finalidade descrever os objetos envolvidos em um domínio de negócios, com suas características e como elas se relacionam entre si. Os principais componentes desses modelos são as entidades, suas relações e armazenamento em bancos de dados. Em termos gerais, um modelo entidade relacionamento é uma maneira sistemática de descrever e definir um processo de negócio. As entidades são os objetos ou partes envolvidas em um domínio e podem ser físicas, quando realmente existem no mundo real, ou lógicas, quando não são objetos físicos, mas que fazem sentido dentro de um certo domínio de negócios. Já os relacionamentos referem-se às relações que ocorrem entre as entidades.
  
# 4 Dicionário de Dados  
  
# 5 Referências  
