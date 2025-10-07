import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'

export const carsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cars',
  component: () => (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Available Cars</h2>
      <p className="text-gray-600">Browse our collection of cars.</p>
    </div>
  ),
})
