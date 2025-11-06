import type { Orb } from './types';

export const orbs: Orb[] = [
  {
    id: '1',
    name: 'Sentinel',
    tagline: 'Simple Agent Monitoring',
    description: 'Monitor your AI agents with ease using Sentinel. Get real-time insights and alerts to ensure your agents are performing optimally.',
    icon: '🛡️',
    screenshots: ['https://raw.githubusercontent.com/kostandinang/sentinel/refs/heads/main/screenshot.png'],
    github: 'https://github.com/kostandinang/sentinel',
    stars: 0,
    tech: ['Swift', 'SwiftUI'],
    platforms: ['macos'],
    buildTime: '2 days',
    creator: {
      name: 'Kostandin Angjellari',
      avatar: '👨‍💻',
      github: 'kostandinang'
    },
    createdAt: new Date('2025-10-15'),
    featured: true
  }
];
