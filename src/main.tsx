import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// สร้าง client instance
// const queryClient = new QueryClient()
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // ปิดการ refetch เมื่อ focus กลับมาที่แท็บ
      retry: 1, // ลองใหม่ 1 ครั้งเมื่อเกิดข้อผิดพลาด
      staleTime: 5 * 60 * 1000, // ข้อมูลจะเก่า (stale) หลังจาก 5 นาที
    },
  },
});
// stale time คือระยะเวลาที่ต้องการให้ call ข้อมูลซ้ำ เช่น 300000ms -> 5 นาทีจะคอลข้อมูลใหม่อีกครั้ง

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
  // </StrictMode>
);
