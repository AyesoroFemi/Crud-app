import React, { useState } from "react";
import InputForm from "./InputForm";

function ProfileForm({
  handleSubmit,
  editRecords,
  name,
  email,
  phone,
  profilePic,
  bio,
  handleChange,
}) {
  return (
    <form className="basis-1/3 bg-[#87A0CE] p-6" onSubmit={handleSubmit}>
      <InputForm
        name="name"
        type="text"
        value={name}
        handleChange={handleChange}
        labelText="Name"
      />

      <InputForm
        name="phone"
        type="tel"
        value={phone}
        handleChange={handleChange}
        labelText="Phone No"
      />
      <InputForm
        name="email"
        type="email"
        value={email}
        handleChange={handleChange}
        labelText="Email"
      />
      <InputForm
        name="profilePic"
        type="text"
        value={profilePic}
        handleChange={handleChange}
        labelText="Picture"
      />
      <div className="my-2">
        <label htmlFor="">Bio</label>
        <textarea
          className="block px-3 w-full py-1 outline-none rounded-sm"
          type="text"
          name="bio"
          value={bio}
          onChange={handleChange}
        ></textarea>
      </div>
      <button
        type="submit"
        className="py-2 my-4 font-semibold w-full text-center bg-blue-200 hover:bg-blue-400"
      >
        {editRecords ? "Edit" : "Submit"}
      </button>
    </form>
  );
}

export default ProfileForm;
