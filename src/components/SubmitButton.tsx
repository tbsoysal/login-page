type Props = {
  text: string;
};

function SubmitButton({ text }: Props) {
  return (
    <button
      type="submit"
      onClick={() => location.reload()}
      className="submitBtn"
    >
      {text}
    </button>
  );
}

export default SubmitButton;
