"use client";

import { MotionConfig } from "framer-motion";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          duration: 4200,
          style: {
            background: "#EFEFE3",
            color: "#000C02",
            border: "1px solid rgba(0, 12, 2, 0.08)",
            borderRadius: "14px",
            padding: "12px 18px",
            fontSize: "13px",
            lineHeight: "1.5",
            letterSpacing: "0.01em",
            boxShadow: "0 18px 50px -18px rgba(0, 0, 0, 0.65)",
            maxWidth: "440px",
          },
          success: {
            iconTheme: {
              primary: "#000C02",
              secondary: "#EFEFE3",
            },
          },
        }}
        containerStyle={{
          top: 96,
        }}
      />
    </MotionConfig>
  );
}
