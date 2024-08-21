const Form = ({ onSubmit }) => {
  const safeSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const name = e.target[0].value;
    const email = e.target[1].value;
    onSubmit({ name, email });
  };
  return (
    <form onSubmit={(e) => safeSubmit(e)}>
      <input type="text" placeholder="Insira seu nome..." />
      <input type="email" placeholder="Insira seu email..." />
      <button type="submit">Seguir</button>
    </form>
  );
};

export default Form;
