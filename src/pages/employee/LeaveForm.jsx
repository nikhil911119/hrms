import React, { useState, useEffect } from "react";
import SectionLayout from "../../layout/SectionLayout";
import UserLayout from "../../layout/UserLayout";
import { useParams } from "react-router-dom";

const LeaveForm = () => {
  const { "leave-type": leaveTypeSlug } = useParams();

  const leaveType = leaveTypeSlug
    ? leaveTypeSlug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  // Form state
  const [formData, setFormData] = useState({
    start_date: "",
    end_date: "",
    duration: "",
    resumption_date: "",
    reason: "",
    relief_officer_id: "",
    handover_doc: null,
  });

  // Error state
  const [errors, setErrors] = useState({});

  const [reliefOfficers, setReliefOfficers] = useState([]);

  useEffect(() => {
    // Example: fetch relief officers
    setReliefOfficers([
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      { id: 3, name: "Alice Johnson" },
    ]);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "duration") {
      if (value === "" || Number(value) >= 1) {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    } else if (name === "handover_doc") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error for this field when user changes it
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.start_date) newErrors.start_date = "Start date is required.";
    if (!formData.end_date) newErrors.end_date = "End date is required.";
    if (
      formData.start_date &&
      formData.end_date &&
      formData.end_date < formData.start_date
    )
      newErrors.end_date = "End date cannot be before start date.";
    if (!formData.duration) newErrors.duration = "Duration is required.";
    if (!formData.resumption_date)
      newErrors.resumption_date = "Resumption date is required.";
    if (!formData.reason) newErrors.reason = "Reason is required.";
    if (!formData.relief_officer_id)
      newErrors.relief_officer_id = "Please select a relief officer.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop submission
    }

    const submitData = {
      leave_type: leaveType,
      ...formData,
    };

    console.log("Submitting form:", submitData);
    // TODO: API call here
  };

  return (
    <UserLayout>
      {/* Breadcrumb */}
      <div className="bg-white mt-[20px] mb-[30px] flex items-center justify-between px-[40px] py-[25px] font-medium">
        <span className="text-[18px] text-[#545559]">
          Dashboard &gt; Apply for {leaveType} Leave
        </span>
      </div>

      <SectionLayout>
        <form
          onSubmit={handleSubmit}
          onReset={() => {
            setFormData({
              start_date: "",
              end_date: "",
              duration: "",
              resumption_date: "",
              reason: "",
              relief_officer_id: "",
              handover_doc: null,
            });
            setErrors({});
          }}
          className="bg-white p-[50px] text-[16px] font-[400] mx-[150px] text-[#1D1D1D] grid grid-cols-2 gap-x-[40px] gap-y-[20px]"
        >
          {/* Heading */}
          <div className="col-span-2 flex flex-col items-center mb-[20px] gap-[10px]">
            <h3 className="font-semibold text-xl">Leave Application</h3>
            <p>Fill the required fields below to apply for {leaveType}</p>
          </div>

          {/* Leave Type */}
          <div className="col-span-2">
            <label className="block mb-[10px]">Leave Type</label>
            <span className="p-[10px] rounded-[10px] bg-[#E3EDF9] block">
              {leaveType}
            </span>
          </div>

          {/* Start Date */}
          <div className="flex flex-col gap-[5px]">
            <label htmlFor="start_date">Start Date</label>
            <input
              type="date"
              id="start_date"
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
              className="px-[10px] py-[10px] bg-[#E3EDF9] rounded-[10px]"
            />
            {errors.start_date && (
              <span className="text-red-500 text-sm">{errors.start_date}</span>
            )}
          </div>

          {/* End Date */}
          <div className="flex flex-col gap-[5px]">
            <label htmlFor="end_date">End Date</label>
            <input
              type="date"
              id="end_date"
              name="end_date"
              value={formData.end_date}
              onChange={handleChange}
              className="px-[10px] py-[10px] bg-[#E3EDF9] rounded-[10px]"
            />
            {errors.end_date && (
              <span className="text-red-500 text-sm">{errors.end_date}</span>
            )}
          </div>

          {/* Duration */}
          <div className="flex flex-col gap-[5px]">
            <label htmlFor="duration">Duration (days)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              min={1}
              value={formData.duration}
              onChange={handleChange}
              className="px-[10px] py-[10px] bg-[#E3EDF9] rounded-[10px]"
            />
            {errors.duration && (
              <span className="text-red-500 text-sm">{errors.duration}</span>
            )}
          </div>

          {/* Resumption Date */}
          <div className="flex flex-col gap-[5px]">
            <label htmlFor="resumption_date">Resumption Date</label>
            <input
              type="date"
              id="resumption_date"
              name="resumption_date"
              value={formData.resumption_date}
              onChange={handleChange}
              className="px-[10px] py-[10px] bg-[#E3EDF9] rounded-[10px]"
            />
            {errors.resumption_date && (
              <span className="text-red-500 text-sm">
                {errors.resumption_date}
              </span>
            )}
          </div>

          {/* Reason */}
          <div className="flex flex-col gap-[5px] col-span-2">
            <label htmlFor="reason">Reason of Leave</label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="px-[10px] py-[10px] bg-[#E3EDF9] rounded-[10px] h-[80px]"
            />
            {errors.reason && (
              <span className="text-red-500 text-sm">{errors.reason}</span>
            )}
          </div>

          {/* Handover Document */}
          <div className="flex flex-col gap-[5px] col-span-2">
            <label htmlFor="handover_doc">Attach Handover Document</label>
            <input
              type="file"
              id="handover_doc"
              name="handover_doc"
              onChange={handleChange}
              className="px-[10px] py-[10px] bg-[#E3EDF9] rounded-[10px]"
            />
          </div>

          {/* Relief Officer */}
          <div className="flex flex-col gap-[5px] col-span-2">
            <label htmlFor="relief_officer">Choose Relief Officer</label>
            <select
              id="relief_officer"
              name="relief_officer_id"
              value={formData.relief_officer_id}
              onChange={handleChange}
              className="px-[10px] py-[10px] bg-[#E3EDF9] rounded-[10px]"
            >
              <option value="" disabled>
                Select Relief Officer
              </option>
              {reliefOfficers.map((officer) => (
                <option key={officer.id} value={officer.id}>
                  {officer.name}
                </option>
              ))}
            </select>
            {errors.relief_officer_id && (
              <span className="text-red-500 text-sm">
                {errors.relief_officer_id}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="col-span-2 flex gap-[20px]">
            <button
              type="submit"
              className="bg-[#3F861E] text-white rounded-[10px] py-[10px] font-[400] flex-1"
            >
              Submit
            </button>
            <button
              type="reset"
              className="bg-transparent border-2 border-red-500 text-red-500 rounded-[10px] py-[10px] font-[400] flex-1"
            >
              Reset
            </button>
          </div>
        </form>
      </SectionLayout>
    </UserLayout>
  );
};

export default LeaveForm;
