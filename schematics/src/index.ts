import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { CreateDomain } from './domain';
import { SetUp } from './setup';
import { globalVariables } from './variable';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function angularProjectBoilerplate(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.log('info', 'Hello from custom schematic');
    return tree;
    const fnInputs = { tree, _context };
    const variables = globalVariables(fnInputs);
    SetUp(fnInputs);
    CreateDomain(fnInputs);
    return tree;
  };
}
