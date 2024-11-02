import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
    <h1 className="text-3xl font-bold underline">Home</h1>

    <div>
      This is some quiz 

      <Link to={`/quiz/test`}>
        <button type="button" className="bg-purple-400 rounded-md hover:bg-purple-500 p-2 text-white">
          Start
        </button>
      </Link>
    </div>

    </>
  )
}

export default Home