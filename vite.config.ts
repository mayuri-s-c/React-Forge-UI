/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { playwright } from '@vitest/browser-playwright'

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib'

  return {
    plugins: [react()],
    build: isLib
      ? {
          lib: {
            entry: path.resolve(dirname, 'src/index.ts'),
            name: 'ComponentLibrary',
            formats: ['es'],
            fileName: 'component-library',
          },
          rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime', 'clsx'],
            output: {
              assetFileNames: 'component-library.[ext]',
            },
          },
          cssCodeSplit: false,
          sourcemap: true,
          copyPublicDir: false,
        }
      : undefined,
    test: {
      projects: [
        {
          extends: true,
          plugins: [
            storybookTest({
              configDir: path.join(dirname, '.storybook'),
            }),
          ],
          test: {
            name: 'storybook',
            browser: {
              enabled: true,
              headless: true,
              provider: playwright({}),
              instances: [{ browser: 'chromium' }],
            },
          },
        },
      ],
    },
  }
})
