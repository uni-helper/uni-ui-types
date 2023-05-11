import { describe, expectTypeOf } from 'vitest';
import type {
  UniComboxValue,
  UniComboxOnInput,
  UniComboxProps,
  UniCombox,
  UniComboxInstance,
} from '@/index';

describe('UniCombox', () => {
  expectTypeOf<UniComboxValue>().toBeString();
  expectTypeOf<UniComboxValue>().toEqualTypeOf<UniHelper.UniComboxValue>();

  expectTypeOf<UniComboxOnInput>().toBeFunction();
  expectTypeOf<UniComboxOnInput>().toEqualTypeOf<UniHelper.UniComboxOnInput>();

  expectTypeOf<UniComboxProps>().toBeObject();
  expectTypeOf<UniComboxProps>().toEqualTypeOf<UniHelper.UniComboxProps>();

  expectTypeOf<UniCombox>().not.toBeAny();
  expectTypeOf<UniCombox>().toEqualTypeOf<UniHelper.UniCombox>();

  expectTypeOf<UniComboxInstance>().not.toBeAny();
  expectTypeOf<UniComboxInstance>().toEqualTypeOf<UniHelper.UniComboxInstance>();
});
