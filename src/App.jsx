// import './App.css'
import react, { useState } from "react";
import ProfileForm from "./components/ProfileForm";
import ProfileList from "./components/ProfileList";

function App() {
  const [value, setValue] = useState({
    name: "",
    phone: "",
    email: "",
    profilePic: "",
    bio: "",
  });
  const [editRecords, setEditRecords] = useState(0);

  const [records, setRecords] = useState([
    {
      id: 1,
      name: "femi",
      phone: "0918819919",
      email: "emmafemi0@gmail",
      profilePic:
        "https://pbs.twimg.com/profile_images/1609154394229964800/gHa_TDTd_400x400.jpg",
      bio: "Javascript is good",
    },
  ]);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    console.log("it has entered the form....");
    e.preventDefault();
    // const id = crypto.randomUUID();

    if (editRecords) {
      const editRecord = records.find((i) => i.id === editRecords);
      const updatedTodos = records.map((t) =>
        t.id === editRecord.id
          ? (t = {
              id: t.id,
              name: value.name,
              phone: value.phone,
              email: value.email,
              profilePic: value.profilePic,
              bio: value.bio,
            })
          : {
              id: t.id,
              name: t.name,
              email: t.email,
              profilePic: t.profilePic,
              phone: t.phone,
              bio: t.bio,
            }
      );
      console.log(editRecords);
      console.log("UpdatedTodos", updatedTodos);
      setRecords(updatedTodos);
      setEditRecords(0);
      setValue({
        name: "",
        email: "",
        profilePic: "",
        phone: "",
        bio: "",
      });

      return;
    }

    if (
      (value.name !== "",
      value.phone !== "",
      value.email !== "",
      value.profilePic !== "",
      value.bio !== "")
    ) {
      // const id = Math.floor(Math.random() * 10000) + 1;
      const id = Date.now();

      const payload = {
        id: id,
        name: value.name,
        phone: value.phone,
        email: value.email,
        profilePic: value.profilePic,
        bio: value.bio,
      };

      setRecords([...records, payload]);
      // console.log("payload from form", payload);
      setValue({
        name: "",
        email: "",
        profilePic: "",
        phone: "",
        bio: "",
      });
    }
  };

  const handleDelete = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  const handleEdit = (id) => {
    const editRecord = records.find((r) => r.id === id);
    setValue({
      name: editRecord.name,
      email: editRecord.email,
      phone: editRecord.phone,
      profilePic: editRecord.profilePic,
      bio: editRecord.bio,
    });
    setEditRecords(id);
    console.log(editRecord);
  };

  return (
    <div className="mt-20 mx-auto w-[1300px] gap-20 flex-col lg:flex lg:flex-row border-4 border-red-900">
      <ProfileList
        records={records}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <ProfileForm
        handleSubmit={handleSubmit}
        editRecords={editRecords}
        handleChange={handleChange}
        name={value.name}
        email={value.email}
        phone={value.phone}
        profilePic={value.profilePic}
        bio={value.bio}
      />
    </div>
  );
}

export default App;
