// import React from 'react'
import { ProductDetailCard } from "components/cards";

export default function SuperSubCategoryProductDetailPage() {
  const url = window.location?.href?.split("/")?.pop();
  const currentLocation = window?.location?.href
    ?.split("/")
    ?.slice(0, -1)
    ?.join("/");
  return <ProductDetailCard url={url} currentLocation={currentLocation} />;
}
