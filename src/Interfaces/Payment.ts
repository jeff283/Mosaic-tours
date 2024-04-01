import { FieldValue } from "firebase/firestore";

interface Payment {
  id?: string;
  userID: string;
  userName: string;
  tourID: string;
  amount: number;
  date: FieldValue;
}

export default Payment;
