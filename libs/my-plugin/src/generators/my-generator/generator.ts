import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { MyGeneratorGeneratorSchema } from './schema';
import { libraryGenerator } from '@nx/js';
import { LibraryGeneratorSchema } from '@nx/js/src/utils/schema';

export async function myGeneratorGenerator(
  tree: Tree,
  options: any
) {
  const featureLibOptions : LibraryGeneratorSchema = {
    name: `feature`,
    directory: options.name,
    tags: `type:feature, scope:${options.name}`
  }

  const dataAccessLibOptions : LibraryGeneratorSchema = {
    name: `data-access`,
    directory: options.name,
    tags: `type:data-access, scope:${options.name}`
  }

  await libraryGenerator(tree, featureLibOptions);
  await libraryGenerator(tree, dataAccessLibOptions);
}

export default myGeneratorGenerator;
