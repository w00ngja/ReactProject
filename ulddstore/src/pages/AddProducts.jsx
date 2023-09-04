import React, { useState } from 'react';
import { uploadImage } from '../api/uploader';
import { addNewProduct } from '../api/firebase';

export default function AddProducts() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  // 업로드 중인지, 업로드 완료되었는지 여부 확인할 수 있는 상태
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    // 제품의 사진을 cloudinary에 업로드, URL 획득
    uploadImage(file)
      .then((url) => {
        console.log(url);
        // Firebase에 새로운 제품 추가
        addNewProduct(product, url).then(() => {
          setSuccess('성공적으로 제품이 추가되었습니다.');
          setTimeout(() => {
            setSuccess(null);
          }, 4000);
        });
      })
      .finally(() => setIsUploading(false));
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  return (
    <section className="w-full text-center">
      <h2 className="text-2xl font-bold my-4">새로운 제품 등록</h2>
      {success && <p>✅ {success}</p>}
      {file && <img className="w-96 mx-auto mb-2" src={URL.createObjectURL(file)} alt="local file" />}
      <form className="flex flex-col px-10" onSubmit={handleSubmit}>
        <input type="file" accept="image/*" name="file" required onChange={handleChange} />
        <input
          type="text"
          name="title"
          value={product.title ?? ''}
          placeholder="제품명"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={product.price ?? ''}
          placeholder="가격"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ''}
          placeholder="카테고리"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ''}
          placeholder="제품 설명"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="options"
          value={product.options ?? ''}
          placeholder="옵션들"
          required
          onChange={handleChange}
        />
        <button className="bg-light py-4 rounded text-dark hover:text-black" disabled={isUploading}>
          {isUploading ? '업로드 중..' : '제품 등록하기'}
        </button>
      </form>
    </section>
  );
}
