## 📄 `CONTRIBUTING.md`

```md
# 🧭 Contribuindo para o Projeto `ve-personal-blog`

Este é um projeto pessoal criado com Angular e SSR para o blog da Evelyn. Mesmo sendo um projeto individual, seguimos boas práticas para manter o código limpo, versionado e escalável.

---

## ✅ Padrão de Commits

Usamos o padrão **Conventional Commits**, com a seguinte estrutura:

```

<tipo>(escopo opcional): descrição curta no infinitivo

````

### Tipos principais:

| Tipo        | Uso                                                              |
|-------------|------------------------------------------------------------------|
| `feat`      | Nova funcionalidade (ex: nova página, componente, layout)        |
| `fix`       | Correção de bugs ou comportamentos inesperados                   |
| `docs`      | Apenas documentação (README, comentários no código, etc)         |
| `style`     | Formatação, indentação, CSS/SCSS, sem alteração de lógica        |
| `refactor`  | Refatoração sem adicionar ou remover funcionalidade              |
| `chore`     | Configurações, scripts, tarefas administrativas                   |
| `build`     | Dependências, configurações do Angular CLI, SSR, etc             |

---

## 🔍 Exemplos

```bash
feat: criar componente de banner da homepage
fix(home): corrigir responsividade no layout mobile
docs: adicionar instruções de deploy ao README
style: aplicar padding consistente aos botões
chore: configurar ESLint e Prettier
build: adicionar Angular Universal para SSR
````

---

## 📂 Estrutura de Pastas Recomendada

```
ve-personal-blog/
├── frontend/        ← Aplicação Angular com SSR
├── assets/          ← Imagens, textos estáticos
├── LICENSE
├── README.md
└── CONTRIBUTING.md
```
