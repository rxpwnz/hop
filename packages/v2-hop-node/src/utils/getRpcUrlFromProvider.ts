import type { providers } from 'ethers'

type Provider = providers.Provider & {
  connection?: {
    url: string
  }
  providers?: Provider[]
}

export function getRpcUrlFromProvider (provider: Provider): string | null {
  return provider.connection?.url ?? provider.providers?.[0]?.connection?.url ?? null
}
