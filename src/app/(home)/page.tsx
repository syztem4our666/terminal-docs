import { BookIcon, type LucideIcon, WebhookIcon } from 'lucide-react'
import type { LinkProps } from 'next/link'
import Link from 'next/link'
import type { ReactElement, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Globe } from "@/components/ui/globe"

export default function DocsPage(): ReactElement {
  return (
    
    <main className="mx-auto flex w-full max-w-[1400px] flex-col px-4 py-16">
      <div className="bg-background relative flex size-full max-w-full items-center justify-center overflow-hidden rounded-lg border px-40 pt-8 pb-40 md:pb-60">
      <span className="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
        Terminal Docs
      </span>
      <Globe className="top-25" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  <div className="mt-8">
    <BentoCard
      name="Documentation"
      className="col-span-2"
      background={<div />}
      Icon={BookIcon}
      description="Comprehensive cybersecurity and system administration documentation"
      href="/docs"
      cta="Go to docs"
    />
    
  </div>
</main>

  )
}

function DocumentationItem({
  title,
  description,
  icon: { icon: ItemIcon, id },
  href,
}: {
  title: string
  description: string
  icon: {
    icon: LucideIcon
    id: string
  }
  href: string
}): ReactElement {
  return (
    <Item href={href}>
      <Icon className={id}>
        <ItemIcon className='size-full' />
      </Icon>
      <h2 className='mb-2 font-semibold text-lg'>{title}</h2>
      <p className='text-fd-muted-foreground text-sm'>{description}</p>
    </Item>
  )
}

function Icon({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}): ReactElement {
  return (
    <div
      className={cn(
        'mb-2 size-9 rounded-lg border p-1.5 shadow-fd-primary/30',
        className
      )}
      style={{
        boxShadow: 'inset 0px 8px 8px 0px var(--tw-shadow-color)',
      }}
    >
      {children}
    </div>
  )
}

function Item(
  props: LinkProps & { className?: string; children: ReactNode }
): ReactElement {
  const { className, children, ...rest } = props
  return (
    <Link
      {...rest}
      className={cn(
        'rounded-2xl border border-border bg-fd-accent/30 p-6 shadow-lg backdrop-blur-lg transition-all hover:bg-fd-accent',
        className
      )}
    >
      {children}
    </Link>
  )
}
