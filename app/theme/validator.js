export const Validator = (type, value, valuetwo = '') => {
  switch (type) {
    case 'name':
      if (value == '') {
        return 'Please enter a Name';
      } else {
        const reg = /^[a-zA-Z ]*$/;
        if (reg.test(value) == true) {
          return null;
        } else {
          return 'Please enter valid name';
        }
      }
    case 'email':
      if (value == '') {
        return 'Please enter email';
      } else {
        const eml = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,4})+$/;
        if (eml.test(value) == true) {
          return null;
        } else {
          return 'Please enter valid Email';
        }
      }
    case 'password':
      if (value == '') {
        return 'Please enter a password';
      } else {
        const decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if (decimal.test(value) == true) {
          return null;
        } else {
          return 'Please enter valid password';
        }
      }
    case 'confpassword':
      if (value == '') {
        return 'Please enter confirm password';
      } else {
        if (value == valuetwo) {
          return null;
        } else {
          return 'Password does not match';
        }
      }
    default:
      break;
  }
};
