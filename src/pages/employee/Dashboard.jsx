import React, { useState, useEffect } from "react";
import UserNavbar from "../../components/UserNavbar";
import UserLayout from "../../layout/UserLayout";
import UserDetails from "../../components/user/UserDetails";
import user from "../../assets/icons/user.png";
import { Link } from "react-router-dom";
import CardLayout from "../../layout/CardLayout";
import SectionLayout from "../../layout/SectionLayout";
import ProgressBar from "../../components/user/ProgressBar";
import Accordion from "../../components/user/Accordion";

// component to show each leave details
const EachLeave = ({ label, used, total }) => {
  return (
    <div className="mb-[20px]">
      <div className="flex justify-between text-[#545559] mb-[10px]">
        <span className="text-[14px] font-[500]">{label}</span>
        <span className="text-[14px] font-[500]">
          {used} of {total} days
        </span>
      </div>
      <ProgressBar total={total} used={used} />
    </div>
  );
};

const QuickLinks = ({ path, label }) => {
  return (
    <Link
      to={path}
      className="rounded-full bg-white py-[8px] px-[40px] text-[16px] font-medium"
      style={{ boxShadow: "4px 4px 13px 2px rgba(0,0,0,.15)" }}
    >
      {label}
    </Link>
  );
};

const QuickLinkData = [
  { path: "/apply-for-leave", label: "Apply for Leave" },
  { path: "/take-appraisal", label: "Take Appraisal" },
  { path: "/view-payslip", label: "View Payslip" },
  { path: "/kpi-goals", label: "KPI Goals" },
  { path: "/update-profile", label: "Events" },
  { path: "/update-profile", label: "Update Profile" },
];

const Dashboard = () => {
  const [leaveData, setLeaveData] = useState({
    annualLeave: { used: 2, total: 12 },
    sickLeave: { used: 1, total: 10 },
    compassionate: { used: 1, total: 10 },
  });
  const todo = [
    {
      todoTitle: "Do the project",
      todoDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      todoTitle: "Do the project",
      todoDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
  ];
  const [Birthdays, setBirthdays] = useState([]);

  //   fetch data form the backend
  useEffect(() => {}, []);

  return (
    <UserLayout>
      <h2 className="font-bold text-[#253D90] mt-[30px] mb-[10px]">
        Dashboard
      </h2>

      <UserDetails
        name="Ram Shrestha"
        position="UI/UX Designer"
        imageUrl={user}
      />
      {/* quick links section  */}
      <SectionLayout className="quick-links">
        <h3 className="text-[#1D1D1D] mb-[10px] font-semibold">Quick Links</h3>
        <ul className="flex justify-between">
          {QuickLinkData.map((item, index) => (
            <li key={index}>
              <QuickLinks label={item.label} path={item.path} />
            </li>
          ))}
        </ul>
      </SectionLayout>

      {/* features section  */}
      <SectionLayout className="features grid grid-cols-2 gap-[20px]">
        {/* leave card part  */}
        <CardLayout title="Available Leave Days">
          <EachLeave
            label="Annual Leave"
            used={leaveData.annualLeave.used}
            total={leaveData.annualLeave.total}
          />
          <EachLeave
            label="Sick Leave"
            used={leaveData.sickLeave.used}
            total={leaveData.sickLeave.total}
          />
          <EachLeave
            label="Compassionate Leave"
            used={leaveData.compassionate.used}
            total={leaveData.compassionate.total}
          />
        </CardLayout>
        {/* to do card part  */}
        <CardLayout title="To-dos">
          {todo.map((item, index) => (
            <Accordion title={item.todoTitle} key={index}>
              <p>{item.todoDesc}</p>
            </Accordion>
          ))}
        </CardLayout>
        {/* announcement card part  */}

        <CardLayout title="Announcement(s)">
          <Accordion title="Welcome Saron- We have new staff joining">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{" "}
            </p>
          </Accordion>
          <Accordion title="Welcome Saron- We have new staff joining">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{" "}
            </p>
          </Accordion>
          <Accordion title="Welcome Saron- We have new staff joining">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{" "}
            </p>
          </Accordion>
        </CardLayout>

        {/* birthday card part  */}
        <CardLayout title="Birthdays">
          {Birthdays.length > 0 ? (
            Birthdays.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src="" alt="" className="h-6 w-6 rounded-full" />
                <span>
                  {item.name}'s Day – {item.date}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 font-[400]">No birthdays this month</p>
          )}
        </CardLayout>
      </SectionLayout>
    </UserLayout>
  );
};

export default Dashboard;
