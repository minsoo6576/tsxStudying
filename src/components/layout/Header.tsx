// src/components/Header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6 z-50">
      <div className="flex items-center gap-4">
        {/* 서비스 로고 영역 */}
        <Link
          href="/"
          className="text-xl font-bold text-blue-600 tracking-tight"
        >
          Studying <span className="text-gray-800">Without No Library</span>
        </Link>
      </div>

      <div className="flex items-center gap-6">
        {/* 우측 메뉴 (예: 알림, 사용자 정보) */}
        <nav className="flex gap-4 text-sm text-gray-600">
          <button className="hover:text-blue-600">알림</button>
          <button className="hover:text-blue-600">설정</button>
        </nav>

        <div className="flex items-center gap-2 border-l pl-6">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xs">
            MS
          </div>
          <span className="text-sm font-medium text-gray-700">박민수님</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
