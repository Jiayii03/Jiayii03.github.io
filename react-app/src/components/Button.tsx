interface Props {
    text: string;
    color?: string; // the question mark is to make this property optional
    onCLick: () => void;
}

// the default value of color is 'success'
export const Button = ({text, color= 'success', onCLick}: Props) => {
  return (
    <button type="button" className={'btn btn-' + color} onClick={onCLick}>
      {text}
    </button>
  );
};
