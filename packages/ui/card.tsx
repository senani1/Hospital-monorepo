import React from "react"

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-white rounded shadow ${className}`}>{children}</div>
}
