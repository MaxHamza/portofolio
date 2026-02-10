import 'package:folio/sections/main/main_section.dart';
import 'package:folio/sections/projects/project_details.dart';
import 'package:go_router/go_router.dart';

final GoRouter router = GoRouter(
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => const MainPage(),
    ),
    GoRoute(
      path: '/projects/:id',
      builder: (context, state) {
        final id = int.parse(state.pathParameters['id']!);
        return ProjectsDetails(
          projectId: id,
          isVideo: id == 2,
        );
      },
    ),
  ],
);
