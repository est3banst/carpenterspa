import { useRouteError } from "react-router-dom";
import '../assets/Error.css'

export default function ErrorPag() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Uups!</h1>
      <p>Lo sentimos, un error inesperado.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}