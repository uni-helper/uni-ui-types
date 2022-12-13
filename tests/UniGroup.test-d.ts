import { describe, expectTypeOf } from 'vitest';
import type { UniGroupMode, UniGroupProps, UniGroup } from '@/UniGroup';

describe('UniGroup', () => {
  expectTypeOf<UniGroupMode>().toBeString();
  expectTypeOf<UniGroupMode>().toEqualTypeOf<UniHelper.UniGroupMode>();

  expectTypeOf<UniGroupProps>().toBeObject();
  expectTypeOf<UniGroupProps>().toEqualTypeOf<UniHelper.UniGroupProps>();

  expectTypeOf<UniGroup>().not.toBeAny();
  expectTypeOf<UniGroup>().toEqualTypeOf<UniHelper.UniGroup>();
});
