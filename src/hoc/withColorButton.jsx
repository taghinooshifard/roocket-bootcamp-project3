import PropTypes from 'prop-types';


function withColorButton(MyActionButton,tailwindColorName,icon,caption,clickHandler) {
    let className = "";
    switch (tailwindColorName) {
        case "green":
            className = "bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80";
            break;
        case "red":
            className = "bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80"
            break;
        case "blue":
            className = "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80"
            break;
        default:
            className = "bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80";
            break;
    }
  return (<MyActionButton clickHandler={clickHandler} icon={icon} caption={caption}  className={className}/>)
}

withColorButton.propTypes ={
    MyActionButton:PropTypes.element,
    tailwindColorName:PropTypes.string,
    icon:PropTypes.element,
    caption:PropTypes.string,
    clickHandler:PropTypes.func
  }

export default withColorButton
