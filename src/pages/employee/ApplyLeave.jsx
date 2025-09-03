import React, { useState } from "react";
import SectionLayout from "../../layout/SectionLayout";
import UserLayout from "../../layout/UserLayout";
import { Link } from "react-router-dom";

/** Single leave card */
const EachLeaveCard = ({ remainingLeave, label }) => {
  return (
    <div className="leave-card bg-[#253D90] rounded-[16px] p-4 pr-[25px] text-white flex items-center mb-[20px] gap-3 shadow-md justify-between">
      <span className="text-[42px] text-[#253D90] rounded-full bg-white h-[90px] aspect-square font-bold flex items-center justify-center">
        {remainingLeave}
      </span>
      <div className="flex flex-col gap-2 items-center">
        <h4 className="text-lg font-medium">{label}</h4>
        <Link
          to="/apply-for-leave/form" // adjust if you have a specific form route
          className="bg-[#FFC20E] text-[#1D1D1D] font-semibold px-[40px] py-[4px] rounded-full text-center text-[14px]"
        >
          Apply
        </Link>
      </div>
    </div>
  );
};

const ApplyLeave = () => {
  const [leaveData] = useState({
    annualLeave: 10,
    sickLeave: 2,
    maternityLeave: 2,
    compassionateLeave: 4,
  });

  const [leaveHistory] = useState([
  {
    name: "Annual Leave",
    duration: "3 days",
    startDate: "2025-09-01",
    endDate: "2025-09-03",
    type: "Annual",
    reason: "Family event",
    status: "Approved",
  },
  {
    name: "Sick Leave",
    duration: "1 day",
    startDate: "2025-08-20",
    endDate: "2025-08-20",
    type: "Sick",
    reason: "Flu",
    status: "Approved",
  },
  {
    name: "Compassionate Leave",
    duration: "2 days",
    startDate: "2025-07-15",
    endDate: "2025-07-16",
    type: "Compassionate",
    reason: "Family emergency",
    status: "Approved",
  },
  {
    name: "Annual Leave",
    duration: "5 days",
    startDate: "2025-06-10",
    endDate: "2025-06-14",
    type: "Annual",
    reason: "Vacation trip",
    status: "Pending",
  },
  {
    name: "Maternity Leave",
    duration: "60 days",
    startDate: "2025-05-01",
    endDate: "2025-06-30",
    type: "Maternity",
    reason: "Child birth",
    status: "Approved",
  },
  {
    name: "Sick Leave",
    duration: "2 days",
    startDate: "2025-04-12",
    endDate: "2025-04-13",
    type: "Sick",
    reason: "Medical procedure",
    status: "Rejected",
  },
  {
    name: "Annual Leave",
    duration: "1 day",
    startDate: "2025-03-22",
    endDate: "2025-03-22",
    type: "Annual",
    reason: "Personal work",
    status: "Approved",
  },
  {
    name: "Compassionate Leave",
    duration: "1 day",
    startDate: "2025-02-18",
    endDate: "2025-02-18",
    type: "Compassionate",
    reason: "Family matter",
    status: "Approved",
  },
]);


  return (
    <UserLayout>
      {/* Breadcrumb header */}
      <div className="bg-white mt-[20px] mb-[30px] flex items-center justify-between px-[40px] py-[25px] font-medium">
        <span className="text-[18px] text-[#545559]">
          Dashboard &gt; Apply for Leave
        </span>
      </div>

      {/* Leave Application Section */}
      <SectionLayout className="bg-white p-[20px] rounded-xl shadow leave-applications">
        <div className="heading flex items-center gap-[10px] p-[20px] border-b">
          <img src="../" alt="icon" className="h-6 w-6" />
          <h2 className="font-[500] text-[20px]">Leave Application</h2>
        </div>

        {/* Leave cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          <EachLeaveCard label="Annual Leave" remainingLeave={leaveData.annualLeave} />
          <EachLeaveCard label="Sick Leave" remainingLeave={leaveData.sickLeave} />
          <EachLeaveCard label="Maternity Leave" remainingLeave={leaveData.maternityLeave} />
          <EachLeaveCard label="Compassionate Leave" remainingLeave={leaveData.compassionateLeave} />
        </div>
      </SectionLayout>

      {/* Leave History Section */}
      <SectionLayout className="leave-history bg-white mt-6 rounded-xl shadow p-[20px]">
        <div className="heading mb-4">
          <h3 className="font-[600] text-[18px]">Leave History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-[#545559]">
                <th className="px-4 py-2 font-medium">Name</th>
                <th className="px-4 py-2 font-medium">Duration</th>
                <th className="px-4 py-2 font-medium">Start Date</th>
                <th className="px-4 py-2 font-medium">End Date</th>
                <th className="px-4 py-2 font-medium">Type</th>
                <th className="px-4 py-2 font-medium">Reason</th>
                <th className="px-4 py-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {leaveHistory.length > 0 ? (
                leaveHistory.map((item, index) => (
                  <tr key={index} className="border-b last:border-none">
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.duration}</td>
                    <td className="px-4 py-2">{item.startDate}</td>
                    <td className="px-4 py-2">{item.endDate}</td>
                    <td className="px-4 py-2">{item.type}</td>
                    <td className="px-4 py-2">{item.reason}</td>
                    <td className="px-4 py-2">{item.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center px-4 py-4 text-gray-500">
                    No leave records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </SectionLayout>
    </UserLayout>
  );
};

export default ApplyLeave;
