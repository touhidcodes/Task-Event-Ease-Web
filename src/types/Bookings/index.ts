import { TEvent } from "../Events";

export type TEventBookings = {
  id: string;
  userId: string;
  eventId: number;
  event: TEvent;
};
