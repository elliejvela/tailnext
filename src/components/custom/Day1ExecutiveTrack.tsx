import Day1Closing from "./Day1Closing";
import Day1Opening from "./Day1Opening";

export default function Day1ExecutiveTrack() {
  return (
    <div className="mx-auto space-y-10 text-[#1F0024]">
      <div className="text-2xl font-bold">Executives & CIOs</div>

      <Day1Opening/>

      {/* Breakout Sessions - Morning */}
      <div>
        <h3 className="text-lg font-semibold mb-3">
          Breakout Sessions — Morning
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
                <td className="px-4 py-3 whitespace-nowrap">11:00 AM – 11:30 AM</td>
                <td className="px-4 py-3">
                  <b><em>Co-Creating the AI Talent Pipeline: Aligning Higher Education and Industry for the Future of Work</em></b> <br/>
                  <br/>
                  <b>Moderator:</b> Ayoka Samuels, City Colleges of Chicago<br/>
                  <b>Panelists:</b> <br/>
                  Jeena Thomas, National Academies of Science; <br/>
                  Dean Cherese Winstead, Delaware State University; <br/>
                  Provost Clifton Myles, Talladega College; <br/>
                  Donnie Bedney, Amazon eXperiences and Upskilling
                </td>
                <td className="px-4 py-3 align-middle">Blackburn Center, Reading Lounge</td>

              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">11:30 AM – 12:30 PM</td>
                <td className="px-4 py-3">
                  <b><em>Amazon Quick: Your AI Assistant</em></b>, Markelle Andrews, Quick Suite, Amazon Web Services
                </td>
                <td className="px-4 py-3 align-middle">Blackburn Center, Reading Lounge</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Lunch */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Lunch</h3>
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
                <td className="px-4 py-3 whitespace-nowrap">12:45 PM – 1:30 PM</td>
                <td className="px-4 py-3">Lunch</td>
                <td className="px-4 py-3 align-middle">Blackburn Center, Blackburn Ballroom</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Breakout Sessions - Afternoon */}
      <div>
        <h3 className="text-lg font-semibold mb-3">
          Breakout Sessions — Afternoon
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
                <td className="px-4 py-3 whitespace-nowrap">1:30 PM – 2:00 PM</td>
                <td className="px-4 py-3">
                  <b><em>&quot;Cloud Migration Done Right: An Institutional Playbook&quot;</em></b>, Mike Widell, Oklahoma City Community College
                </td>
                <td className="px-4 py-3 align-middle">Blackburn Center, Reading Lounge</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">2:00 PM – 3:40 PM</td>
                <td className="px-4 py-3">
                  <b><em>&quot;Navigating the AI Renaissance in Higher Education&quot;</em></b>, Dr. Yolanda Spiva-Watson, President, Complete College America
                </td>
                <td className="px-4 py-3 align-middle">Blackburn Center, Reading Lounge</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">3:40 PM – 4:00 PM</td>
                <td className="px-4 py-3">
                  <b><em>&quot;From Investment to Impact: Understanding the AWS-MLU Program&quot;</em></b>, Kemal Atkins, Ed.D., AGB Senior Consultant
                </td>
                <td className="px-4 py-3 align-middle">Blackburn Center, Reading Lounge</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Day1Closing/>

    </div>
  );
}
