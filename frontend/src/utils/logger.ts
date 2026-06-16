import { appEnv } from '@/env/index'

type LogLevel = 'log' | 'info' | 'warn' | 'error'

function output(level: LogLevel, scope: string, args: unknown[]) {
  if (!appEnv.enableLog && level !== 'error') return
  const prefix = `[travel:${scope}]`
  // eslint-disable-next-line no-console
  console[level](prefix, ...args)
}

export const logger = {
  log(scope: string, ...args: unknown[]) {
    output('log', scope, args)
  },
  info(scope: string, ...args: unknown[]) {
    output('info', scope, args)
  },
  warn(scope: string, ...args: unknown[]) {
    output('warn', scope, args)
  },
  error(scope: string, ...args: unknown[]) {
    output('error', scope, args)
  }
}
