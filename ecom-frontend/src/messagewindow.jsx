import styles from "./messagewindow.module.css"

const MessageWindow = ( {message} ) => {

  return(

    <div className={styles.messageBox}>
      <p>{message}</p>
    </div>

  );

}

export default MessageWindow
