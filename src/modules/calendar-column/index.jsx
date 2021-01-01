import React from 'react';
import './calendar.styles.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const CalendarColumn = (props) => {
    const [value, onChange] = React.useState(new Date());
    React.useEffect(() => {
        console.log(value);
    });
    return (
        <div>
          <Calendar
            className="custom-styles"
            onChange={onChange}
            value={value}
          />
        </div>
      );
};
