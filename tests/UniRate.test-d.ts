import { describe, expectTypeOf } from 'vitest';
import type {
  UniRateValue,
  UniRateOnChangeDetail,
  UniRateOnChange,
  UniRateProps,
  UniRate,
  UniRateInstance,
} from '@/UniRate';

describe('UniRate', () => {
  expectTypeOf<UniRateValue>().toBeNumber();
  expectTypeOf<UniRateValue>().toEqualTypeOf<UniHelper.UniRateValue>();

  expectTypeOf<UniRateOnChangeDetail>().toBeObject();
  expectTypeOf<UniRateOnChangeDetail>().toEqualTypeOf<UniHelper.UniRateOnChangeDetail>();

  expectTypeOf<UniRateOnChange>().toBeFunction();
  expectTypeOf<UniRateOnChange>().toEqualTypeOf<UniHelper.UniRateOnChange>();

  expectTypeOf<UniRateProps>().toBeObject();
  expectTypeOf<UniRateProps>().toEqualTypeOf<UniHelper.UniRateProps>();

  expectTypeOf<UniRateInstance>().not.toBeAny();
  expectTypeOf<UniRateInstance>().toEqualTypeOf<UniHelper.UniRateInstance>();
});
