# VetTrace

[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

O **VetTrace** é um sistema projetado para garantir o controle e a rastreabilidade na gestão de clínicas veterinárias. Focado na conformidade com as normas sanitárias, o software otimiza o ciclo de vida de insumos médicos, garantindo segurança, eficiência e auditoria transparente.

---

## 📌 Sobre o Projeto

O desenvolvimento do VetTrace surge da necessidade de modernizar e automatizar processos críticos dentro do ambiente clínico veterinário. O sistema fornece uma solução centralizada para a Gestão de Resíduos e o controle de Materiais Esterilizados. 

Toda a arquitetura de dados e regras de negócio foram desenhadas para seguir rigorosamente as diretrizes da RDC 222/2018, garantindo que todas as ações possuam registro de data, hora e rastreabilidade completa. A interface foi projetada para ser simples e intuitiva, facilitando a adoção por parte dos profissionais de saúde e gestores.

## 🚀 Funcionalidades Principais

### Gestão de Resíduos
* **Registro Detalhado:** Cadastro de resíduos informando tipo (infectante, comum, perfurocortante), data, hora, quantidade e origem (cirurgia, consulta, laboratório).
* **Controle de Destinação:** Definição do destino final do resíduo (descarte direto ou encaminhamento) com histórico de alterações para fins de auditoria.
* **Histórico e Rastreabilidade:** Consulta completa de resíduos com filtros por data e tipo.
* **Relatórios Gerenciais:** Geração de relatórios com o total de resíduos por período e classificação, auxiliando na análise de dados e conformidade.

### Materiais Esterilizados
* **Gestão de Ciclo de Uso:** Cadastro de materiais reutilizáveis para controle de estoque e disponibilidade.
* **Monitoramento de Status:** Atualização em tempo real do estado dos equipamentos (Sujo, Em esterilização, Esterilizado, Em uso) com registro automático de data e hora.
* **Controle de Estoque e Pendências:** Identificação visual rápida de materiais prontos para uso e listagem de equipamentos pendentes de esterilização para evitar falta de insumos.

### Dashboard e Visualização
* **Painel de Decisão:** Dashboard geral com o resumo do sistema, exibindo o total de resíduos registrados, materiais esterilizados e pendentes, atualizado em tempo real.

## 🛠️ Tecnologias e Arquitetura

O projeto foi construído utilizando uma stack robusta e de mercado, visando performance, manutenibilidade e escalabilidade:

* **Backend:** Python
* **Frontend:** HTML5, CSS3, JavaScript
* **Framework UI:** Bootstrap (Garantindo responsividade e uma interface clara e intuitiva)
* **Banco de Dados:** PostgreSQL (Para armazenamento seguro e relacional, garantindo a integridade do histórico e rastreabilidade)

## 🎨 Interface (UI/UX)

O design da aplicação foi pensado para ser intuitivo e focado na agilidade do dia a dia da clínica veterinária, reduzindo a curva de aprendizado dos funcionários.

![Prévia do Dashboard](link-da-sua-imagem-aqui.jpg)

🔗 **[Acessar o protótipo completo no Figma](https://www.figma.com/make/8uLDzoqZsqzk8zLYMic0pg/Veterinary-Management-Dashboard-Wireframe?t=HzyuMSq0NA6IXz63-1&preview-route=%2Frelatorios)**

## 👥 Equipe de Desenvolvimento

Este projeto foi desenvolvido por uma equipe multidisciplinar, aplicando metodologias ágeis e boas práticas de engenharia de software:

| Nome | Papel / Especialidade | Perfil GitHub |
| :--- | :--- | :--- |
| **Caio Peliz** | Scrum Master & Desenvolvedor | [@caiocardoso418](https://github.com/caiocardoso418) |
| **Gabriela Ludwig** | Product Owner (PO) & Desenvolvedora | [@LudwigGabriela](https://github.com/LudwigGabriela) |
| **Juan Talyson** | Database Administrator (DBA) | [@juantalyson](https://github.com/juantalyson) |
| **Maria Elis** | UI/UX Designer & Documentação | [@mariaelis23](https://github.com/mariaelis23) |
| **Carlos Eduardo** | Tech Leader & Arquitetura | [@karlosmafra](https://github.com/karlosmafra) |

