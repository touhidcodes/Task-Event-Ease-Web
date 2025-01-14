import { tagTypes } from "../tags";
import { baseApi } from "./baseApi";

export const eventsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllEvents: build.query({
      query: () => ({
        url: `/events/all`,
        method: "GET",
      }),
      providesTags: [tagTypes.event],
    }),
    getEventById: build.query({
      query: (id) => ({
        url: `/events/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.event],
    }),
    getMyEvents: build.query({
      query: () => ({
        url: `/events/my-events`,
        method: "GET",
      }),
      providesTags: [tagTypes.event],
    }),
    createEvent: build.mutation({
      query: (eventData) => ({
        url: `/events`,
        method: "POST",
        data: eventData,
      }),
      invalidatesTags: [tagTypes.event],
    }),
    updateEvent: build.mutation({
      query: ({ eventId, eventData }) => ({
        url: `/events/${eventId}`,
        method: "PUT",
        data: eventData,
      }),
      invalidatesTags: [tagTypes.event],
    }),
    deleteEvent: build.mutation({
      query: (eventId) => ({
        url: `/events/${eventId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.event],
    }),
  }),
});

export const {
  useGetAllEventsQuery,
  useGetEventByIdQuery,
  useGetMyEventsQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
} = eventsApi;
