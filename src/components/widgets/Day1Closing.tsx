export default function Day1Closing() {
  return(
    <div>
        <h3 className="text-lg font-semibold mb-3">
          Closing Plenary
        </h3>
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold w-48">Time</th>
                <th className="px-4 py-3 text-left font-semibold">Session</th>
                <th className="px-4 py-3 text-left font-semibold w-48">Location</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">3:15 PM – 4:00 PM</td>
                <td className="px-4 py-3">
                  <b>Gen AI Shark Tank:</b> Michael Hoggard, Senior Life Cycle Recruiter, Amazon University Talent Acquisition <b>&amp; Student Teams</b>
                </td>
                <td className="px-4 py-3">Blackburn Ballroom</td>
              </tr>
               <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">4:00 PM - 4:10 PM</td>
                <td className="px-4 py-3">
                  <b>Closing Remarks:</b> Thansha Sadacharam, Senior Manager, Software Builder Experience, Amazon Web Services
                </td>
                <td className="px-4 py-3">Blackburn Ballroom</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">4:10 PM – 4:40 PM</td>
                <td className="px-4 py-3">
                  Byte-Size Connections Networking Hour
                </td>
                <td className="px-4 py-3">Blackburn Ballroom</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">4:40 PM</td>
                <td className="px-4 py-3">
                  Tour Options
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  )
};