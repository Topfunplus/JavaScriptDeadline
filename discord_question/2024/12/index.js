import { Navigate, Outlet } from 'react-router-dom'

// question: I am trying to get the image to be recognized by the script but, I am getting no image on the webpage just the button.
const AuthLayout = () => {
  const isAuthenticated = false

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section
            className="flex flex-1 justify-center items-center flex-col
        py-10"
          >
            <Outlet />
          </section>

          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="hidden x1:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  )
}

export default AuthLayout

// answer: Images are not used like that with a bundler 
// https://webpack.js.org/guides/asset-modules/

// 张明：对应 notion/webpack/import `xxx.img` from 'assets/x' ?