export interface AffiliateStats {
  clicks: number;
  conversions: number;
  earnings: number;
  totalCommissions: number;
  pendingCommissions: number;
  referrals: number;
  conversionRate: number;
}

export interface AffiliateLink {
  id: string;
  url: string;
  clicks: number;
  conversions: number;
}
