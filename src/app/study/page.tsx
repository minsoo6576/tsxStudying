// src/app/study/page.tsx
export default function StudyPage() {
  return (
    <div className="space-y-8 text-black">
      {/* 페이지 헤더 */}
      <section>
        <h1 className="text-2xl text-black font-bold">Study</h1>
        <p className="mt-2 text-gray-600">
          학습 진행 상황을 확인하고 이어서 공부할 수 있습니다.
        </p>
      </section>

      {/* 요약 카드 영역 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-lg border bg-white p-5">
          <p className="text-sm text-gray-500">전체 학습</p>
          <p className="mt-2 text-2xl font-bold">12</p>
        </div>

        <div className="rounded-lg border bg-white p-5">
          <p className="text-sm text-gray-500">진행 중</p>
          <p className="mt-2 text-2xl font-bold text-blue-600">5</p>
        </div>

        <div className="rounded-lg border bg-white p-5">
          <p className="text-sm text-gray-500">완료</p>
          <p className="mt-2 text-2xl font-bold text-green-600">7</p>
        </div>
      </section>

      {/* 학습 리스트 */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">학습 목록</h2>

        <div className="space-y-3">
          {[
            { title: 'Next.js App Router', progress: 80 },
            { title: 'React 상태 관리', progress: 45 },
            { title: 'Tailwind CSS', progress: 100 },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border bg-white p-4 flex items-center justify-between"
            >
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">
                  진행률 {item.progress}%
                </p>
              </div>

              <button className="rounded-md bg-black px-4 py-2 text-white text-sm hover:bg-gray-800">
                계속하기
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
