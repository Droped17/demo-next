"use client";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function DeleteBlogButton() {
  const param = useParams();
  //   console.log(param);
  const router = useRouter();
  const [confirmDialog, setConfirmDialog] = useState(false);

  const handleOpenDialog = async () => {
    try {
      setConfirmDialog(true);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleConfirm = async() => {
    // Redirect to "/"
    try {
      // work on local
      // console.log(`ID IS ==> `,param.id);
      // const res = await axios
      // .delete(`http://localhost:3000/api/post/?postId=${param.id}`);
      // console.log(res.data);

      console.log(`ID IS ==> `,param.id);
      const res = await axios
      .delete(`https://hotcoffeeblog.netlify.app/api/post/?postId=${param.id}`);
      console.log(res.data);
      
    } catch (error) {
      console.error("Error",error);
    }

    
    //     axios
    //   .delete(`/api/comment?postId=${id}`)
    //   .then((res) => console.log(res.data));
  };

  return (
    <>
      {confirmDialog && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-4 rounded-md">
            <p className="text-lg font-semibold mb-2">Confirm Delete</p>
            <p className="mb-4">Are you sure you want to delete this blog?</p>
            <div className="flex justify-end">
              <button
                onClick={() => setConfirmDialog(false)}
                className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={handleOpenDialog}
        className="p-1 bg-red-500 text-white rounded-md"
      >
        delete
      </button>
    </>
  );
}
