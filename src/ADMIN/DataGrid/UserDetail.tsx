import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function UserDetails() {
  const { id } = useParams(); // Get the user ID from the URL
  const location = useLocation();
  const user = location.state?.user; // Get the user data passed via state

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Details</h1>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Position:</strong> {user.position}</p>
      <p><strong>Company:</strong> {user.company}</p>
      <p><strong>Salary:</strong> {user.salary}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Country:</strong> {user.country}</p>
      <p><strong>Date Created:</strong> {user.dateCreated}</p>
      <p><strong>Is Admin:</strong> {user.isAdmin ? "Yes" : "No"}</p>
    </div>
  );
}