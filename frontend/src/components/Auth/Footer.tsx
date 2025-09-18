import React from "react";

type FooterProps = {
  owner?: string;
};

const Footer: React.FC<FooterProps> = ({ owner = "Irshad" }) => {
  return (
    <div className="text-center text-sm text-gray-500 mt-6">
      © {new Date().getFullYear()} All Rights Reserved | {owner}
    </div>
  );
};

export default Footer;
