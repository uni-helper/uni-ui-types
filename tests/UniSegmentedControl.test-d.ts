import { describe, expectTypeOf } from 'vitest';
import type {
  UniSegmentedControlCurrent,
  UniSegmentedControlStyleType,
  UniSegmentedControlOnClickItemDetail,
  UniSegmentedControlOnClickItem,
  UniSegmentedControlProps,
  UniSegmentedControl,
} from '@/UniSegmentedControl';

describe('UniSegmentedControl', () => {
  expectTypeOf<UniSegmentedControlCurrent>().toBeNumber();
  expectTypeOf<UniSegmentedControlCurrent>().toEqualTypeOf<UniHelper.UniSegmentedControlCurrent>();

  expectTypeOf<UniSegmentedControlStyleType>().toBeString();
  expectTypeOf<UniSegmentedControlStyleType>().toEqualTypeOf<UniHelper.UniSegmentedControlStyleType>();

  expectTypeOf<UniSegmentedControlOnClickItemDetail>().toBeObject();
  expectTypeOf<UniSegmentedControlOnClickItemDetail>().toEqualTypeOf<UniHelper.UniSegmentedControlOnClickItemDetail>();

  expectTypeOf<UniSegmentedControlOnClickItem>().toBeFunction();
  expectTypeOf<UniSegmentedControlOnClickItem>().toEqualTypeOf<UniHelper.UniSegmentedControlOnClickItem>();

  expectTypeOf<UniSegmentedControlProps>().toBeObject();
  expectTypeOf<UniSegmentedControlProps>().toEqualTypeOf<UniHelper.UniSegmentedControlProps>();

  expectTypeOf<UniSegmentedControl>().not.toBeAny();
  expectTypeOf<UniSegmentedControl>().toEqualTypeOf<UniHelper.UniSegmentedControl>();
});
