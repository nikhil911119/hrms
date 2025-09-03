import React from "react";
import detailDecoration from "../../assets/icons/detail-decoration.svg";
import PrimaryButton from "../PrimaryButton";
const UserDetails = ({ name, position, imageUrl }) => {
  return (
    <div className="details text-white mb-[40px]">
      <div className="bg-[#193288] h-[150px]  rounded-[10px] p-[30px] flex items-center relative justify-between">
        <div className="flex items-center gap-[20px] ">
          <figure className="h-[70px] w-[70px] rounded-full">
            <img
              src={imageUrl}
              alt="img"
              className="object-cover h-full w-full"
            />
          </figure>
          <div className="flex flex-col gap-[5px]">
            <h3 className="font-bold">{name}</h3>
            <span>{position}</span>
          </div>
        </div>
        <PrimaryButton label="Edit Profile" classname="mr-[180px]" />
        <img
          src={detailDecoration}
          className="absolute right-[-60px] scale-[.8] top-[50%] translate-y-[-55%] "
        />
      </div>
    </div>
  );
};

export default UserDetails;
