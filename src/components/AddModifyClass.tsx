import { useState } from 'react';
import {
  Volume2,
  HelpCircle,
  Bell,
  Settings,
  Languages,
  User,
  ChevronDown,
  FileText,
  Plus,
  ArrowUpDown,
  Pencil
} from 'lucide-react';

export default function AddModifyClass() {
  const [classes] = useState([
    { id: 1, name: '1st', sections: ['A'] },
    { id: 2, name: '2nd', sections: ['A'] },
    { id: 3, name: '3rd', sections: ['A'] },
    { id: 4, name: '4th', sections: ['A'] },
    { id: 5, name: '5th', sections: ['A'] },
    { id: 6, name: '6th', sections: ['A'] },
    { id: 7, name: '7th', sections: ['A'] },
    { id: 8, name: '8th', sections: ['A'] },
    { id: 9, name: '9th', sections: ['A'] },
    { id: 10, name: '10th', sections: ['A'] },
  ]);

  // Calculate totals from the table data
  const totalClasses = classes.length;
  const totalSections = classes.reduce((sum, cls) => sum + cls.sections.length, 0);

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Header */}
      <div className="bg-sky-600 border-b border-sky-500">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-xl font-semibold text-white">Add/modify class</h1>
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
        {/* Statistics Cards */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-4">
            <div className="bg-green-600 rounded-lg p-6 flex items-center gap-4 min-w-[180px]">
              <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold">{totalClasses}</div>
                <div className="text-sm">Total Classes</div>
              </div>
            </div>

            <div className="bg-red-600 rounded-lg p-6 flex items-center gap-4 min-w-[180px]">
              <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                <FileText className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold">{totalSections}</div>
                <div className="text-sm">Total Sections</div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors font-medium">
              <Plus className="w-4 h-4" />
              ADD NEW CLASS
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors font-medium">
              <ArrowUpDown className="w-4 h-4" />
              REORDER CLASSES
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
            <table className="w-full">
              <thead className="bg-[#3B82F6] text-white sticky top-0">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold border-r border-[#609AF8] w-20">
                    
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold border-r border-[#609AF8]">
                    CLASS NAME
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold border-r border-[#609AF8]">
                    SECTIONS
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    ACTION
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {classes.map((cls, index) => (
                  <tr key={cls.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="text-gray-400 text-sm">{String(index + 1).padStart(2, '0')}.</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-900 font-medium">{cls.name}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-900">{cls.sections.join(', ')}</span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-orange-500 hover:text-orange-600 transition-colors">
                        <Pencil className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}