import './search-box.styles.css';
// css notes:
// Unlike Angular projects where component css files only applies to the html component file that accompanies, in React projects there is a propagation effect for the css that is imported in one of the components that forms up the app. This means that css will apply to other components (no matter the level of depth) either imported in the relevant html component file or not, it is enough that it is imported in just one html file. The only reason that we split css files into different component folders is for the sake of clarity so it helps us to be more organised and identify where this css should apply to. Angular, however, prevent this propagation by limiting its application to the html component file that accompies rather than being of help to us to be organised, which can also be helpful though

const SearchBox = (props) => {
  const { className, onChangeHandler, placeholder } = props;

  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
