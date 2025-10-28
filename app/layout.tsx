import type { Metadata } from "next";
import "./globals.css";
import { ConfigProvider } from "antd";
import faIR from "antd/locale/fa_IR";
import { iranYekan } from "./fonts";

export const metadata: Metadata = {
  title: "خانه گل سحر آمیز بنچینو",
  description: "فروشگاه آنلاین گل و گیاه - بهترین دسته گل‌ها برای لحظات خاص شما",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={iranYekan.variable}>
        <ConfigProvider
          locale={faIR}
          direction="rtl"
          theme={{
            token: {
              colorPrimary: "#d4a574",
              fontFamily: "var(--font-iran-yekan), sans-serif",
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
