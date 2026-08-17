import { useEffect } from "react"
import { useRouter } from "next/router"

export default function LegacyRedirect({ to = "/" }) {
  const router = useRouter()

  useEffect(() => {
    router.replace(to)
  }, [router, to])

  return null
}
