// data/departmentTests.ts
import { DepartmentType } from '@/types'

export const departmentTests: Record<DepartmentType, { 
  name: string
  tests: {
    id: string
    name: string
    unit: string
    referenceRange: {
      male: [number, number]
      female: [number, number]
    }
  }[]
}> = {
  haematology: {
    name: 'Haematology',
    tests: [
      {
        id: 'h1',
        name: 'Hemoglobin (Hb)',
        unit: 'g/dL',
        referenceRange: { male: [13.5, 17.5], female: [12.0, 16.0] }
      },
      {
        id: 'h2',
        name: 'Total WBC Count',
        unit: 'x10³/µL',
        referenceRange: { male: [4.0, 11.0], female: [4.0, 11.0] }
      },
      {
        id: 'h3',
        name: 'RBC Count',
        unit: 'x10⁶/µL',
        referenceRange: { male: [4.5, 5.9], female: [4.1, 5.1] }
      },
      {
        id: 'h4',
        name: 'Hematocrit (HCT)',
        unit: '%',
        referenceRange: { male: [41, 50], female: [36, 48] }
      },
      {
        id: 'h5',
        name: 'MCV',
        unit: 'fL',
        referenceRange: { male: [80, 100], female: [80, 100] }
      },
      {
        id: 'h6',
        name: 'Platelet Count',
        unit: 'x10³/µL',
        referenceRange: { male: [150, 450], female: [150, 450] }
      },
      {
        id: 'h7',
        name: 'Neutrophils',
        unit: '%',
        referenceRange: { male: [40, 80], female: [40, 80] }
      },
      {
        id: 'h8',
        name: 'Lymphocytes',
        unit: '%',
        referenceRange: { male: [20, 40], female: [20, 40] }
      }
    ]
  },
  biochemistry: {
    name: 'Biochemistry',
    tests: [
      {
        id: 'b1',
        name: 'Blood Glucose (Fasting)',
        unit: 'mg/dL',
        referenceRange: { male: [70, 100], female: [70, 100] }
      },
      {
        id: 'b2',
        name: 'Blood Glucose (Random)',
        unit: 'mg/dL',
        referenceRange: { male: [70, 140], female: [70, 140] }
      },
      {
        id: 'b3',
        name: 'Creatinine',
        unit: 'mg/dL',
        referenceRange: { male: [0.7, 1.3], female: [0.6, 1.1] }
      },
      {
        id: 'b4',
        name: 'Blood Urea Nitrogen (BUN)',
        unit: 'mg/dL',
        referenceRange: { male: [7, 20], female: [7, 20] }
      },
      {
        id: 'b5',
        name: 'Uric Acid',
        unit: 'mg/dL',
        referenceRange: { male: [3.5, 7.2], female: [2.6, 6.0] }
      },
      {
        id: 'b6',
        name: 'Total Cholesterol',
        unit: 'mg/dL',
        referenceRange: { male: [125, 200], female: [125, 200] }
      },
      {
        id: 'b7',
        name: 'Triglycerides',
        unit: 'mg/dL',
        referenceRange: { male: [0, 150], female: [0, 150] }
      },
      {
        id: 'b8',
        name: 'HDL Cholesterol',
        unit: 'mg/dL',
        referenceRange: { male: [40, 60], female: [50, 60] }
      },
      {
        id: 'b9',
        name: 'LDL Cholesterol',
        unit: 'mg/dL',
        referenceRange: { male: [0, 100], female: [0, 100] }
      },
      {
        id: 'b10',
        name: 'SGOT (AST)',
        unit: 'U/L',
        referenceRange: { male: [10, 40], female: [10, 40] }
      },
      {
        id: 'b11',
        name: 'SGPT (ALT)',
        unit: 'U/L',
        referenceRange: { male: [10, 40], female: [10, 40] }
      }
    ]
  },
  serology: {
    name: 'Serology',
    tests: [
      {
        id: 's1',
        name: 'TSH',
        unit: 'µIU/mL',
        referenceRange: { male: [0.4, 4.0], female: [0.4, 4.0] }
      },
      {
        id: 's2',
        name: 'T3',
        unit: 'ng/dL',
        referenceRange: { male: [80, 200], female: [80, 200] }
      },
      {
        id: 's3',
        name: 'T4',
        unit: 'µg/dL',
        referenceRange: { male: [5.0, 12.0], female: [5.0, 12.0] }
      },
      {
        id: 's4',
        name: 'Vitamin B12',
        unit: 'pg/mL',
        referenceRange: { male: [200, 900], female: [200, 900] }
      },
      {
        id: 's5',
        name: 'Vitamin D',
        unit: 'ng/mL',
        referenceRange: { male: [30, 100], female: [30, 100] }
      },
      {
        id: 's6',
        name: 'Ferritin',
        unit: 'ng/mL',
        referenceRange: { male: [24, 336], female: [11, 307] }
      },
      {
        id: 's7',
        name: 'CRP',
        unit: 'mg/L',
        referenceRange: { male: [0, 5], female: [0, 5] }
      }
    ]
  }
}