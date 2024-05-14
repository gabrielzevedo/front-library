import { join, dirname, resolve } from 'path'

const ADMIN_COMPONENTS_PATH = resolve('../../packages/admin-components')

export const getAdminComponentsPath = (value: string): string => {
  return join(ADMIN_COMPONENTS_PATH, value)
}

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
export function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
