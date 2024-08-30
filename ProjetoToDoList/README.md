# •	Escopo:
 - #### Desenvolver uma aplicação web de Lista de tarefas para a instituição de ensino SENAI. A aplicação deve permitir que os usuários organizem suas atividades do diárias de maneira intuitiva, segura e confiavél.
# •	Objetivos:
- ## Específicos: 
    - ##### O sistema deve permitir que os usuários façam seu cadastro e login na aplicação, também, é fundamental permitir que os usuários anotem, editem e excluam suas tarefas diárias.
- ## Mensuráveis:
    - ##### 	O sistema deve suportar diversos cadastros (Ex: 100);
    - ##### 	O sistema deve suportar múltiplos acessos ao mesmo tempo;
    - ##### 	O sistema deve suportar que um usuário tenha várias tarefas cadastradas;
    - ##### 	O sistema deve garantir que apenas o usuário tenha acesso a sua lista de tarefas;
- ##	Atingíveis:
    - ##### 	Desenvolver um sistema funcional, seguro e confiável
    - ##### 	Desenvolver uma interface agradável, acessível e de fácil entendimento a todo tipo de usuário
    - ##### 	Implementar métodos CRUD para as tarefas
    - ##### 	Desenvolver base de dados que comuniquem com a página web, garantindo a segurança e integridade de dados dos usuários.
    - ##### 	Utilizar frameworks de programação FRONT-END atuais e confiáveis como REACT
    - ##### 	Utilizar frameworks de programação BACK-END atuais e confiáveis
    - ##### 	Utilizar uma base de dados de estrutura não relacional que armazene todos os dados necessários de um usuário
- ## 	Relevantes:
    - ##### 	Interface atrativa para auxiliar o usuário a utilizar a aplicação
    - ##### 	
- ## 	Temporais:
    - ##### 	Desenvolver um protótipo funcional em 1 semana de projeto
# •	Cronograma:
- ## Planejamento e Preparação (1 Semana)
    - ### Reunião Inicial
        - #### Alinhar expectativas e objetivos com a equipe.
        - #### Entrevista com clientes pela equipe de comunicação
        - #### Definir papéis e responsabilidades.
        - #### Revisar e confirmar o escopo do projeto.
    - ### Análise de Requisitos e Design
        - #### Refinar requisitos do sistema.
        - #### Desenvolver e revisar o Diagrama de Classe e Diagramas de Uso e Fluxo.
        - #### Elaborar um protótipo inicial no Figma para a interface.
    - ### Preparação do Ambiente de Desenvolvimento
        - #### Configuração de ferramentas e ambientes: Git, GitHub, PostgreSQL, Visual Studio Code.
        - #### Configuração inicial do projeto no Laravel e no front-end (HTML, CSS, JavaScript).
- ## Desenvolvimento do Protótipo (1 Semana)
    - ### Desenvolvimento do Back-End
        - #### Implementar a base de dados no PostgreSQL.
        - #### Desenvolver métodos CRUD básicos para usuários e consultas.
        - #### Revisar e confirmar o escopo do projeto.
    - ### Desenvolvimento do Front-End
        - #### Criar páginas básicas de cadastro, login e dashboards.
        - #### Integrar o front-end com o back-end (CRUD de consultas e perfil de usuário).
    - ### Revisão e Testes do Protótipo
        - #### Testar a funcionalidade básica do protótipo.
        - #### Realizar ajustes e correções.
- ## Desenvolvimento Completo (3 Semanas)
    - ### Back-End Completo
        - #### Implementar a lógica de agendamento e gerenciamento de consultas.
        - #### Implementar a funcionalidade de edição e cancelamento de consultas.
    - ### Front-End Completo
        - #### Finalizar as páginas do paciente e médico, incluindo opções de busca.
        - #### Melhorar a interface com base em feedback do protótipo.
    - ### Integração e Testes
        - #### Integrar completamente front-end e back-end.
        - #### Testar funcionalidades completas e realizar ajustes.
- ## Testes e Correções (1 Semana)
    - ### Testes Internos
        - #### Testar funcionalidades com a equipe de desenvolvimento.
        - #### Identificar e corrigir bugs e problemas de usabilidade.
    - ### Testes com Usuários
        - #### Conduzir testes de usabilidade com um grupo pequeno de usuários.
        - #### Coletar feedback e implementar melhorias.
    - ### Revisão Final e Documentação
        - #### Preparar documentação final para o sistema.
        - #### Realizar revisão final do código e da interface.
- ## Lançamento e Monitoramento (1 Semana)
    - ### Preparação para Lançamento
        - #### Configurar o ambiente de produção.
        - #### Realizar backup e preparar estratégias de manutenção.
    - ### Lançamento
        - #### Publicar o sistema e iniciar a operação.
    - ### Monitoramento Pós-Lançamento
        - #### Monitorar o sistema para identificar e corrigir problemas emergentes.
        - #### Recolher feedback dos primeiros usuários e implementar ajustes necessários.

# •	Recursos:
- ### Softwares de versionamento: Git e GitHub
- ### Softwares para desenvolvimento: Visual Studio Code
- ### 	Softwares para Gerenciamento do Banco De Dados: PostgreSQL
- ### 	Equipe de desenvolvimento:
    - #### 	Programadores back-end Laravel
    - #### 	Programadores front-end
   - #### 	Gerente de projeto
    - #### 	Equipe de comunicação
- ### 	Ferramentas para planejamento:
    - #### 	Github Projects
    - #### 	Figma

# •	Análise de Risco:
- #### 	Atraso no desenvolvimento por razões externas ao trabalho
    - ##### 	Solução: Se concentrar na produção do projeto, se atentando sempre a data de entrega
- #### 	Problemas de conexão com banco de dados
    - ##### 	Solução: Realização de backups e manutenções frequentes na plataforma garantindo que o usuário não utilize uma plataforma com erros.
- #### 	Falha na segurança ou criptografia dos dados
    - ##### 	Solução: Revisões constantes aos usuários cadastrados e manutenção no código da plataforma
- #### 	Conflitos de horários no sistema de agendamento.
    - ##### Solução: Uso de boas práticas de programação para evitar que esses erro possam ocorrer
# •	Diagramas de Desenvolvimento:

## •	Diagrama de Classe:
    Usuarios(
        - nome
        - senha
        - email
        - tipo [“medico”, “paciente”]
        - cpf
        - cidade
        - estado
        - cep
        - crm 
    )

    Consultas(
        - horario
        - data
        - especialidade
        - medico (usuário_id)
        - localidade
    )

	Agenda(
        - paciente (usuário_id)
        - consulta_id
        - status
    )

## •	Diagrama de Uso:
- ### Paciente:
    - #####  Pode buscar, marcar e verificar suas consultas marcadas

- ### Médico:
    - ##### Pode criar, editar ,apagar e verificar horários de suas consultas

## •	Diagrama de Fluxo:
- ### Cadastro/Login → [Paciente] → Dashboard (Página interna)
    - #### Procurar novas consultas para marca-las
    - #### Ver suas consultas já marcadas

- ### 	Cadastro/Login → [Médico] → Dashboard - Médico
    - #### Verificar a agenda de horários
    - #### Editar horários de consultas marcadas ou desmarcadas
    - #### Excluir consultas marcadas ou desmarcadas
    - #### Criar novos horários de consulta



# Protótipo:
- ## Logomarca:
<img src="./imagem-doc/Logo.png"/>




