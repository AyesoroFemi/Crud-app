import react, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [bio, setBio] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // const id = crypto.randomUUID();

    if (editRecords) {
      const editRecord = records.find((i) => i.id === editRecords);
      const updatedTodos = records.map((t) =>
        t.id === editRecord.id
          ? (t = { id: t.id, name, phone, email, profilePic, bio })
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
      setName("");
      setEmail("");
      setPhone("");
      setProfilePic("");
      setBio("");
      return;
    }

    if (
      (name !== "", phone !== "", email !== "", profilePic !== "", bio !== "")
    ) {
      // const id = Math.floor(Math.random() * 10000) + 1;
      const id = Date.now();

      const payload = {
        id: id,
        name: name,
        phone: phone,
        email: email,
        profilePic: profilePic,
        bio: bio,
      };

      setRecords([...records, payload]);
      console.log("payload from form", payload);
      setName("");
      setEmail("");
      setPhone("");
      setProfilePic("");
      setBio("");
    }
  };

  const handleDelete = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  const handleEdit = (id) => {
    const editRecord = records.find((r) => r.id === id);
    setName(editRecord.name);
    setEmail(editRecord.email);
    setPhone(editRecord.phone);
    setProfilePic(editRecord.profilePic);
    setBio(editRecord.bio);
    setEditRecords(id);
    console.log(editRecord);
  };

  return (
    <div className="mt-20 mx-auto w-[1300px] gap-20 flex-col lg:flex lg:flex-row border-4 border-red-900">
      <div className="grid md:grid-cols-2 gap-6 basis-2/3">
        {records.map((record) => (
          <div
            className="flex gap-2 items-center p-2 space-x-4 border-4 border-red-400"
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
                className="py-1 px-4 border-2 border-red-700 mr-2"
                onClick={() => handleEdit(record.id)}
              >
                Edit
              </button>
              <button
                className="py-1 px-4 border-2 border-red-700 mr-2"
                onClick={() => handleDelete(record.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <form className="basis-1/3" onSubmit={handleSubmit}>
        <div className="my-2">
          <label htmlFor="">Name</label>
          <input
            className="block w-full py-1 border-2 border-blue-900 rounded-sm"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="my-2">
          <label htmlFor="">Phone No</label>
          <input
            className="block w-full py-1 border-2 border-blue-900 rounded-sm"
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="my-2">
          <label htmlFor="">Email</label>
          <input
            className="block w-full py-1 border-2 border-blue-900 rounded-sm"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-2">
          <label htmlFor="">Picture</label>
          <input
            className="block w-full py-1 border-2 border-blue-900 rounded-sm"
            type="text"
            name="image"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />
        </div>
        <div classNme="my-2">
          <label htmlFor="">Bio</label>
          <textarea
            className="block w-full py-1 border-2 border-blue-900 rounded-sm"
            type="text"
            name="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-2 my-4 w-full text-center bg-blue-200 hover:bg-blue-700"
        >
          {editRecords ? "Edit" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default App;
