import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BookIcon, TerminalIcon, NetworkIcon, LibraryIcon, BugIcon, AppWindowIcon } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/syztem4our666',
  nav: {
    title: (
      <div className="flex items-center">
        <img
          src="/logo.png"
          width="32"
          height="32"
          alt="PentOps Icon"
          className="mr-1"
        />
        <span>Terminal Docs</span>
      </div>
    ),
    
  },
  links: [
    {
      type: 'menu',
      text: 'Documentation',
      icon: <BookIcon />,
      items: [
        {
          text: 'Home',
          description: 'Index of the docs',
          url: '/docs/index',
          icon: <LibraryIcon />,
        },
        {
          text: 'Pentesting Networks',
          description: 'Notes about pentesting on networks',
          url: '/docs/PentestingNetworks',
          icon: <NetworkIcon />,
        },
        {
          text: 'Networks',
          description: 'Essential Cisco commands and networking fundamentals',
          url: '/docs/Networks',
          icon: <NetworkIcon />,
        },
        {
          text: 'Windows',
          description: 'Windows System Administration and Commands',
          url: '/docs/Windows',
          icon: <AppWindowIcon />,
        },
        {
          text: 'Linux',
          description: 'Linux System Administration and Commands',
          url: '/docs/Linux/commands',
          icon: <TerminalIcon />,
        },
        {
          text: 'Pentesting Linux',
          description: 'Comprehensive guide to penetration testing on Linux',
          url: '/docs/PentestingLinux',
          icon: <BugIcon />,
        },
        {
          text: 'Pentesting Windows',
          description: 'Techniques and tools for Windows penetration testing',
          url: '/docs/PentestingWindows',
          icon: <BugIcon />,
        },
      ],
    },
  ],
};
