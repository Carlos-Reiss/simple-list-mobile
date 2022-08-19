module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build', //Alterações que afetam o sistema de construção ou dependências externas (escopos de exemplo: gulp, broccoli, npm).
        'chore', // Atualização de tarefas que não ocasionam alteração no código de produção, mas mudanças de ferramentas, mudanças de configuração e bibliotecas.
        'ci', //Mudanças em nossos arquivos e scripts de configuração de CI (exemplo de escopos: Travis, Circle, BrowserStack, SauceLabs).
        'docs', // Inclusão ou alteração somente de arquivos de documentação.
        'feat', // São adições de novas funcionalidades ou de quaisquer outras novas implantações ao código.
        'fix', //  Essencialmente definem o tratamento de correções de bugs.
        'refactor', //Utilizado em quaisquer mudanças que sejam executados no código, porém não alterem a funcionalidade final da tarefa impactada.
        'style', //Alterações referentes a formatações na apresentação do código que não afetam o significado do código, como por exemplo: espaço em branco, formatação, ponto e vírgula ausente etc.
        'test', // Adicionando testes ausentes ou corrigindo testes existentes nos processos de testes automatizados (TDD).
        'merge', // conflitos de integração que foram corrigidos na ação de merge entre branches.
        'config', // Adicionando ou atualizando arquivos de configuração de ambiente ou coisas do tipo.
        'env', // Utilizado na descrição de modificações ou adições em arquivos de configuração em processos e métodos de integração contínua (CI), como parâmetros em arquivos de configuração de containers.
      ],
    ],
  },
};
