export default function UtilityBar() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-3">
      <div className="text-lg font-semibold">
        WhyNotBroker
      </div>

      <div className="flex items-center gap-4 text-sm">
        <button className="text-gray-600 hover:text-black">
          Sign In
        </button>
        <button className="rounded bg-black px-4 py-1.5 text-white">
          Sign Up
        </button>
      </div>
    </header>
  )
}
