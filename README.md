# Sous Clinic - Site Institucional

Site institucional do Sous Clinic com sistema de registro e onboarding.

## 🚀 Funcionalidades

- **Página de Vendas**: Landing page otimizada para conversão
- **Sistema de Registro**: Wizard de 2 passos para criação de conta
- **Verificação de Email**: Página dedicada para verificação
- **Redirecionamentos**: Integração com app.sousclinic.com

## 🛠️ Configuração

### 1. Instalar Dependências

```bash
# Usando bun (recomendado)
bun install

# Ou usando npm
npm install
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```bash
# API Configuration
VITE_SERVER_URL=http://localhost:3000

# App Configuration
VITE_APP_NAME=Sous Clinic
```

### 3. Executar o Projeto

```bash
# Desenvolvimento
bun dev
# ou
npm run dev

# Build para produção
bun run build
# ou
npm run build
```

## 📋 Fluxo de Registro

### Passo 1: Dados da Clínica
- Nome fantasia (obrigatório)
- Tipo de negócio (dropdown: Clínica, Consultório, Hospital, Outro)
- Especialidade principal (opcional)
- Número de funcionários (opcional)

### Passo 2: Dados Pessoais
- Nome completo (obrigatório)
- Email profissional (obrigatório)
- Telefone (obrigatório)
- Senha (com validação em tempo real)

### Após Registro:
1. ✅ Email com código de 6 dígitos enviado automaticamente
2. 🔄 Redirecionamento para `/verify-email-code` com email nos parâmetros
3. 🎯 Usuário insere código → Conta ativada → Redirecionamento para app.sousclinic.com

## 🏗️ Arquitetura

### Componentes Principais
- `RegisterWizard`: Componente principal do fluxo de registro
- `VerifyEmail`: Página de verificação de email
- `CTA`: Seção de call-to-action atualizada
- `api.ts`: Cliente API com configurações

### Rotas
- `/` - Página inicial
- `/register` - Página de registro com wizard
- `/login` - Página de login (redireciona para app.sousclinic.com)
- `/verify-email` - Tela de confirmação de email enviado
- `/verify-email-code` - Tela para inserir código de verificação

### API Integration
- **SERVER_URL**: Configurada via variável de ambiente `VITE_SERVER_URL`
- **Registro**: `POST /api/auth/register`
- **Verificação**: `POST /api/auth/verify-email` (código de 6 dígitos)
- **Reenvio**: `POST /api/auth/resend-verification` (email)
- **Campos suportados**: business_name, business_type, full_name, email, phone, specialty, number_of_employees

## 🎨 UI/UX

### Design System
- **ShadCN UI**: Componentes consistentes
- **Tailwind CSS**: Estilização moderna
- **React Hook Form + Zod**: Validação robusta
- **Framer Motion**: Animações (opcional)

### Validações
- Email único e válido
- Senha forte (8+ caracteres, maiúscula, minúscula, número)
- Telefone brasileiro formatado
- Campos obrigatórios destacados

## 🔧 Desenvolvimento

### Scripts Disponíveis
```bash
bun dev          # Servidor de desenvolvimento
bun build        # Build para produção
bun preview      # Preview da build
bun lint         # Verificar código
```

### Estrutura de Pastas
```
src/
├── components/     # Componentes reutilizáveis
│   ├── ui/        # Componentes ShadCN
│   └── RegisterWizard.tsx
├── pages/         # Páginas da aplicação
├── lib/           # Utilitários e API
└── hooks/         # Custom hooks
```

## 🚀 Deploy

O projeto está configurado para deploy no Vercel com as seguintes otimizações:

- **Build otimizado** com Vite
- **Rotas estáticas** para boa performance
- **Redirecionamentos** automáticos
- **SEO otimizado**

## 📞 Suporte

Para dúvidas sobre o desenvolvimento ou configuração, consulte a documentação do backend em `crm-clinicai-back/README.md`.
