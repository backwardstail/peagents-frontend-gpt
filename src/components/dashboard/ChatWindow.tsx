import React, { useState } from 'react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface Message {
  text: string
  isUser: boolean
}

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [message, setMessage] = useState('')

  const handleSend = () => {
    const trimmed = message.trim()
    if (!trimmed) return
    setMessages([...messages, { text: trimmed, isUser: true }])
    setMessage('')
  }

  return (
    <Card className="w-full max-w-4xl h-80 md:h-[400px] flex flex-col">
      <CardHeader>
        <h3 className="text-h4 font-semibold">Agent Chat</h3>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <ScrollArea className="h-full border-t border-b p-4 bg-background">
          <div className="flex flex-col space-y-2">
            {messages.length === 0 ? (
              <p className="text-body text-muted">Ask anything about your deals...</p>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-xs whitespace-pre-wrap rounded-md p-2 ${
                    msg.isUser ? 'self-end bg-primary text-primary-foreground' : 'bg-surface'
                  }`}
                >
                  {msg.text}
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2 p-4">
          <Input
            placeholder="Type a message…"
            className="flex-1"
            value={message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Enter') handleSend();
            }}
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default ChatWindow