import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as articlesCommands from './commands/articles';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articlesCommands);
