export default function Day2Schedule() {
  return (
    <div className="py-5 space-y-10 text-[#1F0024]">
      {/* Amazon Immersion Day */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Morning</h3>
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
                <td className="px-4 py-3 whitespace-nowrap">8:30 AM – 9:30 AM</td>
                <td className="px-4 py-3">
                  Registration and check-in
                </td>
                <td>WAS-16 Lobby</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">8:30 AM – 9:30 AM</td>
                <td className="px-4 py-3">
                  Breakfast
                </td>
                <td>Cafe, 13th Floor</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">9:30 AM – 9:40 AM</td>
                <td className="px-4 py-3">
                  <b>Welcome Remarks:</b> Dr. Margie Vela, Strategic Academic Initiatives,
                  Machine Learning University, AWS
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Building with Amazon */}
      <div>
        <h3 className="text-lg font-semibold mb-3">
          Building with Amazon: Campus Collaboration Pathways
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
                <td className="px-4 py-3 whitespace-nowrap">9:40 AM – 9:50 AM</td>
                <td className="px-4 py-3">
                  <b>Career Choice:</b> Yuanxia Ding
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">9:50 AM – 10:20 AM</td>
                <td className="px-4 py-3">
                  <b>AWS Developer Experience:</b> Lisa Bagley
                  </td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">10:20 AM – 10:50 AM</td>
                <td className="px-4 py-3">
                  <b>Amazon BEN-Tech in Higher Education:</b> Willie Mays &amp; Lisa Chandler
                </td>
              </tr>

              <tr>
                <td className="px-4 py-3 whitespace-nowrap">10:50 AM – 10:55 AM</td>
                <td className="px-4 py-3">
                  <b>Poster Session Intro:</b> Joi Spears
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Poster Sessions */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Poster Sessions <small className="font-normal">(Hors d’evours provided)</small></h3>
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
                <td className="px-4 py-3 whitespace-nowrap">10:55 AM – 11:15 AM</td>
                <td className="px-4 py-3">Group 1</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">11:15 AM – 11:35 PM</td>
                <td className="px-4 py-3">Group 2</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">11:35 AM – 11:55 PM</td>
                <td className="px-4 py-3">Group 3</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">11:55 AM – 12:15 PM</td>
                <td className="px-4 py-3">Group 4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Innovation Table Luncheon */}
      <div>
        <h3 className="text-lg font-semibold mb-3">
          Lunch
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
                <td className="px-4 py-3 whitespace-nowrap">12:15 PM – 1:10 PM</td>
                <td className="px-4 py-3">Lunch</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">Afternoon</h3>
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
                <td className="px-4 py-3 whitespace-nowrap">1:10PM – 1:40 PM</td>
                <td className="px-4 py-3">
                  <b>Amazon Internships:</b> Michael Hoggard & Antionna Sudor
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">1:40 PM – 2:05 PM</td>
                <td className="px-4 py-3">
                  <b>Faculty Recognition Ceremony:</b> Faculty Fellows & Certified (AI Practitioner/Cloud Practitioner)
                </td>
                <td/>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">2:05 PM – 2:10 PM</td>
                <td className="px-4 py-3">
                  <b>Closing Remarks:</b> Dr. Vita Pickrum, Senior Vice President and Executive Director of the Foundation, Oklahoma City Community College
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

            {/* Optional Tours */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Optional Tours</h3>
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold w-48">Time</th>
                <th className="px-4 py-3 text-left font-semibold">Tour</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">3:00 PM – 4:00 PM</td>
                <td className="px-4 py-3">
                  <b>AI Experience Center @ HQ2:</b> Precious Tate
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">2:10 PM – 3:30 PM</td>
                <td className="px-4 py-3">
                  <b>AWS Skills Center:</b> Gerry Brooks
                  </td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">2:10 PM – 3:30 PM</td>
                <td className="px-4 py-3"><b>HQ2:</b> Guided Tours</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
