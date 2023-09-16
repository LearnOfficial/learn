import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import { AuthLayout } from './components/AuthLayout';
import { NoteBoard } from './pages/NoteBoard';
import { SignUp } from './pages/SignUp';
import { LogIn } from './pages/LogIn';
import { AuthenticationLayout } from './components/AuthenticationLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<NoteBoard />}></Route>
      </Route>

      <Route element={<AuthenticationLayout />}>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Route>
    </>
  )
);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
