import { describe, expectTypeOf } from 'vitest';
import type {
  UniGoodsNavOption,
  UniGoodsNavOnClickDetail,
  UniGoodsNavOnClick,
  UniGoodsNavOnButtonClickDetail,
  UniGoodsNavOnButtonClick,
  UniGoodsNavButton,
  UniGoodsNavProps,
  UniGoodsNav,
  UniGoodsNavInstance,
} from '@/UniGoodsNav';

describe('UniGoodsNav', () => {
  expectTypeOf<UniGoodsNavOption>().toBeObject();
  expectTypeOf<UniGoodsNavOption>().toEqualTypeOf<UniHelper.UniGoodsNavOption>();

  expectTypeOf<UniGoodsNavOnClickDetail>().toBeObject();
  expectTypeOf<UniGoodsNavOnClickDetail>().toEqualTypeOf<UniHelper.UniGoodsNavOnClickDetail>();

  expectTypeOf<UniGoodsNavOnClick>().toBeFunction();
  expectTypeOf<UniGoodsNavOnClick>().toEqualTypeOf<UniHelper.UniGoodsNavOnClick>();

  expectTypeOf<UniGoodsNavOnButtonClickDetail>().toBeObject();
  expectTypeOf<UniGoodsNavOnButtonClickDetail>().toEqualTypeOf<UniHelper.UniGoodsNavOnButtonClickDetail>();

  expectTypeOf<UniGoodsNavOnButtonClick>().toBeFunction();
  expectTypeOf<UniGoodsNavOnButtonClick>().toEqualTypeOf<UniHelper.UniGoodsNavOnButtonClick>();

  expectTypeOf<UniGoodsNavButton>().toBeObject();
  expectTypeOf<UniGoodsNavButton>().toEqualTypeOf<UniHelper.UniGoodsNavButton>();

  expectTypeOf<UniGoodsNavProps>().toBeObject();
  expectTypeOf<UniGoodsNavProps>().toEqualTypeOf<UniHelper.UniGoodsNavProps>();

  expectTypeOf<UniGoodsNav>().not.toBeAny();
  expectTypeOf<UniGoodsNav>().toEqualTypeOf<UniHelper.UniGoodsNav>();

  expectTypeOf<UniGoodsNavInstance>().not.toBeAny();
  expectTypeOf<UniGoodsNavInstance>().toEqualTypeOf<UniHelper.UniGoodsNavInstance>();
});
