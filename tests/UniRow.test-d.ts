import { describe, expectTypeOf } from 'vitest';
import type { UniRowJustify, UniRowAlign, UniRowProps, UniRow, UniRowInstance } from '@/UniRow';

describe('UniRow', () => {
  expectTypeOf<UniRowJustify>().toBeString();
  expectTypeOf<UniRowJustify>().toEqualTypeOf<UniHelper.UniRowJustify>();

  expectTypeOf<UniRowAlign>().toBeString();
  expectTypeOf<UniRowAlign>().toEqualTypeOf<UniHelper.UniRowAlign>();

  expectTypeOf<UniRowProps>().toBeObject();
  expectTypeOf<UniRowProps>().toEqualTypeOf<UniHelper.UniRowProps>();

  expectTypeOf<UniRow>().not.toBeAny();
  expectTypeOf<UniRow>().toEqualTypeOf<UniHelper.UniRow>();

  expectTypeOf<UniRowInstance>().not.toBeAny();
  expectTypeOf<UniRowInstance>().toEqualTypeOf<UniHelper.UniRowInstance>();
});
