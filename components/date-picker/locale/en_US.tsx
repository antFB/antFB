import GregorianCalendarLocale from 'gregorian-calendar/lib/locale/en_US';
import CalendarLocale from 'rc-calendar/lib/locale/en_US';
import TimePickerLocale from '../../time-picker/locale/en_US';
import assign from 'object-assign';
// 统一合并为完整的 Locale
const locale = assign({}, GregorianCalendarLocale);
locale.lang = assign({
  placeholder: 'Select date',
  rangePlaceholder: ['Start date', 'End date'],
}, CalendarLocale);

locale.timePickerLocale = assign({}, TimePickerLocale);

// All settings at:
// https://github.com/ant-design/ant-design/issues/424

export default locale;
