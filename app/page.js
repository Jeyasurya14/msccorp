
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ServiceCard";
import { Hammer, ShoppingBag, HardHat, CheckCircle, MapPin, Star, Users, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-brand-dark/60 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop')" }}
        />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-brand-gold font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
              Establish Excellence
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
              Transforming Retail Spaces<br />Across America
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
              National retail construction experts specializing in mall store remodels from coast to coast.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button href="/contact" variant="primary" className="text-lg px-8 py-4 font-bold min-w-[200px]">
                Get a Quote
              </Button>
              <Button href="/services" variant="white" className="text-lg px-8 py-4 font-bold min-w-[200px]">
                Our Services
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-300 tracking-wide uppercase">
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-brand-gold" /> Nationwide Coverage</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-brand-gold" /> 15+ Years Experience</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-brand-gold" /> Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">What We Do</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Store Remodels"
              description="Complete interior renovations, storefront updates, and fixture upgrades that revitalize your brand's presence."
              icon={ShoppingBag}
            />
            <ServiceCard
              title="Mall Construction"
              description="Specialized expertise in navigating mall logistics, after-hours work, and strict compliance environments."
              icon={Hammer}
            />
            <ServiceCard
              title="Project Management"
              description="End-to-end coordination ensuring your national rollout stays on schedule, on budget, and up to code."
              icon={HardHat}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">Why Choose Us</h2>
            <p className="max-w-2xl mx-auto text-gray-600">We bring professional reliability to every project, no matter the location.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "National Reach", desc: "Projects executed seamlessly across all 50 states.", icon: MapPin },
              { title: "Mall Specialists", desc: "Deep understanding of mall operations and protocols.", icon: Star },
              { title: "Proven Track Record", desc: "Hundreds of successful remodels and happy clients.", icon: CheckCircle },
              { title: "Dedicated Team", desc: "Owner and Managers directly involved in every job.", icon: Users },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-blue to-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready to Transform Your Retail Space?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Contact us today for a consultation or quote on your next remodel project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <Button href="/contact" variant="primary" className="text-lg px-10 py-4 w-full sm:w-auto font-bold shadow-lg">
              Contact Us Today
            </Button>
            <div className="flex flex-col items-start hidden sm:flex">
              <a href="tel:304-552-8228" className="text-lg font-bold hover:text-brand-gold transition-colors">(304) 552-8228</a>
              <a href="tel:304-993-9176" className="text-sm text-blue-200 hover:text-white transition-colors">Secondary: (304) 993-9176</a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 italic">Project photos coming soon...</p>
        </div>
      </section>

    </div>
  );
}
