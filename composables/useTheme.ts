import { ThemeManager } from '../utils/theme'

export const useCurrentTheme = () => {
  return {
    theme: ThemeManager().themeCurrent,
  }
}
