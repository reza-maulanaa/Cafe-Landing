import type { Metadata } from "next";
import NotFound from "@/components/section/NotFound";

export const metadata: Metadata = {
  title: "404 — Halaman Tidak Ditemukan | Cafe Jatibarang",
  description: "Halaman yang kamu cari tidak dapat ditemukan.",
};

export default function NotFoundPage() {
  return <NotFound />;
}
