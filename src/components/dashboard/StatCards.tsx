import React, { useMemo } from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'

interface Stat {
  title: string
  value: string
}

const StatCards: React.FC = () => {
  const stats: Stat[] = useMemo(
    () => [
      { title: 'New Deals', value: '14' },
      { title: 'Pipeline Value', value: '$82M' },
      { title: 'Portfolio ARR', value: '$215M' },
    ],
    []
  )

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map(({ title, value }) => (
        <Card key={title}>
          <CardHeader className="text-h4">{title}</CardHeader>
          <CardContent className="text-h2 font-bold">{value}</CardContent>
        </Card>
      ))}
    </section>
  )
}

export default StatCards