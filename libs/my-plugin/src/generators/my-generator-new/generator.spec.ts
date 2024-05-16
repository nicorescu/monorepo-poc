import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { myGeneratorNewGenerator } from './generator';
import { MyGeneratorNewGeneratorSchema } from './schema';

describe('my-generator-new generator', () => {
  let tree: Tree;
  const options: MyGeneratorNewGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await myGeneratorNewGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
