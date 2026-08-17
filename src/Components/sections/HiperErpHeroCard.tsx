"use client"

import { BarChart2, FileText, Package } from "lucide-react"
import { Card, CardContent } from "@/Components/ui/card"

const HiperErpHeroCard = () => {
  return (
    <Card className="bg-gradient-to-br from-mensura-navy to-mensura-navy/80 text-white p-6 shadow-2xl border-0">
      <CardContent className="space-y-6 p-0">
        <div className="grid grid-cols-3 text-center gap-4">
          <div>
            <Package className="mx-auto my-1 w-8 h-8 text-mensura-amber" />
            <div className="font-bold text-sm">Estoque</div>
            <div className="text-xs text-gray-300">Tempo real</div>
          </div>
          <div>
            <FileText className="mx-auto my-1 w-8 h-8 text-mensura-amber" />
            <div className="font-bold text-sm">Fiscal</div>
            <div className="text-xs text-gray-300">NF-e e SPED</div>
          </div>
          <div>
            <BarChart2 className="mx-auto my-1 w-8 h-8 text-mensura-amber" />
            <div className="font-bold text-sm">Dashboards</div>
            <div className="text-xs text-gray-300">Indicadores nativos</div>
          </div>
        </div>

        <div className="bg-white/10 rounded-xl p-4 text-center">
          <p className="text-mensura-amber text-sm font-semibold uppercase tracking-wider mb-1">
            Ecossistema Mensura
          </p>
          <p className="text-2xl font-bold">Hiper ERP</p>
          <p className="text-sm text-gray-300 mt-1">A partir de R$ 497/mês</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default HiperErpHeroCard
