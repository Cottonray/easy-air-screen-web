export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Easy Air Screen',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Privacy Policy</h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p className="mb-4">
          <strong>Last Updated: December 22, 2025</strong>
        </p>

        <h2 className="text-xl font-semibold mb-3 mt-6">Information Collection</h2>
        <p className="mb-4">
          Easy Air Screen does not collect, store, or transmit any personal information or user data.
          The application operates entirely on your local device.
        </p>

        <h2 className="text-xl font-semibold mb-3 mt-6">Data Processing</h2>
        <p className="mb-4">
          All screen mirroring operations are performed locally on your device. No data is sent to
          external servers or third parties. The connection between your iOS device and computer
          remains on your local network.
        </p>

        <h2 className="text-xl font-semibold mb-3 mt-6">Analytics and Tracking</h2>
        <p className="mb-4">
          We do not use any analytics services, tracking tools, or third-party services that collect
          user information. Your usage of the application is completely private.
        </p>

        <h2 className="text-xl font-semibold mb-3 mt-6">Network Communication</h2>
        <p className="mb-4">
          The application only communicates with your iOS device on the local network for screen
          mirroring purposes. No internet connection is required for core functionality, and no
          data leaves your local network.
        </p>

        <h2 className="text-xl font-semibold mb-3 mt-6">Updates and Changes</h2>
        <p className="mb-4">
          The application may check for updates, but this does not involve sending any personal
          information. Any future changes to this privacy policy will be reflected on this page.
        </p>

        <h2 className="text-xl font-semibold mb-3 mt-6">Children's Privacy</h2>
        <p className="mb-4">
          Our application does not collect any information from anyone, including children under
          the age of 13.
        </p>

        <h2 className="text-xl font-semibold mb-3 mt-6">Your Rights</h2>
        <p className="mb-4">
          Since we do not collect any personal data, there is no data to access, modify, or delete.
          You maintain complete control over your device and any content displayed through the application.
        </p>

        <h2 className="text-xl font-semibold mb-3 mt-6">Contact</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="mb-4">
          Email: <a href="mailto:somnal.kor@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">somnal.kor@gmail.com</a>
        </p>

        <div className="mt-8 p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md">
          <p className="text-sm">
            <strong>Summary:</strong> Easy Air Screen is committed to protecting your privacy.
            We do not collect, store, or share any of your personal information. Your screen
            mirroring sessions are completely private and local to your device.
          </p>
        </div>
      </div>
    </section>
  )
}
