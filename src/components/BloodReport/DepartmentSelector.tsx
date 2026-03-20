// components/DepartmentSelector.tsx
'use client'

import { DepartmentType } from '@/types'
import React from 'react' 

interface DepartmentSelectorProps {
  onSelect: (department: DepartmentType) => void
}

const DepartmentSelector: React.FC<DepartmentSelectorProps> = ({ onSelect }) => {
  const departments: { type: DepartmentType; name: string; description: string; icon: string }[] = [
    {
      type: 'Haematology',
      name: 'Haematology',
      description: 'Complete blood count, coagulation studies, peripheral smear',
      icon: '🩸'
    },
    {
      type: 'Biochemistry',
      name: 'Biochemistry',
      description: 'Liver function, kidney function, lipid profile, blood glucose',
      icon: '🧪'
    },
    {
      type: 'Serology',
      name: 'Serology',
      description: 'Immunology, hormones, tumor markers, infectious diseases',
      icon: '🔬'
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Select Department</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <button
            key={dept.type}
            onClick={() => onSelect(dept.type)}
            className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all text-left group"
          >
            <div className="text-4xl mb-4">{dept.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
              {dept.name}
            </h3>
            <p className="text-gray-600 text-sm">{dept.description}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default DepartmentSelector