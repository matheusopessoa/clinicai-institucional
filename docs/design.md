# 💄 Sous Clinic: Beauty Tech Design System

**Versão:** 1.0  
**Conceito:** "Clinical Luxury & High Tech"

---

## 1. O Conceito "Beauty Tech"
O design foge do padrão "SaaS Genérico" (azul e cinza) e do padrão "Estética Amadora" (rosa choque e dourado).

* **A Vibe:** É a fusão entre a autoridade de uma clínica médica de alto padrão e a sofisticação tecnológica do Vale do Silício.
* **Palavras-chave:** Minimalismo, Profundidade, Elegância, "Old Money", Fluidez.

---

## 2. Paleta de Cores (Tailwind CSS)

### 🌑 Base (Dark Mode - Luxo & Profundidade)
Não usamos preto puro (`#000`). Usamos tons profundos de azul-ardósia para criar uma atmosfera premium.

* **Background Principal:** `bg-slate-950`
* **Superfícies (Cards):** `bg-slate-900` com bordas sutis `border-slate-800`
* **Texto Principal:** `text-slate-50` (quase branco)
* **Texto Secundário:** `text-slate-400`

### ☀️ Base (Light Mode - Clínico & Limpo)
Para o dia a dia e ambientes iluminados, o visual remete à assepsia e clareza clínica.

* **Background Principal:** `bg-slate-50` (Off-white)
* **Superfícies:** `bg-white` com sombras suaves `shadow-sm`
* **Texto Principal:** `text-slate-900`
* **Texto Secundário:** `text-slate-500`

### 🎨 Acentos (A Alma da Marca)

1.  **Primary (O Toque Estético):** `Rose-500` a `Rose-400`.
    * *Função:* Botões CTA, gradientes de texto e detalhes de destaque.
    * *Uso:* Botões "Assine Agora", palavras-chave no título.
2.  **Secondary (A Tecnologia/Logo):** `Sky-500` ou `Blue-600` (derivado da Logo).
    * *Função:* Ícones técnicos, links, hovers sutis, detalhes de "confiança".
    * *Uso:* Ícones de funcionalidades, links de "saiba mais".
3.  **Semantic (O Valor do Produto):** `Emerald-500` (Verde WhatsApp Sofisticado).
    * *Função:* Simulações de chat, ícones de sucesso, status "Online".

---

## 3. Tipografia (Híbrida)

A tipografia é o maior diferencial de sofisticação deste sistema.

### Fontes
1.  **Sans-Serif (Principal):** *Inter*, *Geist* ou *Plus Jakarta Sans*.
    * Usada para 90% do site (corpo, botões, menus, funcionalidade). Garante leitura rápida.
2.  **Serif (Destaque/Display):** *Playfair Display* ou *Instrument Serif*.
    * Usada **apenas em itálico** para palavras-chave dentro de títulos grandes.
    * *Exemplo:* "Não deixe sua paciente *desamparada*..."

### Regra de Ouro
> "Use a fonte serifada como se fosse um acessório de joalheria: pouco e em lugares estratégicos para dar brilho."

---

## 4. Componentes UI & Efeitos

### ✨ Glassmorphism (Vidro Fosco)
Usado para elementos flutuantes, criando camadas e profundidade.
* **Onde:** Navbar flutuante (Floating Pill), Cards de Notificação, Modais.
* **Classes Tailwind:** `bg-slate-900/50 backdrop-blur-md border border-white/10`

### 🔘 Botões
* **Formato:** Sempre `rounded-full` (pílula). Isso é mais amigável e moderno que cantos quadrados.
* **CTA Principal:** Gradiente suave ou cor sólida com sombra colorida (Glow).
    * *Ex:* `bg-gradient-to-r from-rose-500 to-rose-600 shadow-[0_0_20px_-5px_rgba(244,63,94,0.4)]`

### 📱 Mockups & Cards
* **Bento Grid:** Layouts em grade assimétrica para features.
* **Mockups:** Bordas finas, sombras difusas e realistas (`shadow-2xl`).
* **Noise Texture:** Um leve ruído (granulação) no background para evitar que a cor chapada pareça "artificial".

---

## 5. Exemplo de Código (Snippet para Agentes)

Se precisar criar uma nova seção, siga este padrão de estrutura:

```tsx
// Exemplo de Card no padrão Beauty Tech
<div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
  
  {/* Glow Effect no fundo */}
  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-rose-500/10 blur-[50px]" />

  {/* Ícone Tech */}
  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-sky-600 dark:bg-slate-800">
    <IconName className="h-5 w-5" />
  </div>

  {/* Título */}
  <h3 className="mb-2 text-xl font-medium text-slate-900 dark:text-white">
    Gestão Inteligente
  </h3>

  {/* Texto */}
  <p className="text-slate-500 dark:text-slate-400">
    Automatize o contato com seus pacientes usando nossa IA.
  </p>
</div>