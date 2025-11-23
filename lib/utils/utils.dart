import 'package:flutter/material.dart';
import 'package:folio/sections/about/about.dart';
import 'package:folio/sections/contact/contact.dart';
import 'package:folio/sections/home/home.dart';
import 'package:folio/sections/portfolio/portfolio.dart';
import 'package:folio/sections/services/services.dart';
import 'package:folio/widget/footer.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class StaticUtils {
  static const String hi = 'assets/hi.gif';

  // photos
    static const String blackWhitePhoto = 'assets/avataaars.png';

  // services
  static const String flutter = 'assets/services/flutter_icon.png';
  static const String firebase='assets/services/firebase.png';
  static const String bloc='assets/services/cubit.png';
  static const String android = 'assets/services/android_icon.png';
  static const String serverSide = 'assets/services/server_side_icon.png';
  static const String aiAgent = 'assets/services/ai_agent_icon.png';
  static const String rag = 'assets/services/rag_icon.png';
  static const String cloud = 'assets/services/cloud_icon.png';


  static const List<IconData> socialIconURL = [
    FontAwesomeIcons.linkedin,
    FontAwesomeIcons.github,
  ];

  static const List<String> socialLinks = [
    "https://www.linkedin.com/in/mohamad-hamza-makksousa-728aa823a/",
    "https://github.com/MaxHamza",
  ];

  static const String resume =
      'https://drive.google.com/file/d/1nlXnHf-LAkGBbawVQxwdWmyZNz_Arvz0/view?usp=drivesdk';

  static const String gitHub = 'https://github.com/MaxHamza';
}

class BodyUtils {
  static const List<Widget> views = [
    HomePage(),
    About(),
    Services(),
    Portfolio(),
    Contact(),
    Footer(),
  ];
}
