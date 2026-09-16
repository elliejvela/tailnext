import Day1Closing from "./Day1Closing";
import Day1Opening from "./Day1Opening";

export default function Day1FacultyTrack() {
  return (
    <div className="mx-auto space-y-10 text-[#1F0024]">
      <div className="text-2xl font-bold">Faculty (Educators Consortium)</div>

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
                <td className="px-4 py-3 whitespace-nowrap">11:00 am – 11:10 am</td>
                <td className="px-4 py-3">
                  <b><em>&quot;Distributed Teaching Collaboratives Consortium (DTCC) Overview&quot;</em></b>, Darnell Moore, Ph.D., DTCC Managing Director
                </td>
                <td className="px-4 py-3 align-middle">Blackburn Center, Blackburn Ballroom</td>
              </tr>
              
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">11:10 am – 11:25 am</td>
                <td className="px-4 py-3">
                  <b><em>&quot;Reimagining Liberal Arts&quot; through AI Literacy</em></b>, Dr. Lisa Taylor, Director of Academic Technology and Distance Learning | Talladega College
                </td>
                <td className="px-4 py-3 align-middle">Blackburn Center, Blackburn Ballroom</td>
              </tr>

              <tr>
                <td className="px-4 py-3 whitespace-nowrap">11:25 am – 11:40 am</td>
                <td className="px-4 py-3">
                  <b><em>&quot;From Prompt to Program: Scaffolding AI Literacy from No-Code to Code&quot;</em></b>, Sara Mathew, Department Chair & Professor of Computer Science | Oklahoma City Community College
                </td>
                <td className="px-4 py-3 align-middle">Blackburn Center, Blackburn Ballroom</td>
              </tr>

              <tr>
                <td className="px-4 py-3 whitespace-nowrap">11:40 am – 11:55 am</td>
                <td className="px-4 py-3">
                  <b><em>&quot;Data Privacy and Cyber Hygiene Fundamentals in the Age of AI&quot;</em></b>, Latoya Stampley, Adjunct Professor | City Colleges of Chicago
                </td>
                <td className="px-4 py-3 align-middle">Blackburn Center, Blackburn Ballroom</td>
              </tr>

              <tr>
                <td className="px-4 py-3 whitespace-nowrap">11:55 am – 12:10 pm</td>
                <td className="px-4 py-3">
                  <b><em>&quot;From Problem-Based Engineering to Smart Prompting: Using AWS Quick to Support Doctoral Research and Critical AI Literacy&quot;</em></b>, Reshid Walker, Ed.D., Assistant Professor of Educational Leadership | Delaware State University
                </td>
                <td className="px-4 py-3 align-middle">Blackburn Center, Blackburn Ballroom</td>
              </tr>

              <tr>
                <td className="px-4 py-3 whitespace-nowrap">12:10 pm – 12:30 pm</td>
                <td className="px-4 py-3">
                  <b><em>&quot;From Investment to Impact: Understanding the AWS-MLU Program&quot;</em></b>, Kemal Atkins, Ed.D. | AGB Senior Consultant
                </td>
                <td className="px-4 py-3 align-middle">Blackburn Center, Blackburn Ballroom</td>
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
                <td className="px-4 py-3 whitespace-nowrap">12:30 PM – 1:30 PM</td>
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
                  <b><em>Faculty Hands-on Workshop: AI Agents for Instructional Support</em></b>, <br/>
                  Tariq Hook, Adjunct Professor, <br/>
                  Reshid Walker, Ed.D., Asst. Prof. | Delaware State Univ., <br/>
                  Edmund Ameyaw, Ph.D., Asst. Prof. | Howard University
                </td>
                <td className="px-4 py-3 align-middle">Blackburn Center, Blackburn Ballroom</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">2:00 PM – 2:50 PM</td>
                <td className="px-4 py-3">
                  <b>Hands-on Faculty Workshop</b>
                </td>
                <td className="px-4 py-3 align-middle">Blackburn Center, Blackburn Ballroom</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">2:50 PM – 3:00 PM</td>
                <td className="px-4 py-3">
                  <b>Workshop Recap & Sharing</b>
                </td>
                <td className="px-4 py-3 align-middle">Blackburn Center, Blackburn Ballroom</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    <Day1Closing/>
    </div>
  );
}
