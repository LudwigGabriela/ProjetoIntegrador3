# Relatório de Evolução do Sistema VetTrace

## 1. Introdução

O presente documento tem como objetivo registrar e acompanhar as atividades de desenvolvimento realizadas no sistema web VetTrace, desenvolvido para auxiliar no gerenciamento de resíduos e cadáveres da clínica veterinária do CEUB.

Além do acompanhamento das tarefas por meio das marcações de atividades, este documento apresenta de forma mais detalhada as funcionalidades implementadas, alterações realizadas no banco de dados e melhorias aplicadas ao sistema durante o processo de desenvolvimento.

## 2. Alterações realizadas no banco de dados

Durante a evolução do sistema, foram realizadas alterações na estrutura do banco de dados para possibilitar o armazenamento de novas informações relacionadas ao registro e gerenciamento de cadáveres.

Foram adicionados os seguintes campos:

- **Nome do proprietário:** permite identificar o proprietário relacionado ao animal.
- **Causa do óbito:** registra a causa informada para o falecimento do animal.
- **Destino:** informa o destino definido para o cadáver.
- **Data de saída:** registra a data em que o cadáver deixou a instituição.

Essas alterações possibilitaram ampliar as informações armazenadas pelo sistema e melhorar o controle dos registros.

## 3. Registro de cadáveres

A funcionalidade de registro de cadáveres foi implementada e encontra-se funcionando.

O sistema permite realizar o cadastro das informações relacionadas ao cadáver, incluindo os novos dados adicionados ao banco de dados. Dessa forma, o sistema passa a possibilitar um acompanhamento mais completo do processo de entrada, permanência e saída dos cadáveres.

## 4. Funcionalidades de edição e exclusão

Foram adicionados os botões de **Editar** e **Excluir** aos registros apresentados nas páginas do sistema.

### 4.1 Página de Resíduos

Na página de resíduos foram adicionadas as opções:

- **Editar:** permite alterar as informações de um registro previamente cadastrado.
- **Excluir:** permite remover um registro do sistema.

### 4.2 Página de Cadáveres

As mesmas funcionalidades foram adicionadas à página de cadáveres:

- **Editar:** permite atualizar as informações de um cadáver já registrado.
- **Excluir:** permite remover um registro de cadáver do sistema.

A implementação dessas funcionalidades facilita a manutenção dos dados e permite corrigir ou remover informações quando necessário.

## 5. Identificação do usuário nos relatórios

Foi implementada também a identificação do usuário responsável pelo registro nos relatórios gerados pelo sistema.

Dessa forma, os relatórios passam a apresentar a informação referente ao usuário que realizou determinada operação, contribuindo para a rastreabilidade das ações realizadas no sistema.

Essa funcionalidade é importante para o controle das informações e para identificar os responsáveis pelos registros realizados.
