// data/mockData.ts
import { Bill } from '@/types'

export const mockBills: Bill[] = [
  {
    billNumber: '26213682',
    patient: {
      id: 'P001',
      name: 'Rahul Sharma',
      age: 45,
      gender: 'male',
      phone: '9876543210',
      referredBy: 'Dr. Patel'
    },
    date: '2024-01-15T10:30:00',
    services: [
      {
        id: 'h1',
        name: 'Hemoglobin (Hb)',
        nameShort: 'Hb',
        department: 'Haematology',
        unit: 'g/dL',
        referenceRange: { male: [13.5, 17.5], female: [12.0, 16.0] },
        methodology: 'Cyanmethemoglobin Method',
        price: 100
      },
      {
        id: 'h2',
        name: 'Total White Blood Cell Count',
        nameShort: 'WBC',
        department: 'Haematology',
        unit: 'x10³/µL',
        referenceRange: { male: [4.0, 11.0], female: [4.0, 11.0] },
        methodology: 'Impedance Method',
        price: 150
      },
      {
        id: 'h3',
        name: 'Red Blood Cell Count',
        nameShort: 'RBC',
        department: 'Haematology',
        unit: 'x10⁶/µL',
        referenceRange: { male: [4.5, 5.9], female: [4.1, 5.1] },
        methodology: 'Impedance Method',
        price: 120
      },
      {
        id: 'h4',
        name: 'Hematocrit',
        nameShort: 'HCT',
        department: 'Haematology',
        unit: '%',
        referenceRange: { male: [41, 50], female: [36, 48] },
        methodology: 'Calculated',
        price: 80
      },
      {
        id: 'h5',
        name: 'Mean Corpuscular Volume',
        nameShort: 'MCV',
        department: 'Haematology',
        unit: 'fL',
        referenceRange: { male: [80, 100], female: [80, 100] },
        methodology: 'Calculated',
        price: 80
      },
      {
        id: 'h6',
        name: 'Mean Corpuscular Hemoglobin',
        nameShort: 'MCH',
        department: 'Haematology',
        unit: 'pg',
        referenceRange: { male: [27, 34], female: [27, 34] },
        methodology: 'Calculated',
        price: 80
      },
      {
        id: 'h7',
        name: 'Mean Corpuscular Hemoglobin Concentration',
        nameShort: 'MCHC',
        department: 'Haematology',
        unit: 'g/dL',
        referenceRange: { male: [32, 36], female: [32, 36] },
        methodology: 'Calculated',
        price: 80
      },
      {
        id: 'b10',
        name: 'HDL Cholesterol',
        nameShort: 'HDL',
        department: 'Biochemistry',
        unit: 'mg/dL',
        referenceRange: { male: [40, 60], female: [50, 60] },
        methodology: 'Direct Method',
        price: 200
      },
      {
        id: 'b11',
        name: 'LDL Cholesterol',
        nameShort: 'LDL',
        department: 'Biochemistry',
        unit: 'mg/dL',
        referenceRange: { male: [0, 100], female: [0, 100] },
        methodology: 'Friedewald Calculation',
        price: 200
      },
      {
        id: 'b12',
        name: 'VLDL Cholesterol',
        nameShort: 'VLDL',
        department: 'Biochemistry',
        unit: 'mg/dL',
        referenceRange: { male: [0, 30], female: [0, 30] },
        methodology: 'Calculated',
        price: 100
      },
      {
        id: 'b13',
        name: 'SGOT (AST)',
        nameShort: 'AST',
        department: 'Biochemistry',
        unit: 'U/L',
        referenceRange: { male: [10, 40], female: [10, 40] },
        methodology: 'UV Kinetic Method',
        price: 180
      },
    ],
    status: 'pending'
  },
  {
    billNumber: '26213683',
    patient: {
      id: 'P002',
      name: 'Priya Singh',
      age: 32,
      gender: 'female',
      phone: '9876543211',
      referredBy: 'Dr. Gupta'
    },
    date: '2024-01-15T11:45:00',
    services: [
      {
        id: 'h1',
        name: 'Hemoglobin (Hb)',
        nameShort: 'Hb',
        department: 'Haematology',
        unit: 'g/dL',
        referenceRange: { male: [13.5, 17.5], female: [12.0, 16.0] },
        methodology: 'Cyanmethemoglobin Method',
        price: 100
      },
      {
        id: 'h2',
        name: 'Total White Blood Cell Count',
        nameShort: 'WBC',
        department: 'Haematology',
        unit: 'x10³/µL',
        referenceRange: { male: [4.0, 11.0], female: [4.0, 11.0] },
        methodology: 'Impedance Method',
        price: 150
      },
      {
        id: 'h3',
        name: 'Red Blood Cell Count',
        nameShort: 'RBC',
        department: 'Haematology',
        unit: 'x10⁶/µL',
        referenceRange: { male: [4.5, 5.9], female: [4.1, 5.1] },
        methodology: 'Impedance Method',
        price: 120
      },
      {
        id: 'h4',
        name: 'Hematocrit',
        nameShort: 'HCT',
        department: 'Haematology',
        unit: '%',
        referenceRange: { male: [41, 50], female: [36, 48] },
        methodology: 'Calculated',
        price: 80
      },
      {
        id: 'h5',
        name: 'Mean Corpuscular Volume',
        nameShort: 'MCV',
        department: 'Haematology',
        unit: 'fL',
        referenceRange: { male: [80, 100], female: [80, 100] },
        methodology: 'Calculated',
        price: 80
      },
      {
        id: 'h6',
        name: 'Mean Corpuscular Hemoglobin',
        nameShort: 'MCH',
        department: 'Haematology',
        unit: 'pg',
        referenceRange: { male: [27, 34], female: [27, 34] },
        methodology: 'Calculated',
        price: 80
      },
      {
        id: 'h7',
        name: 'Mean Corpuscular Hemoglobin Concentration',
        nameShort: 'MCHC',
        department: 'Haematology',
        unit: 'g/dL',
        referenceRange: { male: [32, 36], female: [32, 36] },
        methodology: 'Calculated',
        price: 80
      },

      {
        id: 'b12',
        name: 'VLDL Cholesterol',
        nameShort: 'VLDL',
        department: 'Biochemistry',
        unit: 'mg/dL',
        referenceRange: { male: [0, 30], female: [0, 30] },
        methodology: 'Calculated',
        price: 100
      },
      {
        id: 'b13',
        name: 'SGOT (AST)',
        nameShort: 'AST',
        department: 'Biochemistry',
        unit: 'U/L',
        referenceRange: { male: [10, 40], female: [10, 40] },
        methodology: 'UV Kinetic Method',
        price: 180
      },
    ],
    status: 'pending'
  },
  {
    billNumber: '26213684',
    patient: {
      id: 'P003',
      name: 'Amit Kumar',
      age: 28,
      gender: 'male',
      phone: '9876543212'
    },
    date: '2024-01-16T09:15:00',
    services: [
      {
        id: 'h1',
        name: 'Hemoglobin (Hb)',
        nameShort: 'Hb',
        department: 'Haematology',
        unit: 'g/dL',
        referenceRange: { male: [13.5, 17.5], female: [12.0, 16.0] },
        methodology: 'Cyanmethemoglobin Method',
        price: 100
      },
      {
        id: 'h2',
        name: 'Total White Blood Cell Count',
        nameShort: 'WBC',
        department: 'Haematology',
        unit: 'x10³/µL',
        referenceRange: { male: [4.0, 11.0], female: [4.0, 11.0] },
        methodology: 'Impedance Method',
        price: 150
      },
      {
        id: 'h3',
        name: 'Red Blood Cell Count',
        nameShort: 'RBC',
        department: 'Haematology',
        unit: 'x10⁶/µL',
        referenceRange: { male: [4.5, 5.9], female: [4.1, 5.1] },
        methodology: 'Impedance Method',
        price: 120
      },
      {
        id: 'h4',
        name: 'Hematocrit',
        nameShort: 'HCT',
        department: 'Haematology',
        unit: '%',
        referenceRange: { male: [41, 50], female: [36, 48] },
        methodology: 'Calculated',
        price: 80
      },
      {
        id: 'h5',
        name: 'Mean Corpuscular Volume',
        nameShort: 'MCV',
        department: 'Haematology',
        unit: 'fL',
        referenceRange: { male: [80, 100], female: [80, 100] },
        methodology: 'Calculated',
        price: 80
      },
      {
        id: 'h6',
        name: 'Mean Corpuscular Hemoglobin',
        nameShort: 'MCH',
        department: 'Haematology',
        unit: 'pg',
        referenceRange: { male: [27, 34], female: [27, 34] },
        methodology: 'Calculated',
        price: 80
      },
      {
        id: 'h7',
        name: 'Mean Corpuscular Hemoglobin Concentration',
        nameShort: 'MCHC',
        department: 'Haematology',
        unit: 'g/dL',
        referenceRange: { male: [32, 36], female: [32, 36] },
        methodology: 'Calculated',
        price: 80
      },
      {
        id: 'b10',
        name: 'HDL Cholesterol',
        nameShort: 'HDL',
        department: 'Biochemistry',
        unit: 'mg/dL',
        referenceRange: { male: [40, 60], female: [50, 60] },
        methodology: 'Direct Method',
        price: 200
      },
      {
        id: 'b11',
        name: 'LDL Cholesterol',
        nameShort: 'LDL',
        department: 'Biochemistry',
        unit: 'mg/dL',
        referenceRange: { male: [0, 100], female: [0, 100] },
        methodology: 'Friedewald Calculation',
        price: 200
      },
      {
        id: 'b12',
        name: 'VLDL Cholesterol',
        nameShort: 'VLDL',
        department: 'Biochemistry',
        unit: 'mg/dL',
        referenceRange: { male: [0, 30], female: [0, 30] },
        methodology: 'Calculated',
        price: 100
      },
    ],
    status: 'completed',
    // results: [
    //   {
    //     id: 'b1',
    //     name: 'Blood Glucose (Fasting)',
    //     unit: 'mg/dL',
    //     referenceRange: { male: [70, 100], female: [70, 100] },
    //     value: '95',
    //     flag: 'normal',
    //     department: 'Biochemistry'
    //   },
    //   {
    //     id: 'b3',
    //     name: 'Creatinine',
    //     unit: 'mg/dL',
    //     referenceRange: { male: [0.7, 1.3], female: [0.6, 1.1] },
    //     value: '1.1',
    //     flag: 'normal',
    //     department: 'Biochemistry'
    //   }
    // ]
  }
]