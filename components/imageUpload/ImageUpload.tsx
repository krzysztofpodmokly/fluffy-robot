'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IFormState } from '@/app/types';
import useBearStore from '@/store';

const ImageUpload = () => {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [previewImage, setPreviewImage] = useState<string | undefined>(undefined);
  const updateForm = useBearStore((state: IFormState) => state.updateForm);

  const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return;

    const currentFile = files[0]

    const fileUrl = URL.createObjectURL(currentFile)
    setPreviewImage(fileUrl);
    setFile(currentFile);
    updateForm(fileUrl, 'photo')
  }


  return <>
    <div className="flex items-center">
      {previewImage ? <Image className="block rounded-full mr-4" src={previewImage} width="70" height="30" alt="Current Avatar" /> : <Image className="block rounded-full mr-4" src="/default-avatar.jpg" width="70" height="30" alt="Default Avatar" />}
      <div className="text-center space-y-2 sm:text-left">
        <div className="grid justify-items-start space-y-0.5">
          <label htmlFor='file-input' className="label pl-0 hover:cursor-pointer " >
            <span className="label-text-alt text-xs text-blue-300 hover:text-blue-400">Edit photo</span>
          </label>
          <input id="file-input" style={{ display: 'none' }} className='file-input file-input-ghost w-full max-w-xs text-xs text-blue-300' type="file" accept='image/*' onChange={uploadFile} />

          <button className="text-xs text-rose-600 hover:text-rose-700">
            Delete
          </button>
        </div>
      </div>
    </div>


  </>
}

export default ImageUpload;