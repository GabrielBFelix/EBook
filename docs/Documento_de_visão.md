<h1> Documento de Visão</h1>
  
<h2> 1. Introdução</h2>
  <ul>
    <li>Este documento tem o objetivo de coletar, analisar e definir os requisitos do sistema Ebook, desde os requisitos não funcionais , assim como os funcionais também, buscamos entrar em acordo sobre como cada requisito irá impactar no projeto</li>
    <li>O Sistema a ser desenvolvido será um sistema de compras de livros, onde o usuário cadastrado poderá comprar livros que estão disponíveis, tais livros serão adicionados pelos próprios usuários, ou seja, os usuários terão opções de comprar / vender. </li>
    <li>O sistema irá gerar relatórios com o objetivo de manter o usuário informado sobre os tipos de transações que ele fez e mostrando informações sobre os livros que ele colocou a venda. </li>
  </ul>
<h2>2. Descrição geral </h2>
  <ul>
    <li><h3>Requisitos Funcionais :</h3>
      <table>
        <thead>
          <tr><th>Cod</th> <th>Nome</th> <th>Descrição</th></tr>
        </thead>
        <tbody>
        <tr><td>RF001</td><td>Operação de cadastrar usuários</td><td></td></tr>
        <tr><td>RF002</td><td>Operação de atualizar perfil de usuário</td><td></td></tr>
        <tr><td>RF003</td><td>Operação de excluir usuários</td><td></td></tr>
        <tr><td>RF004</td><td>Operação de visualizar usuários</td><td></td></tr>
        <tr><td>RF005</td><td>Operação de cadastrar livro</td><td></td></tr>
        <tr><td>RF006</td><td>Operação de atualizar livro</td><td></td></tr>
        <tr><td>RF007</td><td>Operação de excluir livro</td><td></td></tr>
        <tr><td>RF008</td><td>Operação de visualizar livro</td><td></td></tr>
        <tr><td>RF009</td><td>Operação de cadastrar endereço</td><td></td></tr>
        <tr><td>RF010</td><td>Operação de atualizar endereço</td><td></td></tr>
        <tr><td>RF012</td><td>Operação de excluir endereço</td><td></td></tr>
        <tr><td>RF013</td><td>Operação de visualizar endereço</td><td></td></tr>
        <tr><td>RF014</td><td>Operação de cadastro categoria</td><td></td></tr>
        <tr><td>RF015</td><td>Operação de atualização categoria</td><td></td></tr>
        <tr><td>RF016</td><td>Operação de excluir categoria</td><td></td></tr>
        <tr><td>RF017</td><td>Operação de visualizar categoria</td><td></td></tr>
        <tr><td>RF018</td><td>Operação de cadastro vendas</td><td></td></tr>
        <tr><td>RF019</td><td>Operação de atualizar vendas</td><td></td></tr>
        <tr><td>RF020</td><td>Operação de excluir vendas</td><td></td></tr>
        <tr><td>RF021</td><td>Operação de visualizar vendas</td><td></td></tr>
        <tr><td>RF022</td><td>Operação de cadastro compra</td><td></td></tr>
        <tr><td>RF023</td><td>Operação de atualizar compra</td><td></td></tr>
        <tr><td>RF024</td><td>Operação de excluir compra</td><td></td></tr>
        <tr><td>RF025</td><td>Operação de visualizar compra</td><td></td></tr>
        <tr><td>RF026</td><td>Geração de relatório de venda</td><td></td></tr>
        <tr><td>RF027</td><td>Geração de relatório de compra</td><td></td></tr>
        <tr><td>RF028</td><td>Autenticação de usuário</td><td></td></tr>
        <tr><td>RF029</td><td>Integração com algum sistema de pagamento</td><td></td></tr>
        <tr><td>RF030</td><td>Adicionar um livro a lista de desejos</td><td></td></tr>
        </tbody>
      </table>
    </li>
    <li><h3>Requisitos não funcionais</h3>
      <table>
        <thead>
          <tr><th>Cod</th><th>Nome</th><th>Descrição</th></tr>
        </thead>
        <tbody>
        <tr><td>RNF001</td><td>Perfomance</td><td></td></tr>
        <tr><td>RNF002</td><td>Usabilidade</td><td></td></tr>
        <tr><td>RNF003</td><td>Segurança</td><td></td></tr>
        <tr><td>RNF004</td><td>Confiabilidade</td><td></td></tr>
        <tr><td>RNF005</td><td>Eficiência</td><td></td></tr>
        <tr><td>RNF006</td><td>Interoperabilidade</td><td></td></tr>
        </tbody>
      </table>
    </li>
  </ul>
<h2>3. Perfis dos usuários</h2>
  <p>O sistema poderá ser utilizado por diversos usuários. Temos os seguintes perfis:</p>
  <dl>
    <dt>Administrador</dt>
    <dd>Este usuário administra e modera o aplicativo e seus usuários.</dd>
    <dt>Leitor</dt>
    <dd>Este usuário utiliza o sistema para comprar e ler livros.</dd>
    <dt>Vendedor</dt>
    <dd>Este usuário utiliza o sistema para publicar seus livros.</dd>
  </dl>
<h2>4. Tabela de Riscos</h2>
<table>
  <tr>
    <th>Data</th>
    <th>Risco</th>
    <th>Prioridade</th>
    <th>Responsável</th>
    <th>Status</th>
    <th>Providência/Solução</th>
  </tr>
  <tr>
    <td>28/02/2020</td>
    <td>Usuário não gostar da interface</td>
    <td>Média</td>
    <td>Todos</td>
    <td>Vigente</td>
    <td>Desenvolver a interface com o feedback do usuário</td>
  </tr>
  <tr>
    <td>28/02/2020</td>
    <td>Concorrência</td>
    <td>Baixa</td>
    <td>Todos</td>
    <td>Vigente</td>
    <td>Analisar o motivo da preferência dos usuários pela concorrência</td>
  </tr>
  <tr>
    <td>28/02/2020</td>
    <td>Tempo de treinamento</td>
    <td>Alta</td>
    <td>Todos</td>
    <td>Vigente</td>
    <td>Planejar e reforçar os estudos das tecnologias utilizadas</td>
  </tr>
  <tr>
    <td>28/02/2020</td>
    <td>Falta de experiência dos desenvolvedores</td>
    <td>Alta</td>
    <td>Todos</td>
    <td>Vigente</td>
    <td>Estudar as melhores tecnicas para melhorar a perfomance e otimização do sistema</td>
  </tr>
</table>

<h2>5. Suposições e dependências</h2>
<ul>
  <li></li>
</ul>
