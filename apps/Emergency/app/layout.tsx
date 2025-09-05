import type React from "react"
import type { Metadata } from "next"
import "@workspace/ui/styles/index.css"
import "./globals.css"

export const metadata: Metadata = {
  title: "Emergency Department - Hospital Management",
  description: "Emergency department patient management system",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <h1 className="text-2xl font-bold text-gray-900">Emergency Department</h1>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Dr. Sarah Johnson</span>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  SJ
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
