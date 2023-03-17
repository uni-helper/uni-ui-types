import { describe, expectTypeOf } from 'vitest';
import type { UniListAdProps, UniListAd, UniListAdInstance } from '@/UniListAd';

describe('UniListAd', () => {
  expectTypeOf<UniListAdProps>().toBeObject();
  expectTypeOf<UniListAdProps>().toEqualTypeOf<UniHelper.UniListAdProps>();

  expectTypeOf<UniListAd>().not.toBeAny();
  expectTypeOf<UniListAd>().toEqualTypeOf<UniHelper.UniListAd>();

  expectTypeOf<UniListAdInstance>().not.toBeAny();
  expectTypeOf<UniListAdInstance>().toEqualTypeOf<UniHelper.UniListAdInstance>();
});
