import 'package:folio/utils/utils.dart';
import 'package:folio/data/profile_data.dart';

class ServicesUtils {
  static List<String> servicesIcons = [
    StaticUtils.flutter,
    StaticUtils.firebase,
    StaticUtils.bloc,
  ];

  static List<String> servicesTitles = ProfileData.services.map((service) => service.title).toList();

  static List<String> servicesDescription = ProfileData.services.map((service) => service.description).toList();
}
