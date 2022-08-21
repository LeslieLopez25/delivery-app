import { DoorDashClient } from "@doordash/sdk";
import "dotenv/config";

const client = new DoorDashClient({
  developer_id: process.env.DEVELOPER_ID,
  key_id: process.env.KEY_ID,
  signing_secret: process.env.SIGNING_SECRET,
});

const response = client
  .getDelivery("1265962c-7ab9-4563-bca0-a106cc0b2fb8")
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    console.log(err);
  });
