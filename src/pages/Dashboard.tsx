import React from 'react'
import Sidebar from '@/components/dashboard/Sidebar'
import StatCards from '@/components/dashboard/StatCards'
import ChatWindow from '@/components/dashboard/ChatWindow'

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-background text-text">
      {/* Sidebar (handles its own layout inside component) */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 flex flex-col p-4 md:p-8 space-y-6 overflow-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCards />
        </section>

        <section className="flex-1 max-w-5xl">
          <ChatWindow />
        </section>
      </main>
    </div>
  )
}

export default Dashboard