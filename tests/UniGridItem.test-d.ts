import { describe, expectTypeOf } from 'vitest';
import type { UniGridItemProps, UniGridItem } from '@/UniGridItem';

describe('UniGridItem', () => {
  expectTypeOf<UniGridItemProps>().toBeObject();
  expectTypeOf<UniGridItemProps>().toEqualTypeOf<UniHelper.UniGridItemProps>();

  expectTypeOf<UniGridItem>().not.toBeAny();
  expectTypeOf<UniGridItem>().toEqualTypeOf<UniHelper.UniGridItem>();
});
