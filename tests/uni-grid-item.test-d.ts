import { describe, expectTypeOf } from 'vitest';
import type { UniGridItemProps, UniGridItem, UniGridItemInstance } from '@/index';

describe('UniGridItem', () => {
  expectTypeOf<UniGridItemProps>().toBeObject();
  expectTypeOf<UniGridItemProps>().toEqualTypeOf<UniHelper.UniGridItemProps>();

  expectTypeOf<UniGridItem>().not.toBeAny();
  expectTypeOf<UniGridItem>().toEqualTypeOf<UniHelper.UniGridItem>();

  expectTypeOf<UniGridItemInstance>().not.toBeAny();
  expectTypeOf<UniGridItemInstance>().toEqualTypeOf<UniHelper.UniGridItemInstance>();
});
