// components/ReportPreview.tsx
'use client'

import React from 'react'
import { Patient, TestResult, DepartmentType } from '@/types'

interface ReportPreviewProps {
  billNumber: string
  patient: Patient
  results: TestResult[]
  onPrint: () => void
}

const ReportPreview: React.FC<ReportPreviewProps> = ({ billNumber, patient, results, onPrint }) => {
  const groupedByDepartment = results.reduce((acc, result) => {
    if (!acc[result.department]) {
      acc[result.department] = []
    }
    acc[result.department].push(result)
    return acc
  }, {} as Record<DepartmentType, TestResult[]>)

  const getDepartmentColor = (department: DepartmentType) => {
    switch(department) {
      case 'Haematology': return 'border-red-200 bg-red-50'
      case 'Biochemistry': return 'border-green-200 bg-green-50'
      case 'Serology': return 'border-blue-200 bg-blue-50'
    }
  }

  const getDepartmentIcon = (department: DepartmentType) => {
    switch(department) {
      case 'Haematology': return '🩸'
      case 'Biochemistry': return '🧪'
      case 'Serology': return '🔬'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 print:shadow-none">
      {/* Header */}
      <div className="border-b-2 border-gray-200 pb-6 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">CITY DIAGNOSTIC CENTER</h1>
            <p className="text-sm text-gray-600 mt-1">123 Healthcare Avenue, Medical District</p>
            <p className="text-sm text-gray-600">Phone: (555) 123-4567 | Email: reports@citydiagnostic.com</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-900">Bill No: {billNumber}</p>
            <p className="text-sm text-gray-600">Date: {new Date().toLocaleDateString()}</p>
            <p className="text-sm text-gray-600">Time: {new Date().toLocaleTimeString()}</p>
          </div>
        </div>
      </div>

      {/* Patient Information */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
        <div>
          <p className="text-xs text-gray-500">Patient Name</p>
          <p className="font-medium">{patient.name || '________________'}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Age / Gender</p>
          <p className="font-medium">{patient.age || '___'} years / {patient.gender || '___'}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Referred By</p>
          <p className="font-medium">{patient.referredBy || '________________'}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Sample Collection</p>
          <p className="font-medium">{new Date().toLocaleString()}</p>
        </div>
      </div>

      {/* Results by Department */}
      {Object.entries(groupedByDepartment).map(([department, tests]) => (
        <div key={department} className={`mb-6 border-2 rounded-lg ${getDepartmentColor(department as DepartmentType)} p-4`}>
          <div className="flex items-center mb-3">
            <span className="text-2xl mr-2">{getDepartmentIcon(department as DepartmentType)}</span>
            <h2 className="text-xl font-semibold text-gray-900 capitalize">{department}</h2>
          </div>
          
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-2 text-left text-sm font-semibold text-gray-700">Test</th>
                <th className="py-2 text-left text-sm font-semibold text-gray-700">Result</th>
                <th className="py-2 text-left text-sm font-semibold text-gray-700">Unit</th>
                <th className="py-2 text-left text-sm font-semibold text-gray-700">Reference Range</th>
                <th className="py-2 text-left text-sm font-semibold text-gray-700">Flag</th>
              </tr>
            </thead>
            <tbody>
              {tests.map((test) => (
                <tr key={test.id} className="border-b border-gray-200">
                  <td className="py-2 text-sm">{test.name}</td>
                  <td className="py-2 text-sm font-medium">{test.value || '___'}</td>
                  <td className="py-2 text-sm text-gray-600">{test.unit}</td>
                  <td className="py-2 text-sm text-gray-600">
                    {test.referenceRange[patient.gender || 'male'].join(' - ')}
                  </td>
                  <td className="py-2">
                    {test.value && (
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold
                        ${test.flag === 'low' ? 'bg-yellow-100 text-yellow-800' : 
                          test.flag === 'high' ? 'bg-red-100 text-red-800' : 
                          'bg-green-100 text-green-800'}`}>
                        {test.flag}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      {/* Interpretation Section */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">Interpretation</h3>
        <p className="text-gray-700">
          {results.filter(r => r.flag !== 'normal').length === 0 
            ? 'All parameters are within normal reference ranges.'
            : 'Some values are outside reference ranges. Please correlate clinically.'}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-gray-200">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-600">Tested By: ________________</p>
            <p className="text-sm text-gray-600 mt-2">Signature: ________________</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Reviewed By: Dr. ________________</p>
            <p className="text-sm text-gray-600 mt-2">(Pathologist)</p>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-4 text-center">
          This is a computer-generated report. Valid only with digital signature.
        </p>
      </div>

      {/* Print Button */}
      <div className="mt-6 flex justify-end no-print">
        <button
          onClick={onPrint}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Print Report
        </button>
      </div>
    </div>
  )
}

export default ReportPreview