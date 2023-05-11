import { describe, expectTypeOf } from 'vitest';
import type {
  UniPaginationOnInput,
  UniPaginationOnChangeType,
  UniPaginationOnChangeEvent,
  UniPaginationOnChange,
  UniPaginationProps,
  UniPagination,
  UniPaginationInstance,
} from '@/index';

describe('UniPagination', () => {
  expectTypeOf<UniPaginationOnInput>().toBeFunction();
  expectTypeOf<UniPaginationOnInput>().toEqualTypeOf<UniHelper.UniPaginationOnInput>();

  expectTypeOf<UniPaginationOnChangeType>().toBeString();
  expectTypeOf<UniPaginationOnChangeType>().toEqualTypeOf<UniHelper.UniPaginationOnChangeType>();

  expectTypeOf<UniPaginationOnChangeEvent>().toBeObject();
  expectTypeOf<UniPaginationOnChangeEvent>().toEqualTypeOf<UniHelper.UniPaginationOnChangeEvent>();

  expectTypeOf<UniPaginationOnChange>().toBeFunction();
  expectTypeOf<UniPaginationOnChange>().toEqualTypeOf<UniHelper.UniPaginationOnChange>();

  expectTypeOf<UniPaginationProps>().toBeObject();
  expectTypeOf<UniPaginationProps>().toEqualTypeOf<UniHelper.UniPaginationProps>();

  expectTypeOf<UniPagination>().not.toBeAny();
  expectTypeOf<UniPagination>().toEqualTypeOf<UniHelper.UniPagination>();

  expectTypeOf<UniPaginationInstance>().not.toBeAny();
  expectTypeOf<UniPaginationInstance>().toEqualTypeOf<UniHelper.UniPaginationInstance>();
});
