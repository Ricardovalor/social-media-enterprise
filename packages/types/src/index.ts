export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  plan: 'free' | 'pro' | 'enterprise';
  settings: Record<string, any>;
  createdAt: Date;
}

export interface AuthSession {
  user: User;
  token: string;
  expiresAt: Date;
}
