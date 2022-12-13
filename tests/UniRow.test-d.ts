import { describe, expectTypeOf } from 'vitest';
import type { UniRowProps, UniRow } from '@/UniRow';

describe('UniRow', () => {
  expectTypeOf<UniRowProps>().toBeObject();
  expectTypeOf<UniRowProps>().toEqualTypeOf<UniHelper.UniRowProps>();

  expectTypeOf<UniRow>().not.toBeAny();
  expectTypeOf<UniRow>().toEqualTypeOf<UniHelper.UniRow>();
});
