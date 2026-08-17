import { useEffect } from "react"
import { useRouter } from "next/router"

export default function RedirectFeatures() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/funcionalidades")
  }, [router])

  return null
}
