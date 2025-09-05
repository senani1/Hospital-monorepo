"use client"
import { Card } from "../../ui/card"

export function SurgeonCard({ surgeon }: { surgeon: { name: string; specialty: string; experience: number } }) {
  return (
    <Card className="p-4 shadow-md">
      <h3 className="text-lg font-bold">{surgeon.name}</h3>
      <p>Specialty: {surgeon.specialty}</p>
      <p>Experience: {surgeon.experience} years</p>
    </Card>
  )
}