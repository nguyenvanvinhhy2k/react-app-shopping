import productApi from "api/productApi";
import { useState, useEffect } from "react";
export default function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => { //call api lay thong tin chi tiet san pham theo ID
    (async () => {
      setLoading(true);
      const result = await productApi.get(productId);
      setProduct(result);
      console.log(result);
      try {
      } catch (error) {
       
      }
      setLoading(false);
    })();
  }, [productId]);

  return { product, loading };
}
