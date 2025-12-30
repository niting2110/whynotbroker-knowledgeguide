import UtilityBar from './UtilityBar'
import Sidebar from './Sidebar'

export default function KnowledgeShell({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <UtilityBar />

      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
