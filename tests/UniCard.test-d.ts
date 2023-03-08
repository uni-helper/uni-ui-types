import { describe, expectTypeOf } from 'vitest';
import type {
  UniCardOnClickType,
  UniCardOnClick,
  UniCardProps,
  UniCard,
  UniCardInstance,
} from '@/UniCard';

describe('UniCard', () => {
  expectTypeOf<UniCardOnClickType>().toBeString();
  expectTypeOf<UniCardOnClickType>().toEqualTypeOf<UniHelper.UniCardOnClickType>();

  expectTypeOf<UniCardOnClick>().toBeFunction();
  expectTypeOf<UniCardOnClick>().toEqualTypeOf<UniHelper.UniCardOnClick>();

  expectTypeOf<UniCardProps>().toBeObject();
  expectTypeOf<UniCardProps>().toEqualTypeOf<UniHelper.UniCardProps>();

  expectTypeOf<UniCard>().not.toBeAny();
  expectTypeOf<UniCard>().toEqualTypeOf<UniHelper.UniCard>();

  expectTypeOf<UniCardInstance>().not.toBeAny();
  expectTypeOf<UniCardInstance>().toEqualTypeOf<UniHelper.UniCardInstance>();
});
