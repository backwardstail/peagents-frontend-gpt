import React from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { Menu, X } from 'lucide-react'

const navItems = [
  'Dashboard',
  'Deal Generator',
  'ARR Analyzer',
  'Memo Writer',
  'Settings',
]

const Sidebar: React.FC = () => {
  return (
    <>
      {/* Mobile Nav Button */}
      <div className="md:hidden p-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <div className="w-64 bg-surface h-full p-4 border-r">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-h3 font-bold">PE Agents</h2>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Button key={item} variant="ghost" className="w-full justify-start">
                    {item}
                  </Button>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:flex-col w-64 bg-surface p-4 border-r">
        <h2 className="text-h3 font-bold mb-6">PE Agents</h2>
        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <Button key={item} variant="ghost" className="w-full justify-start">
              {item}
            </Button>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar