import { describe, expectTypeOf } from 'vitest';
import type {
  UniFormsItemRulesRule,
  UniFormsItemRules,
  UniFormsItemLabelAlign,
  UniFormsItemSetRules,
  UniFormsItemOnFieldChange,
  UniFormsItemProps,
  UniFormsItem,
  UniFormsItemInstance,
} from '@/index';

describe('UniFormsItem', () => {
  expectTypeOf<UniFormsItemRulesRule>().toBeObject();
  expectTypeOf<UniFormsItemRulesRule>().toEqualTypeOf<UniHelper.UniFormsItemRulesRule>();

  expectTypeOf<UniFormsItemRules>().toBeArray();
  expectTypeOf<UniFormsItemRules>().toEqualTypeOf<UniHelper.UniFormsItemRules>();

  expectTypeOf<UniFormsItemLabelAlign>().toBeString();
  expectTypeOf<UniFormsItemLabelAlign>().toEqualTypeOf<UniHelper.UniFormsItemLabelAlign>();

  expectTypeOf<UniFormsItemSetRules>().toBeFunction();
  expectTypeOf<UniFormsItemSetRules>().toEqualTypeOf<UniHelper.UniFormsItemSetRules>();

  expectTypeOf<UniFormsItemOnFieldChange>().toBeFunction();
  expectTypeOf<UniFormsItemOnFieldChange>().toEqualTypeOf<UniHelper.UniFormsItemOnFieldChange>();

  expectTypeOf<UniFormsItemProps>().toBeObject();
  expectTypeOf<UniFormsItemProps>().toEqualTypeOf<UniHelper.UniFormsItemProps>();

  expectTypeOf<UniFormsItem>().not.toBeAny();
  expectTypeOf<UniFormsItem>().toEqualTypeOf<UniHelper.UniFormsItem>();

  expectTypeOf<UniFormsItemInstance>().not.toBeAny();
  expectTypeOf<UniFormsItemInstance>().toEqualTypeOf<UniHelper.UniFormsItemInstance>();
});
