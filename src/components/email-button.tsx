"use client";

function onClickEmail() {
  navigator.clipboard.writeText("ronald@rdrd.io");
  alert("Email copied to clipboard");
}

const EmailButton: React.FC<{
  className?: string;
}> = (props) => {
  return (
    <button className={props.className} onClick={onClickEmail}>
      Email
    </button>
  );
};

export default EmailButton;
