import './DeleteButton.scss';

export default function DeleteButton({onClick, text}) {
  return (
    <button className={"button__delete"} onClick={onClick}>{text}</button>
  )
}