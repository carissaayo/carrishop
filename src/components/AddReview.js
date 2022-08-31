import React from 'react'
import { StarFill, Star } from "react-bootstrap-icons";

const AddReview = () => {
  return (
    <section className="w-full mb-20">
      <h1 className="mb-10 text-2xl font-bold">Add a Review</h1>
      <div className="flex gap-4 sm:gap-14 items-center mb-10">
        <p className="sm:text-lg">Your Rating</p>
        <div className="flex gap-2">
          <Star className="text-lg  text-secondaryColor cursor-pointer" />
          <Star className="text-lg  text-secondaryColor cursor-pointer" />
          <Star className="text-lg  text-secondaryColor cursor-pointer" />
          <Star className="text-lg  text-secondaryColor cursor-pointer" />
          <Star className="text-lg  text-secondaryColor cursor-pointer" />
        </div>
      </div>

      {/* Review Textarea */}
      <div className="flex items-start gap-8 sm:gap-12 mb-10 flex-col sm:flex-row w-full">
        <label htmlFor="review" className="">
          Your Review <span className="text-[#FF0000] ml-2">*</span>
        </label>
        <textarea
          name="review"
          id="review"
          cols="30"
          rows="10"
          className="border border-[#EEEEEE] outline-[#EEEEEE] outline-2 w-full sm:w-[80%] p-4"
        />
      </div>
      {/* Name of User  */}
      <div className="flex items-start gap-8 sm:gap-24 mb-10 flex-col sm:flex-row w-full">
        <label htmlFor="name" className="">
          Name<span className="text-[#FF0000] ml-2">*</span>
        </label>
        <input
          type="text"
          name="name"
          className="border border-[#EEEEEE] outline-[#EEEEEE] outline-2 w-full sm:w-[80%] p-4"
        />
      </div>

      {/* User Email */}
      <div className="flex items-start gap-8 sm:gap-24 mb-10 flex-col sm:flex-row w-full">
        <label htmlFor="name" className="">
          Email<span className="text-[#FF0000] ml-2">*</span>
        </label>
        <input
          type="email"
          name="name"
          className="border border-[#EEEEEE] outline-[#EEEEEE] outline-2 w-full sm:w-[80%] p-4"
        />
      </div>

      {/* Save details */}
      <div className="flex items-start gap-8 mb-10">
        <input
          type="checkbox"
          name="name"
          className="border border-[#EEEEEE] w-12 h-8 rounded-sm"
        />
        <p className="sm:text-lg">
          Save my name and email on this website incase of next time I comment
        </p>
      </div>
      <div className="flex items-start gap-8 mb-10">
        <button className="bg-[#FCA311] text-primaryColor p-4 px-6 md:px-10 md:text-xl rounded-full">Add Review</button>
      </div>
    </section>
  );
}

export default AddReview