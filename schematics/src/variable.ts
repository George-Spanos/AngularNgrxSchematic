import { Tree, SchematicContext, FileEntry } from "@angular-devkit/schematics";
interface IGlobalVariablesOutput {
    angularJson: FileEntry
}

export function globalVariables({ tree, _context }: { tree: Tree, _context: SchematicContext }) {
    return;
    const angularJson = tree.get('angular.json');
    if (!angularJson) throw new Error('Angular JSON not found');
    return {
        angularJson
    }
}