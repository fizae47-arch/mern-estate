import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { supabase } from '../supabase';

export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  const handleFileUpload = async (selectedFile) => {
    setFileUploadError(false);
    const fileName = `${currentUser._id}_${Date.now()}_${selectedFile.name}`;

    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(fileName, selectedFile, { upsert: true });

    if (uploadError) {
      setFileUploadError(true);
      return;
    }

    const { data: urlData } = supabase.storage
      .from('avatars')
      .getPublicUrl(fileName);

    setFormData((prev) => ({ ...prev, avatar: urlData.publicUrl }));
    setFilePerc(100);
  };

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type='file'
          ref={fileRef}
          hidden
          accept='image/*'
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentUser.avatar}
          alt='profile'
          referrerPolicy='no-referrer'
          className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
        />
        <p className='text-sm self-center'>
          {fileUploadError ? (
            <span className='text-red-700'>Image upload failed</span>
          ) : filePerc === 100 ? (
            <span className='text-green-700'>Image uploaded!</span>
          ) : ''}
        </p>
        <input type='text' placeholder='username' id='username'
          className='border p-3 rounded-lg w-full' />
        <input type='text' placeholder='email' id='email'
          className='border p-3 rounded-lg w-full' />
        <input type='password' placeholder='password' id='password'
          className='border p-3 rounded-lg w-full' />
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80 w-full'>
          Update
        </button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
    </div>
  );
}