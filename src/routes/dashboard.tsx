import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'

export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: () => (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Dashboard</h2>
      <p className="text-gray-600">Manage your bookings and profile.</p>
      <div className="bg-red-500 text-white p-4">Tailwind Works!</div>

    </div>
  ),
})
