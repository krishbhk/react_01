interface ButtonProp {
    name: string,
    color?: string,
    onClickBtn: () => void,
    
}

const Button = ({name, onClickBtn, color='primary'}: ButtonProp) => {
  return (
    <button type="button" className={"btn btn-"+color} onClick={onClickBtn}>
      {name}
    </button>
  );
};

export default Button;
