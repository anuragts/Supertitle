'use client'
import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import supabase from "@/lib/storage/client";

export default function Page() {
  const [udata, setUdata] = useState<string | undefined>("");
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [imageList, setImageList] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const fetchImageList = async () => {
    try {
      const { data, error } = await supabase
        .storage
        .from('uploads')
        .list('images', { limit: 5, offset: 0 });

      if (error) {
        throw error;
      }

      const imagePaths = data?.map((item) => item.name) || [];
      setImageList(imagePaths);
    } catch (error) {
      console.error("Error fetching image list:", error);
    }
  };

  useEffect(() => {
    fetchImageList();
  }, []); 

  async function uploadFile() {
    const file = fileInputRef.current?.files?.[0];

    if (file) {
      setIsUploading(true);

      const { data, error } = await supabase.storage
        .from('uploads')
        .upload(`temp/${uuidv4()}`, file);

      setError(error ? true : false);
      setErrorMessage(error?.message);
      setUdata(data?.path);

      setIsUploading(false);

      fetchImageList();
    } else {
      setError(true);
      setErrorMessage("Please select a file.");
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="p-6 rounded shadow-md w-96  ">
                <div className="text-5xl font-bold text-center my-8">
                Upload Image 
                </div>
                <div className="text-lg mb-5 mt-2 font-semibold text-red-500 text-center">
                images are public so don't upload anything sensitive
                </div>
          <input
            type="file"
            ref={fileInputRef}
            className="bg-white rounded text-black py-2 px-4 mb-4 w-full"
            disabled={isUploading}
          />
          <button
            className={`bg-white text-black rounded py-2 px-4 mb-4 w-full ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => {
              uploadFile();
            }}
            disabled={isUploading}
          >
            {isUploading ? 'Uploading...' : 'Upload File'}
          </button>
          <div className="text-center mb-4">Path send from server</div>
          {udata && <div className="max-w-full"> {udata}</div> }
          <div className="mt-4">
            <hr />
            <h3 className="text-lg font-semibold mb-2 mt-5">Uploaded Images:</h3>
            <div className="text-xl font-semibold text-blue-400">
                Feature coming soon
            </div>
            {/* <ul>
              {imageList.map((imagePath, index) => (
                <li key={index}>
                  <img
                    src={`https://stipkgyabonvngkjydrh.supabase.co/storage/v1/object/sign/uploads/images/28838ab8-0d5f-4fef-80ba-7728dc4131fe${imagePath}`}
                    alt={`Image ${index}`}
                    className="max-w-full"
                  />
                </li>
              ))}
            </ul> */}
          </div>
        </div>
        {error && (
          <div className="text-red-600 font-semibold mt-4">
            Error - {errorMessage}
          </div>
        )}
      </div>
    </>
  );
}
