import { describe, expectTypeOf } from 'vitest';
import type {
  UniFilePickerValue,
  UniFilePickerMode,
  UniFilePickerFileMediatype,
  UniFilePickerListStyles,
  UniFilePickerImageStyles,
  UniFilePickerBaseDetail,
  UniFilePickerUpload,
  UniFilePickerClearFiles,
  UniFilePickerOnSelectDetail,
  UniFilePickerOnSelect,
  UniFilePickerOnProgressDetail,
  UniFilePickerOnProgress,
  UniFilePickerOnSuccessDetail,
  UniFilePickerOnSuccess,
  UniFilePickerOnFailDetail,
  UniFilePickerOnFail,
  UniFilePickerOnDeleteDetail,
  UniFilePickerOnDelete,
  UniFilePickerBaseProps,
  UniFilePickerArrayProps,
  UniFilePickerObjectProps,
  UniFilePickerProps,
  UniFilePicker,
} from '@/UniFilePicker';

describe('UniFilePicker', () => {
  expectTypeOf<UniFilePickerValue>().toBeObject();
  expectTypeOf<UniFilePickerValue>().toEqualTypeOf<UniHelper.UniFilePickerValue>();

  expectTypeOf<UniFilePickerMode>().toBeString();
  expectTypeOf<UniFilePickerMode>().toEqualTypeOf<UniHelper.UniFilePickerMode>();

  expectTypeOf<UniFilePickerFileMediatype>().toBeString();
  expectTypeOf<UniFilePickerFileMediatype>().toEqualTypeOf<UniHelper.UniFilePickerFileMediatype>();

  expectTypeOf<UniFilePickerListStyles>().toBeObject();
  expectTypeOf<UniFilePickerListStyles>().toEqualTypeOf<UniHelper.UniFilePickerListStyles>();

  expectTypeOf<UniFilePickerImageStyles>().toBeObject();
  expectTypeOf<UniFilePickerImageStyles>().toEqualTypeOf<UniHelper.UniFilePickerImageStyles>();

  expectTypeOf<UniFilePickerBaseDetail>().toBeObject();
  expectTypeOf<UniFilePickerBaseDetail>().toEqualTypeOf<UniHelper.UniFilePickerBaseDetail>();

  expectTypeOf<UniFilePickerUpload>().toBeFunction();
  expectTypeOf<UniFilePickerUpload>().toEqualTypeOf<UniHelper.UniFilePickerUpload>();

  expectTypeOf<UniFilePickerClearFiles>().toBeFunction();
  expectTypeOf<UniFilePickerClearFiles>().toEqualTypeOf<UniHelper.UniFilePickerClearFiles>();

  expectTypeOf<UniFilePickerOnSelectDetail>().toBeObject();
  expectTypeOf<UniFilePickerOnSelectDetail>().toEqualTypeOf<UniHelper.UniFilePickerOnSelectDetail>();

  expectTypeOf<UniFilePickerOnSelect>().toBeFunction();
  expectTypeOf<UniFilePickerOnSelect>().toEqualTypeOf<UniHelper.UniFilePickerOnSelect>();

  expectTypeOf<UniFilePickerOnProgressDetail>().toBeObject();
  expectTypeOf<UniFilePickerOnProgressDetail>().toEqualTypeOf<UniHelper.UniFilePickerOnProgressDetail>();

  expectTypeOf<UniFilePickerOnProgress>().toBeFunction();
  expectTypeOf<UniFilePickerOnProgress>().toEqualTypeOf<UniHelper.UniFilePickerOnProgress>();

  expectTypeOf<UniFilePickerOnSuccessDetail>().toBeObject();
  expectTypeOf<UniFilePickerOnSuccessDetail>().toEqualTypeOf<UniHelper.UniFilePickerOnSuccessDetail>();

  expectTypeOf<UniFilePickerOnSuccess>().toBeFunction();
  expectTypeOf<UniFilePickerOnSuccess>().toEqualTypeOf<UniHelper.UniFilePickerOnSuccess>();

  expectTypeOf<UniFilePickerOnFailDetail>().toBeObject();
  expectTypeOf<UniFilePickerOnFailDetail>().toEqualTypeOf<UniHelper.UniFilePickerOnFailDetail>();

  expectTypeOf<UniFilePickerOnFail>().toBeFunction();
  expectTypeOf<UniFilePickerOnFail>().toEqualTypeOf<UniHelper.UniFilePickerOnFail>();

  expectTypeOf<UniFilePickerOnDeleteDetail>().toBeObject();
  expectTypeOf<UniFilePickerOnDeleteDetail>().toEqualTypeOf<UniHelper.UniFilePickerOnDeleteDetail>();

  expectTypeOf<UniFilePickerOnDelete>().toBeFunction();
  expectTypeOf<UniFilePickerOnDelete>().toEqualTypeOf<UniHelper.UniFilePickerOnDelete>();

  expectTypeOf<UniFilePickerBaseProps>().toBeObject();
  expectTypeOf<UniFilePickerBaseProps>().toEqualTypeOf<UniHelper.UniFilePickerBaseProps>();

  expectTypeOf<UniFilePickerArrayProps>().toBeObject();
  expectTypeOf<UniFilePickerArrayProps>().toEqualTypeOf<UniHelper.UniFilePickerArrayProps>();

  expectTypeOf<UniFilePickerObjectProps>().toBeObject();
  expectTypeOf<UniFilePickerObjectProps>().toEqualTypeOf<UniHelper.UniFilePickerObjectProps>();

  expectTypeOf<UniFilePickerProps>().toBeObject();
  expectTypeOf<UniFilePickerProps>().toEqualTypeOf<UniHelper.UniFilePickerProps>();

  expectTypeOf<UniFilePicker>().not.toBeAny();
  expectTypeOf<UniFilePicker>().toEqualTypeOf<UniHelper.UniFilePicker>();
});
