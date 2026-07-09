export default function Day2Schedule() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10 text-[#1F0024]">
      {/* Amazon Immersion Day */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Amazon Immersion Day</h3>
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
                <td className="px-4 py-3">Breakfast, Registration &amp; Poster Set-Up</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">9:30 AM – 9:40 AM</td>
                <td className="px-4 py-3">
                  Welcome: Dr. Margie Vela, Strategic Academic Initiatives,
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
                <td className="px-4 py-3 whitespace-nowrap">10:50 AM – 11:35 AM</td>
                <td className="px-4 py-3">Student Poster Session</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">11:35 AM – 12:20 PM</td>
                <td className="px-4 py-3">Faculty Poster Session</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Innovation Table Luncheon */}
      <div>
        <h3 className="text-lg font-semibold mb-3">
          Innovation Table Luncheon: Bring It to the Table
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
                <td className="px-4 py-3 whitespace-nowrap">12:30 PM – 1:00 PM</td>
                <td className="px-4 py-3">Lunch Keynote</td>
                <td className="px-4 py-3">
                  Chris Willis, Director, Global Expansion, Amazon
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">1:00 PM – 1:30 PM</td>
                <td className="px-4 py-3">Amazon Internships</td>
                <td className="px-4 py-3">Michael Hoggard &amp; Antionna Sudor</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">1:30 PM – 1:35 PM</td>
                <td className="px-4 py-3">Closing Remarks</td>
                <td className="px-4 py-3">Amazon</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* NOTE: Speakers are currently shifting around — Lunch Keynote and
            Closing Remarks rows are placeholders pending confirmation. */}
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
