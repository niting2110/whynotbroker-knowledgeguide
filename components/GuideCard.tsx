import Link from 'next/link'

export default function GuideCard({ category }: { category: any }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-hover hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 text-4xl">{category.icon}</div>
      <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {category.title}
      </h3>
      <p className="mb-4 font-normal text-gray-500 dark:text-gray-400">
        {category.description}
      </p>
      <ul className="space-y-2">
        {category.links.map((link: any) => (
          <li key={link.href}>
            <Link 
              href={link.href} 
              className="text-primary-600 hover:underline dark:text-primary-400 font-medium"
            >
              {link.title} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
