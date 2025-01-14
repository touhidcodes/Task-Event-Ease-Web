import { tagTypes } from "../tags";
import { baseApi } from "./baseApi";

export const attendeeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllAttendees: build.query({
      query: () => ({
        url: `/attendees/all`,
        method: "GET",
      }),
      providesTags: [tagTypes.attendees],
    }),
    getMyBookings: build.query({
      query: () => ({
        url: "/attendees/my-events",
        method: "GET",
      }),
      providesTags: [tagTypes.attendees],
    }),
    bookingRequest: build.mutation({
      query: (eventId) => ({
        url: `/attendees/register`,
        method: "POST",
        data: eventId,
      }),
      invalidatesTags: [tagTypes.attendees],
    }),
  }),
});

export const {
  useGetAllAttendeesQuery,
  useGetMyBookingsQuery,
  useBookingRequestMutation,
} = attendeeApi;
