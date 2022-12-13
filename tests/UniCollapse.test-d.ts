import { describe, expectTypeOf } from 'vitest';
import type {
  UniCollapseResize,
  UniCollapseBaseProps,
  UniCollapseNoAccordionValue,
  UniCollapseNoAccordionOnChange,
  UniCollapseNoAccordionProps,
  UniCollapseAccordionValue,
  UniCollapseAccordionOnChange,
  UniCollapseAccordionProps,
  UniCollapseProps,
  UniCollapse,
} from '@/UniCollapse';

describe('UniCollapse', () => {
  expectTypeOf<UniCollapseResize>().toBeFunction();
  expectTypeOf<UniCollapseResize>().toEqualTypeOf<UniHelper.UniCollapseResize>();

  expectTypeOf<UniCollapseBaseProps>().toBeObject();
  expectTypeOf<UniCollapseBaseProps>().toEqualTypeOf<UniHelper.UniCollapseBaseProps>();

  expectTypeOf<UniCollapseNoAccordionValue>().toBeArray();
  expectTypeOf<UniCollapseNoAccordionValue>().toEqualTypeOf<UniHelper.UniCollapseNoAccordionValue>();

  expectTypeOf<UniCollapseNoAccordionOnChange>().toBeFunction();
  expectTypeOf<UniCollapseNoAccordionOnChange>().toEqualTypeOf<UniHelper.UniCollapseNoAccordionOnChange>();

  expectTypeOf<UniCollapseNoAccordionProps>().toBeObject();
  expectTypeOf<UniCollapseNoAccordionProps>().toEqualTypeOf<UniHelper.UniCollapseNoAccordionProps>();

  expectTypeOf<UniCollapseAccordionValue>().toBeString();
  expectTypeOf<UniCollapseAccordionValue>().toEqualTypeOf<UniHelper.UniCollapseAccordionValue>();

  expectTypeOf<UniCollapseAccordionOnChange>().toBeFunction();
  expectTypeOf<UniCollapseAccordionOnChange>().toEqualTypeOf<UniHelper.UniCollapseAccordionOnChange>();

  expectTypeOf<UniCollapseAccordionProps>().toBeObject();
  expectTypeOf<UniCollapseAccordionProps>().toEqualTypeOf<UniHelper.UniCollapseAccordionProps>();

  expectTypeOf<UniCollapseProps>().toBeObject();
  expectTypeOf<UniCollapseProps>().toEqualTypeOf<UniHelper.UniCollapseProps>();

  expectTypeOf<UniCollapse>().not.toBeAny();
  expectTypeOf<UniCollapse>().toEqualTypeOf<UniHelper.UniCollapse>();
});
