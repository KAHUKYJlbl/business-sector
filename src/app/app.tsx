import { Suspense } from "react"
import { Provider } from 'react-redux'
import { RouterProvider } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { LoaderSpinner } from "../shared/ui/loader-spinner"
import { Oops } from "../widgets/oops"

import { AppRouter } from "./provider/router"
import { store } from './provider/store/ui/store'

export default function App(): JSX.Element {
  return (
    <ErrorBoundary fallback={<Oops type="error-boundary" />}>
      <Suspense fallback={<LoaderSpinner spinnerType="page" />}>
        <Provider store={store}>

          <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
          <RouterProvider router={AppRouter} />
        </Provider>
      </Suspense>
    </ErrorBoundary>
  )
}
