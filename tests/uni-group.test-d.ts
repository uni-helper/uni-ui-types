import { describe, expectTypeOf } from 'vitest';
import type {
  UniGroupMode,
  UniGroupOnClick,
  UniGroupProps,
  UniGroup,
  UniGroupInstance,
} from '@/index';

describe('UniGroup', () => {
  expectTypeOf<UniGroupMode>().toBeString();
  expectTypeOf<UniGroupMode>().toEqualTypeOf<UniHelper.UniGroupMode>();

  expectTypeOf<UniGroupOnClick>().toBeFunction();
  expectTypeOf<UniGroupOnClick>().toEqualTypeOf<UniHelper.UniGroupOnClick>();

  expectTypeOf<UniGroupProps>().toBeObject();
  expectTypeOf<UniGroupProps>().toEqualTypeOf<UniHelper.UniGroupProps>();

  expectTypeOf<UniGroup>().not.toBeAny();
  expectTypeOf<UniGroup>().toEqualTypeOf<UniHelper.UniGroup>();

  expectTypeOf<UniGroupInstance>().not.toBeAny();
  expectTypeOf<UniGroupInstance>().toEqualTypeOf<UniHelper.UniGroupInstance>();
});
