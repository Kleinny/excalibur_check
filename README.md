# Password Strength Checker

Password Strength Checker is a lightweight JavaScript library for evaluating the strength of passwords based on various criteria such as length, presence of lowercase and uppercase letters, numbers, and symbols.

## Installation

Install the package via npm:

```bash
npm install password-strength-checker
```

## Usage

Instantiate the PasswordStrengthChecker class and use the checkStrength() method to evaluate the strength of a password:

```javascript
const PasswordStrengthChecker = require('./password-strength-checker');

// Instantiate the PasswordStrengthChecker
const passwordChecker = new PasswordStrengthChecker();

// Check password strength
const password = 'StrongPassword123!';
const strength = passwordChecker.checkStrength(password);

console.log(`Password strength: ${strength}/5`);

```

## Configuration

By default, the following criteria are used for evaluating password strength:

Minimum length: 8 characters
Minimum number of lowercase letters: 1
Minimum number of uppercase letters: 1
Minimum number of digits: 1
Minimum number of special characters: 1
You can customize these criteria by modifying the properties of the PasswordStrengthChecker class instance.


## API

### `checkStrength(password)`

Evaluates the strength of the given password and returns a score between 0 and 5, where 0 indicates very weak and 5 indicates very strong.

- `password`: (string): The password to be evaluated.

## License

This README provides installation instructions, usage examples, configuration options, API documentation, and licensing information. It's ready to be included in the package repository.

