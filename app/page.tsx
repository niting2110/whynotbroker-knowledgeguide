import { guideCategories } from '@/data/guideData'
import GuideCard from '@/components/GuideCard'

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          WNB Knowledge Center
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          The official guide for the WhyNotBroker PAN India Network.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {guideCategories.map((category) => (
          <GuideCard key={category.title} category={category} />
        ))}
      </div>
    </div>
  )
}
