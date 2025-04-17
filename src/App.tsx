export default function App() {
  return (
    <main className="min-h-screen bg-surface text-text p-8 space-y-6">
      <h1 className="text-h1 font-bold">Design System Preview</h1>

      <div className="p-6 rounded-2xl bg-primary text-surface shadow-md">
        <h2 className="text-h2 mb-2">Hello, PE Agents 👋</h2>
        <p className="text-body">
          If you're seeing this, your design tokens are wired and Tailwind is working.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-secondary rounded-md">Secondary</div>
        <div className="p-4 bg-success rounded-md text-white">Success</div>
        <div className="p-4 bg-warning rounded-md text-white">Warning</div>
        <div className="p-4 bg-surface border rounded-md">Surface</div>
      </div>
    </main>
  );
}
