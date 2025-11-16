import { useState, useEffect } from 'react';

interface AffiliateData {
  referrals: number;
  commission: number;
  link: string;
}

export function useAffiliate() {
  const [data, setData] = useState<AffiliateData>({
    referrals: 0,
    commission: 0,
    link: ''
  });

  useEffect(() => {
    // Simulando busca de dados da API
    setData({
      referrals: 24,
      commission: 1245.00,
      link: 'https://exemplo.com/afiliado/12345'
    });
  }, []);

  return data;
}
