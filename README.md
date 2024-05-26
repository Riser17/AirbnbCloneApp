![IMG_1250](https://github.com/Riser17/AirbnbCloneApp/assets/91198103/7d5f026d-bb18-4b89-a20b-0078afdc2227)# Airbnb Clone React Native App

This is a React Native application inspired by Airbnb, allowing users to browse homes and cabins, view details, and interact with various features such as authentication, user profiles, and more.

## Previews

<img src="https://github.com/Riser17/AirbnbCloneApp/assets/91198103/4ad1b3ed-5546-43c8-87db-2fbecefeda5f" width="300" height="500">
<img src="https://github.com/Riser17/AirbnbCloneApp/assets/91198103/3a0678da-4972-4df0-9ca8-520616e5e886" width="300" height="500">
<img src="https://github.com/Riser17/AirbnbCloneApp/assets/91198103/ae3de7d7-9af8-4ef4-a943-cdcab257e3ea" width="300" height="500">
<img src="https://github.com/Riser17/AirbnbCloneApp/assets/91198103/c463f31c-8a9f-467e-af54-d086e63f6e02" width="300" height="500">
<img src="https://github.com/Riser17/AirbnbCloneApp/assets/91198103/a9538b5d-4938-4855-bffa-f3b312fb337f" width="300" height="500">
<img src="https://github.com/Riser17/AirbnbCloneApp/assets/91198103/4bc09039-1ca4-4627-81f8-a3fcb74ffc03" width="300" height="500">

## Features

- **Home/Cabin Listings:**
  - Display a bottom sheet list of Airbnb homes/cabins.
  - Navigate to a details page when pressing on an individual item.
  - Showcase homes on a map view with custom cluster view. ( used airbnb data of berlin, germany data )

- **Detail Page:**
  - View detailed information about each home/cabin.
  - Share property details using a share button.

- **Authentication:**
  - Implement authentication using Clerk, allowing users to login with Gmail, Facebook, Apple, or email.
  - Securely store user sessions.

- **User Profile:**
  - View user information such as name, email, and creation date.
  - Update user name.
  - Logout functionality.

- **Bottom Tab Bar:**
  - Explore: Show list of homes with a bottom sheet and switch to map view when scrolling down.
  - Wishlist: Save favorite properties.
  - Trips: View booked trips.
  - Inbox: Communicate with hosts.
  - Profile: Access user profile.

## Installation

1. Clone the repository: `git clone https://github.com/Riser17/AirbnbCloneApp`
2. Navigate to the project directory: `cd airbnb-clone-react-native`
3. Install dependencies: `npm install`

## Usage

1. Start the React Native Expo: `npx expo start`
2. Run the application on an Android or iOS emulator: `npx react-native run-android` or `npx react-native run-ios`

## Dependencies

- React Native: ^0.74.1
- Expo-router": ~3.5.14,
- React Native Maps: 1.14.0,
- React Native Map Clustering: ^3.4.2,
- Clerk Authentication : 1.1.0
- React Native Share: ^3.12.1
