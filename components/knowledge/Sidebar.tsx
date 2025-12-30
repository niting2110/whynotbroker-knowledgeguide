import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white p-6 text-sm">
      <nav className="space-y-4">

        <Link href="/wnbguide" className="block font-medium">
          Home
        </Link>

        <div>
          <div className="font-semibold">Buy</div>
          <div className="ml-3 mt-1 space-y-1 text-gray-600">
            <Link href="/wnbguide/buy/resale">Resale</Link>
            <Link href="/wnbguide/buy/new">New Properties</Link>
          </div>
        </div>

        <div>
          <div className="font-semibold">Finance</div>
          <div className="ml-3 mt-1 space-y-1 text-gray-600">
            <Link href="/wnbguide/finance/home-loan">Home Loan</Link>
            <Link href="/wnbguide/finance/plot-loan">Plot / Land Loan</Link>
            <Link href="/wnbguide/finance/commercial-loan">Commercial Loan</Link>
          </div>
        </div>

        <Link href="/wnbguide/legal" className="block font-medium">
          Legal
        </Link>

        <div>
          <div className="font-semibold">WhyNotBroker News</div>
          <div className="ml-3 mt-1 space-y-1 text-gray-600">
            <Link href="/wnbguide/news/reviews">Reviews</Link>
            <Link href="/wnbguide/news/interviews">Interviews</Link>
            <Link href="/wnbguide/news/testimonials">Testimonials</Link>
          </div>
        </div>

      </nav>
    </aside>
  )
}
