import { describe, expectTypeOf } from 'vitest';
import type {
  UniSegmentedControlCurrent,
  UniSegmentedControlStyleType,
  UniSegmentedControlOnClickItemEvent,
  UniSegmentedControlOnClickItem,
  UniSegmentedControlProps,
  UniSegmentedControl,
  UniSegmentedControlInstance,
} from '@/index';

describe('UniSegmentedControl', () => {
  expectTypeOf<UniSegmentedControlCurrent>().toBeNumber();
  expectTypeOf<UniSegmentedControlCurrent>().toEqualTypeOf<UniHelper.UniSegmentedControlCurrent>();

  expectTypeOf<UniSegmentedControlStyleType>().toBeString();
  expectTypeOf<UniSegmentedControlStyleType>().toEqualTypeOf<UniHelper.UniSegmentedControlStyleType>();

  expectTypeOf<UniSegmentedControlOnClickItemEvent>().toBeObject();
  expectTypeOf<UniSegmentedControlOnClickItemEvent>().toEqualTypeOf<UniHelper.UniSegmentedControlOnClickItemEvent>();

  expectTypeOf<UniSegmentedControlOnClickItem>().toBeFunction();
  expectTypeOf<UniSegmentedControlOnClickItem>().toEqualTypeOf<UniHelper.UniSegmentedControlOnClickItem>();

  expectTypeOf<UniSegmentedControlProps>().toBeObject();
  expectTypeOf<UniSegmentedControlProps>().toEqualTypeOf<UniHelper.UniSegmentedControlProps>();

  expectTypeOf<UniSegmentedControl>().not.toBeAny();
  expectTypeOf<UniSegmentedControl>().toEqualTypeOf<UniHelper.UniSegmentedControl>();

  expectTypeOf<UniSegmentedControlInstance>().not.toBeAny();
  expectTypeOf<UniSegmentedControlInstance>().toEqualTypeOf<UniHelper.UniSegmentedControlInstance>();
});
