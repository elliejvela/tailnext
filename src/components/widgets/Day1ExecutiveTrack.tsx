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
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">11:00 AM – 11:30 AM</td>
                <td className="px-4 py-3">
                  <strong>AWS-MLU Regional Lead Institutions</strong> <br/>
                  <b>Moderator:</b> Dr. Vita Pickrum<br/>
                  <b>Panelists:</b> Dr. Calvin Briggs, Ms. Ayoka Samuels, Dr. Patrice Gilliam, Dr. Talitha Washington, Dr. Liz Largent<br/>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">11:30 AM – 12:30 PM</td>
                <td className="px-4 py-3">
                  <em>Amazon Quick: Your AI Assistant</em>, Markelle Andrews, Quick Suite, Amazon Web Services
                </td>
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
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">12:45 PM – 1:30 PM</td>
                <td className="px-4 py-3">
                  <strong>Lunch Presentation:</strong><br/>
                  <em>Cloud Migration Done Right: An Institutional Playbook</em>, Mike Widell, Oklahoma City Community College
                </td>
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
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">1:30 PM – 2:15 PM</td>
                <td className="px-4 py-3">
                  PartyRock
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">2:15 PM – 3:00 PM</td>
                <td className="px-4 py-3">
                  Dr. Yolanda Spiva-Watson, President, Complete College America & <br/>
                  Mr. David Bass, Vice President Program Strategy, Association of Governing Boards
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Day1Closing/>

    </div>
  );
}
