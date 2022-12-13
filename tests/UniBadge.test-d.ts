import { describe, expectTypeOf } from 'vitest';
import type {
  UniBadgeType,
  UniBadgeSize,
  UniBadgeCustomStyle,
  UniBadgeAbsolute,
  UniBadgeOnClick,
  UniBadgeProps,
  UniBadge,
} from '@/UniBadge';

describe('UniBadge', () => {
  expectTypeOf<UniBadgeType>().toBeString();
  expectTypeOf<UniBadgeType>().toEqualTypeOf<UniHelper.UniBadgeType>();

  expectTypeOf<UniBadgeSize>().toBeString();
  expectTypeOf<UniBadgeSize>().toEqualTypeOf<UniHelper.UniBadgeSize>();

  expectTypeOf<UniBadgeCustomStyle>().toBeObject();
  expectTypeOf<UniBadgeCustomStyle>().toEqualTypeOf<UniHelper.UniBadgeCustomStyle>();

  expectTypeOf<UniBadgeAbsolute>().toBeString();
  expectTypeOf<UniBadgeAbsolute>().toEqualTypeOf<UniHelper.UniBadgeAbsolute>();

  expectTypeOf<UniBadgeOnClick>().toBeFunction();
  expectTypeOf<UniBadgeOnClick>().toEqualTypeOf<UniHelper.UniBadgeOnClick>();

  expectTypeOf<UniBadgeProps>().toBeObject();
  expectTypeOf<UniBadgeProps>().toEqualTypeOf<UniHelper.UniBadgeProps>();

  expectTypeOf<UniBadge>().not.toBeAny();
  expectTypeOf<UniBadge>().toEqualTypeOf<UniHelper.UniBadge>();
});
