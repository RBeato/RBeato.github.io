'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "eee201d854b4789b649709b6d381f190",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "47cc861aaafbcd30aaa3e13f293d543d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ef3bc31e04b05ecdee2972e461b0d6ea",
".git/logs/refs/heads/main": "3471b5beaae14200a3c46e0dc97d3b88",
".git/logs/refs/remotes/origin/main": "1e2b18f1248b770d4bdbbba5124c658b",
".git/objects/02/3eab4486ec039eb352f8bafbd0db5841687e75": "a53d188da29000a1d95cbe10cb2859c7",
".git/objects/07/737fc16049e23d8261e83493131705c380eb6f": "7d7180868899c93ac301deecc5a13df2",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/0b/dd56c32f19ceb3ae9751f412c65a043dda7a8b": "eeed86c5ccac304777974c1cb9f6b483",
".git/objects/0d/afd3ea585fc9ec88f9b68f95d2ee4ad1279586": "ab8de3853aa74c921f46ab5ac4735dcc",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/15/6075b402b57db5c1b057ffd56b624ac817e8f2": "47d9ddf66f691687c1e02217fee6bb4d",
".git/objects/1b/93e9eba7badfe24113b2df4ce44056f0fe0a0a": "f9c09aa0c1d7c5d57d6aacf76da5f2db",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/1c/bf00002273d83062149cff9a090e1a96986021": "4f96667d4c1f8090518b0df1a6dded48",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/22/617adab3373f49f98338696156db1efa464307": "c35ee915a35cae25609c9c9d913bebcb",
".git/objects/25/548e71a8bfe20ba35482a51d9c365b77438e4e": "8908de0936eb3adcef3686ad2f0f8bed",
".git/objects/28/14098796eb1ca6e498b8b2eef3cca016b2fd96": "acd36a117ebc6349705ced078bd6b36b",
".git/objects/29/a1b4a27781a22112f64466af4f7cfd23ed69fb": "50f5dfa80f9e6276cb062f355bfcf8eb",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/3e/3e496d58983cf02472eaf367a4d7415dc92aa0": "12baefc0aa6e497f589dd6f2e34503d0",
".git/objects/44/d94ef43df6a744bbd757ca1fb32b514b243909": "dfcf8788a9a7c943ab3b3a18ea80dbda",
".git/objects/4c/919d0e0e1862a4f236da3217f4c12368c58075": "4041380cc6a101212d7e6faec38bfd68",
".git/objects/57/1e9b788453f0c346de0f9211957720691956c6": "dd0a905003a91e0f7e7ad0f542de4132",
".git/objects/5a/8e816dfbe395a1f5ba22b5bed95f04f60324b4": "b72764ead7c6535e55a34383787da7a5",
".git/objects/5c/6c1dc368cf45e1e54945fb12d3f77b7cbdd365": "9cdb3c805301715040df71bc8f3a063c",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/63/05784a02d1a29c27039ab194a3b73b8819e67e": "6c051dab54ccccc9bd2dcb8ea605fad5",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/6f/f37edb1f5a89fd50a567af0026d2369d3cadf9": "f6ecd96f7a7e74549fd9e1d4c2db87cb",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/76/078a9f09627041e903ef63746dacfa8a152e7b": "57c98eeb1396918581556b758e8e5cc6",
".git/objects/77/ebf8eb7c970f1c64464acefdbaa3ebd69fda09": "1b6de86e61c3ac8bf08b654104959d04",
".git/objects/79/3616d6ff81d1b37194fb29a2d804de3c7fdb1f": "a56d421e966eb677445c09a03827e5d8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/0761de3ae1e0e177725c1ae34fef4b0b45240e": "e271f3e99530a19d84fe202dde25f9cc",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/82/88410cadd311b731bb63ad35d5181f428a3d0d": "1d17cc6325a5495573599aef825aa3b8",
".git/objects/82/f153a3a88a713e50442221935d7601ab4327d0": "02aa0ffa4b7f176be40c6ef190879437",
".git/objects/83/ba71be97061b159b58248d0ab9736c0bf6b862": "692041baf3fd2d38d483df9c27b1d9fa",
".git/objects/86/b9f4995b2428151fc09b4b52b955caa21930d5": "3b7653f94fd70765ed491f217c5ba1a4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/6939439c16d1b434fe509d11ca76a26101f437": "0d7f79888d10306afef87278dc3acb19",
".git/objects/90/6c58d7e229c3a09ee2f5217755190e66754df3": "05e3fd99ea4cb35a513b88bf175246ab",
".git/objects/90/7a453533067b1eb04ca6970859e5fc4266372e": "fbea6f876057100b8403f9c675cd33fa",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/97/ab37067ab4ed102a51264fde142bc8d81d10d0": "b9c2f3e15963066ca0e6e45d46eb9546",
".git/objects/99/f75b243fe6be68c8a66935796a91b7c0a6417b": "e5ebe209ceeb6ca4b941e087617b7fc2",
".git/objects/9a/907f3a0af4f16cc7a0cc2c1125bc36efd6d71d": "392baf83107a1175a2fd689152246566",
".git/objects/9b/4dc0b5bc189f964550b51da77710e329656db5": "df392a6d0e02921eadaa6a747c2ec01e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/05db9c5c2ec024fafe15c4147c691c219959f3": "e042ce6f0fe7bf88e1e7d1b5745398b7",
".git/objects/b2/0c63a44db55d5cf2adfdfdae1273ebdcfe4235": "36729f886b493e0649ce34243eda5c36",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/b580ec2b671b138aa778340be2113d4ff967b6": "ef85a05a56eb5d4c7f756aeb89fdd510",
".git/objects/c2/2baf4d12091e9d1c5b38e5dca7bcc666b16767": "610799af89246a7db6bff77a3d4b1e6a",
".git/objects/c5/8d3a6ec4b50e80b165e32c97301bc964ec4a06": "778b232c13e96d9e445fcc11fdcaf0ab",
".git/objects/c6/6342908bc82e3bf54691550a8433d81dc5809e": "6ce53875bd4bceeb8c1bbc3e9c0ec7ce",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/cb/787ea9a0aa128c5ae8f3ff1d97013e0b3a00ca": "29d8ed8b74d44926b4d1dd5331c33c68",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/ce/d0ebaf4e0eee078426e11ee6a72d6679377166": "934cec51ff71ee47c5529b81347714b6",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/d3/a6daf94296d98632c36b703567f701ad4d1e0f": "1b52efdceee294d8dac5053bab42f777",
".git/objects/d4/bec1a162d7f4f384a02825e470876f5bcdde8e": "01342d0279b4f7221dc10c6c9c25b505",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/9b0ceab739b8fe0885e6ea5c1f79655b33726e": "2a780530e01fbfffd58d27885615bf5b",
".git/objects/db/9e73bd000c0e8a175fb2b87c5331aa27337f30": "9effa4ebd313c05d650659b177eca12e",
".git/objects/de/c4a8551005921dea38f9eb27b28a8fe8ece28b": "cf89926e75c290396526218e292973eb",
".git/objects/e1/c16ded607555ca41ea87ab42aebc3ef0b74d4b": "38da641b7946526235d2ba0d404fff60",
".git/objects/e2/53dac989ff3af92a67cf6b8093fe9e46065dbc": "7fd514a95fe5b536b3ed9d926d31c083",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/bfd6ffd4267c112e702307364b9238f1611b9c": "5ec4ebb16b9c3340585390f2101de3b3",
".git/objects/e7/bf588c754da8817cad71ab0a4486b3672153b3": "3ff848d8d111f91b25583b888696fd99",
".git/objects/eb/64366e7a66a1cacdedc25c48e6a5db4ed01306": "f7d105784997124461d824bf7e9ff335",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/0ae173457eb0f89b47cf407e0a6a9ec35b47e7": "7bca3d2fb3a0d6f41ab31a6cf685b451",
".git/objects/ed/ed229cd1bc9acc476e192fab3395bc4eb5b11a": "8ee3365c49a075b94b84969bcfeda0da",
".git/objects/f0/95d8c07ef861d1fc97c60298d78242aa55f2d6": "ca24a6e659d89343171a6d8b70dd91d2",
".git/objects/f0/a506833d1389064a073f95c11c7491f5deb1df": "bc90c019a0583ead2ac20f9497734cc1",
".git/objects/f2/350909e0d631fa3da470fd1798b36a6fb731ab": "d2308f6e295b5664eb118e9407093d86",
".git/objects/f2/56cf5720e6bd39452bc8bc0ba9725d6c09f854": "fd460aaf8ef85c3d293369dccd18ed79",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/f5/ec356039d9ce7f83820b56c8c7e665acdaeac2": "529f820affe986807c4f7e8197565931",
".git/objects/f6/8211730793ab23ee071c7ea1aa90a866c0caeb": "fe31512366452f4a55a3d8caf17ed618",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/fd/b269e0a1a113706babe6e551e247f5431beeec": "83571763ca037b2deebd4cd1478c072f",
".git/objects/fe/6371988eea19751d40c7af67ddc61df29b1bb8": "003ad8ee519249f8cd7d9e8b4d6993b4",
".git/refs/heads/main": "2030f2dace25819c02f53fcfd03fe75d",
".git/refs/remotes/origin/main": "2030f2dace25819c02f53fcfd03fe75d",
"assets/AssetManifest.json": "a250dd8918db0a31b21dd9c5214e2935",
"assets/assets/images/block_revolution.png": "c39e70f97e4477f2e510a02a86291a5c",
"assets/assets/images/chord_generator.png": "2606c7c960caa02a59c64d1066db89f0",
"assets/assets/images/design.png": "6aaec412d8837ac9a83f03f453877606",
"assets/assets/images/develop.png": "471c2c94d5d04112086eba9fd78c6809",
"assets/assets/images/ear_enhancer.png": "53d870b81b6c3247d5836ab6ff83e920",
"assets/assets/images/email.png": "5eb3c4b86aafbee72b8c471b29413a50",
"assets/assets/images/mappin.png": "9cc090022ae31337336d2024160714b8",
"assets/assets/images/person_small.png": "6f780d058150543096d7bd3060db4ac4",
"assets/assets/images/phone.png": "45903a1ffa9ede882171aca9f71c4c29",
"assets/assets/images/promote.png": "2bd8adcad79a4ebb80888d1a0583b3c4",
"assets/assets/images/quote.png": "1a0aa9a06293ac5689bc32012e0e13e6",
"assets/assets/images/romeu_comp.png": "bf8f18788f54caf4cce812b1e6c9034c",
"assets/assets/images/whatsapp.png": "426617ad28567da23a2346566d84b5a6",
"assets/assets/images/write.png": "dc4f0d3df06d5fc9b13b9168b88e2560",
"assets/assets/images/youtube.png": "81cea6fc47a319de6ad49c00eda309e4",
"assets/assets/skills_icons/bootstrap_logo.svg": "bc6a9c633421251046dd938a2325fff9",
"assets/assets/skills_icons/c++_logo.svg": "faffd0b56b21d9bb5c72c1f0bd42d67e",
"assets/assets/skills_icons/css_logo.svg": "d10f4bf68a27526ef83fd9dfdc75317d",
"assets/assets/skills_icons/dart_logo.svg": "9da33b058bf8980a407c2cd6840d0b91",
"assets/assets/skills_icons/ethereum_logo.svg": "30e6cf227c006d9337a277ca5719ba4d",
"assets/assets/skills_icons/flutter_logo.svg": "f2e3fb32c6ba7935f07f050f1782afd6",
"assets/assets/skills_icons/html_logo.svg": "1f4630ca7f4e95a6cb2c95d3ac3e7947",
"assets/assets/skills_icons/javascript_logo.svg": "8ee02715beb101d7d505a9473bfb2754",
"assets/assets/skills_icons/keras_logo.svg": "8b099027e099c97d341319074e015324",
"assets/assets/skills_icons/python_logo.svg": "8e7effa705ac8952cf93fd0286338df0",
"assets/assets/skills_icons/solidity_logo.svg": "da793b471bc2bf44b0340d93ec74ecb3",
"assets/assets/social_icons/facebook.svg": "51f42ec568eb2bdbc734ad787f2ae037",
"assets/assets/social_icons/github.svg": "1bb027109345a90a9eab1e929d8669c2",
"assets/assets/social_icons/linkedIn.svg": "5b238434e2862c877f08572b96c0ef7b",
"assets/assets/social_icons/twitter.svg": "9a35c67b9ac12cd7a8817a11aafdfaec",
"assets/assets/social_icons/youtube.svg": "04d8390f3ec3910751bee52a405a5fe9",
"assets/FontManifest.json": "ffcb24467702a101fdb79c3be019d63d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f33a78ee6a4d5be135a88c8ac686b158",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "73598b42c541d383680c09fcea3e3ede",
"/": "73598b42c541d383680c09fcea3e3ede",
"loader.css": "f61841a48de5b79316184d950976284a",
"main.dart.js": "a7698a2a6961ffb5c3af486fd290539a",
"manifest.json": "33f800ebfef064613f8dec323b266c5b",
"version.json": "bd341ba74d38c530da636604a427deda"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
