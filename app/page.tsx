import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <Image
          src="/images/logo.png"
          alt="Easy Air Screen Logo"
          width={80}
          height={80}
          className="rounded-lg"
        />
        <div>
          <h1 className="text-2xl font-semibold tracking-tighter">
            Easy Air Screen
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Turn your tablet into a wireless second monitor
          </p>
        </div>
      </div>

      <div className="my-8">
        <p className="mb-6 text-neutral-700 dark:text-neutral-300">
          Transform your Android tablet into a high-quality wireless display for Windows and macOS.
          Expand your workspace and boost productivity—no cables needed.
        </p>
      </div>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">Download Desktop App</h2>
        <div className="flex flex-col gap-4">
          <a
            href="/downloads/EasyAirScreen.dmg"
            className="inline-flex items-center justify-center rounded-md bg-neutral-900 dark:bg-neutral-100 px-6 py-3 text-sm font-medium text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors w-fit"
            download
          >
            Download for macOS
          </a>
          <a
            href="/downloads/EasyAirScreen.exe"
            className="inline-flex items-center justify-center rounded-md bg-neutral-900 dark:bg-neutral-100 px-6 py-3 text-sm font-medium text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors w-fit"
            download
          >
            Download for Windows
          </a>
        </div>
      </div>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">Quick Setup</h2>
        <ol className="list-decimal list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
          <li>Install Easy Air Screen on your Android tablet</li>
          <li>Download and install the desktop app for Windows or macOS</li>
          <li>Connect both devices to the same Wi-Fi network</li>
          <li>Launch and connect!</li>
        </ol>
      </div>

      <div className="my-8 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">💡 Performance Tip</h3>
        <p className="text-sm text-blue-800 dark:text-blue-200">
          For the best experience with minimal lag, use a 5GHz Wi-Fi connection on both devices.
          If you notice latency, try lowering the resolution in the app settings.
        </p>
      </div>
    </section>
  )
}
