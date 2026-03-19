// components/TestEntry.tsx
'use client'

import { departmentTests } from "@/data/departmentTests"
import { DepartmentType, Patient, TestResult } from "@/types"
import { useState } from "react"

 
interface TestEntryProps {
  department: DepartmentType
  billNumber: string
  patient: Patient 
  onSubmit: (results: TestResult[], patient: Patient) => void
  onCancel: () => void
  existingTests: TestResult[]
}

const TestEntry: React.FC<TestEntryProps> = ({
  department,
  billNumber,
  patient,
  onSubmit,
  onCancel,
  existingTests
}) => {
  const [patientInfo, setPatientInfo] = useState<Partial<Patient>>(
    patient || {
      name: '',
      age: 0,
      gender: 'male',
      phone: '',
      referredBy: ''
    }
  )

  const [results, setResults] = useState<TestResult[]>(
    existingTests.length > 0 
      ? existingTests 
      : departmentTests[department].map(test => ({
          ...test,
          value: '',
          flag: 'normal',
          department
        }))
  )

  const handlePatientChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setPatientInfo(prev => ({
      ...prev,
      [name]: name === 'age' ? parseInt(value) || 0 : value
    }))
  }

  const handleTestValueChange = (index: number, value: string) => {
    const updatedResults = [...results]
    updatedResults[index].value = value
    
    // Calculate flag if value is numeric
    if (value && !isNaN(parseFloat(value))) {
      const numValue = parseFloat(value)
      const test = updatedResults[index]
      const range = test.referenceRange[patientInfo.gender || 'male']
      
      if (numValue < range[0]) {
        updatedResults[index].flag = 'low'
      } else if (numValue > range[1]) {
        updatedResults[index].flag = 'high'
      } else {
        updatedResults[index].flag = 'normal'
      }
    }
    
    setResults(updatedResults)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate patient info
    if (!patientInfo.name || !patientInfo.age || !patientInfo.gender) {
      alert('Please complete patient information')
      return
    }

    // Validate that at least some tests have values
    const hasValues = results.some(r => r.value && r.value.toString().trim() !== '')
    if (!hasValues) {
      alert('Please enter at least one test result')
      return
    }

    onSubmit(
      results.filter(r => r.value && r.value.toString().trim() !== ''),
      patientInfo as Patient
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          {departmentTests[department].name} - Test Entry
        </h2>
        <button
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700"
        >
          ← Change Department
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Patient Information Section */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Patient Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Patient Name *
              </label>
              <input
                type="text"
                name="name"
                value={patientInfo.name}
                onChange={handlePatientChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Age *
              </label>
              <input
                type="number"
                name="age"
                value={patientInfo.age}
                onChange={handlePatientChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
                min="0"
                max="150"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender *
              </label>
              <select
                name="gender"
                value={patientInfo.gender}
                onChange={handlePatientChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Referred By
              </label>
              <input
                type="text"
                name="referredBy"
                value={patientInfo.referredBy}
                onChange={handlePatientChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Doctor name"
              />
            </div>
          </div>
        </div>

        {/* Test Results Section */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Test Results</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Test Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Result</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Unit</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reference Range</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Flag</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {results.map((test, index) => (
                  <tr key={test.id}>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      {test.name}
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={test.value}
                        onChange={(e) => handleTestValueChange(index, e.target.value)}
                        className="w-24 px-2 py-1 border border-gray-300 rounded-md"
                        placeholder="Value"
                      />
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      {test.unit}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      {test.referenceRange[patientInfo.gender || 'male'].join(' - ')}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold
                        ${test.flag === 'low' ? 'bg-yellow-100 text-yellow-800' : 
                          test.flag === 'high' ? 'bg-red-100 text-red-800' : 
                          'bg-green-100 text-green-800'}`}>
                        {test.flag.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Save {departmentTests[department].name} Results
          </button>
        </div>
      </form>
    </div>
  )
}

export default TestEntry
