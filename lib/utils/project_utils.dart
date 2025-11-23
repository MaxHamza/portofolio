import 'package:folio/data/profile_data.dart';

class ProjectUtils {
  static List<ProjectInfo> bigProjects = [
    ...ProfileData.aiProjects,
    ...ProfileData.mobileProjects,
  ];
  static Map<String, dynamic> project = {
    "title": [
      "Flutter Water Sale Demo:",
      "Job Opportunities App:",
      "Décor-app:",
    ],
    "description": [
      '''Includes splash onboarding, auth (sign in/up), home, product details, and cart pages.Uses Cubit for state management, Dio for API integration, Hive for local storage, and a Video Player.and tracking location using open map. A simple yet complete app showcasing key Flutter concepts.
Project is currently under development.''',
      '''A job search app built with Flutter, using Cubit for state management and HTTP for API communication.
It provides secure authentication, profile editing, and uploading of both CV and profile picture.
Users can search for jobs with advanced filters and view detailed job information.
They can also apply for jobs and track all their submitted applications within the app.''',
      '''This gardening and décor services app is a fully designed and responsive Flutter UI built using GetX for state management, navigation, and localization. The application supports both Arabic and English and includes a complete set of professionally crafted screens such as the onboarding view, login page, home sections, product listings, cart, product details, search functionality, and order confirmation.'''
    ],
    "techdetails": [
      [
        "- Framework & Language: Flutter & Dart",
        "- State Management: Cubit (flutter_bloc)",
        "- Network / API: Dio for fetching and sending data to the backend",
        "- Local Storage: Hive for storing user session and cart data locally",
        "- Multimedia: Video Player integrated for in-app video content",
        "- Maps / Location: User location tracking using an open map solution",
      ],
      [
        '- Framework & Language: Flutter & Dart',
        '- State Management: Cubit (Bloc) for handling authentication, job fetching, applications, and profile updates',
        '- Networking: HTTP for API calls to fetch jobs, submit applications, and manage user data',
        '- Responsive Design: Used flutter_screenutil to ensure UI scales correctly across devices'
            '- File Handling: Upload CVs and profile images securely using multipart/form-data requests',
        '- Routing & Navigation: Organized navigation between screens including login, job search, job details, applications, and profile',
        '- Form Validation & Error Handling: Validates user input on login, registration, and application forms, and handles API/network errors',
        '- Secure Authentication: Token-based authentication (JWT) stored securely, ensuring protected user sessions',
        '- Architecture: Feature-based folder structure with repositories and reusable widgets for scalability and maintainability',
      ],
      [
        '- Framework & Language: Flutter & Dart',
        '- State Management: GetX for managing app state, navigation, and localization',
        '- Localization: Supports both English and Arabic, with runtime language switching',
        '- Responsive UI: Designed to adapt to different screen sizes and platforms (mobile, web, desktop) using responsive layouts',
        '- Project Structure: Organized folders for features, assets, and platform-specific files for maintainability and scalability',
        '- Asset Management: Includes high-quality images and icons for products and UI elements',
        '- Backend Ready: Prepared for future API integration to fetch products, manage cart, and process orders'
      ],
    ],
    "challenges": [
      [
        "* Managing complex state (auth + cart + product data)",
        '* Syncing data between network API and local storage',
        '* Handling permissions for user location and displaying it on the map',
        '* Integrating video playback seamlessly into the UI'
      ],
      [
        '* Managing Complex State: Handling multiple features (authentication, job search, applications, profile updates) using Cubit to ensure smooth and consistent state transitions',
        '* Secure File Uploads: Uploading CVs and profile images safely while providing user feedback on progress and errors',
        '* API Integration & Error Handling: Ensuring reliable communication with backend APIs, including handling network errors and validation issues',
        '* User Experience & Responsiveness: Creating an intuitive flow from job search to application submission, and ensuring responsive UI across devices using flutter_screenutil',
        '* Session Security: Safely storing authentication tokens and protecting access to user-specific data'
      ],
      [
        '* State Synchronization: Ensured smooth and consistent state updates across screens like cart, search, and language changes using GetX',
        '* Localization Complexity: Implemented multi-language support with proper runtime switching',
        '* Responsive Design: Created layouts that adapt to multiple screen sizes while maintaining visual quality',
        '* Scalable Architecture: Structured code to allow easy integration with backend and future features without major redesign',
        '* UX Flow Design: Designed a seamless user flow from onboarding → product browsing → cart → order confirmation',
        '* Asset Handling: Managed images and icons efficiently to ensure clarity and performance across platforms',
      ]
    ],
    "screenshots": [
      ['assets/photos/nestleProject/nestle_4.jpg'],
      ['assets/photos/job_app/job_1.jpg'],
      ['']
    ],
    "video": ['', '',
      'assets/videos/decor.mp4'],
    "sourcecode": [
      'https://github.com/MaxHamza/nestle_water_app',
      'https://github.com/MaxHamza/partTimeApp',
      'https://github.com/MaxHamza/d-cor-app'
    ],
  };
  static List<ProjectInfo> sideProjects = [];
}
