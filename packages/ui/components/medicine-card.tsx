"use client"
import { Card } from "../../ui/card"

interface Medicine {
  id: number
  name: string
  type: string
  dosage: string
  form: string
  frequency: string
  stock: number
  minStock: number
}

export function MedicineCard({ medicine }: { medicine: Medicine }) {
  return (
    <Card className="p-4 shadow-md">
      <h3 className="text-lg font-bold">{medicine.name}</h3>
      <p>Type: {medicine.type}</p>
      <p>Dosage: {medicine.dosage}</p>
      <p>Form: {medicine.form}</p>
      <p>Frequency: {medicine.frequency}</p>
      <p>Stock: {medicine.stock}</p>
      <p>Minimum Stock: {medicine.minStock}</p>
    </Card>
  )
}
