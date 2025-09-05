'use client'
import { Hero } from "@workspace/ui/components/hero"
import { Section } from "@workspace/ui/components/section"
import { MedicineCard } from "@workspace/ui/components/medicine-card"
import { SearchBar } from "@workspace/ui/components/search-bar"
import { medicines } from "@workspace/ui/components/data/medicines"

export default function PharmacyPage() {
  const lowStockMedicines = medicines.filter((m) => m.stock <= m.minStock)
  const availableMedicines = medicines.filter((m) => m.stock > m.minStock)

  return (
    <div className="min-h-screen">
      <Hero title="Pharmacy Management" subtitle="Medicine inventory and prescription tracking" />

      <Section title="" className="bg-white">
     <SearchBar onSearch={(query) => console.log(query)} />
   </Section>

      {lowStockMedicines.length > 0 && (
        <Section title="Low Stock Alert" className="bg-red-50">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {lowStockMedicines.map((medicine) => (
              <MedicineCard key={medicine.id} medicine={medicine} />
            ))}
          </div>
        </Section>
      )}

      <Section title="Available Medicines" className="bg-white">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {availableMedicines.map((medicine) => (
            <MedicineCard key={medicine.id} medicine={medicine} />
          ))}
        </div>
      </Section>
    </div>
  )
}
