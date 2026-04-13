import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">DK-HQ</h1>
        <p className="text-xl text-gray-600 mb-8">
          Unified Audit Automation Platform for UK Accountants
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">ISA (UK) Compliant</h3>
            <p className="text-sm text-gray-500">Full compliance with UK auditing standards</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">AI-Powered</h3>
            <p className="text-sm text-gray-500">Risk assessment & document analysis</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">Integrated</h3>
            <p className="text-sm text-gray-500">Xero, QuickBooks, Companies House</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Link
            href="/login"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-6 py-3 border border-black rounded-lg hover:bg-gray-50 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
