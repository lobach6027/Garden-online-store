import React from 'react'
import SaleBanner from '../../components/SaleBanner'
import SaleOrderBanner from '../../components/SaleOrderBanner'
import CatalogShort from '../../components/CatalogShort'

export default function MainPage() {
  return (
    <div>
      <SaleBanner/>
      <CatalogShort/>
      <SaleOrderBanner/>
    </div>
  )
}
