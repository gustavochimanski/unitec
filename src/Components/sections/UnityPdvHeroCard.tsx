"use client"

import { BarChart2, MonitorCheck, ShoppingCart } from "lucide-react"
import { Card, CardContent } from "@/Components/ui/card"

const UnityPdvHeroCard = () => {
  return (
    <Card className="bg-gradient-to-br from-emerald-700 to-emerald-800 text-white p-6 shadow-2xl border-0">
      <CardContent className="space-y-6 p-0">
        <div className="grid grid-cols-3 text-center gap-4">
          <div>
            <MonitorCheck className="mx-auto my-1 w-8 h-8 text-emerald-300" />
            <div className="font-bold text-sm">PDV</div>
            <div className="text-xs text-emerald-200">Rápido e estável</div>
          </div>
          <div>
            <ShoppingCart className="mx-auto my-1 w-8 h-8 text-emerald-300" />
            <div className="font-bold text-sm">Estoque</div>
            <div className="text-xs text-emerald-200">Tempo real</div>
          </div>
          <div>
            <BarChart2 className="mx-auto my-1 w-8 h-8 text-emerald-300" />
            <div className="font-bold text-sm">Dashboards</div>
            <div className="text-xs text-emerald-200">Indicadores nativos</div>
          </div>
        </div>

        <div className="bg-white/10 rounded-xl p-4 text-center">
          <p className="text-emerald-300 text-sm font-semibold uppercase tracking-wider mb-1">
            Ecossistema Mensura
          </p>
          <p className="text-2xl font-bold">Unity PDV</p>
          <p className="text-sm text-emerald-200 mt-1">A partir de R$ 397/mês</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default UnityPdvHeroCard
