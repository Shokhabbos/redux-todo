const Footer = ({selector}) => {
  const handleSave = () => {
    localStorage.setItem('todos', JSON.stringify(selector)) 
  }
  
  return (
    <button onClick={handleSave} className="btn btn-primary text-center mx-auto d-block w-25 ">
      Save
    </button>
  );
};

export default Footer;
