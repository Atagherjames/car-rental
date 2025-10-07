import { createRouter } from '@tanstack/react-router'
import { rootRoute } from './routes/__root'
import { homeRoute } from './routes'
import { carsRoute } from './routes/cars'
import { dashboardRoute } from './routes/dashboard'

// Create router manually — no codegen needed
export const router = createRouter({
  routeTree: rootRoute.addChildren([homeRoute, carsRoute, dashboardRoute]),
})

// Optional: type-safe registration
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function App() {
  return <></> // actual layout comes from rootRoute
}