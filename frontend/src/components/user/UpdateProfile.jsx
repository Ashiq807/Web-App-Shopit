import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import { useUpdateProfileMutation } from "../../redux/api/userApi";
import UserLayout from "../layout/UserLayout";
import MetaData from "../layout/MetaData";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const [updateProfile, { isLoading, error, isSuccess }] =
    useUpdateProfileMutation();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      setName(user?.name);
      setEmail(user?.email);
    }

    if (error) {
      toast.error(error?.data?.message);
    }

    if (isSuccess) {
      toast.success("User Updated");
      navigate("/me/profile");
    }
  }, [user, error, isSuccess, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      name: name,
      email: email,
    };

    updateProfile(userData);
  };

  return (
    <UserLayout>
      <MetaData title="Update Profile" />
      <div class="row wrapper">
        <div class="col-10 col-lg-8">
          <form class="shadow rounded bg-body" onSubmit={submitHandler}>
            <h2 class="mb-4">Update Profile</h2>

            <div class="mb-3">
              <label htmlFor="name_field" class="form-label">
                {" "}
                Name{" "}
              </label>
              <input
                type="text"
                id="name_field"
                class="form-control"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div class="mb-3">
              <label htmlFor="email_field" class="form-label">
                {" "}
                Email{" "}
              </label>
              <input
                type="email"
                id="email_field"
                class="form-control"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              class="btn update-btn w-100"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update"}
            </button>
          </form>
        </div>
      </div>
    </UserLayout>
  );
};

export default UpdateProfile;
