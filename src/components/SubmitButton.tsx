type Props = {
  text: string;
};

function SubmitButton({ text }: Props) {
  return (
    <button type="submit" className="submitBtn">
      {text}
    </button>
  );
}

export default SubmitButton;
