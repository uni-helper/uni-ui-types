import { describe, expectTypeOf } from 'vitest';
import type { UniFavContentText, UniFavOnClick, UniFavProps, UniFav } from '@/UniFav';

describe('UniFav', () => {
  expectTypeOf<UniFavContentText>().toBeObject();
  expectTypeOf<UniFavContentText>().toEqualTypeOf<UniHelper.UniFavContentText>();

  expectTypeOf<UniFavOnClick>().toBeFunction();
  expectTypeOf<UniFavOnClick>().toEqualTypeOf<UniHelper.UniFavOnClick>();

  expectTypeOf<UniFavProps>().toBeObject();
  expectTypeOf<UniFavProps>().toEqualTypeOf<UniHelper.UniFavProps>();

  expectTypeOf<UniFav>().not.toBeAny();
  expectTypeOf<UniFav>().toEqualTypeOf<UniHelper.UniFav>();
});
