import React from "react";

function ProfileList({ records, onDelete, onEdit }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 basis-2/3">
      {records.map((record) => (
        <div
          className="flex gap-2 items-center p-2 space-x-4 bg-blue-50 hover:border-2 hover:border-blue-500 rounded-lg"
          key={record.id}
        >
          <img
            className="w-[100px] h-[100px] rounded-full"
            src={record.profilePic}
            alt=""
          />
          <div className="">
            <h3 className="font-semibold text-xl">{record.name}</h3>
            <p className="text-base">{record.email}</p>
            <p className="">{record.bio}</p>
            <button
              className="py-1 px-4 mt-2 border-[1px] rounded-lg text-sm border-blue-700 mr-2"
              onClick={() => onEdit(record.id)}
            >
              Edit
            </button>
            <button
              className="py-1 px-4 mt-2 border-[1px] rounded-lg text-sm border-blue-700 mr-2"
              onClick={() => onDelete(record.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfileList;
