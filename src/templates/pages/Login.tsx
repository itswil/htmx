export const Login = () => (
  <>
    <h1>Login</h1>
    <p>Fake login - it just sets a cookie</p>
    <button hx-post="/login" hx-swap="none">
      Set a cookie
    </button>
  </>
);