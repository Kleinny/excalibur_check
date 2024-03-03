// index.js

class PasswordStrengthChecker {
    constructor() {
      this.minLength = 8; // Minimum password length
      this.minLowercase = 1; // Minimum number of lowercase letters
      this.minUppercase = 1; // Minimum number of uppercase letters
      this.minNumbers = 1; // Minimum number of digits
      this.minSymbols = 1; // Minimum number of special characters
    }
  
    checkStrength(password) {
      let strength = 0;
  
      // Check length
      if (password.length >= this.minLength) {
        strength++;
      }
  
      // Check lowercase letters
      if (/[a-z]/.test(password) && password.match(/[a-z]/g).length >= this.minLowercase) {
        strength++;
      }
  
      // Check uppercase letters
      if (/[A-Z]/.test(password) && password.match(/[A-Z]/g).length >= this.minUppercase) {
        strength++;
      }
  
      // Check numbers
      if (/\d/.test(password) && password.match(/\d/g).length >= this.minNumbers) {
        strength++;
      }
  
      // Check symbols
      if (/[^a-zA-Z0-9]/.test(password) && password.match(/[^a-zA-Z0-9]/g).length >= this.minSymbols) {
        strength++;
      }
  
      return strength;
    }
  }
  
  // Export the PasswordStrengthChecker class
  module.exports = PasswordStrengthChecker;
  