"use client";

import React, { useState, useEffect } from "react";

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [usernames, setUsernames] = useState<string[]>([]);

  useEffect(() => {
    const randomUsernames: string[] = [
      "user123",
      "john_doe",
      "alice123",
      "webdev_guru",
      "react_lover",
    ];

    setUsernames(randomUsernames);
  }, []);

  return (
    <div>
      <h1>Usernames:</h1>
      <ul>
        {usernames?.map((username, index) => (
          <li key={index}>{username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
