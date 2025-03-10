type Props = {
  text: string;
};

function SubmitButton({ text }: Props) {
  return (
    <input
      type="submit"
      onClick={() => location.reload()}
      className="submitBtn"
      value={text}
    />
  );
}

export default SubmitButton;
