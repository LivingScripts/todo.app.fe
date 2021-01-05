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
          <div className="summary font-md-size push-away">
            <i className="fad fa-coffee-togo color-default pic mr-2"></i>
            <div className="description">
              <h3 className="mb-3">
                Hi, Nilesh!
              </h3>
              <p>
                You have 2 tasks left for today, 1 high priority and 1 low priority. Already completed 3 tasks today.
              </p>
            </div>
          </div>
          <Calendar
            className="custom-styles"
            onChange={onChange}
            value={value}
          />
        </div>
      );
};
