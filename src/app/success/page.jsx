export default function SuccessPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-semibold mb-4">Order Confirmed 🎉</h1>

      <p className="text-neutral-500 mb-8">
        Your takeaway is being freshly prepared.
      </p>

      <a href="/menu" className="border rounded-full px-6 py-3">
        Back to Menu
      </a>
    </main>
  );
}
