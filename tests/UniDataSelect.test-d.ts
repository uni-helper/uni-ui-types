import { describe, expectTypeOf } from 'vitest';
import type {
  UniDataSelectValue,
  UniDataSelectLocaldata,
  UniDataSelectOnChange,
  UniDataSelectProps,
  UniDataSelect,
} from '@/UniDataSelect';

describe('UniDataSelect', () => {
  expectTypeOf<UniDataSelectValue>().toMatchTypeOf<string | number>();
  expectTypeOf<UniDataSelectValue>().toEqualTypeOf<UniHelper.UniDataSelectValue>();

  expectTypeOf<UniDataSelectLocaldata>().toBeObject();
  expectTypeOf<UniDataSelectLocaldata>().toEqualTypeOf<UniHelper.UniDataSelectLocaldata>();

  expectTypeOf<UniDataSelectOnChange>().toBeFunction();
  expectTypeOf<UniDataSelectOnChange>().toEqualTypeOf<UniHelper.UniDataSelectOnChange>();

  expectTypeOf<UniDataSelectProps>().toBeObject();
  expectTypeOf<UniDataSelectProps>().toEqualTypeOf<UniHelper.UniDataSelectProps>();

  expectTypeOf<UniDataSelect>().not.toBeAny();
  expectTypeOf<UniDataSelect>().toEqualTypeOf<UniHelper.UniDataSelect>();
});
