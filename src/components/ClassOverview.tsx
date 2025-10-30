import { useState, useEffect, useRef } from 'react';
import {
  Calendar,
  Columns3,
  Filter,
  Grid3x3,
  Download,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Volume2,
  HelpCircle,
  Bell,
  Settings,
  Languages,
  User
} from 'lucide-react';

const academicYears = [
  'Apr 2025 - Mar 2026',
  'Apr 2024 - Mar 2025',
  'Apr 2023 - Mar 2024',
];

export default function ClassOverview() {
  const [classes, setClasses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [includeDeactivated, setIncludeDeactivated] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState(academicYears[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchClasses();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const fetchClasses = async () => {
    setLoading(true);
    const demoData = [
      {
        id: 1,
        class_section: '1st A',
        class_teacher: 'Tanisha Thakur',
        total_subjects: 14,
        time_table_created: true,
        old_admissions: 2,
        new_admissions: 10,
        active_students: 12,
        deactivated_students: 0,
        total_students: 12,
      },
      {
        id: 2,
        class_section: '2nd A',
        class_teacher: 'Ritika',
        total_subjects: 14,
        time_table_created: true,
        old_admissions: 3,
        new_admissions: 15,
        active_students: 18,
        deactivated_students: 0,
        total_students: 18,
      },
      {
        id: 3,
        class_section: '3rd A',
        class_teacher: 'Tanisha Thakur',
        total_subjects: 16,
        time_table_created: true,
        old_admissions: 2,
        new_admissions: 20,
        active_students: 22,
        deactivated_students: 1,
        total_students: 23,
      },
      {
        id: 4,
        class_section: '4th A',
        class_teacher: '',
        total_subjects: 14,
        time_table_created: true,
        old_admissions: 0,
        new_admissions: 20,
        active_students: 20,
        deactivated_students: 1,
        total_students: 21,
      },
      {
        id: 5,
        class_section: '5th A',
        class_teacher: '',
        total_subjects: 15,
        time_table_created: true,
        old_admissions: 0,
        new_admissions: 12,
        active_students: 12,
        deactivated_students: 0,
        total_students: 12,
      },
      {
        id: 6,
        class_section: '6th A',
        class_teacher: '',
        total_subjects: 2,
        time_table_created: true,
        old_admissions: 2,
        new_admissions: 30,
        active_students: 32,
        deactivated_students: 0,
        total_students: 32,
      },
      {
        id: 7,
        class_section: '7th A',
        class_teacher: '',
        total_subjects: 2,
        time_table_created: true,
        old_admissions: 0,
        new_admissions: 9,
        active_students: 9,
        deactivated_students: 0,
        total_students: 9,
      },
      {
        id: 8,
        class_section: '8th A',
        class_teacher: '',
        total_subjects: 2,
        time_table_created: false,
        old_admissions: 0,
        new_admissions: 9,
        active_students: 9,
        deactivated_students: 0,
        total_students: 9,
      },
      {
        id: 9,
        class_section: '9th A',
        class_teacher: 'Poonam',
        total_subjects: 3,
        time_table_created: false,
        old_admissions: 0,
        new_admissions: 9,
        active_students: 9,
        deactivated_students: 0,
        total_students: 9,
      },
      {
        id: 10,
        class_section: '10th A',
        class_teacher: '',
        total_subjects: 3,
        time_table_created: false,
        old_admissions: 0,
        new_admissions: 16,
        active_students: 16,
        deactivated_students: 0,
        total_students: 16,
      },
    ];
    setTimeout(() => {
      setClasses(demoData);
      setLoading(false);
    }, 1000);
  };

  const totalItems = classes.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentClasses = classes.slice(startIndex, endIndex);

  const totals = classes.reduce(
    (acc, cls) => ({
      oldAdmissions: acc.oldAdmissions + cls.old_admissions,
      newAdmissions: acc.newAdmissions + cls.new_admissions,
      activeStudents: acc.activeStudents + cls.active_students,
      deactivatedStudents: acc.deactivatedStudents + cls.deactivated_students,
      totalStudents: acc.totalStudents + cls.total_students,
    }),
    { oldAdmissions: 0, newAdmissions: 0, activeStudents: 0, deactivatedStudents: 0, totalStudents: 0 }
  );

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Header */}
      <div className="bg-sky-600 border-b border-sky-500">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-xl font-semibold text-white">Class Overview</h1>
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

      <div className="max-w-[1600px] mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-gray-700">Academic Year*</label>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors min-w-[220px]"
              >
                <Calendar className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-normal flex-1 text-left">{selectedYear}</span>
                <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  {academicYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => {
                        setSelectedYear(year);
                        setIsDropdownOpen(false);
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

          <div className="flex items-center gap-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <span className="text-sm text-gray-700">Include deactivated students in old/new admissions</span>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={includeDeactivated}
                  onChange={(e) => setIncludeDeactivated(e.target.checked)}
                  className="sr-only peer"
                />
                <div className={`w-11 h-6 rounded-full transition-colors ${
                  includeDeactivated ? 'bg-sky-600' : 'bg-gray-300'
                }`}></div>
                <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  includeDeactivated ? 'translate-x-5' : ''
                }`}></div>
              </div>
            </label>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-4 py-3 border-b border-gray-200">
            <p className="text-xs text-red-600">
              *class teacher can be assigned or changed from here itself by double clicking on class teacher cell
            </p>
          </div>

          <div className="bg-sky-600 px-4 py-3 flex items-center gap-4">
            <button className="flex items-center gap-2 px-3 py-1.5 text-white rounded hover:bg-sky-500 transition-colors text-sm font-medium">
              <Columns3 className="w-4 h-4" />
              COLUMNS
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-white rounded hover:bg-sky-500 transition-colors text-sm font-medium">
              <Filter className="w-4 h-4" />
              FILTERS
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-white rounded hover:bg-sky-500 transition-colors text-sm font-medium">
              <Grid3x3 className="w-4 h-4" />
              DENSITY
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-white rounded hover:bg-sky-500 transition-colors text-sm font-medium">
              <Download className="w-4 h-4" />
              EXPORT
            </button>
          </div>

          <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
            <table className="w-full">
              <thead className="bg-sky-600 text-white sticky top-0">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold border-r border-sky-500">
                    Class & Section
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold border-r border-sky-500">
                    Class Teacher
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold border-r border-sky-500">
                    Total Subjects
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold border-r border-sky-500">
                    Time Table Created
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold border-r border-sky-500">
                    Old Admissions
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold border-r border-sky-500">
                    New Admissions
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold border-r border-sky-500">
                    Active Students
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold border-r border-sky-500">
                    Deactivated Students
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Total Students
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {loading ? (
                  <tr>
                    <td colSpan={9} className="px-4 py-8 text-center text-gray-500">
                      Loading...
                    </td>
                  </tr>
                ) : (
                  currentClasses.map((cls, index) => (
                    <tr key={cls.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400 text-sm">{String(startIndex + index + 1).padStart(2, '0')}.</span>
                          <span className="font-semibold text-gray-900">{cls.class_section}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-700">{cls.class_teacher || ''}</td>
                      <td className="px-4 py-3 text-orange-600 font-semibold">{cls.total_subjects}</td>
                      <td className="px-4 py-3">
                        {cls.time_table_created ? (
                          <span className="text-orange-600 font-semibold cursor-pointer hover:underline">View</span>
                        ) : (
                          <span className="text-gray-600">Not Created</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-900">{cls.old_admissions}</td>
                      <td className="px-4 py-3 text-gray-900">{cls.new_admissions}</td>
                      <td className="px-4 py-3 text-orange-600 font-semibold">{cls.active_students}</td>
                      <td className="px-4 py-3 text-orange-600 font-semibold">{cls.deactivated_students}</td>
                      <td className="px-4 py-3 text-orange-600 font-semibold">{cls.total_students}</td>
                    </tr>
                  ))
                )}
              </tbody>

              <tfoot className="bg-gray-100">
                <tr className="font-semibold">
                  <td className="px-4 py-3 text-gray-900">Total</td>
                  <td colSpan={3}></td>
                  <td className="px-4 py-3 text-gray-900">{totals.oldAdmissions}</td>
                  <td className="px-4 py-3 text-gray-900">{totals.newAdmissions}</td>
                  <td className="px-4 py-3 text-gray-900">{totals.activeStudents}</td>
                  <td className="px-4 py-3 text-gray-900">{totals.deactivatedStudents}</td>
                  <td className="px-4 py-3 text-gray-900">{totals.totalStudents}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-end gap-4">
            <span className="text-sm text-gray-600">
              {startIndex + 1}–{endIndex} of {totalItems}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}