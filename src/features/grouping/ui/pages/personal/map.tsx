import { Button, Input, Paper } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";

export default function Map() {
  return (
    <>
      <Input icon={<IconMapPin size="1.125rem" />} placeholder="Your email" />
      <Paper mih={0} style={{ flexGrow: 1 }}>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31359.678221419348!2d106.7283424!3d10.7375835!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752560b050b093%3A0x6dcb89c51055ccc9!2sDistrict%207%2C%20Ho%20Chi%20Minh%20City!5e0!3m2!1sen!2s!4v1681466767820!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: "none", borderRadius: 16 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Paper>
      <Button>Lưu tuỳ chọn</Button>
    </>
  );
}
