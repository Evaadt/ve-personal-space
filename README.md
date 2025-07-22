# 🌿 ve-personal-space

Personal blog for Evelyn – focused on yoga, spirituality and travel.

## ✅ Pré-requisitos

Antes de começar, certifique-se de que tem as seguintes ferramentas instaladas no seu sistema:

* **Git**: Para clonar o repositório.
* **PHP** (versão 8.1 ou superior).
* **Composer** (versão 2.x).
* **Node.js** (versão 20). Recomenda-se o uso de **NVM** (Node Version Manager) para instalar e gerenciar versões do Node.js.
    * [Guia de Instalação NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
* **MySQL** ou **MariaDB** (ou outro banco de dados compatível com Laravel, como PostgreSQL).
* **Um editor de código** (e.g., VS Code, Sublime Text).

---

## ⚙️ Começando (Configuração Local)

Siga os passos abaixo para ter uma cópia do projeto em execução no seu ambiente local para desenvolvimento e testes.

### Clonagem do Repositório

Abra o seu terminal e clone o repositório:

```bash
git clone [URL_DO_SEU_REPOSITORIO_AQUI]
cd ve-personal-space
````

### Configuração do Backend (Laravel)

1.  Navegue até o diretório do backend:

    ```bash
    cd backend
    ```

2.  Instale as dependências do Composer:

    ```bash
    composer install
    ```

3.  Crie uma cópia do ficheiro de ambiente de exemplo e configure-o:

    ```bash
    cp .env.example .env
    ```

4.  Gere a chave da aplicação Laravel (se já não estiver gerada automaticamente):

    ```bash
    php artisan key:generate
    ```

5.  **Configure o Banco de Dados no ficheiro `.env`**:
    Abra o ficheiro `.env` e ajuste as variáveis `DB_CONNECTION`, `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME` e `DB_PASSWORD` para corresponderem às suas configurações de banco de dados local.

    Exemplo:

    ```dotenv
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=ve_personal_space_db # Crie este banco de dados MANUAMENTE
    DB_USERNAME=root
    DB_PASSWORD=
    ```

6.  **Crie o banco de dados manualmente** usando o phpMyAdmin, MySQL Workbench ou através do terminal (ex: `CREATE DATABASE ve_personal_space_db;` após aceder ao seu cliente MySQL).

7.  **Execute as Migrations e os Seeders**:
    Este comando irá apagar todas as tabelas existentes no seu banco de dados (se houverem), criar todas as tabelas a partir das migrations (incluindo `roles` e `users`), e preenchê-las com os dados iniciais definidos nos seeders (ex: "administrador", "user-comum", "admin-dev", etc.).

    ```bash
    php artisan migrate:fresh --seed
    ```

### Configuração do Frontend (Angular)

1.  Volte para o diretório raiz do projeto e navegue para o diretório do frontend:

    ```bash
    cd ../frontend
    ```

2.  **Use a versão correta do Node.js com NVM**:
    O projeto está configurado para usar o Node.js v20. Certifique-se de que tem esta versão instalada e ativa com NVM:

    ```bash
    nvm use 20
    ```

    Se não tiver, `nvm install 20` e depois `nvm use 20`.

3.  Instale as dependências do npm:

    ```bash
    npm install
    ```

4.  **Configure o URL da API do Backend**:
    Abra o ficheiro de configuração do ambiente Angular (geralmente `src/environments/environment.ts` ou `src/environments/environment.development.ts`) e configure o URL base da sua API Laravel.

    Exemplo:

    ```typescript
    export const environment = {
      production: false,
      apiUrl: '[http://127.0.0.1:8000/api](http://127.0.0.1:8000/api)' // URL base da sua API Laravel
    };
    ```

### Executando o Projeto

Para iniciar tanto o backend quanto o frontend com um único comando, utilizamos um script personalizado.

1.  **Volte para a pasta raiz do projeto `ve-personal-space`**:

    ```bash
    cd ..
    ```

2.  **Dê permissão de execução ao script de inicialização (se ainda não o fez)**:

    ```bash
    chmod +x start-space.sh
    ```

3.  **Inicie os serviços**:

    ```bash
    ./start-space.sh
    ```

    Este script irá:

      * Garantir que o Node.js v20 esteja ativo (via `nvm`).
      * Iniciar o servidor de desenvolvimento do Laravel (backend) em `http://127.0.0.1:8000`.
      * Iniciar o servidor de desenvolvimento do Angular (frontend) em `http://localhost:4200`.

    Você pode aceder ao frontend no seu navegador em `http://localhost:4200`.
    Para encerrar ambos os serviços, pressione `Ctrl+C` no terminal onde o script está a ser executado.


## 🌱 Dados Iniciais (Seeders)

Após a execução de `php artisan migrate:fresh --seed`, o banco de dados será populado com os seguintes dados iniciais:

**Roles:**

  * `administrador`: Usuário com acesso total ao sistema.
  * `user-comum`: Usuário padrão com acesso limitado.

**Utilizadores (Senhas padrão: 'password'):**

  * `admin-dev` (`admin.dev@example.com`): Associado à role `administrador`.
  * `administrador` (`administrador@example.com`): Associado à role `administrador`.
  * `utilizador-um` (`utilizador.um@example.com`): Associado à role `user-comum`.

