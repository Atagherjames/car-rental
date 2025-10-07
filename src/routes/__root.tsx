
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Navbar from '../components/Navbar'

export const rootRoute = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="min-h-screen bg-[#F7FAFF] text-gray-800">
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  )
}
