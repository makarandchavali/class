import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import ClassOverview from './components/ClassOverview';
import AddModifyClass from './components/AddModifyClass';
import AddModifySubjects from './components/AddModifySubjects';
import AssignTeachers from './components/AssignTeachers';

function Sidebar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-60 bg-[#05326b] text-white flex flex-col min-h-screen">
      {/* Header */}
      <div className="px-5 py-3 border-b border-[#08408a]">
        <h2 className="text-base font-semibold">Class</h2>
      </div>

      {/* Navigation Links (compact spacing) */}
      <nav className="flex flex-col text-sm font-medium">
        <Link
          to="/"
          className={`px-5 py-2.5 transition-colors ${
            isActive('/')
              ? 'bg-[#0a4ebf] text-white'
              : 'text-blue-100 hover:bg-[#0a4ebf] hover:text-white'
          }`}
        >
          Class Overview
        </Link>

        <Link
          to="/add-class"
          className={`px-5 py-2.5 transition-colors ${
            isActive('/add-class')
              ? 'bg-[#0a4ebf] text-white'
              : 'text-blue-100 hover:bg-[#0a4ebf] hover:text-white'
          }`}
        >
          Add/Modify Class
        </Link>

        <Link
          to="/add-subjects"
          className={`px-5 py-2.5 transition-colors ${
            isActive('/add-subjects')
              ? 'bg-[#0a4ebf] text-white'
              : 'text-blue-100 hover:bg-[#0a4ebf] hover:text-white'
          }`}
        >
          Add/Modify Subjects
        </Link>

        <Link
          to="/assign-teachers"
          className={`px-5 py-2.5 transition-colors ${
            isActive('/assign-teachers')
              ? 'bg-[#0a4ebf] text-white'
              : 'text-blue-100 hover:bg-[#0a4ebf] hover:text-white'
          }`}
        >
          Assign Teachers
        </Link>
      </nav>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-[#f4f6fb]">
        <Sidebar />
        <main className="flex-1 bg-white">
          <Routes>
            <Route path="/" element={<ClassOverview />} />
            <Route path="/add-class" element={<AddModifyClass />} />
            <Route path="/add-subjects" element={<AddModifySubjects />} />
            <Route path="/assign-teachers" element={<AssignTeachers />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
