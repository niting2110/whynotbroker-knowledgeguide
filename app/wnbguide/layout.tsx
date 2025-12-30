import KnowledgeShell from '@/components/knowledge/Shell'

export default function WNBGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <KnowledgeShell>{children}</KnowledgeShell>
}
