class Utility {
  constructor() {
    this.BASE_URL = "https://dastarkhawan-bk.onrender.com/";
  }

  convertBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  handleError(error, errorCallBack) {
    if (error.code) {
      if (parseInt(error.code) === 301) {
        localStorage.removeItem("info");

        Cookies.remove("info");
        Cookies.remove("token");
        Cookies.remove("userType");
        Cookies.remove("uid");
        errorCallBack("Please reload this page.");
      } else {
        errorCallBack(error.message);
      }
    } else {
      if (error.response) {
        if (error.response.data.message) {
          errorCallBack(
            "Error: " +
              "Code " +
              error.response.status +
              " " +
              error.response.data.message
          );
        } else if (error.response.data.errors) {
          errorCallBack("Error: " + error.response.data.errors[0]);
        }
      } else if (error.request) {
        errorCallBack("Error: " + error.request);
      } else {
        errorCallBack("Error: " + error.message);
      }
    }
  }

  classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
}
const utility = new Utility();
export default utility;
