// src/components/Sidebar.tsx
import Link from 'next/link';

const sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4">
      <nav className="space-y-2">
        <Link 
          href="/" 
          className="block p-2 hover:bg-blue-50 rounded"
        >
          🏠 메인 홈
        </Link>
        <Link 
          href="/study" 
          className="block p-2 hover:bg-blue-50 rounded font-medium text-blue-600"
        >
          📚 Study 페이지
        </Link>
      </nav>
    </aside>
  );
};

export default sidebar;