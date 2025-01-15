import React, { useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import { useSocket } from "@/hooks/useSocket";
import { toast } from "sonner";
import { TEvent } from "@/types/Events";

const Notifications = () => {
  const { socket } = useSocket();
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    severity: "success" | "error";
  } | null>(null);

  useEffect(() => {
    if (socket) {
      console.log(socket);
      const handleNewAttendee = (data: {
        message: string;
        eventId: string;
      }) => {
        setNotification({
          message: data.message,
          severity: "success",
        });
        setOpen(true);
      };

      const handleEventFull = (eventId: string) => {
        setNotification({
          message: `Event ${eventId} has reached full capacity.`,
          severity: "error",
        });
        setOpen(true);
      };
      const handleEventCreate = (data: {
        message: string;
        eventId: string;
        name: string;
      }) => {
        setNotification({
          message: `New Event has been created.`,
          severity: "success",
        });
        setOpen(true);
      };

      socket.on("new_attendee", handleNewAttendee);
      socket.on("new_event", handleEventCreate);
      socket.on("event_full", handleEventFull);

      return () => {
        socket.off("new_attendee", handleNewAttendee);
        socket.off("new_event", handleEventCreate);
        socket.off("event_full", handleEventFull);
      };
    }
  }, [socket]);

  console.log(notification);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;

    setOpen(false);
    setNotification(null);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Snackbar with customized styling */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={notification?.severity || "info"}
          sx={{
            width: "100%",
            padding: "16px 24px",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            color: "black",
            fontWeight: "500",
            "& .MuiAlert-icon": {
              marginRight: "12px",
            },
            "& .MuiAlert-message": {
              fontSize: "16px",
            },
          }}
        >
          {notification?.message || ""}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Notifications;
