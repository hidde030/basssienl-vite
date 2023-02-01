import { useState } from "react";

export default function UploadImage({ setShowImage }) {
  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [imageName, setImageName] = useState();

  const submit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("description", description);
    console.log(formData);

    // const result = await axios.post("/api/images", formData, {
    //   headers: { "Content-Type": "multipart/form-data" },
    // });
    const result = await fetch("http://localhost:3000/api/images", {
      method: "POST",
      body: formData,
    });

    setImageName(result.data.imageName);
    setShowImage(false);
  };

  return (
    <div className=" fixed inset-0 top-12 grid text-center bg-card_bg ">
      <div className=" mx-auto container flex flex-col h-screen justify-center">
        <form onSubmit={submit}>
          <input
            filename={file}
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            accept="image/*"></input>
          <input onChange={(e) => setDescription(e.target.value)} type="text"></input>
          <button type="submit">Upload image naar de server</button>
        </form>
      </div>
    </div>
  );
}
