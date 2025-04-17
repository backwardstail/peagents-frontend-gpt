import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-background text-text">
      {/* Sidebar */}
      <aside className="w-64 bg-surface p-4 border-r">
        <h2 className="text-h3 font-bold mb-4">PE Agents</h2>
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">Dashboard</Button>
          <Button variant="ghost" className="w-full justify-start">Deal Generator</Button>
          <Button variant="ghost" className="w-full justify-start">ARR Analyzer</Button>
          <Button variant="ghost" className="w-full justify-start">Memo Writer</Button>
          <Button variant="ghost" className="w-full justify-start">Settings</Button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 space-y-8 overflow-auto">
        {/* Stat cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="text-h4">New Deals</CardHeader>
            <CardContent className="text-h2 font-bold">14</CardContent>
          </Card>
          <Card>
            <CardHeader className="text-h4">Pipeline Value</CardHeader>
            <CardContent className="text-h2 font-bold">$82M</CardContent>
          </Card>
          <Card>
            <CardHeader className="text-h4">Portfolio ARR</CardHeader>
            <CardContent className="text-h2 font-bold">$215M</CardContent>
          </Card>
        </section>

        {/* Chat Window */}
        <section className="bg-surface border rounded-lg p-4 flex flex-col h-[400px] max-w-4xl">
          <h3 className="text-h4 font-semibold mb-2">Agent Chat</h3>
          <ScrollArea className="flex-1 border rounded-md p-2 mb-4 bg-background">
            <p className="text-body text-muted">Ask anything about your deals...</p>
          </ScrollArea>
          <div className="flex gap-2">
            <Input placeholder="Type a message…" />
            <Button>Send</Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;