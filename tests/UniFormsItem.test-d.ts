import { describe, expectTypeOf } from 'vitest';
import type {
  UniFormsItemRule,
  UniFormsItemLabelAlign,
  UniFormsItemSetRules,
  UniFormsItemOnFieldChange,
  UniFormsItemProps,
  UniFormsItem,
} from '@/UniFormsItem';

describe('UniFormsItem', () => {
  expectTypeOf<UniFormsItemRule>().toBeObject();
  expectTypeOf<UniFormsItemRule>().toEqualTypeOf<UniHelper.UniFormsItemRule>();

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
