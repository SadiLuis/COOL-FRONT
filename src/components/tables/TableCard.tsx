import React from 'react';
import { useDestinations } from '../../hooks/useDestination';


const TableCard: React.FC = ({ }) => {
  const { destinos } = useDestinations() 
  const destino = destinos?.map((dest) => dest); 
	/* if (isLoading || isFetching) return <p>Loading...</p>
  if (error) return <p>Error.</p> */
  return (
    <div
  className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded
    "bg-lightBlue-900 text-white"`}
>

<div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                ADVENTURES
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                See all
              </button>
            </div>
          </div>
        </div>

    <table className="items-center w-full bg-transparent border-collapse">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">TITLE</th>
          <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">LOCATION</th>
          <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">ID</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {destino?.map((data) => (
          <tr key={data._id}>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{data.title}</td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{data.location}</td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{data._id}</td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
  );
};

export default TableCard;