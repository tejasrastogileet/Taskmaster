import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import TaskPanel from './components/TaskPanel'
import Footer from './components/Footer'

function App(){
  return (
    <div className="site-root">
      <Navbar />
      <main>
        <Hero />
        <section className="container glass-section">
          <Features />
        </section>

        <section className="container testimonials-section">
          <Testimonials />
        </section>

        <section id="tasks" className="container task-section">
          <TaskPanel />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
