import iziToast from 'izitoast';
// Izi Toast
export const notifyMessage = (message) => {
    iziToast.show({
      message,
      position: "bottomRight",
      color: "rgb(34 197 94 / 70%",
      icon: "bi-check-circle-fill",
      iconColor: "#fff",
      titleColor: "#fff",
      messageColor: "#fff",
    });
  };