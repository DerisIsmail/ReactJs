import React from "react";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";

// Menggunakan class components
// class Button extends React.Component {
//   render() {
//     return (
//       <button className="h-10 px-6 font-semibold rounded-md bg-slate-700 text-white" type="submit">
//         Buy now
//       </button>
//     );
//   }
// }

// Menggunakan functional components
// function ButtonBlack() {
//   return (
//     <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
//       Buy now
//     </button>
//   );
// }

// menggunakan arrow functional components
// const ButtonRed = () => {
//   return (
//     <button className="h-10 px-6 font-semibold rounded-md bg-red-700 text-white" type="submit">
//       Buy now
//     </button>
//   );
// };

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      {/* <LoginPage></LoginPage> */}
      <RegisterPage />
    </div>
  );
}

export default App;