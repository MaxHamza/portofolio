import 'package:url_launcher/url_launcher.dart';
import 'package:folio/data/profile_data.dart';

// URL Launcher
void openURL(String url) => launchUrl(
      Uri.parse(url),
    );

// Tools & Tech
final kTools = ProfileData.allSkills;
