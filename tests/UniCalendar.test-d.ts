import { describe, expectTypeOf } from 'vitest';
import type {
  UniCalendarDate,
  UniCalendarSelectedElement,
  UniCalendarSelected,
  UniCalendarOnOpen,
  UniCalendarBaseDetail,
  UniCalendarOnChangeDetail,
  UniCalendarOnChange,
  UniCalendarOnConfirmDetail,
  UniCalendarOnConfirm,
  UniCalendarOnMonthSwitchDetail,
  UniCalendarOnMonthSwitch,
  UniCalendarOnCloseDetail,
  UniCalendarOnClose,
  UniCalendarProps,
  UniCalendar,
  UniCalendarInstance,
} from '@/UniCalendar';

describe('UniCalendar', () => {
  expectTypeOf<UniCalendarDate>().toBeString();
  expectTypeOf<UniCalendarDate>().toEqualTypeOf<UniHelper.UniCalendarDate>();

  expectTypeOf<UniCalendarSelectedElement>().toBeObject();
  expectTypeOf<UniCalendarSelectedElement>().toEqualTypeOf<UniHelper.UniCalendarSelectedElement>();

  expectTypeOf<UniCalendarSelected>().toBeArray();
  expectTypeOf<UniCalendarSelected>().toEqualTypeOf<UniHelper.UniCalendarSelected>();

  expectTypeOf<UniCalendarOnOpen>().toBeFunction();
  expectTypeOf<UniCalendarOnOpen>().toEqualTypeOf<UniHelper.UniCalendarOnOpen>();

  expectTypeOf<UniCalendarBaseDetail>().toBeObject();
  expectTypeOf<UniCalendarBaseDetail>().toEqualTypeOf<UniHelper.UniCalendarBaseDetail>();

  expectTypeOf<UniCalendarOnChangeDetail>().toBeObject();
  expectTypeOf<UniCalendarOnChangeDetail>().toEqualTypeOf<UniHelper.UniCalendarOnChangeDetail>();

  expectTypeOf<UniCalendarOnChange>().toBeObject();
  expectTypeOf<UniCalendarOnChange>().toEqualTypeOf<UniHelper.UniCalendarOnChange>();

  expectTypeOf<UniCalendarOnConfirmDetail>().toBeObject();
  expectTypeOf<UniCalendarOnConfirmDetail>().toEqualTypeOf<UniHelper.UniCalendarOnConfirmDetail>();

  expectTypeOf<UniCalendarOnConfirm>().toBeObject();
  expectTypeOf<UniCalendarOnConfirm>().toEqualTypeOf<UniHelper.UniCalendarOnConfirm>();

  expectTypeOf<UniCalendarOnMonthSwitchDetail>().toBeObject();
  expectTypeOf<UniCalendarOnMonthSwitchDetail>().toEqualTypeOf<UniHelper.UniCalendarOnMonthSwitchDetail>();

  expectTypeOf<UniCalendarOnMonthSwitch>().toBeObject();
  expectTypeOf<UniCalendarOnMonthSwitch>().toEqualTypeOf<UniHelper.UniCalendarOnMonthSwitch>();

  expectTypeOf<UniCalendarOnCloseDetail>().toBeObject();
  expectTypeOf<UniCalendarOnCloseDetail>().toEqualTypeOf<UniHelper.UniCalendarOnCloseDetail>();

  expectTypeOf<UniCalendarOnClose>().toBeObject();
  expectTypeOf<UniCalendarOnClose>().toEqualTypeOf<UniHelper.UniCalendarOnClose>();

  expectTypeOf<UniCalendarProps>().toBeObject();
  expectTypeOf<UniCalendarProps>().toEqualTypeOf<UniHelper.UniCalendarProps>();

  expectTypeOf<UniCalendar>().not.toBeAny();
  expectTypeOf<UniCalendar>().toEqualTypeOf<UniHelper.UniCalendar>();

  expectTypeOf<UniCalendarInstance>().not.toBeAny();
  expectTypeOf<UniCalendarInstance>().toEqualTypeOf<UniHelper.UniCalendarInstance>();
});
