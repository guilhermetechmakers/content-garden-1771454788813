import { createBrowserRouter, Navigate } from 'react-router-dom'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { LandingPage } from '@/pages/landing'
import { LoginPage } from '@/pages/auth/login'
import { SignupPage } from '@/pages/auth/signup'
import { ForgotPasswordPage } from '@/pages/auth/forgot-password'
import { HomePage } from '@/pages/home'
import { GardenPage } from '@/pages/garden'
import { CanvasesPage } from '@/pages/canvases'
import { CanvasWorkspacePage } from '@/pages/canvases/workspace'
import { DropsPage } from '@/pages/drops'
import { DropEditorPage } from '@/pages/drops/editor'
import { RunwayPage } from '@/pages/runway'
import { SnippetsPage } from '@/pages/snippets'
import { LibraryPage } from '@/pages/library'
import { SearchPage } from '@/pages/search'
import { ProfilePage } from '@/pages/profile'
import { AdminDashboardPage } from '@/pages/admin'
import { PrivacyPage } from '@/pages/legal/privacy'
import { TermsPage } from '@/pages/legal/terms'
import { HelpPage } from '@/pages/legal/help'
import { CookiePolicyPage } from '@/pages/legal/cookie-policy'
import { NotFoundPage } from '@/pages/legal/not-found'
import { ErrorPage } from '@/pages/legal/error'

export const router = createBrowserRouter([
  { path: '/landing', element: <LandingPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/forgot-password', element: <ForgotPasswordPage /> },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'garden', element: <GardenPage /> },
      { path: 'canvases', element: <CanvasesPage /> },
      { path: 'canvases/:canvasId', element: <CanvasWorkspacePage /> },
      { path: 'drops', element: <DropsPage /> },
      { path: 'drops/:dropId', element: <DropEditorPage /> },
      { path: 'runway', element: <RunwayPage /> },
      { path: 'snippets', element: <SnippetsPage /> },
      { path: 'library', element: <LibraryPage /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'admin', element: <AdminDashboardPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: 'help', element: <HelpPage /> },
      { path: 'cookies', element: <CookiePolicyPage /> },
    ],
  },
  { path: '/404', element: <NotFoundPage /> },
  { path: '/500', element: <ErrorPage /> },
  { path: '*', element: <Navigate to="/404" replace /> },
])
