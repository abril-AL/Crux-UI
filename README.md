# Crux UI

For [Crux Project](https://github.com/abril-AL/Crux) use.

Provides a simple UI to present faces provided by:
    - Bernd Wittenbrink <research@qualtrics.chicagobooth.edu> 
    - Chicago Face Database, University of Chicago Booth School of Business

As mentioned on the [Project Proposal](https://github.com/abril-AL/Crux/blob/main/EEG%20Tinder%20Proposal.pdf), the testing environment should lack visual stimulation.
Therefore, the selected images are basic, as well as the UI for presenting them.

## Installation + Running
```
npm install
npm install firebase@9.19.1 --save
npm install react-bootstrap bootstrap
npm start
```

## Usage
The app's first screen is the pre-trial survey.
It will ask for the user's name, gender, and sexual preference.
Then, the trials will then show images based off their selections.
After 15 (?) images, the user will be directed to a post trial survey.
Both surveys will have the information stored via firebase.(?)

