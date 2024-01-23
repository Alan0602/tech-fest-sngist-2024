import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import NotFound from "./modules/NotFound";
import Home from "./modules/Home";
import SignIn from "./modules/Auth/SignIn";
import SignUp from "./modules/Auth/SignUp";
import Events from "./modules/Events";
import Profile from "./modules/Profile";
import { PrivateRoute } from "./services/PrivateRoute";

function App() {
    const router = createBrowserRouter([
        {
            path: "*",
            element: <NotFound />,
        },
        {
            path: "/404",
            element: <NotFound />,
        },
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/events",
            element: <Events />,
        },
        {
            path: "/signin",
            element: <SignIn />,
        },
        {
            path: "/signup",
            element: <SignUp />,
        },
        {
            path: "/",
            element: <PrivateRoute />,
            children: [
                {
                    path: "/profile",
                    element: <Profile />,
                },

                // {
                //     path: "/",
                //     element: (
                //         <RoleChecker allowedRoles={[Roles.ADMIN, Roles.DC]} />
                //     ),
                //     children: [
                //         {
                //             path: "intern",
                //             element: <InternManagement />,
                //         },
                //         {
                //             path: "intern/:id",
                //             element: <Dashboard />,
                //         },
                //         {
                //             path: "idea",
                //             element: <Idea />,
                //         },
                //     ],
                // },
            ],
        },
    ]);
    return (
        <div className="App">
            <RouterProvider router={router} />
            <Toaster
                position="bottom-center"
                reverseOrder={false}
                toastOptions={{
                    success: {
                        style: {
                            background: "var(--border)",
                            color: "var(--foreground)",
                        },
                    },
					error: {
						style: {
							background: "var(--border)",
							color: "var(--foreground)",
						},
					}
                }}
            />
        </div>
    );
}

export default App;