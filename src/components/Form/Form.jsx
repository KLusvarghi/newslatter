const Form = ({ onSubmit }) => {
  const safeSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const name = e.target[0].value;
    const email = e.target[1].value;
    onSubmit({ name, email });
  };
  return (
    // h-full é igual a height = 100%
    // -mt-20 irá aplicar uma margin top negativa
    <form
      onSubmit={(e) => safeSubmit(e)}
      className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5"
    >
      <input
        type="text"
        className="alura-input"
        required
        placeholder="Insira seu nome..."
      />
      <input
        type="email"
        className="alura-input"
        required
        placeholder="Insira seu email..."
      />
      <button type="submit" className="alura-button">
        Seguir
      </button>
    </form>
  );
};

export default Form;
