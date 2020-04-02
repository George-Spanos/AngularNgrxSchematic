import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { SchematicContext, Rule } from "@angular-devkit/schematics";
import * as fs from 'fs';
export function SetUp({ tree, _context }: { tree: Tree, _context: SchematicContext }) {
    if (!tree.exists('./projects')) {
        _context.logger.log('info', 'Projects folder does not exist. Should create and migrate src to projects/client');
    }


}
function addPackageJsonDependencies(): Rule {
    return (host: Tree, context: SchematicContext) => {
        const dependencies: NodeDependency[] = [
            { type: NodeDependencyType.Default, version: '~6.1.1', name: '@angular/elements' },
            { type: NodeDependencyType.Default, version: '~1.1.0', name: '@webcomponents/custom-elements' },
            { type: NodeDependencyType.Default, version: '~1.1.0', name: 'angular-made-with-love' }
        ];

        dependencies.forEach(dependency => {
            addPackageJsonDependency(host, dependency);
            context.logger.log('info', `✅️ Added "${dependency.name}" into ${dependency.type}`);
        });

        return host;
    };
}