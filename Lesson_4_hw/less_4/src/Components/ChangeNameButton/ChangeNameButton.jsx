
import './ChangeNameButton.scss';
export default function ChangeNameButton({onClick, text}) {

  return (
    <button className={"button__change"} onClick={onClick}>{text}</button>
  );
}