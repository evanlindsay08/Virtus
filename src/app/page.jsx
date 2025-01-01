import Hero from '../components/Hero'
import TickerStrip from '../components/TickerStrip'

export default function Home() {
  return (
    <main>
      <div className="min-h-screen">
        <Hero />
        <div className="container" style={{ marginTop: "-3rem" }}>
          <TickerStrip />
        </div>
      </div>
    </main>
  )
} 