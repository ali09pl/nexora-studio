import { motion } from "framer-motion"

export default function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="glass p-6">
      <Icon className="text-indigo-400 mb-4" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-300">{desc}</p>
    </motion.div>
  )
}
