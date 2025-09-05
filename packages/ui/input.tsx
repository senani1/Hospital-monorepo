import React from "react"

export function Input({ placeholder, onChange }: { placeholder?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className="border px-3 py-2 rounded w-full"
    />
  )
}
