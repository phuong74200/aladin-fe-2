import TimePicker from "../../organisms/time-picker";

export default function TimePick() {
  const slots = new Array(23).fill(null).map((_, index) => `${index}h`);

  return <TimePicker slots={slots} />;
}
