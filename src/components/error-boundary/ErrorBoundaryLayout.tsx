import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import { Fallback } from "./Fallback";

export const ErrorBoundaryLayout = () => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Outlet />
    </ErrorBoundary>
  );
};
