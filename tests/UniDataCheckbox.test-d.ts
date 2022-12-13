import { describe, expectTypeOf } from 'vitest';
import type {
  UniDataCheckboxValue,
  UniDataCheckboxMode,
  UniDataCheckboxLocaldata,
  UniDataCheckboxIcon,
  UniDataCheckboxMap,
  UniDataCheckboxBaseProps,
  UniDataCheckboxSingleOnChangeDetail,
  UniDataCheckboxSingleOnChange,
  UniDataCheckboxSingleProps,
  UniDataCheckboxMultipleOnChangeDetail,
  UniDataCheckboxMultipleOnChange,
  UniDataCheckboxMultipleProps,
  UniDataCheckboxProps,
  UniDataCheckbox,
} from '@/UniDataCheckbox';

describe('UniDataCheckbox', () => {
  expectTypeOf<UniDataCheckboxValue>().toMatchTypeOf<string | number>();
  expectTypeOf<UniDataCheckboxValue>().toEqualTypeOf<UniHelper.UniDataCheckboxValue>();

  expectTypeOf<UniDataCheckboxMode>().toBeString();
  expectTypeOf<UniDataCheckboxMode>().toEqualTypeOf<UniHelper.UniDataCheckboxMode>();

  expectTypeOf<UniDataCheckboxLocaldata>().toBeObject();
  expectTypeOf<UniDataCheckboxLocaldata>().toEqualTypeOf<UniHelper.UniDataCheckboxLocaldata>();

  expectTypeOf<UniDataCheckboxIcon>().toBeString();
  expectTypeOf<UniDataCheckboxIcon>().toEqualTypeOf<UniHelper.UniDataCheckboxIcon>();

  expectTypeOf<UniDataCheckboxMap>().toBeObject();
  expectTypeOf<UniDataCheckboxMap>().toEqualTypeOf<UniHelper.UniDataCheckboxMap>();

  expectTypeOf<UniDataCheckboxBaseProps>().toBeObject();
  expectTypeOf<UniDataCheckboxBaseProps>().toEqualTypeOf<UniHelper.UniDataCheckboxBaseProps>;

  expectTypeOf<UniDataCheckboxSingleOnChangeDetail>().toBeObject();
  expectTypeOf<UniDataCheckboxSingleOnChangeDetail>()
    .toEqualTypeOf<UniHelper.UniDataCheckboxSingleOnChangeDetail>;

  expectTypeOf<UniDataCheckboxSingleOnChange>().toBeObject();
  expectTypeOf<UniDataCheckboxSingleOnChange>()
    .toEqualTypeOf<UniHelper.UniDataCheckboxSingleOnChange>;

  expectTypeOf<UniDataCheckboxSingleProps>().toBeObject();
  expectTypeOf<UniDataCheckboxSingleProps>().toEqualTypeOf<UniHelper.UniDataCheckboxSingleProps>;

  expectTypeOf<UniDataCheckboxMultipleOnChangeDetail>().toBeObject();
  expectTypeOf<UniDataCheckboxMultipleOnChangeDetail>()
    .toEqualTypeOf<UniHelper.UniDataCheckboxMultipleOnChangeDetail>;

  expectTypeOf<UniDataCheckboxMultipleOnChange>().toBeObject();
  expectTypeOf<UniDataCheckboxMultipleOnChange>()
    .toEqualTypeOf<UniHelper.UniDataCheckboxMultipleOnChange>;

  expectTypeOf<UniDataCheckboxMultipleProps>().toBeObject();
  expectTypeOf<UniDataCheckboxMultipleProps>()
    .toEqualTypeOf<UniHelper.UniDataCheckboxMultipleProps>;

  expectTypeOf<UniDataCheckboxProps>().toBeObject();
  expectTypeOf<UniDataCheckboxProps>().toEqualTypeOf<UniHelper.UniDataCheckboxProps>();

  expectTypeOf<UniDataCheckbox>().not.toBeAny();
  expectTypeOf<UniDataCheckbox>().toEqualTypeOf<UniHelper.UniDataCheckbox>();
});
