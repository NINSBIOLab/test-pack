// components/BloodReportSystem.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { mockBills } from '@/data/mockData'
import FloatingLoader from '../Loader/FloatingLoader'
import { Bill, TestDefinition } from '@/types'

const BloodReportSystem: React.FC = () => {
  const [billNumber, setBillNumber] = useState('')
  const [currentBill, setCurrentBill] = useState<Bill | null>(null)
  // const [testResults, setTestResults] = useState<any>()
  const [loading, setLoading] = useState(false)
  const [savedBills, setSavedBills] = useState<Bill[]>(mockBills)
  const [departmentFilter, setDepartmentFilter] = useState<string>("haematology")
  const dept = ["haematology", "biochemistry", "serology"]
  const [filteredBills, setFilteredBills] = useState<TestDefinition[]>([])

  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingMessage, setLoadingMessage] = useState('')

  // Fetch bill data when bill number changes
  useEffect(() => {
    if (billNumber.length == 8) {
      fetchBillData(billNumber)
    } else {
      setCurrentBill(null)
      // setTestResults([])
    }
  }, [billNumber, departmentFilter])

  const fetchBillData = (billNo: string) => {
    setLoading(true)
    setLoadingMessage('Fetching patient records...')
    setLoadingProgress(0)

    // Simulate API call - replace with actual API call
    setTimeout(() => {
      const foundBill = savedBills.find(b => b.billNumber === billNo)

      if (foundBill) {
        setCurrentBill(foundBill)
        // Initialize test results with empty values based on services
        // console.log(foundBill);
        const initializedTests = foundBill.services.filter(service => service.department == departmentFilter)
        setFilteredBills(initializedTests)
        // setTestResults(initializedTests)
      } else {
        setCurrentBill(null)
        // setTestResults([])
      }
      setLoading(false)
    }, 100)
  }

  // Update test value
  // const updateTestValue = (testId: string, value: string) => {
  //   setTestResults(prev => prev.map(test => {
  //     if (test.id === testId) {
  //       const numValue = parseFloat(value)
  //       let flag: 'low' | 'normal' | 'high' = 'normal'

  //       if (!isNaN(numValue) && currentBill?.patient.gender) {
  //         const range = test.referenceRange[currentBill.patient.gender]
  //         if (numValue < range[0]) flag = 'low'
  //         else if (numValue > range[1]) flag = 'high'
  //       }

  //       return { ...test, value, flag }
  //     }
  //     return test
  //   }))
  // }


  // // Group tests by department
  // const testsByDepartment = testResults.reduce((acc, test) => {
  //   if (!acc[test.department]) {
  //     acc[test.department] = []
  //   }
  //   acc[test.department].push(test)
  //   return acc
  // }, {} as Record<DepartmentType, TestResult[]>)

  const penfdingBills = ["26213682", "26213683", "26213684", "26213685", "26213686", "26213687", "26213688", "26213689"]

  return (
    <div className="max-w-[1600px] mx-auto p-2">
      {/* Bill Search */}
      <div className="bg-white rounded-lg shadow-lg p-2 mb-2">
        <div className="bg-white rounded-lg p-2 mb-1">
          <div className="flex items-center gap-4 overflow-x-auto">
            <span className="text-sm font-medium text-gray-600">Recent Bills:</span>
            {savedBills.slice(0, 8).map((bill) => (
              <button
                key={bill.billNumber}
                onClick={() => setBillNumber(bill.billNumber)}
                className={`px-3 py-1 rounded-full text-sm whitespace-nowrap
                ${bill.status === 'completed'
                    ? 'bg-green-100 text-green-800 hover:bg-green-200'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                {bill.billNumber} - {bill.patient.name}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="grid grid-cols-2 gap-4 border border-purple-400 rounded-lg p-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter Bill / OP Number
              </label>
              <input
                type="number"
                value={billNumber}
                onChange={(e) => setBillNumber(e.target.value)}
                className="w-full p-1 px-2 border border-gray-300 rounded-md text-lg"
                placeholder="e.g., 26000001"
                autoFocus
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Service/Test Department
              </label>
              <select
                onChange={(e) => setDepartmentFilter(e.currentTarget.value)}
                className="w-full mt-1 p-1 px-2 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                {
                  dept.map((dep, idx) => (
                    <option key={idx} value={dep}>
                      {dep}
                    </option>
                  ))
                }
              </select>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg border border-purple-400  p-3">
            <h3 className="font-semibold text-gray-800 mb-2 pb-2 border-b flex justify-between">
              <span>Patient Details</span>
              <span className={`text-xs px-2 p-1 rounded ${currentBill?.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                {currentBill?.status || 'pending'}
              </span>
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-gray-500">Patient Name</label>
                <p className="font-medium">{currentBill?.patient.name}</p>
              </div>
              <div>
                <label className="text-xs text-gray-500">Age / Gender</label>
                <p className="font-medium">{currentBill?.patient.age}y / {currentBill?.patient.gender}</p>
              </div>
              <div>
                <label className="text-xs text-gray-500">Phone</label>
                <p className="font-medium">{currentBill?.patient.phone || 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>
        {loading && (
          <FloatingLoader
            isLoading={loading}
            type="fullscreen"
            message={loadingMessage}
            progress={loadingProgress}

          />
        )}
      </div>


      <div className="bg-white grid grid-cols-6 gap-4 p-2">
        {/* pending service id */}
        <div className="rounded-lg shadow-lg border border-purple-400 rounded-lg p-3">
          <h3 className="font-semibold text-gray-800 mb-3  border-b">
            Pending Services
          </h3>

          {
            penfdingBills.map((billNo) => (
              <p
                onClick={() => setBillNumber(billNo)}
                key={billNo} className="mb-2 text-gray-600 cursor-pointer hover:bg-gray-100 rounded bg-amber-100 text-center">
                {billNo}
              </p>
            ))
          }
        </div>

        {/* data input section */}
        <div className="col-span-5 border border-purple-400 rounded-lg p-3 shadow-lg">
          {/* Main Content - Only shown if bill found */}
          {currentBill ? (
            <div >
              {filteredBills && filteredBills.length > 0 ? (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <table className='w-full'>
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredBills.map((test: any) => (
                        <tr key={test.id} className="hover:bg-gray-50/80 transition-colors">
                          <td className="px-6 py-4">
                            <div>
                              <div className="font-medium text-gray-800">{test.name}</div>
                              <div className="text-xs text-gray-400">{test.nameShort}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{test.unit}</td>
                          <td className="px-6 py-4">
                            <input
                              type="number"
                              name={test.nameShort}
                              placeholder="0.00"
                              className="w-28 px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                            />
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-gray-600">{test.referenceRange.male}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100">
                    <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors">
                      Save Results
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
                  <p className="text-gray-500">No tests available</p>
                </div>
              )}
            </div>
          ) : billNumber && !loading && (
            <div className="bg-white rounded-lg shadow-lg p-12 text-center">
              <p className="text-gray-500 text-lg">No bill found with number: {billNumber}</p>
              <p className="text-sm text-gray-400 mt-2">Please check the bill number and try again</p>
            </div>
          )}
        </div>
      </div>


      {/* Recent Bills */}

    </div >
  )
}

export default BloodReportSystem