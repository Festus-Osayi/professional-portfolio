import PacmanLoader from "react-spinners/PacmanLoader";
export default function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <PacmanLoader color="#36d7b7" loading={true} />
      <p className="mt-3 text-xl">Please wait while the page is loading...</p>
    </div>
  );
}
