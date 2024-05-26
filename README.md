# Product Registration Application with Angular CLI

Este repositório contém uma aplicação Angular para cadastro de produtos, desenvolvida utilizando Angular CLI. A aplicação possui um design modular e escalável, permitindo fácil adaptação para diversos casos de uso. O projeto foi desenvolvido como parte de um curso na plataforma Cod3r.

## Índice

- [Recursos](#recursos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Personalização](#personalização)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## Recursos

- **Design Responsivo**: Compatível com vários dispositivos.
- **Operações CRUD**: Criar, ler, atualizar e excluir produtos.
- **Validação de Formulário**: Validação de formulário no lado do cliente.
- **Integração com REST API**: Pronto para integrar com serviços backend.
- **Localização**: Configurado para Português do Brasil (`pt-BR`).

## Instalação

### Pré-requisitos

- Node.js (v12.x ou superior)
- Angular CLI (v12.x ou superior)

### Passos

1. Clone o repositório:
    ```bash
    git clone https://github.com/your-username/product-registration-angular.git
    cd product-registration-angular
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:
    ```bash
    ng serve
    ```

4. Abra seu navegador e navegue para `http://localhost:4200/`.

## Uso

### Estrutura do Projeto

- **App Component**: O componente raiz que importa e integra todos os outros componentes e módulos.
- **Header, Footer, Nav Components**: Componentes de template para o layout da aplicação.
- **Product Components**: 
  - `ProductCreateComponent`: Componente para criação de novos produtos.
  - `ProductReadComponent`: Componente para leitura/exibição de produtos.
  - `ProductUpdateComponent`: Componente para atualização de produtos existentes.
  - `ProductDeleteComponent`: Componente para exclusão de produtos.
- **Services**:
  - `ProductService`: Serviço para manipulação das operações relacionadas aos produtos e requisições HTTP.

### Personalização

1. **Modificação do Formulário**: Atualize os campos do formulário nos componentes `product-create` e `product-update`.
2. **Atualização da Validação**: Ajuste a lógica de validação nos arquivos TypeScript dos respectivos componentes.
3. **Estilização**: Personalize os estilos nos arquivos CSS associados (`app.component.css`, CSS específico dos componentes).

### Localização

A aplicação está configurada para Português do Brasil. Para alterar o local, atualize o provedor `LOCALE_ID` no `AppComponent`.

## Contribuição

Contribuições são bem-vindas! Siga estes passos para contribuir:

1. Faça um fork do repositório.
2. Crie uma nova branch (`git checkout -b feature-branch`).
3. Faça suas alterações.
4. Commite suas alterações (`git commit -m 'Add new feature'`).
5. Faça o push para a branch (`git push origin feature-branch`).
6. Crie um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## Contato

Para qualquer dúvida ou feedback, entre em contato pelo e-mail [your-email@example.com].

---

Desenvolvido como parte de um curso na plataforma Cod3r. Confira os cursos em [Cod3r](https://www.cod3r.com.br/).
