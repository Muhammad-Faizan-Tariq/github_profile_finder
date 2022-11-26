import { useContext } from "react";
import AlertContext from "../../contextAPI/alert/alertContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Alert = () => {
    
    const alertContext = useContext(AlertContext);
    const { alert } = alertContext;

  return (
    alert !== null && (
        <div className={`alert alert-${alert.type}`}>
            <FontAwesomeIcon icon="fa-solid fa-circle-info" /> {alert.msg}
        </div>
    )
  )
}

export default Alert