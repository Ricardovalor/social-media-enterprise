export interface Post {
  id: string;
  content: string;
  scheduledFor?: string;
  status: 'draft' | 'scheduled' | 'published';
}

export interface SocialMediaPost {
  id: string;
  platform: 'tiktok' | 'instagram' | 'youtube' | 'twitter';
  content: string;
  scheduledFor: string;
  status: 'draft' | 'scheduled' | 'published' | 'failed';
  metrics?: {
    likes: number;
    shares: number;
    comments: number;
    views: number;
  };
}
