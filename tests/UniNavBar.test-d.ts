import { describe, expectTypeOf } from 'vitest';
import type { UniNavBarProps, UniNavBar } from '@/UniNavBar';

describe('UniNavBar', () => {
  expectTypeOf<UniNavBarProps>().toBeObject();
  expectTypeOf<UniNavBarProps>().toEqualTypeOf<UniHelper.UniNavBarProps>();

  expectTypeOf<UniNavBar>().not.toBeAny();
  expectTypeOf<UniNavBar>().toEqualTypeOf<UniHelper.UniNavBar>();
});
