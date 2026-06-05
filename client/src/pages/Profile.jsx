import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import {
  updateUserStart,
  updateUserFailure,
  updateUserSuccess,
  signOutSuccess,
} from '../redux/user/userSlice';

export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!currentUser) {
    return (
      <div className="p-3 max-w-lg mx-auto text-center mt-10">
        <h1 className="text-2xl font-semibold">No user logged in</h1>
      </div>
    );
  }

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
    const { data } = supabase.storage.from('avatars').getPublicUrl(fileName);
    setFormData((prev) => ({ ...prev, avatar: data.publicUrl }));
    setFilePerc(100);
  };

  useEffect(() => {
    if (file) handleFileUpload(file);
  }, [file]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch('/api/auth/signout');
    } catch (error) {
      console.log(error);
    }
    dispatch(signOutSuccess());
    navigate('/signin');
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentUser.avatar}
          alt="profile"
          referrerPolicy="no-referrer"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />
        <p className="text-sm self-center">
          {fileUploadError ? (
            <span className="text-red-700">Image upload failed</span>
          ) : filePerc === 100 ? (
            <span className="text-green-700">Image uploaded!</span>
          ) : ''}
        </p>
        <input type="text" placeholder="username" id="username"
          value={formData.username ?? currentUser.username}
          onChange={handleChange} className="border p-3 rounded-lg w-full" />
        <input type="text" placeholder="email" id="email"
          value={formData.email ?? currentUser.email}
          onChange={handleChange} className="border p-3 rounded-lg w-full" />
        <input type="password" placeholder="password" id="password"
          value={formData.password ?? ''}
          onChange={handleChange} className="border p-3 rounded-lg w-full" />
        <button disabled={loading}
          className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80 w-full">
          {loading ? 'Updating...' : 'Update'}
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span onClick={handleSignOut} className="text-red-700 cursor-pointer">
          Sign out
        </span>
      </div>
      <p className='text-red-700 mt-5'>{error ? error : ''}</p>
      <pc className='text-green-700 mt-5'> {updateSuccess ? 'User is updated successfully' : ''}</pc>
    </div>
  );
}