export type Tag = {
  name: string
  description?: string
  value: string | undefined
}

export const tags: Tag[] = [
  {
    name: 'All',
    value: undefined,
  },
  {
    name: 'Home',
    description: 'Only results about the main documentation page',
    value: '(index)',
  },
  {
    name: 'Linux',
    description: 'Linux documentation and guides',
    value: 'Linux',
  },
  {
    name: 'Windows',
    description: 'Windows documentation and guides',
    value: 'Windows',
  },
  {
    name: 'Networks',
    description: 'Network documentation and guides',
    value: 'Networks',
  },
  {
    name: 'Pentesting Networks',
    description: 'Network penetration testing documentation',
    value: 'PentestingNetworks',
  },
  {
    name: 'Pentesting Linux',
    description: 'Linux penetration testing documentation',
    value: 'PentestingLinux',
  },
  {
    name: 'Pentesting Windows',
    description: 'Windows penetration testing documentation',
    value: 'PentestingWindows',
  },
  {
    name: 'Pentesting Web',
    description: 'Web penetration testing documentation',
    value: 'PentestingWeb',
  },
]
