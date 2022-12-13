import { describe, expectTypeOf } from 'vitest';
import type {
  UniPopupDialogType,
  UniPopupDialogMode,
  UniPopupDialogValue,
  UniPopupDialogOnClose,
  UniPopupDialogOnConfirmDetail,
  UniPopupDialogOnConfirm,
  UniPopupDialogProps,
  UniPopupDialog,
} from '@/UniPopupDialog';

describe('UniPopupDialog', () => {
  expectTypeOf<UniPopupDialogType>().toBeString();
  expectTypeOf<UniPopupDialogType>().toEqualTypeOf<UniHelper.UniPopupDialogType>();

  expectTypeOf<UniPopupDialogMode>().toBeString();
  expectTypeOf<UniPopupDialogMode>().toEqualTypeOf<UniHelper.UniPopupDialogMode>();

  expectTypeOf<UniPopupDialogValue>().toMatchTypeOf<string | number>();
  expectTypeOf<UniPopupDialogValue>().toEqualTypeOf<UniHelper.UniPopupDialogValue>();

  expectTypeOf<UniPopupDialogOnClose>().toBeFunction();
  expectTypeOf<UniPopupDialogOnClose>().toEqualTypeOf<UniHelper.UniPopupDialogOnClose>();

  expectTypeOf<UniPopupDialogOnConfirmDetail>().toBeObject();
  expectTypeOf<UniPopupDialogOnConfirmDetail>().toEqualTypeOf<UniHelper.UniPopupDialogOnConfirmDetail>();

  expectTypeOf<UniPopupDialogOnConfirm>().toBeFunction();
  expectTypeOf<UniPopupDialogOnConfirm>().toEqualTypeOf<UniHelper.UniPopupDialogOnConfirm>();

  expectTypeOf<UniPopupDialogProps>().toBeObject();
  expectTypeOf<UniPopupDialogProps>().toEqualTypeOf<UniHelper.UniPopupDialogProps>();

  expectTypeOf<UniPopupDialog>().not.toBeAny();
  expectTypeOf<UniPopupDialog>().toEqualTypeOf<UniHelper.UniPopupDialog>();
});
