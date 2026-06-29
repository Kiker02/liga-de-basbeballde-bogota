import { Carousel } from '@/components/home/Carousel'
import { WelcomeSection } from '@/components/home/WelcomeSection'
import { NewsSection } from '@/components/home/NewsSection'
import { UpcomingEvents } from '@/components/home/UpcomingEvents'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="relative">
          <Carousel />
        </section>

        <section className="relative z-10">
          <WelcomeSection />
        </section>

        <section className="relative z-10">
          <UpcomingEvents />
        </section>

        <section className="relative z-10">
          <NewsSection />
        </section>
      </main>
    </div>
  )
} 