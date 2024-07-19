import {
  NavLink,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./views/Home/Home";
import Profile from "./views/Profile/Profile";
import About from "./views/About/About";
import NotFound from "./views/NotFound";
import Layout from "./components/Layout";

const App = () => {
  // For the new routing method
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about/:count",
          element: <About />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return (
    // For New method
    <>
      {/* <header>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </ul>
      </header> */}

      <RouterProvider router={router} />
      {/* <Outlet /> */}
    </>
  );

  // return (
  // For the old routing method
  // <>
  //   <header>
  //     <ul>
  //       <NavLink to="/">Home</NavLink>
  //       <NavLink to="/about">About</NavLink>
  //       <NavLink to="/profile">Profile</NavLink>
  //     </ul>
  //   </header>
  //   <Routes>
  //     <Route element={<Layout />}>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/profile" element={<Profile />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="*" element={<NotFound />} />
  //     </Route>
  //   </Routes>
  // </>
  // );
};

export default App;
