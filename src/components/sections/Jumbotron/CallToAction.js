import React from "react";
function Icon(props) {
  return (
    <div
      className={
        props.styles
          ? props.styles.icon + " call-to-action__container--icon"
          : "call-to-action__container--icon"
      }
    >
      {props.icon}
    </div>
  );
}
function Word(props) {
  return <p>{props.text}</p>;
}
function Button(props) {
  return (
    <div className={`${props.styles.buttonContainer} button__container`}>
      <button
        className={`${props.styles.button} call-to-action__container--button`}
      >
        {" "}
        {props.text}
      </button>
    </div>
  );
}

function CallToAction(props) {
  const styles = props.styles;
  const words = props.words;
  const buttons = props.buttons;
  const icons = props.icons;
  let actionWords;
  let actionButtons;
  let iconsList;
  if (words) {
    actionWords = words.map((e) => <Word text={e} key={words.indexOf(e)} />);
  } else {
    actionWords = false;
  }
  if (buttons) {
    actionButtons = buttons.map((e) => (
      <Button key={buttons.indexOf(e)} styles={styles} text={e} />
    ));
  } else {
    actionButtons = false;
  }
  if (icons) {
    iconsList = icons.map((e) => (
      <Icon key={icons.indexOf(e)} icon={e} styles={styles} />
    ));
  } else {
    iconsList = false;
  }
  return (
    <>
      {props.buttonPosition === "bottom" ? (
        <div
          className={`${styles.container} ${styles.div} call-to-action__container`}
        >
          {iconsList}
          {actionWords} {actionButtons}
        </div>
      ) : (
        <div className={`${styles.container} ${props.className}`}>
          {" "}
          {iconsList}
          {actionButtons} {actionWords}
        </div>
      )}
    </>
  );
}
export default CallToAction;
