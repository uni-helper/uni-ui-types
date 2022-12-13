import { describe, expectTypeOf } from 'vitest';
import type {
  UniLoadMoreStatus,
  UniLoadMoreIconType,
  UniLoadMoreContentText,
  UniLoadMoreOnClickLoadMoreDetail,
  UniLoadMoreOnClickLoadMore,
  UniLoadMoreProps,
  UniLoadMore,
} from '@/UniLoadMore';

describe('UniLoadMore', () => {
  expectTypeOf<UniLoadMoreStatus>().toBeString();
  expectTypeOf<UniLoadMoreStatus>().toEqualTypeOf<UniHelper.UniLoadMoreStatus>();

  expectTypeOf<UniLoadMoreIconType>().toBeString();
  expectTypeOf<UniLoadMoreIconType>().toEqualTypeOf<UniHelper.UniLoadMoreIconType>();

  expectTypeOf<UniLoadMoreContentText>().toBeObject();
  expectTypeOf<UniLoadMoreContentText>().toEqualTypeOf<UniHelper.UniLoadMoreContentText>();

  expectTypeOf<UniLoadMoreOnClickLoadMoreDetail>().toBeObject();
  expectTypeOf<UniLoadMoreOnClickLoadMoreDetail>().toEqualTypeOf<UniHelper.UniLoadMoreOnClickLoadMoreDetail>();

  expectTypeOf<UniLoadMoreOnClickLoadMore>().toBeFunction();
  expectTypeOf<UniLoadMoreOnClickLoadMore>().toEqualTypeOf<UniHelper.UniLoadMoreOnClickLoadMore>();

  expectTypeOf<UniLoadMoreProps>().toBeObject();
  expectTypeOf<UniLoadMoreProps>().toEqualTypeOf<UniHelper.UniLoadMoreProps>();

  expectTypeOf<UniLoadMore>().not.toBeAny();
  expectTypeOf<UniLoadMore>().toEqualTypeOf<UniHelper.UniLoadMore>();
});
