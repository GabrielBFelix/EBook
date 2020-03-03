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

|  Tabela  |  Nome da coluna  | Tipo de dado | comprimento |    Restrições    |                                               Descrição                                               |
|:--------:|:----------------:|:------------:|:-----------:|:----------------:|:-----------------------------------------------------------------------------------------------------:|
|  Usuario |    codUsuario    |      INT     |   4 bytes   |   PK, NOT NULL   |                        Numero de verificação do usuário, gerado automaticamente                       |
|          |       nome       |    VARCHAR   |   40 bytes  |                  |                                            Nome do usuário                                            |
|          |       senha      |    VARCHAR   |   40 bytes  |                  |                                            Senha do usuário                                           |
|          |       email      |    VARCHAR   |   40 bytes  |                  |                                            email do usuário                                           |
|          | dataDeNascimento |     DATE     |   3 bytes   |                  |                                     Data de nascimento do usuário                                     |
|          |        CPF       |    VARCHAR   |   40 bytes  |                  |                                             CPF do usuário                                            |
|          |       sexo       |    VARCHAR   |   40 bytes  |                  |                                            Sexo do usuário                                            |
|          |      contato     |      INT     |   4 bytes   |                  |                                           Numero do usuário                                           |
|          |    codEndereco   |    VARCHAR   |   40 bytes  |        FK        |                        Chave estrangeira que aponta para o endereço do usuário.                       |
| Endereço |        cod       |      INT     |   4 bytes   |   PK, NOT NULL   |                       Numero de verificação do Endereço, gerado automaticamente                       |
|          |       pais       |    VARCHAR   |   40 bytes  |                  |                                         Pais local do Endereço                                        |
|          |      estado      |    VARCHAR   |   40 bytes  |                  |                                           Estado do Endereço                                          |
|          |      cidade      |    VARCHAR   |   40 bytes  |                  |                                           Cidade do Endereço                                          |
|          |      bairro      |    VARCHAR   |   40 bytes  |                  |                                           Bairro do endereço                                          |
|          |        rua       |    VARCHAR   |   40 bytes  |                  |                                            Rua do Endereço                                            |
|          |      numero      |    VARCHAR   |   40 bytes  |                  |                                           Numero do Endereço                                          |
|          |    complemento   |    VARCHAR   |   40 bytes  |                  |                                    Complemento opcional do Endereço                                   |
|  Compra  |    codUsuario    |      INT     |   4 bytes   | PK, FK, NOT NULL | Chave estrangeira do Usuário que fez a Compra, junto com o  codLivro forma a chave primária da Compra |
|          |     codLivro     |      INT     |   4 bytes   | PK, FK, NOT NULL |  Chave estrangeira do Livro que foi comprado, junto com o codLivro  forma a chave primária da Compra  |
|          |       data       |     DATE     |   3 bytes   |                  |                                             Data da compra                                            |
|   Livro  |     codLivro     |      INT     |   4 bytes   |   PK, NOT NULL   |                         Numero de verificação do Livro, gerado automaticamente                        |
|          |      titulo      |    VARCHAR   |   40 bytes  |                  |                                            Titulo do livro                                            |
|          |     descricao    |    VARCHAR   |   40 bytes  |                  |                                      Descrição / Resumo do Livro                                      |
|          |       autor      |    VARCHAR   |   40 bytes  |                  |                                             Autor do Livro                                            |
|          |      editora     |    VARCHAR   |   40 bytes  |                  |                                            Editora do Livro                                           |
|          |     idGenero     |      INT     |   4 bytes   |        FK        |                          Chave estrangeira que aponta para o gênero do livro                          |
|          |      idioma      |    VARCHAR   |   40 bytes  |                  |                                  Idioma em que o livro foi publicado                                  |
|          |        ano       |    VARCHAR   |   40 bytes  |                  |                                    Ano em que o livro foi publicado                                   |
|          |    quantidade    |      INT     |   4 bytes   |                  |                                    Quantidade de livros no estoque                                    |
|          |       preco      |     FLOAT    |   8 bytes   |                  |                                             Preço do Livro                                            |
|  Genero  |        id        |      INT     |   4 bytes   |   PK, NOT NULL   |                        Numero de verificação do Genero, gerado automaticamente                        |
|          |       tipo       |    VARCHAR   |   40 bytes  |                  |                                             Tipo do Genero                                            |
|          |     descricao    |    VARCHAR   |   40 bytes  |                  |                                          Descrição do Genero                                          |

# 5 Referências  
