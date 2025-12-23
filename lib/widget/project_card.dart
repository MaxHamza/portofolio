import 'package:flutter/material.dart';
import 'package:folio/configs/configs.dart';
import 'package:folio/provider/app_provider.dart';
import 'package:folio/sections/projects/project_details.dart';
import 'package:provider/provider.dart';
import 'package:folio/data/profile_data.dart';

import '../sections/portfolio/link_widget.dart';
import '../utils/project_utils.dart';

class ProjectCard extends StatefulWidget {
  final ProjectInfo projectInfo;
  final bool showBanner;
  const ProjectCard({Key? key, required this.projectInfo, required this.showBanner}) : super(key: key);

  @override
  ProjectCardState createState() => ProjectCardState();
}

class ProjectCardState extends State<ProjectCard> {
  bool isHover = false;

  @override
  Widget build(BuildContext context) {
    final appProvider = Provider.of<AppProvider>(context);
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;

    return GestureDetector(
      onTap: () {
        // debug print to confirm we have the right id
        debugPrint('ProjectCard tapped -> id=${widget.projectInfo.id}, title=${widget.projectInfo.title}');
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => ProjectsDetails(projectId: widget.projectInfo.id,isVideo:widget.projectInfo.id==2?true:false ,),
          ),
        );
      },
      child: MouseRegion(
        cursor: SystemMouseCursors.click,
        hitTestBehavior: HitTestBehavior.translucent,
        onEnter: (_) => setState(() => isHover = true),
        onExit: (_) => setState(() => isHover = false),
        child: Container(
          margin: Space.h,
          padding: Space.all(),
          width: AppDimensions.normalize(150),
          height: AppDimensions.normalize(90),
          decoration: BoxDecoration(
            color: appProvider.isDark ? Colors.grey[900] : Colors.white,
            borderRadius: BorderRadius.circular(10),
            boxShadow: [
              BoxShadow(
                color: (isHover ? AppTheme.c!.primary : Colors.black)!.withAlpha(100),
                blurRadius: 12,
                offset: const Offset(0, 0),
              )
            ],
          ),
          child: Stack(
            children: [
              if (widget.showBanner && widget.projectInfo.bannerPath.isNotEmpty)
                Positioned.fill(
                  child: IgnorePointer(
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(6),
                      child: AnimatedOpacity(
                        duration: const Duration(milliseconds: 400),
                        opacity: isHover ? 0.0 : 1.0,
                        child: Image.asset(
                          widget.projectInfo.bannerPath,
                          fit: BoxFit.cover,
                        ),
                      ),
                    ),
                  ),
                ),
              // content
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Column(
                  children: [
                    Row(
                      children: [
                        if (widget.projectInfo.iconPath.isNotEmpty) ...[
                          Image.asset(widget.projectInfo.iconPath, height: height * 0.05),
                          SizedBox(width: width * 0.01),
                        ],
                        Expanded(
                          child: Text(
                            widget.projectInfo.title,
                            style: AppText.b2b,
                            overflow: TextOverflow.ellipsis,
                          ),
                        ),
                      ],
                    ),
                    SizedBox(height: height * 0.01),
                    Expanded(
                      child: Text(
                        widget.projectInfo.description,
                        maxLines: 6,
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                    // Row(
                    //   mainAxisAlignment: MainAxisAlignment.end,
                    //   children: widget.projectInfo.links.keys.map((e) {
                    //     return Padding(
                    //       padding: const EdgeInsets.symmetric(horizontal: 4.0, vertical: 2),
                    //       child: LinkWidget(url: widget.projectInfo.links[e]!, linkType: e),
                    //     );
                    //   }).toList(),
                    // ) ,
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
