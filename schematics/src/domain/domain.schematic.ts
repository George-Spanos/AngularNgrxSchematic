import { Tree, SchematicContext, schematic } from "@angular-devkit/schematics";
export function CreateDomain({ tree, _context }: { tree: Tree, _context: SchematicContext }) {
    // Create Domain Library in project
    tree.create('./projects/domain/domain.base.ts', 'test content');

}