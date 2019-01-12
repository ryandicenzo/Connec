# Connec
Connec is a cross-platform mobile application powered by React Native that allows users to instantaneously share contact details and contextual information with one person or up to millions of people.

![Home Page](/profile_page.png?raw=true "Home Page")


## User Stories
1. A single user can immediately share their personal, professional, or event-dependent links
    - Share with device's native plain text sharing, which supports AirDrop, texting, email, Messenger, etc
        - Prompt the user to download our app to "Save Name's profile and get updates by downloading Connec"
    - Share with other app users via QR code, similar to Snapchat
    - Share with a mobile-friendly online link 1:1 or with millions of people
    - Killer app: Instantly share social information and important details, fostering friendships and engagement
2. A group of users can immediately create a group and share information and links, as well as everyone's individual contact information, by scanning QR codes, sharing an access code, or sharing a link
    - Killer app: Groups that are together for events like travel groups, hackathon teams, and wedding ceremonies can facilitate easy information sharing and communication
3. Users can discover nearby individuals and groups via GPS and use IM functionality to communicate with individuals and groups before and after connecting
    - Killer app: Users can proactively discover other users and groups with GPS functionality, and built in IM makes it even easier to connect with others

## Implementation Log
- Installed Homebrew (Mac), Node.js, and Expo
- `expo init App` to create a minimal Expo app
- `npm install --save react-native-elements` to add pre-built visual components to our app
- `npm install --save react-navigation` to add tab-based navigation to our app
- `react-native-qrcode` to add QR code generation to our app
- `npm install --save redux react-redux` to add global state to our app
- iOS Contacts [supports](https://support.apple.com/kb/ph3605?locale=en_US) vCard format v3.0+
