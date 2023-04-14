import TimePicker from "../../organisms/time-picker";

export default function TimePick() {
  const slots = new Array(16).fill(null).map((_, index) => `${index + 8}h`);

  return <TimePicker slots={slots} />;
}
