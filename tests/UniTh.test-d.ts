import { describe, expectTypeOf } from 'vitest';
import type {
  UniThAlign,
  UniThFilterType,
  UniThFilterData,
  UniThOnSortChangeDetail,
  UniThOnSortChange,
  UniThOnFilterChangeDetail,
  UniThOnFilterChange,
  UniThProps,
  UniTh,
} from '@/UniTh';

describe('UniTh', () => {
  expectTypeOf<UniThAlign>().toBeString();
  expectTypeOf<UniThAlign>().toEqualTypeOf<UniHelper.UniThAlign>();

  expectTypeOf<UniThFilterType>().toBeString();
  expectTypeOf<UniThFilterType>().toEqualTypeOf<UniHelper.UniThFilterType>();

  expectTypeOf<UniThFilterData>().toBeObject();
  expectTypeOf<UniThFilterData>().toEqualTypeOf<UniHelper.UniThFilterData>();

  expectTypeOf<UniThOnSortChangeDetail>().toBeObject();
  expectTypeOf<UniThOnSortChangeDetail>().toEqualTypeOf<UniHelper.UniThOnSortChangeDetail>();

  expectTypeOf<UniThOnSortChange>().toBeFunction();
  expectTypeOf<UniThOnSortChange>().toEqualTypeOf<UniHelper.UniThOnSortChange>();

  expectTypeOf<UniThOnFilterChangeDetail>().toBeObject();
  expectTypeOf<UniThOnFilterChangeDetail>().toEqualTypeOf<UniHelper.UniThOnFilterChangeDetail>();

  expectTypeOf<UniThOnFilterChange>().toBeFunction();
  expectTypeOf<UniThOnFilterChange>().toEqualTypeOf<UniHelper.UniThOnFilterChange>();

  expectTypeOf<UniThProps>().toBeObject();
  expectTypeOf<UniThProps>().toEqualTypeOf<UniHelper.UniThProps>();

  expectTypeOf<UniTh>().not.toBeAny();
  expectTypeOf<UniTh>().toEqualTypeOf<UniHelper.UniTh>();
});
