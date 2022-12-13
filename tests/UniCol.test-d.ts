import { describe, expectTypeOf } from 'vitest';
import type { UniColRules, UniColProps, UniCol } from '@/UniCol';

describe('UniCol', () => {
  expectTypeOf<UniColRules>().toBeObject();
  expectTypeOf<UniColRules>().toEqualTypeOf<UniHelper.UniColRules>();

  expectTypeOf<UniColProps>().toBeObject();
  expectTypeOf<UniColProps>().toEqualTypeOf<UniHelper.UniColProps>();

  expectTypeOf<UniCol>().not.toBeAny();
  expectTypeOf<UniCol>().toEqualTypeOf<UniHelper.UniCol>();
});
