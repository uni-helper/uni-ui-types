import { describe, expectTypeOf } from 'vitest';
import type {
  UniPaginationOnChangeType,
  UniPaginationOnChangeDetail,
  UniPaginationOnChange,
  UniPaginationProps,
  UniPagination,
} from '@/UniPagination';

describe('UniPagination', () => {
  expectTypeOf<UniPaginationOnChangeType>().toBeString();
  expectTypeOf<UniPaginationOnChangeType>().toEqualTypeOf<UniHelper.UniPaginationOnChangeType>();

  expectTypeOf<UniPaginationOnChangeDetail>().toBeObject();
  expectTypeOf<UniPaginationOnChangeDetail>().toEqualTypeOf<UniHelper.UniPaginationOnChangeDetail>();

  expectTypeOf<UniPaginationOnChange>().toBeFunction();
  expectTypeOf<UniPaginationOnChange>().toEqualTypeOf<UniHelper.UniPaginationOnChange>();

  expectTypeOf<UniPaginationProps>().toBeObject();
  expectTypeOf<UniPaginationProps>().toEqualTypeOf<UniHelper.UniPaginationProps>();

  expectTypeOf<UniPagination>().not.toBeAny();
  expectTypeOf<UniPagination>().toEqualTypeOf<UniHelper.UniPagination>();
});
