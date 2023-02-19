import React from "react";
import { Link } from "react-router-dom";

const DiscordInvite = () => {
  const inviteLink = "https://discord.gg/8btdhb8S9v";

  return (
    <a href={inviteLink} target="_blank">
      <button className="bg-discord text-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-5">
        Join our Discord server
      </button>
    </a>
  );
};

export default DiscordInvite;
