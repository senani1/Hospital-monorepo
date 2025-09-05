"use client"
import { Card } from "../../ui/card"
export function PatientCard({ patient }: { patient: { name: string; condition: string; arrivalTime: string } }) {
  return (
    <Card className="p-4 shadow-md">
      <h3 className="text-lg font-bold">{patient.name}</h3>
      <p>Condition: {patient.condition}</p>
      <p>Arrival: {patient.arrivalTime}</p>
    </Card>
  )
}