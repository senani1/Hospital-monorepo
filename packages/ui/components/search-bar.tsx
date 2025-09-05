'use client'
import { Input } from "../../ui/input"
export function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  return <Input placeholder="Search medicines..." onChange={e => onSearch(e.target.value)} />
}
