// types/index.ts
export type DepartmentType = 'haematology' | 'biochemistry' | 'serology'
export type ReportStatus = 'pending' | 'completed' | 'verified'

export interface Patient {
  id: string
  name: string
  age: number
  gender: 'male' | 'female'
  phone?: string
  referredBy?: string
}

export interface TestDefinition {
  id: string
  name: string
  unit: string
  nameShort: string
  methodology: string
  department: DepartmentType
  price: number
  referenceRange: {
    male: [number, number]
    female: [number, number]
  }
}



export interface TestResult extends TestDefinition {
  value: string
  flag: 'low' | 'normal' | 'high'
  department: DepartmentType
}

export interface Bill {
  billNumber: string
  patient: Patient
  date: string
  services: TestDefinition[]
  results?: TestResult[]
  status: ReportStatus
  lastUpdated?: string
}