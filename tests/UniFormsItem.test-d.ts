import { describe, expectTypeOf } from 'vitest';
import type {
  UniFormsItemRulesRule,
  UniFormsItemRules,
  UniFormsItemLabelAlign,
  UniFormsItemSetRules,
  UniFormsItemOnFieldChange,
  UniFormsItemProps,
  UniFormsItem,
} from '@/UniFormsItem';

describe('UniFormsItem', () => {
  expectTypeOf<UniFormsItemRulesRule>().toBeObject();
  expectTypeOf<UniFormsItemRulesRule>().toEqualTypeOf<UniHelper.UniFormsItemRulesRule>();

  expectTypeOf<UniFormsItemRules>().toBeObject();
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
});
