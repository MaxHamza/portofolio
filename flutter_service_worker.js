'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ce9d444d65ce9451a7a88578dadc9562",
".git/config": "e22ea672df93e53a33fb98092f784ab6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "441a20170037d2c741df011f56801d9d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6b9480f8ac54f3a03c25e7e2d7283d5b",
".git/logs/refs/heads/gh-pages": "6f39e5be3705db7ff718fa26aad1205e",
".git/logs/refs/remotes/origin/gh-pages": "313a2a7e0d9e127ccc31359afdbfe33c",
".git/objects/00/278aa9d5d1a3a9b252784a2a74207b51aa34dd": "3e75cb7f5750f7a8f95eb95fd6ed655f",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/06/f8abec2f9823210b8c28898285bf3559e2bf70": "448ec83243f935db2094008588bd4aa3",
".git/objects/09/8ee43834fdf86b6850dc215ecefd6257c261b5": "84ff387c1ea6671008ea39df088d544c",
".git/objects/12/d7b5b92aa77ce447d9e1f3b503d7ab06c9de67": "1b23b75fdeb5e012ec9bcd8f26da0c3a",
".git/objects/16/9010aaf4a07ac0b2698c5c52a6c6fa4ef7b796": "447eb961bd88890a2943fbc1727e3f9e",
".git/objects/16/a144986031b50f1924fdb9ab46e2cc5892e6da": "30903925e148b26f00c396435a64627a",
".git/objects/1f/53ffe440197d0cd035a57c0dd64451856eeddb": "f8c883bdc99f550b3521c82a652ff7d5",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/8d5c28024a6bb77b12b2416f7d3e5a4284843c": "3ff509f0e439941a17e55b2278bc750b",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/28/d8cceae68df6f740e96d8a8b16305ce73f79a7": "39d65ef832f4814999687d2675d0ea75",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/29/f597cddbcd9f5901e0abc15ba498a3f602c6b0": "85dae7e29671a498e2ac7941e74b4259",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2f/8e3f73d715e49f3fc82287d4063730825e37ee": "c352968eedcec747607e9dfe80c2f59a",
".git/objects/2f/fabd5bccce40ff7cdc342797f75062dae2812f": "431946d139b7f152633ad7e680a34a75",
".git/objects/37/075e5e3ce6e5e44cf4fa6efadbe27a83c27df5": "d92d455dc89f2279a07402a14983f218",
".git/objects/39/68cdd2c870cb660a0ac2fd4c6e2334618fd500": "fc97acd886b049fe64fbc3938b4b84ac",
".git/objects/3a/8aafc894800b7fb74ad4385a162be3c90ee382": "52c66a83dee55b418d7314f3d894296c",
".git/objects/41/272fc95e256d8041631b15eb6caf57eace0aa6": "db2c95a8929bf51b30f863a75d584a64",
".git/objects/45/2661e8bad82006ab32c18084becd81a7d74927": "aecd67127374fe9f5c0d2a560310a937",
".git/objects/45/44be56f3d9352af74ed6b60dcbe0c77753b6ea": "ee5d59843d84f5dbb9b934d5b87b9ec9",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/4d/b3d78300e9280715b1ae41bb2c33591263bcb8": "f05db2204acb1a813833ba7f1a257c5a",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/62253703f0f502e7396b7881d64b5f19f87ccc": "8e82d6855aeb84b05f4a7f445c98bded",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/51/2da4118a2bb15875720d9ce00f5101e9d993ff": "5ce83b8c0e572e7356fda83f5756c690",
".git/objects/55/4d1bad6bb84edb7a0099a74e88ed94602a5cc1": "ac488999e7c2ab970115bee948981ed6",
".git/objects/5f/c7ad21d3a7c733e9ddeb8779c22c38d231d150": "002c94c61284deaa4a85285cf62c24de",
".git/objects/60/25a5b6aba615860e313ba0381bbfffab73c681": "629f8db3c5dfb80146f23e3cdea26920",
".git/objects/60/c62060589a3c82b84723612e7c3c041d7a891e": "8acaa1ad5359c0dbcb2d60de192ea6ff",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/1530701f8af1010baac62213bb9b35662cdf75": "cb5cdebc1188f749af5c2246444ede6e",
".git/objects/77/d53c67532f9550109f0ffc4ea9ec604b310648": "bbdf67042f52075ad8fa85cefba54e31",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7d/642eccc21482142be0d9d66f5e30e61bab592b": "653c5dad30a992540485831d4793b4fe",
".git/objects/7d/950bc486ee0113c55dea7744d4e6e1a3e52a4d": "448ebb2b5e0b8224e9de01c57e3dcca2",
".git/objects/82/039646eae58381941a128edf3dd254c98a2961": "ba71a4099c57c699fe2ac9b609735b8e",
".git/objects/82/2a6354b96944682068b1b8b7c4e3477cfd6da2": "d1d1641b3612808cc2cdd08417e552d5",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/87/8f629e5e5fbf9566354aaa29c2d7ce1565bf5b": "998cb499265bf525cda22810ad19aa78",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/88/e31614c9ab09099ed37f7960e2f4bc4129236a": "73d437de8b1427df45fe3a58329ec1dc",
".git/objects/8b/56f6a76724bf5e94f9ddec5829f75bd30cc97c": "50826d6650109fcb0fb6e2c32837fb01",
".git/objects/8b/57595ea63125c43e9025c12c256d8e6d90152c": "52fb6b5bbd3cfd405dfc90cbec643a89",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/91/ef10c1ea47bcc95364dc8bde891aa3d1873683": "a63a1c746d86b781d50484cfb0c90249",
".git/objects/92/a35f20675896df9b554e50faa0319a539b0854": "65523d5bd8f9f85ec48b35651450271e",
".git/objects/97/0b80030ee5873b651f186e2224831e44b1a957": "8b27a7016482d76e259963c7bb8e29c7",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/253adc510c75aa87aab5c80d9b9a2066d755db": "cefa63170e6dd11411c2da5d0c88e57b",
".git/objects/9a/98a4af20efe9cdf5bc323e36c7afef28fed1b2": "9286e62c9687626dcccd3d0baaedd83c",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9c/2071856b18b0fbeb750b9779b5eec61801dce5": "5737c2c22b7c9a6961d3caf5d3d9a40f",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9f/20c17ce2ee9b97cd8f9a2be7b4fbce20958f9c": "ae2c012c4620b6082ff24e509669629c",
".git/objects/9f/af68a35377c0312201f1d04b8b4482656dd1b7": "387480e0b1101d5d46dfd321fe01cd27",
".git/objects/aa/9f67f9997cc4e40c17dea74857e00e2f05717d": "4957337f0da3b4b422a710df86ab7add",
".git/objects/b3/deec02fdeb1a2281cbce8635299113abca4a03": "804eab8bbe0dd6d0cc4779bde81f7cef",
".git/objects/b4/b77707059434146c8f74ffef57f66a3724a840": "5e10568a93c9eb8e01ca1d3dedc0368c",
".git/objects/b6/83525dd623e18ab46f8fafc69ba05ef9be97cf": "0a1c5505e9cb0de445112b6ddabd7bc6",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/ba/50c828254e73c225377b30de8f6be700a35916": "87328c8715b1cdbdf29836385def957b",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/bf/eb65bdf5f588fd0b6290c7141c252b0d894c35": "5c20a7a1be5651adb184d6aa8420ae8f",
".git/objects/c1/cfebd67a9bf80f93f2fa1a71c66f08c52bed3b": "869ddebab45cd3066f32c3c6efa6b69d",
".git/objects/c3/b81c7d4e25b49fc2f09331816536202eab5589": "620eac923a0e1b148cb61c7bb7acbdea",
".git/objects/c3/ce580d67ee1e1b2d429356abd799a2a78897ad": "4895064bcf26ef08ce7305e00281205d",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c6/ce598c47e4d7a54cccf1a5cf8eaf49ab1f2dd0": "b5d60406d515e01a3c79a6a3c673cba2",
".git/objects/c7/29eb5565f41e446f021bebb39c6a8ab0ee4a08": "91ee74ae1cf9b5e26386b4aeb6851e60",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cf/211108d029deda45f8b3cb0f07c22056e028a6": "040fc3389b0c2d33e38250067a1f54d9",
".git/objects/d3/6b6621cb4a3bf4afdf0727c07acb2e7371ae67": "1afbc45cf9d8a9c397ea1189a52f9594",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/b53b7c47b373612db6e23b4dc43efea2993127": "a564667777bc19fe2193ab3988fc1070",
".git/objects/d9/a2787bd4aaaa9d8d5fc4ce1a48cccf2b62d03a": "119baac7960f54929847fe6dcffe01c3",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/db/f24ea3794eeb09120fa74f4c8eb95a4b4e320b": "3418694f6451d433463ffad398f0ec24",
".git/objects/df/65b983cd3d06055a71f403881dd5b01361d5af": "12da7a71d108c32b513f26c9ed62a855",
".git/objects/e0/494245476de635d4060773aeae47038053bf64": "ba6794cc333b1dfbde2f52923eb14c78",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e8/a59023ee0c985a2671a3d600933f009a1edcc7": "a3a7a8db3dbdfdfc74de3cab1165d2a0",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/e9/4f35ba059a69214119fcf389463e65285cc5f3": "7640b703e6498d4016d75ec8db5701f7",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/05f7f54de6c3b2ad5e037e88f620bf8660ba39": "c8a2d3964379c08ec9a507731d8724d9",
".git/objects/eb/f0f03cade0aa012b6878b2bebb2c6d3d01aa47": "7bf180266052007998aee39e8c3b0697",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ef/45a4ee5f3a515ca7d4176a6166e917c8ad7d1b": "b5f042296b09c940e9d86d1afff4f5e6",
".git/objects/f0/1a08f5916ddf691365f3cb0b2dc13bb342029b": "77c006e59fd5fc0fe03e45fbb7968c7b",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f9/a40c04b87807d6fabb67cbe0f5101e5f0b0969": "3d442cb6819086bd45a065914b43f742",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/da1fcbd4ae41b5d1c323cd4a44b1bce968438b": "b5a82222165144985204910348a92036",
".git/refs/heads/gh-pages": "5385217bf527a39745b07f6c39bf6baa",
".git/refs/remotes/origin/gh-pages": "5385217bf527a39745b07f6c39bf6baa",
"assets/AssetManifest.bin": "8c326442cb1b93ad477bddf7397c9a6a",
"assets/AssetManifest.bin.json": "18c683858488d83b6186969e420e61ed",
"assets/AssetManifest.json": "54b5ad63737dba63959c99bbfc226a28",
"assets/assets/avataaars.png": "3d5fea6e233fddbd0981d3dc915bc135",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/photos/black-white.png": "8f46733fb9733f065982e7da5e893bca",
"assets/assets/photos/job_app/job_1.jpg": "dd4633a755c22ed090074adcf53a4bfb",
"assets/assets/photos/nestleProject/nestle_1.jpg": "4d485c50e3048a882b5cc3edaff88944",
"assets/assets/photos/nestleProject/nestle_2.jpg": "92c3f5384a2733d242b1d7c936cd1213",
"assets/assets/photos/nestleProject/nestle_4.jpg": "d16ee800550fe8024dca182fc64d6a5e",
"assets/assets/projects/banners/boum.png": "2166dbdf15f06fc3fa55ccc8df8daf50",
"assets/assets/projects/banners/dawaa.jpeg": "2090098aee32f32cce3115755b4351a2",
"assets/assets/projects/banners/furniture.png": "c710daedfd0bbee2fea99fc1716aef76",
"assets/assets/projects/banners/kambaqi.jpg": "415da465c9fa2856b373e8028ee38c2c",
"assets/assets/projects/banners/ramadan.png": "7302eae727e73f6cc52ead53610d5324",
"assets/assets/projects/banners/sudoko.png": "9a0f55dbbe6514630bbc4e6c1bcaa33d",
"assets/assets/projects/icons/boum_icon.png": "c3eec48e21b6959a79fedd880f4a0998",
"assets/assets/projects/icons/dawaa_icon.png": "32626e5fe16014acfadf2b6bb26c31e4",
"assets/assets/projects/icons/furniture_icon.png": "214812a37af8c3e9d468566828bb095a",
"assets/assets/projects/icons/kambaqi_icon.png": "6105e6101e28a4a02a09177a0faa39bf",
"assets/assets/projects/icons/ramadan_icon.png": "5db1fbc4e22861ddc3a9adc07d19e2b9",
"assets/assets/projects/icons/sudouko_icon.png": "03fb3a5729a7f1dd6cbc775e1cf5e65a",
"assets/assets/services/ai_agent_icon.png": "9a99b6d30270ef0ad0301ca5ede076f0",
"assets/assets/services/android_icon.png": "a73c1eb1e2505a689dbee43ec08af0d6",
"assets/assets/services/cloud_icon.png": "eed94b3565e9c2fc4954c810365f4ca8",
"assets/assets/services/cubit.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/services/firebase.png": "9ed79d8d77f3aab27b935896f7258479",
"assets/assets/services/flutter_icon.png": "e038d7f55d1c679d7b74a87b6787b6ea",
"assets/assets/services/rag_icon.png": "3bd48128ca29ec25fd23bb27a93faf6e",
"assets/assets/services/server_side_icon.png": "f61e3fcc37920addcbd4f75133b669e0",
"assets/assets/videos/decor.mp4": "36f7ddd85282253285751084ea197be4",
"assets/data.json": "9624176186bf4af7f702d051ce142093",
"assets/FontManifest.json": "d2944ad7fd55c231fefda3cf1c2a68b2",
"assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/fonts/MaterialIcons-Regular.otf": "e0ac65f0d6badf65c6506e4709c854aa",
"assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/NOTICES": "c9b7ef14a5515692fcdabf8b64e6feb2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "15d3c59ea12ee065d7b597942557ada6",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "32903d70c5d40969458d9ad5fb0fb942",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "2878e2d4e2c5f12958a984c0c6cb5a69",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "8c384a0a472f3898de272d0feb272b77",
"icons/Icon-192.png": "a15b0dc09d1ceb4cf691d2e82079aa67",
"icons/Icon-512.png": "2cad44eaa6115cf5a3effd5dcf302ff1",
"index.html": "28a478746ea4160a25f884d32f42899b",
"/": "28a478746ea4160a25f884d32f42899b",
"main.dart.js": "630b7fd6bdd0eede3af11784fc7921f2",
"manifest.json": "3421cd00e17d6f742428a18cbf45709d",
"version.json": "a29e8b22a08aa0274b027931eec216c4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
