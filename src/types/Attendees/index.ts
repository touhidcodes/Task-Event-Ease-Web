import { TEvent } from "../Events";
import { TUser } from "../User";

export type TEventAttendees = {
  id: string;
  userId: string;
  eventId: number;
  event: TEvent;
  user: TUser;
};
