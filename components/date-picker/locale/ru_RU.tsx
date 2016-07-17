/**
 * Created by Andrey Gayvoronsky on 13/04/16.
 */

import GregorianCalendarLocale from 'gregorian-calendar/lib/locale/ru_RU';
import CalendarLocale from 'rc-calendar/lib/locale/ru_RU';
import TimePickerLocale from '../../time-picker/locale/ru_RU';
import assign from 'object-assign';
const locale = assign({}, GregorianCalendarLocale);
locale.lang = assign({
  placeholder: 'Выберите дату',
  rangePlaceholder: ['Начальная дата', 'Конечная дата'],
}, CalendarLocale);

locale.timePickerLocale = assign({}, TimePickerLocale);

// All settings at:
// https://github.com/ant-design/ant-design/issues/424

export default locale;
