import React from "react";
import Image from "next/image";
import Twitter from "/public/assets/social_twitter.png";
import Facebook from "/public/assets/social_facebook.png";
import Instagram from "/public/assets/social_instagram.png";
import Google from "/public/assets/social_google.png";
import Discord from "/public/assets/social_discord.png";

type Props = {
  isDark?: boolean;
};

const SocialLinks = ({ isDark = false }: Props) => {
  return (
    <div className="flex justify-between items-center gap-7">
      <a href="https://twitter.com" target="_blank" rel="noreferrel">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-7`}
          alt="twitter"
          src={Twitter}
          width={20}
          height={20}
        />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrel">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-7`}
          alt="facebook"
          src={Facebook}
          width={20}
          height={20}
        />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrel">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-7`}
          alt="instagram"
          src={Instagram}
          width={20}
          height={20}
        />
      </a>
      <a href="https://google.com" target="_blank" rel="noreferrel">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-7`}
          alt="google"
          src={Google}
          width={20}
          height={20}
        />
      </a>
      <a href="https://discord.com" target="_blank" rel="noreferrel">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-7`}
          alt="discord"
          src={Discord}
          width={20}
          height={20}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
