import { useState } from 'react';
import {
  Volume2,
  HelpCircle,
  Bell,
  Settings,
  Languages,
  User,
  ChevronDown,
  Search,
  Plus,
  Pencil,
  Trash2,
  GripVertical
} from 'lucide-react';

export default function AddModifySubjects() {
  const [selectedClass, setSelectedClass] = useState('1st');
  const [selectedSubjectType, setSelectedSubjectType] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  
  const [subjects] = useState([
    { id: 1, name: 'English', code: '', description: '', type: 'Scholastic', mandatory: 'Mandatory' },
    { id: 2, name: 'Maths', code: '', description: '', type: 'Scholastic', mandatory: 'Mandatory' },
    { id: 3, name: 'Hindi', code: '', description: '', type: 'Scholastic', mandatory: 'Mandatory' },
    { id: 4, name: 'EVS', code: '', description: '', type: 'Scholastic', mandatory: 'Mandatory' },
    { id: 5, name: 'GK', code: '', description: '', type: 'Scholastic', mandatory: 'Mandatory' },
    { id: 6, name: 'COMPUTER', code: '', description: '', type: 'Scholastic', mandatory: 'Mandatory' },
    { id: 7, name: 'Work Education', code: '', description: '', type: 'Co Scholastic', mandatory: 'Mandatory' },
    { id: 8, name: 'Health & Physical Education', code: '', description: '', type: 'Co Scholastic', mandatory: 'Mandatory' },
  ]);

  // Calculate statistics
  const scholasticSubjects = subjects.filter(s => s.type === 'Scholastic');
  const coScholasticSubjects = subjects.filter(s => s.type === 'Co Scholastic');
  
  const scholasticMandatory = scholasticSubjects.filter(s => s.mandatory === 'Mandatory').length;
  const scholasticElective = scholasticSubjects.filter(s => s.mandatory === 'Elective').length;
  
  const coScholasticMandatory = coScholasticSubjects.filter(s => s.mandatory === 'Mandatory').length;
  const coScholasticElective = coScholasticSubjects.filter(s => s.mandatory === 'Elective').length;

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Header */}
      <div className="bg-sky-600 border-b border-sky-500">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-xl font-semibold text-white">Add/ modify subjects</h1>
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
        {/* Filter Dropdowns */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Class</label>
            <div className="relative">
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md appearance-none text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-600"
              >
                <option>1st</option>
                <option>2nd</option>
                <option>3rd</option>
                <option>4th</option>
                <option>5th</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Subject Type</label>
            <div className="relative">
              <select
                value={selectedSubjectType}
                onChange={(e) => setSelectedSubjectType(e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md appearance-none text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-600"
              >
                <option value=""></option>
                <option>Scholastic</option>
                <option>Co Scholastic</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Subject/ Course</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-600"
                placeholder="Search..."
              />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="flex gap-4 mb-6">
          <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-lg p-6 flex items-center justify-between min-w-[250px]">
            <div className="text-white">
              <div className="text-4xl font-bold mb-1">{subjects.length}</div>
              <div className="text-sm">Total Subjects</div>
            </div>
            <div className="text-white text-sm">
              <div>Mandatory : {scholasticMandatory + coScholasticMandatory}</div>
              <div>Elective : {scholasticElective + coScholasticElective}</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-700 to-purple-600 rounded-lg p-6 flex items-center justify-between min-w-[250px]">
            <div className="text-white">
              <div className="text-4xl font-bold mb-1">{coScholasticSubjects.length}</div>
              <div className="text-sm">Co Scholastic</div>
            </div>
            <div className="text-white text-sm">
              <div>Mandatory : {coScholasticMandatory}</div>
              <div>Elective : {coScholasticElective}</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-700 to-indigo-600 rounded-lg p-6 flex items-center justify-between min-w-[250px]">
            <div className="text-white">
              <div className="text-4xl font-bold mb-1">{scholasticSubjects.length}</div>
              <div className="text-sm">Scholastic</div>
            </div>
            <div className="text-white text-sm">
              <div>Mandatory : {scholasticMandatory}</div>
              <div>Elective : {scholasticElective}</div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Class {selectedClass} Subjects list -</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors font-medium">
              <Plus className="w-4 h-4" />
              ADD NEW SUBJECT
            </button>
          </div>

          <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
            <table className="w-full">
              <thead className="bg-sky-600 text-white sticky top-0">
                <tr>
                  <th className="px-4 py-4 text-left text-sm font-semibold border-r border-sky-500 w-16"></th>
                  <th className="px-4 py-4 text-left text-sm font-semibold border-r border-sky-500">
                    Subject Name
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold border-r border-sky-500">
                    Subject Code
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold border-r border-sky-500">
                    Description
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold border-r border-sky-500">
                    Type
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold border-r border-sky-500">
                    Mandatory/Elective
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {subjects.map((subject, index) => (
                  <tr key={subject.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <GripVertical className="w-4 h-4 text-gray-400 cursor-move" />
                        <span className="text-gray-400 text-sm">{String(index + 1).padStart(2, '0')}.</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-gray-900">{subject.name}</td>
                    <td className="px-4 py-4 text-gray-700">{subject.code}</td>
                    <td className="px-4 py-4 text-gray-700">{subject.description}</td>
                    <td className="px-4 py-4 text-gray-900">{subject.type}</td>
                    <td className="px-4 py-4 text-gray-900">{subject.mandatory}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <button className="text-orange-500 hover:text-orange-600 transition-colors">
                          <Pencil className="w-5 h-5" />
                        </button>
                        <button className="text-orange-500 hover:text-orange-600 transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
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