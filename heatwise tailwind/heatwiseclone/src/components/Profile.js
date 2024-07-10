import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { CameraIcon, TrashIcon, XIcon } from '@heroicons/react/outline';

const Profile = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [profileImage, setProfileImage] = useState('heatwiseclone/src/assets/home1.jpg'); 
  const [galleryImages, setGalleryImages] = useState([
    'heatwiseclone/src/assets/home2.jpg',
    'heatwiseclone/src/assets/home3.jpg',
  ]);

  const openGallery = () => setIsGalleryOpen(true);
  const closeGallery = () => setIsGalleryOpen(false);

  const handleImageClick = (image) => {
    setProfileImage(image);
    closeGallery();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>
      <div className="flex flex-col items-center mb-8">
        <div className="relative mb-4">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover cursor-pointer"
            onClick={openGallery}
          />
          <button
            className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow"
            onClick={openGallery}
          >
            <CameraIcon className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="profileImageInput"
          onChange={handleFileChange}
        />
        <label htmlFor="profileImageInput" className="mb-4 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded">
          Change Image
        </label>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded mb-8"
          onClick={() => setProfileImage('')}
        >
          <TrashIcon className="h-5 w-5 inline-block mr-2" />
          Delete Image
        </button>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Second Name</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Telephone Number</label>
          <input
            type="tel"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded self-end"
        >
          Save
        </button>
        <button
          type="Logout"
          className="bg-blue-500 text-white px-4 py-2 rounded self-end"
        >
          Logout
        </button>

      </form>

      <Dialog open={isGalleryOpen} onClose={closeGallery} className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <Dialog.Title className="text-lg font-medium text-gray-900">Gallery</Dialog.Title>
              <button onClick={closeGallery}>
                <XIcon className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery ${index}`}
                  className="w-full h-32 object-cover cursor-pointer rounded"
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={closeGallery}
            >
              Close
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Profile;
