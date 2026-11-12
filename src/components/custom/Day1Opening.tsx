export default function Day1Opening(){
    return(
        <div>
        <h3 className="text-lg font-semibold mb-3">
          Opening Plenary
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
                <td className="px-4 py-3 whitespace-nowrap">8:30 AM – 9:30 AM</td>
                <td className="px-4 py-3">Registration, Check-In &amp; Breakfast</td>
                <td className="px-4 py-3">Blackburn Ballroom</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">9:30 AM – 9:35 AM</td>
                <td className="px-4 py-3"><b>Welcome:</b> Wayne A.I. Frederick, Interim President, Howard University</td>
                <td className="px-4 py-3">Blackburn Ballroom</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">9:35 AM – 9:40 AM</td>
                <td className="px-4 py-3">
                  <b>Welcome:</b> Jerome Johnson II, Director of Professional Services –
                  U.S. Federal, Aerospace &amp; Defense, AWS
                </td>
                <td className="px-4 py-3">Blackburn Ballroom</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">9:40 AM – 10:00 AM</td>
                <td className="px-4 py-3">
                  <b><em>From 3D Printing to Soft Robotics & Drones: Ongoing Projects at Howard University</em></b>, Dr. Saurav Keshari Aryal, Senior Research Scientist, Institute for Human-Centered Artificial Intelligence, Howard University


                </td>
                <td className="px-4 py-3">Blackburn Ballroom</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">10:00 AM – 10:20 AM</td>
                <td className="px-4 py-3">
                  <b><em>Using Data from Diverse Sources to Understand the Health and Well-being of People and Communities</em></b>, Dr.  Anietie Andy, Assistant Professor, Department of Electrical Engineering and Computer Science, Howard University
                </td>
                <td className="px-4 py-3">Blackburn Ballroom</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">10:20 AM – 10:50 AM</td>
                <td className="px-4 py-3">
                  <b><em>Plenary Keynote: Charting a New Course: Our Journey toward Education Transformation</em></b>, Margie Vela, Strategic Academic Initiatives, Machine Learning University, Amazon Web Services
                </td>
                <td className="px-4 py-3">Blackburn Ballroom</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
}