import React from "react";
import DiscordInvite from "../components/DiscordInvite";
export default function Discord() {
  return (
    <div>
      <div className="container mx-auto">
        {/* button invite */}
        <div className="flex justify-center flex-col items-center content-between">
          <DiscordInvite />

          <iframe
            title="Discord"
            src="https://discord.com/widget?id=614357624191975424&theme=dark"
            width="350"
            height="500"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>
      </div>
    </div>
  );
}
