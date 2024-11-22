import { Link } from "react-router-dom";
import { store as data } from "../store/store.ts";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        {Object.entries(data) &&
          Object.entries(data).map(([key, value]) => (
            <ul key={key}>
              <div>
                <div className="flex items-center justify-center flex-col md:m-4 m-2">
                  <div className="">
                    <div className="rounded-md md:w-128 lg:w-144 w-full bg-gray-50 p-4 border">
                      <div>
                        <h1 className="md:text-3xl text-2xl pb-2">
                          {value.info.name}
                        </h1>
                        <p className="md:pb-4 pb-2">{value.info.description}</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <h1 className="md:text-3xl text-2xl py-4">
                          Are you ready?
                        </h1>
                        <div className="font-light">
                          {value.quiz.length} questions to answer
                        </div>
                        <div>
                          <Link to={`/quiz/${key}`}>
                            <button
                              className="rounded-md bg-slate-800 py-2 px-4 mt-16 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                              type="button"
                            >
                              <div>Start the quiz</div>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          ))}
      </div>
    </>
  );
};

export default Home;
