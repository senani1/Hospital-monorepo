import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeSwitcher } from "feature-y"

export const metadata: Metadata = {
  title: "Firaiol System",
  description: "A Next.js application using shared components from the monorepo",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <header className="bg-white dark:bg-gray-800 shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Leti's System</h1>
              <ThemeSwitcher />
            </div>
          </header>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">{children}</main>
        </div>
      </body>
    </html>
  )
}
