import React, { useState } from "react";

interface HoverBoxProps {
  children: React.ReactNode;
  hoverText: string;
}

const HoverBox: React.FC<HoverBoxProps> = ({ children, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hover-box"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && <div className="hover-text">{hoverText}</div>}
      <style jsx>{`
        .hover-box {
          position: relative;
          display: inline-block;
        }
        .hover-text {
          visibility: ${isHovered ? "visible" : "hidden"};
          width: 120px;
          background-color: black;
          color: #fff;
          text-align: center;
          border-radius: 6px;
          padding: 5px 0;
          position: absolute;
          z-index: 1;
          bottom: 125%; /* Posicione acima da caixa */
          left: 50%;
          margin-left: -60px; /* Use metade da largura para centralizar */
          opacity: ${isHovered ? 1 : 0};
          transition: opacity 0.3s;
        }
      `}</style>
    </div>
  );
};

export default HoverBox;
