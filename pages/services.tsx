import { Shield, Code, Gamepad2, Smartphone, Brain } from "lucide-react"
import ServiceCard from "../components/ServiceCard"

export default function Services() {
  const services = [
    { icon: Code, title: "Custom Software Development", desc: "Scalable applications." },
    { icon: Shield, title: "Cybersecurity Solutions", desc: "Secure system architecture." },
    { icon: Gamepad2, title: "Game Development", desc: "Immersive experiences." },
    { icon: Smartphone, title: "Web & Mobile Apps", desc: "Responsive platforms." },
    { icon: Brain, title: "AI Integration", desc: "Intelligent automation." }
  ]
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {services.map((s, i) => <ServiceCard key={i} {...s} />)}
    </div>
  )
}
