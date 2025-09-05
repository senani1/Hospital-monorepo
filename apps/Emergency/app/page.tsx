import { Hero } from "@workspace/ui/components/hero"
import { Section } from "@workspace/ui/components/section"
import { PatientCard } from "@workspace/ui/components/patient-card"
import { ScrollButton } from "@workspace/ui/components/scroll-button"
import { patients } from "@workspace/ui/components/data/patients"


export default function EmergencyPage() {
  const criticalPatients = patients.filter((p) => p.priority === "critical")
  const urgentPatients = patients.filter((p) => p.priority === "urgent")
  const stablePatients = patients.filter((p) => p.priority === "stable")

  return (
    <div className="min-h-screen">
      <Hero title="Emergency Department" subtitle="Real-time patient monitoring and care coordination" />

      <Section title="Critical Patients" className="bg-red-50">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {criticalPatients.map((patient) => (
            <PatientCard key={patient.id} patient={patient} />
          ))}
        </div>
      </Section>

      <Section title="Urgent Patients" className="bg-yellow-50">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {urgentPatients.map((patient) => (
            <PatientCard key={patient.id} patient={patient} />
          ))}
        </div>
      </Section>

      <Section title="Stable Patients" className="bg-green-50">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stablePatients.map((patient) => (
            <PatientCard key={patient.id} patient={patient} />
          ))}
        </div>
      </Section>

      <ScrollButton />
    </div>
  )
}
