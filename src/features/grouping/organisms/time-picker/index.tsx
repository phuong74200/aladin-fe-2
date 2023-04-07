import { v4 } from "uuid";

import { useStyles } from "./style";

const DAYS_OF_WEEK = new Array(7).fill(null);

const DAYS = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"];

export default function TimePicker() {
  const { classes } = useStyles();

  return (
    <table className={classes.table}>
      <tbody>
        <tr>
          <th></th>
          {DAYS.map((day) => (
            <th key={v4()}>{day}</th>
          ))}
        </tr>
        {DAYS_OF_WEEK.map(() => (
          <tr key={v4()}>
            <th>8h - 11h</th>
            {DAYS.map(() => (
              <td key={v4()}>xx</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
