import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blogs from './components/Blogs/Blogs';

import Home from './components/Home/Home';
import OnlyTopics from './components/OnlyTopics/OnlyTopics';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import WrongRoute from './components/WrongRoute/WrongRoute';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: 'quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Quiz></Quiz>
        },
        {
          path: '/topics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <OnlyTopics></OnlyTopics>
        },
        {
          path: '/statistics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Statistics></Statistics>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        }
      ]
    },
    {
      path: '*',
      element: <WrongRoute></WrongRoute>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </div>
  );
}

export default App;
