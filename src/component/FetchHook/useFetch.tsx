/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ใช้ useRef เพื่อเก็บค่า AbortController ปัจจุบัน
  const controllerRef = useRef<AbortController | null>(null);

  // สร้างฟังก์ชัน fetchData ด้วย useCallback เพื่อให้สามารถเรียกใช้ได้ทั้งใน useEffect และจาก refetch
  const fetchData = useCallback(async () => {
    // ยกเลิก request เก่า (ถ้ามี) ก่อนเริ่ม request ใหม่
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    // ไม่ดำเนินการถ้าไม่มี URL
    if (!url) return;

    // สร้าง controller ใหม่
    const controller = new AbortController();
    controllerRef.current = controller;
    const signal = controller.signal;

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url, { signal });
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err: any) {
      // ไม่ต้อง set error ถ้าเป็นการ abort เพราะเราตั้งใจยกเลิกเอง
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }, [url]);

  // เรียก fetchData เมื่อ component mount หรือเมื่อ url เปลี่ยน
  useEffect(() => {
    fetchData();

    // Cleanup function
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, [fetchData]);

  // ส่งคืนทั้งข้อมูลและฟังก์ชัน refetch
  return { data, loading, error, refetch: fetchData };
};
