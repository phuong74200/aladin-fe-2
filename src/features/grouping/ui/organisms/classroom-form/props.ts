export interface ClassRoomFormProps {
  personal: {
    name: string;
    phone: string;
    email: string;
  };
  checkout: {
    coupon: undefined;
    sale: number;
    price: number;
  };
  group: {
    subject: string;
    students?: number;
    lessons: number;
    duration: number;
    description: string;
    location: string;
    schedule: Date[];
    ta: {
      name: string;
    };
  };
  opened: boolean;
  onClose: () => void;
  step: number;
}
