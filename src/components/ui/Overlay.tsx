import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  onConfirm: (prev: any) => void;
}

export const Backdrop: React.FC<Props> = ({ onConfirm }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-10 bg-[rgba(0,0,0,0.1)]"
      onClick={() => onConfirm((prev: any) => !prev)}
    />
  );
};

export const Overlay = ({ onConfirm }: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById(`overlays`) as Element,
      )}
    </>
  );
};
