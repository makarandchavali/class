import { useState, useRef, useEffect } from 'react';
import {
  Volume2,
  HelpCircle,
  Bell,
  Settings,
  Languages,
  User,
  ChevronDown,
  Search,
  Save,
  Calendar,
  Pencil,
  Trash2,
  BookOpen
} from 'lucide-react';

const academicYears = [
  'Apr 2025 - Mar 2026',
];

export default function AssignTeachers() {
  const [selectedYear, setSelectedYear] = useState('');
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [searchStaff, setSearchStaff] = useState('');
  const [assistantTeacher, setAssistantTeacher] = useState('');
  
  const yearDropdownRef = useRef<HTMLDivElement>(null);

  const [subjects] = useState([
    { id: 1, name: 'English', code: '', primaryTeacher: 'Anuradha Chauhan', substituteTeacher: '' },
    { id: 2, name: 'Maths', code: '', primaryTeacher: 'Brijesh', substituteTeacher: '' },
    { id: 3, name: 'Hindi', code: '', primaryTeacher: 'Deepika Hans', substituteTeacher: '' },
    { id: 4, name: 'EVS', code: '', primaryTeacher: 'Dev Raaj', substituteTeacher: '' },
  ]);

  const assignedCount = subjects.filter(s => s.primaryTeacher).length;
  const unassignedCount = subjects.length - assignedCount;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (yearDropdownRef.current && !yearDropdownRef.current.contains(event.target as Node)) {
        setIsYearDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // reset dependent selections when parent selection changes
  useEffect(() => {
    if (!selectedYear) {
      setSelectedClass('');
      setSelectedSection('');
    }
  }, [selectedYear]);

  useEffect(() => {
    if (!selectedClass) {
      setSelectedSection('');
    }
  }, [selectedClass]);

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Header */}
      <div className="bg-sky-600 border-b border-sky-500">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-xl font-semibold text-white">Assign teachers</h1>
              <p className="text-sm text-sky-100">Class, Subject & Teacher Assignment</p>
            </div>
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <ChevronDown className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors relative">
              <Volume2 className="w-4 h-4" />
              <span className="font-medium text-sm">WHAT'S NEW</span>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-600 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                5
              </span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-yellow-500 text-yellow-600 rounded-md hover:bg-yellow-50 transition-colors">
              <HelpCircle className="w-4 h-4" />
              <span className="font-medium text-sm">RAISE A QUERY</span>
            </button>

            <div className="flex items-center gap-2 ml-2">
              <button className="relative p-2 hover:bg-sky-500 rounded-full transition-colors">
                <Bell className="w-5 h-5 text-white" />
                <span className="absolute top-1 right-1 w-4 h-4 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                  9
                </span>
              </button>

              <button className="p-2 hover:bg-sky-500 rounded-full transition-colors">
                <Settings className="w-5 h-5 text-white" />
              </button>

              <button className="p-2 hover:bg-sky-500 rounded-full transition-colors">
                <Languages className="w-5 h-5 text-white" />
              </button>

              <button className="flex items-center gap-1 p-2 hover:bg-sky-500 rounded-full transition-colors">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-white">Rajni Mehra</span>
                <ChevronDown className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-6 py-6">
        {/* Filter Section */}
        <div className="flex items-end gap-4 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Academic Year*</label>
            <div className="relative" ref={yearDropdownRef}>
              <button
                onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                className="w-full flex items-center gap-2 px-3 py-2.5 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Calendar className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-normal flex-1 text-left">{selectedYear || 'Select Academic Year'}</span>
                <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${isYearDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isYearDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  {academicYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => {
                        setSelectedYear(year);
                        setIsYearDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-sm text-left hover:bg-gray-100 transition-colors ${
                        selectedYear === year ? 'bg-gray-50 font-medium' : ''
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex-1">
  <label className="block text-sm font-medium text-gray-700 mb-2">Select Class</label>
  <div className="relative">
    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700 pointer-events-none" />
    <select
      value={selectedClass}
      onChange={(e) => setSelectedClass(e.target.value)}
      disabled={!selectedYear}
      className="w-full pl-10 pr-10 py-2.5 bg-white disabled:bg-gray-100 border border-gray-300 rounded-md appearance-none text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-600"
    >
      <option value="">Select Class</option>
      <option value="4th">4th</option>
    </select>
    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
  </div>
</div>

          <div className="flex-1">
  <label className="block text-sm font-medium text-gray-700 mb-2">Select Section</label>
  <div className="relative">
    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700 pointer-events-none" />
    <select
      value={selectedSection}
      onChange={(e) => setSelectedSection(e.target.value)}
      disabled={!selectedClass}
      className="w-full pl-10 pr-10 py-2.5 bg-white disabled:bg-gray-100 border border-gray-300 rounded-md appearance-none text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-600"
    >
      <option value="">Select Section</option>
      <option value="A">A</option>
    </select>
    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
  </div>
</div>

          {selectedYear && selectedClass && selectedSection ? (
            <>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search Staff</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchStaff}
                    onChange={(e) => setSearchStaff(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-600"
                    placeholder=""
                  />
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Assistant Class Teacher</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={assistantTeacher}
                    onChange={(e) => setAssistantTeacher(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-600"
                    placeholder=""
                  />
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <button className="flex items-center gap-2 px-6 py-2.5 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors font-medium">
                <Save className="w-4 h-4" />
                SAVE
              </button>
            </>
          ) : (
            <div className="flex-1 col-span-full">
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                Please select Academic Year → Class → Section to view and manage assignments.
              </div>
            </div>
          )}
        </div>

        {/* Statistics Cards (shown only after selections) */}
        {selectedYear && selectedClass && selectedSection && (
          <div className="flex items-center justify-between mb-6">
          <div className="flex gap-4">
            <div className="bg-green-600 rounded-lg p-6 flex items-center gap-4 min-w-[200px]">
              <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold">{assignedCount}</div>
                <div className="text-sm">Total subjects with<br/>assigned teacher</div>
              </div>
            </div>

            <div className="bg-red-600 rounded-lg p-6 flex items-center gap-4 min-w-[200px]">
              <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold">{unassignedCount}</div>
                <div className="text-sm">Total subjects with<br/>un-assigned teacher</div>
              </div>
            </div>
          </div>

          <button className="flex items-center gap-2 px-6 py-2.5 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors font-medium">
            <Save className="w-4 h-4" />
            SAVE
          </button>
          </div>
        )}

        {/* Table (shown only after selections) */}
        {selectedYear && selectedClass && selectedSection && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
            <table className="w-full">
              <thead className="bg-[#3B82F6] text-white sticky top-0">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold border-r border-[#609AF8] w-16"></th>
                  <th className="px-6 py-4 text-left text-sm font-semibold border-r border-[#609AF8]">
                    Subject Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold border-r border-[#609AF8]">
                    Subject Code
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold border-r border-[#609AF8]">
                    Primary Teacher
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Substitute Teacher
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {subjects.map((subject, index) => (
                  <tr key={subject.id} className="border-b border-gray-200">
                    <td className="px-6 py-4">
                      <span className="text-gray-400 text-sm">{String(index + 1).padStart(2, '0')}.</span>
                    </td>
                    <td className="px-6 py-4 text-gray-900 font-medium">{subject.name}</td>
                    <td className="px-6 py-4 text-gray-700">{subject.code}</td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-900">{subject.primaryTeacher}</span>
                          <button className="text-orange-500 hover:text-orange-600 transition-colors">
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button className="text-orange-500 hover:text-orange-600 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="relative">
                          <select className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md appearance-none text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600">
                            <option>Select Staff</option>
                            <option>Anuradha Chauhan</option>
                            <option>Brijesh</option>
                            <option>Deepika Hans</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="relative">
                        <button className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-left text-gray-900 hover:bg-gray-50 transition-colors flex items-center justify-between">
                          <span className="text-sm">No Teacher Selected</span>
                          <ChevronDown className="w-4 h-4 text-orange-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}