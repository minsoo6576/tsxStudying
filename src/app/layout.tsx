// src/app/layout.tsx
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/sidebar";
import "./globals.css"; // Tailwind 설정 등

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="flex flex-col h-screen">
        {/* 상단 헤더 */}
        <Header />

        <div className="flex flex-1 overflow-hidden">
          {/* 좌측 사이드메뉴 */}
          <Sidebar />

          {/* 메인 콘텐츠 영역 (이 자리에 page.tsx 내용이 들어감) */}
          <main className="flex-1 grid-cols-2  border-amber-700 overflow-y-auto p-6 bg-gray-50">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
