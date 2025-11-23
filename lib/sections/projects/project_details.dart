import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:folio/sections/projects/widgets/video_player.dart';
import 'package:folio/sections/projects/widgets/view_photo.dart';
import '../../constants.dart';
import '../../utils/project_utils.dart';

class ProjectsDetails extends StatelessWidget {
  ProjectsDetails({super.key, required this.projectId, this.isVideo});

  final int projectId;
  bool? isVideo = false;

  bool isMobile(BuildContext context) =>
      MediaQuery.of(context).size.width < 600;

  @override
  Widget build(BuildContext context) {
    final mobile = isMobile(context);

    final screenshots =
        ProjectUtils.project['screenshots'][projectId] as List<String>? ?? [];

    // أحجام الخطوط للموبايل والويب
    final titleSize = mobile ? 18.sp : 12.sp;
    final descSize = mobile ? 10.sp : 6.sp;
    final sectionTitleSize = mobile ? 14.sp : 8.sp;
    final itemTextSize = mobile ? 10.sp : 6.sp;
    final linkTextSize = mobile ? 11.sp : 7.sp;

    return Scaffold(
      body: Padding(
        padding: EdgeInsets.symmetric(vertical: 20.h, horizontal: 10.w),
        child: ListView(
          physics: BouncingScrollPhysics(),
          children: [
            // ---- TITLE ----
            Text(
              ProjectUtils.project['title'][projectId],
              style: TextStyle(
                fontSize: titleSize,
                fontWeight: FontWeight.bold,
                fontFamily: 'Montserrat',
              ),
            ),

            SizedBox(height: 20.h),

            // ---- DESCRIPTION ----
            Text(
              ProjectUtils.project['description'][projectId],
              style: TextStyle(
                fontSize: descSize,
                fontFamily: 'Montserrat',
              ),
            ),

            SizedBox(height: 20.h),

            // ---- SCREENSHOT ----
            if (screenshots.isNotEmpty)
              Padding(
                padding: EdgeInsets.symmetric(horizontal: 8.0.r),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(12.r),
                  child: AspectRatio(
                    aspectRatio: 16 / 9,
                    child: isVideo == true
                        ? VideoPlayerWidget(
                            videoUrl: ProjectUtils.project['video'][projectId])
                        : GestureDetector(
                            onTap: () {
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder: (context) => PhotoViewWidget(
                                    img: screenshots[0],
                                  ),
                                ),
                              );
                            },
                            child: Image.asset(
                              screenshots[0],
                              fit: BoxFit.contain,
                            ),
                          ),
                  ),
                ),
              ),
            SizedBox(
              height: 10.h,
            ),
            Divider(height: 30.h, thickness: 1.h, color: Colors.grey),
            SizedBox(height: 20.h),

            // ---- TECH DETAILS TITLE ----
            Text(
              "Technical Details:",
              style: TextStyle(
                fontSize: sectionTitleSize,
                fontWeight: FontWeight.bold,
                fontFamily: 'Montserrat',
              ),
            ),
            SizedBox(
              height: 10.h,
            ),
            Divider(height: 30.h, thickness: 1.h, color: Colors.grey),
            SizedBox(height: 20.h),

            // ---- TECH DETAILS LIST ----
            ListView.builder(
              shrinkWrap: true,
              physics: NeverScrollableScrollPhysics(),
              itemCount: ProjectUtils.project['techdetails'][projectId].length,
              itemBuilder: (context, index) {
                return Text(
                  ProjectUtils.project['techdetails'][projectId][index],
                  style: TextStyle(
                    fontSize: itemTextSize,
                    fontFamily: 'Montserrat',
                  ),
                );
              },
            ),
            SizedBox(
              height: 10.h,
            ),
            Divider(height: 30.h, thickness: 1.h, color: Colors.grey),
            SizedBox(height: 20.h),

            // ---- CHALLENGES TITLE ----
            Text(
              "Challenges Addressed:",
              style: TextStyle(
                fontSize: sectionTitleSize,
                fontWeight: FontWeight.bold,
                fontFamily: 'Montserrat',
              ),
            ),
            SizedBox(
              height: 10.h,
            ),
            Divider(height: 30.h, thickness: 1.h, color: Colors.grey),
            SizedBox(height: 20.h),

            // ---- CHALLENGES LIST ----
            ListView.builder(
              shrinkWrap: true,
              physics: NeverScrollableScrollPhysics(),
              itemCount: ProjectUtils.project['challenges'][projectId].length,
              itemBuilder: (context, index) {
                return Text(
                  ProjectUtils.project['challenges'][projectId][index],
                  style: TextStyle(
                    fontSize: itemTextSize,
                    fontFamily: 'Montserrat',
                  ),
                );
              },
            ),
            SizedBox(
              height: 10.h,
            ),
            Divider(height: 30.h, thickness: 1.h, color: Colors.grey),
            SizedBox(height: 20.h),

            // ---- SOURCE CODE ----
            Text(
              "Source Code:",
              style: TextStyle(
                fontSize: sectionTitleSize,
                fontFamily: 'Montserrat',
              ),
            ),

            SizedBox(height: 12.h),

            MouseRegion(
              cursor: SystemMouseCursors.click,
              child: GestureDetector(
                onTap: () =>
                    openURL(ProjectUtils.project['sourcecode'][projectId]),
                child: Text(
                  ProjectUtils.project['sourcecode'][projectId],
                  style: TextStyle(
                    fontSize: linkTextSize,
                    color: Colors.blue,
                    decoration: TextDecoration.underline,
                    decorationColor: Colors.blue,
                    // لون الخط تحت النص
                    decorationThickness: 1.5,
                  ),
                ),
              ),
            ),
            SizedBox(
              height: 20.h,
            ),
            Center(
              child: InkWell(
                  onTap: () {
                    Navigator.pop(context);
                  },
                  child: Container(
                      padding: EdgeInsets.all(20.r),
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(15.r),
                          color: Colors.blue),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(Icons.arrow_back,),
                          SizedBox(width: 5.w,),
                          Text(
                            'Back Home',
                            style: TextStyle(
                              fontSize: itemTextSize,
                              fontFamily: 'Montserrat',
                            ),
                          ),
                        ],
                      ))),
            ),
            SizedBox(
              height: 30.h,
            ),
          ],
        ),
      ),
    );
  }
}
