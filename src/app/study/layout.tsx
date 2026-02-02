// app/monitoring/layout.tsx
export default function MonitoringLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      {/* 상단(본문) 영역: 남은 높이 전부 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 사이드바 */}
        <aside className="w-64 shrink-0 bg-black text-white p-4">
          사이드바
        </aside>

        {/* 메인: 4등분(2x2) */}
        <main className="flex-1 bg-white text-black overflow-auto p-4">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
            <div className="border rounded p-4">1번 영역</div>
            <div className="border rounded p-4">2번 영역</div>
            <div className="border rounded p-4">3번 영역</div>

            {/* ✅ 여기서 page.tsx가 들어갈 자리 */}
            <div className="border rounded p-4">
              4번 영역
              <div className="mt-3 border-t pt-3">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* 하단바 */}
      <footer className="h-12 shrink-0 bg-gray-800 text-white flex items-center px-4">
        실시간 상태: 정상 | 서버 연결됨
      </footer>
    </div>
  );
}
