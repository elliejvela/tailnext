export default function Day2Schedule() {
  return (
    <div className="py-5 space-y-10 text-[#1F0024]">
      {/* Amazon Immersion Day */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Welcome</h3>
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
                <td className="px-4 py-3 whitespace-nowrap">9:30 AM – 9:40 AM</td>
                <td className="px-4 py-3">
                  Dr. Margie Vela, Strategic Academic Initiatives,
                  Machine Learning University, AWS
                </td>
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
                <th className="px-4 py-3 text-left font-semibold w-56">Speaker</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">9:40 AM – 9:50 AM</td>
                <td className="px-4 py-3">Career Choice</td>
                <td className="px-4 py-3">Yuanxia Ding</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">9:50 AM – 10:20 AM</td>
                <td className="px-4 py-3">AWS Developer Experience</td>
                <td className="px-4 py-3">Lisa Bagley</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">10:20 AM – 10:50 AM</td>
                <td className="px-4 py-3">Amazon BEN-Tech in Higher Education</td>
                <td className="px-4 py-3">Willie Mays &amp; Lisa Chandler</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Poster Sessions */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Poster Sessions</h3>
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
                <td className="px-4 py-3 whitespace-nowrap">10:50 AM – 11:10 AM</td>
                <td className="px-4 py-3">Group 1</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">11:10 AM – 11:30 PM</td>
                <td className="px-4 py-3">Group 2</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">11:30 AM – 11:50 PM</td>
                <td className="px-4 py-3">Group 3</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">11:50 AM – 12:10 PM</td>
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
                <th className="px-4 py-3 text-left font-semibold w-56">Speaker</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">12:10 PM – 1:00 PM</td>
                <td className="px-4 py-3">Lunch</td>
                <td className="px-4 py-3">
                  TBD
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* NOTE: Speakers are currently shifting around — Lunch Keynote and
            Closing Remarks rows are placeholders pending confirmation. */}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">Afternoon</h3>
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold w-48">Time</th>
                <th className="px-4 py-3 text-left font-semibold">Session</th>
                <th className="px-4 py-3 text-left font-semibold w-56">Guide</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">1:00PM – 1:30 PM</td>
                <td className="px-4 py-3">Amazon Internships</td>
                <td className="px-4 py-3">Michael Hoggard & Antionna Sudor</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">1:00 PM – 1:30 PM</td>
                <td className="px-4 py-3">Faculty Recognition Ceremony: Faculty Fellows & Certified (AI Practitioner/Cloud Practitioner)</td>
                <td/>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">1:30 PM – 1:35 PM</td>
                <td className="px-4 py-3">Closing Remarks</td>
                <td className="px-4 py-3">Amazon</td>
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
                <th className="px-4 py-3 text-left font-semibold w-56">Guide</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">1:35 PM – 3:00 PM</td>
                <td className="px-4 py-3">Amazon AI Experience</td>
                <td className="px-4 py-3">Precious Tate</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">1:35 PM – 3:00 PM</td>
                <td className="px-4 py-3">AWS Skills Center</td>
                <td className="px-4 py-3">Gerry Brooks</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">1:35 PM – 3:00 PM</td>
                <td className="px-4 py-3">Amazon Headquarters 2 (HQ2)</td>
                <td className="px-4 py-3">TBD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
