import { Hero } from "@workspace/ui/components/hero"
import { Section } from "@workspace/ui/components/section"
import { SurgeonCard } from "@workspace/ui/components/surgeon-card"
import { ScheduleButton } from "@workspace/ui/components/schedule-button"
import { surgeons } from "@workspace/ui/components/data/surgeons"

export default function SurgeryPage() {
  const availableSurgeons = surgeons.filter((s) => s.availability === "available")
  const busySurgeons = surgeons.filter((s) => s.availability === "busy")
  const offDutySurgeons = surgeons.filter((s) => s.availability === "off-duty")

  return (
    <div className="min-h-screen">
      <Hero title="Surgery Department" subtitle="Surgeon scheduling and procedure management" />

      <Section title="" className="bg-white">
  <div className="flex justify-center">
    <ScheduleButton />
  </div>
</Section>
      <Section title="Available Surgeons" className="bg-green-50">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {availableSurgeons.map((surgeon) => (
            <SurgeonCard key={surgeon.id} surgeon={surgeon} />
          ))}
        </div>
      </Section>

      <Section title="Currently in Surgery" className="bg-blue-50">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {busySurgeons.map((surgeon) => (
            <SurgeonCard key={surgeon.id} surgeon={surgeon} />
          ))}
        </div>
      </Section>

      <Section title="Off Duty" className="bg-gray-50">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {offDutySurgeons.map((surgeon) => (
            <SurgeonCard key={surgeon.id} surgeon={surgeon} />
          ))}
        </div>
      </Section>
    </div>
  )
}
