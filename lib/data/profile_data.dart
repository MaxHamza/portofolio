import 'package:flutter/material.dart';
import 'package:folio/utils/utils.dart';

class LinkType {
  static const youtube = 'youtube';
  static const website = 'website';
  static const appleStore = 'appleStore';
  static const googleStore = 'googleStore';
  static const github = 'github';
}

class ServiceInfo {
  final String iconPath;
  final String title;
  final String description;

  const ServiceInfo({
    required this.iconPath,
    required this.title,
    required this.description,
  });
}

class ProjectInfo {
  final int id;
  final String title;
  final String description;
  final String iconPath;
  final String bannerPath;
  final Map<String, String> links;

  const ProjectInfo( {
    required this.id,
    required this.title,
    required this.description,
    required this.iconPath,
    required this.bannerPath,
    required this.links,
  });
}

class ContactInfo {
  final IconData icon;
  final String title;
  final String details;

  const ContactInfo({
    required this.icon,
    required this.title,
    required this.details,
  });
}

class ProfileData {
  // Basic Info
  static List<int>detailsId=[0,1,2];
  static const String firstName = "MHD Hamza";
  static const String lastName = "Makksousa";
  static const String title = "AI Engineer — LLM Agents & RAG";
  static const String welcome = "Hello World! ";
  static const String email = "hamzamakksousa@gmail.com";
  static const String phone = "+963 9 385 96539";
  static const String location = "Damascus, Syria";
  static const String linkedIn = "https://linkedin.com/in/osama-gh";

  // About Me
  static const String aboutHeadline =
      "Flutter Developer experienced in building mobile apps with Bloc, GetX, Cubit, real-time APIs, and Firebase/Supabase. Focused on scalable solutions, clean code, and optimized UI/UX";

  static const List<String> aboutDetails = [
    "Al-Baraka Association – Practical training on Flutter applications.",
    "Mad Solution – 2-month hands-on internship with real-world projects.",
    "Damascus Intermediate Institute – 2-month training in UI/UX + Flutter",
    "Experienced in both solo projects and collaborative environments, with strong problem-solving and adaptability",
    "Focused on building high-quality, scalable, and user-friendly apps."
  ];

  // Skills
  static const List<String> allSkills = [
    "Flutter",
    "Dart",
    "Firebase",
    "Bloc/Cubit",
    "Getx",
    "Rest Api",
    "Hive",
    "stripe for payment",
    "C#",
    "OpenAI/GPT",
    "Claude",
    "Gemini",
    "Github",
  ];

  static const List<String> llmAgentSkills = [
    "OpenAI/GPT",
    "Claude",
    "Mistral",
    "Hugging Face",
    "Agenetic Systems",
    "Multi-Agent Workflows",
    "LangChain",
    "LangGraph",
    "Prompt Engineering"
  ];

  static const List<String> ragVectorSkills = [
    "Retrieval Design",
    "Chunking/Metadata",
    "Reranking",
    "Pinecone",
    "Weaviate",
    "FAISS",
    "Chroma"
  ];

  static const List<String> backendSkills = [
    "Python",
    "FastAPI",
    "REST",
    "Webhooks",
    "Data Modeling",
    "Pagination",
    "Rate Limiting",
    "OAuth2",
    "JWT",
    "Testing",
    "Documentation"
  ];

  static const List<String> cloudOpsSkills = [
    "Docker",
    "Kubernetes",
    "AWS",
    "ECS",
    "EC2",
    "Azure",
    "GCP",
    "CI/CD",
    "GitHub Actions",
    "Model/version management",
    "Releases",
    "Airflow"
  ];

  static const List<String> observabilitySkills = [
    "Observability",
    "Quality Assurance",
    "LangSmith",
    "LangFuse",
    "Logging",
    "Tracing",
    "Metrics",
    "Test Automation",
    "Regression Coverage",
    "Datadog"
  ];

  static const List<String> webToolsSkills = [
    "JavaScript",
    "TypeScript",
    "SQL Basics",
    "Git",
    "GitHub",
    "Agile Scrum",
    "Flask",
    "Streamlit"
  ];

  // Services
  static const List<ServiceInfo> services = [
    ServiceInfo(
      iconPath: "assets/services/flutter_icon.png",
      title: "Flutter Development",
      description:
          "Building responsive, scalable, and production-ready mobile apps with clean architecture and optimized UI/UX.",
    ),
    ServiceInfo(
      iconPath: "assets/services/firebase.png",
      title: "Firebase & Supabase Integration",
      description:
          "Authentication, Firestore/Postgres CRUD, Storage, Real-time updates, and backend integration for production-level applications.",
    ),
    ServiceInfo(
      iconPath: "assets/services/cubit.png",
      title: "State Management (Bloc/Cubit, GetX)",
      description:
          "Strong experience with Bloc & Cubit in medium-to-large apps, and practical experience using GetX for routing, controllers, and lightweight state.",
    ),
  ];

  // Projects
  static const List<ProjectInfo> aiProjects = [
    ProjectInfo(
      id:0,
      title: "Flutter water sale Demo",
      description:
          '''Includes splash, onboarding, auth (sign in/up), home, product details, and cart pages.Uses Cubit for state management, Dio for API integration, Hive for local storage, and a Video Player.and tracking location using open map. A simple yet complete app showcasing key Flutter concepts...
Project is currently under development...''',
      iconPath: "",
      bannerPath: "",
      links: {
        LinkType.github: "https://github.com/MaxHamza/nestle_water_app",
      },
    ),
    ProjectInfo(
      id:1,
      title: "Job Opportunities App",
      description:'''A job search app built with Flutter, using Cubit for state management and HTTP for API communication.
It provides secure authentication, profile editing, and uploading of both CV and profile picture.
Users can search for jobs with advanced filters and view detailed job information...
They can also apply for jobs and track all their submitted applications within the app.''',
      iconPath: "",
      bannerPath: "",
      links: {
        LinkType.github: "https://github.com/MaxHamza/partTimeApp",
      },
    ),
  ];

  static const List<ProjectInfo> mobileProjects = [
    ProjectInfo(
      id:2,
      title: "Decor-app",
      description:
          "This gardening and décor services app is a fully designed and responsive Flutter UI built using GetX for state management, navigation, and localization. The application supports both Arabic and English and includes a complete set of professionally crafted screens such as the onboarding view, login page, home sections, product listings, cart, product details, search functionality, and order confirmation...",
      iconPath: "",
      bannerPath: "",
      links: {
        LinkType.github:
            'https://github.com/MaxHamza/d-cor-app',
      },
    ),
  ];

  // Home page text slider
  static const List<String> roles = ["Mobile Developer", "Flutter Developer"];

  // Contact Information
  static const List<ContactInfo> contacts = [
    ContactInfo(
      icon: Icons.home,
      title: "Location",
      details: "Damascus, Syria",
    ),
    ContactInfo(
      icon: Icons.phone,
      title: "Phone",
      details: "+963 9 385 96539",
    ),
    ContactInfo(
      icon: Icons.mail,
      title: "Email",
      details: "hamzamakksousa@gmail.com",
    ),
  ];
}
