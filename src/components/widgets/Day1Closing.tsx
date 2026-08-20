export default function Day1Closing() {
  return(
    <div>
        <h3 className="text-lg font-semibold mb-3">
          Closing Plenary | Blackburn Auditorium
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
                <td className="px-4 py-3 whitespace-nowrap">3:15 PM – 4:00 PM</td>
                <td className="px-4 py-3">
                  Student Team App Presentations (Top 5 Peer-Selected Apps from
                  Cloud Connect)
                </td>
              </tr>
               <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">4:00 PM - 4:10 PM</td>
                <td className="px-4 py-3">
                  <b>Day 1 Closing Remarks:</b> Distinguished Hosts – Jamila Hashil and Joe Briggs
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">4:10 PM – 4:40 PM</td>
                <td className="px-4 py-3">
                  Byte-Size Connections Networking Hour
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">4:40 PM</td>
                <td className="px-4 py-3">
                  Tour Options
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  )
};