import { describe, expectTypeOf } from 'vitest';
import type {
  UniRateValue,
  UniRateOnChangeEvent,
  UniRateOnChange,
  UniRateProps,
  UniRate,
  UniRateInstance,
} from '@/UniRate';

describe('UniRate', () => {
  expectTypeOf<UniRateValue>().toBeNumber();
  expectTypeOf<UniRateValue>().toEqualTypeOf<UniHelper.UniRateValue>();

  expectTypeOf<UniRateOnChangeEvent>().toBeObject();
  expectTypeOf<UniRateOnChangeEvent>().toEqualTypeOf<UniHelper.UniRateOnChangeEvent>();

  expectTypeOf<UniRateOnChange>().toBeFunction();
  expectTypeOf<UniRateOnChange>().toEqualTypeOf<UniHelper.UniRateOnChange>();

  expectTypeOf<UniRateProps>().toBeObject();
  expectTypeOf<UniRateProps>().toEqualTypeOf<UniHelper.UniRateProps>();

  expectTypeOf<UniRate>().not.toBeAny();
  expectTypeOf<UniRate>().toEqualTypeOf<UniHelper.UniRate>();

  expectTypeOf<UniRateInstance>().not.toBeAny();
  expectTypeOf<UniRateInstance>().toEqualTypeOf<UniHelper.UniRateInstance>();
});
