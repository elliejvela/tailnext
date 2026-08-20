export default function Day1Opening(){
    return(
        <div>
        <h3 className="text-lg font-semibold mb-3">
          Opening Plenary | Blackburn Auditorium
        </h3>
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold w-48">Time</th>
                <th className="px-4 py-3 text-left font-semibold">Session</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">8:30 AM – 9:30 AM</td>
                <td className="px-4 py-3">Registration, Check-In &amp; Breakfast</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">9:30 AM – 9:35 AM</td>
                <td className="px-4 py-3"><b>Welcome:</b> Wayne A.I. Fredrick, President, Howard University</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">9:35 AM – 9:40 AM</td>
                <td className="px-4 py-3">
                  <b>Welcome:</b> Jerome Johnson II, Director of Professional Services –
                  U.S. Federal, Aerospace &amp; Defense, AWS
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">9:40 AM – 9:50 AM</td>
                <td className="px-4 py-3">
                  <b>Opening Remarks:</b> Dr. Margie Vela, Strategic Academic Initiatives,
                  Machine Learning University, Amazon Web Services
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">9:50 AM – 10:20 AM</td>
                <td className="px-4 py-3">
                  Howard University Flash Talks 
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">10:30 AM – 10:50 AM</td>
                <td className="px-4 py-3">Plenary Keynote: TBD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
}