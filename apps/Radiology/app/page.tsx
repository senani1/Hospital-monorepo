'use client'

import { Hero } from "@workspace/ui/components/hero"
import { Section } from "@workspace/ui/components/section"
import { RadiologyCard } from "@workspace/ui/components/radiology-card"
import { SearchBar } from "@workspace/ui/components/search-bar"
import { radiologyExams } from "@workspace/ui/components/data/radiology-exams"

export default function RadiologyPage() {
  const criticalExams = radiologyExams.filter((exam) => exam.slots <= exam.minSlots)
  const availableExams = radiologyExams.filter((exam) => exam.slots > exam.minSlots)

  return (
    <div className="min-h-screen">
      <Hero 
        title="Radiology Management" 
        subtitle="Imaging services, scheduling, and diagnostic availability" 
      />

      <Section title="" className="bg-white">
        <SearchBar onSearch={(query) => console.log("Searching exams:", query)} />
      </Section>

      {criticalExams.length > 0 && (
        <Section title="Critical Availability Alert" className="bg-red-50">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {criticalExams.map((exam) => (
              <RadiologyCard key={exam.id} exam={exam} />
            ))}
          </div>
        </Section>
      )}

      <Section title="Available Radiology Exams" className="bg-white">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {availableExams.map((exam) => (
            <RadiologyCard key={exam.id} exam={exam} />
          ))}
        </div>
      </Section>
    </div>
  )
}
