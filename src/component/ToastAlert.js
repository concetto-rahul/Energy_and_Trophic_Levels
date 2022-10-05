const ToastAlert = ({ type, text }) => {
  return (
    <div class={`toast-wrapper ${type}`}>
      <div class={`toast-container icon-only ${type}`}>
        <div>
          <span></span>
          <p role="alert" aria-live="assertive" aria-atomic="true">
            {text}
          </p>
        </div>
        <button
          type="button"
          class={`toast-button ${type}`}
          title="Close"
          aria-label="Close"
        >
          <span class="icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};
//Not quite right. Try again!
export default ToastAlert;
