export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Easy Air Screen
      </h1>
      <p className="mb-4">
        Screen mirroring solution for iOS devices
      </p>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">Download</h2>
        <div className="flex flex-col gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-neutral-900 dark:bg-neutral-100 px-6 py-3 text-sm font-medium text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors w-fit"
          >
            Download for macOS
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-neutral-900 dark:bg-neutral-100 px-6 py-3 text-sm font-medium text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors w-fit"
          >
            Download for Windows
          </a>
        </div>
      </div>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Wireless screen mirroring from iOS devices</li>
          <li>Low latency streaming</li>
          <li>Simple and intuitive interface</li>
          <li>No data collection</li>
        </ul>
      </div>
    </section>
  )
}
