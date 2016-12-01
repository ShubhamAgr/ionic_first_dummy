angular.module('starter.controllers', [])


.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  console.log('appctrl');
  
})

.controller('listCtrl', function($scope,apiService) {
  console.log('listctrl');
  // console.log(apiService);
  var da = {data:[
  {
    "newspaper_id": "1",
    "newspaper_name": "TOI",
    "articles": [
      {
        "article_id": "801",
        "category_id": "1",
        "category_name": "Top Stories",
        "title": "Indian girl among 20 killed in Bangladesh's worst terror attack",
        "img": "http://timesofindia.indiatimes.com/photo/34824568.cms?width=100&amp;height=75",
        "source_date": "Sat, 02 Jul 2016 10:51:06 GMT"
      },
      {
        "article_id": "802",
        "category_id": "1",
        "category_name": "Top Stories",
        "title": "Dhaka attack ends: 20 foreigners hacked to death",
        "img": "http://timesofindia.indiatimes.com/photo/34824568.cms?width=100&amp;height=75",
        "source_date": "Sat, 02 Jul 2016 09:59:49 GMT"
      },
      {
        "article_id": "803",
        "category_id": "1",
        "category_name": "Top Stories",
        "title": "Live updates: 6 gunmen killed, 1 held in Dhaka",
        "img": "",
        "source_date": "Fri, 01 Jul 2016 18:05:57 GMT"
      },
      {
        "article_id": "804",
        "category_id": "1",
        "category_name": "Top Stories",
        "title": "Bangla PM: What kind of Muslims are these?",
        "img": "http://timesofindia.indiatimes.com/photo/34824568.cms?width=100&amp;height=75",
        "source_date": "Sat, 02 Jul 2016 07:40:24 GMT"
      },
      {
        "article_id": "805",
        "category_id": "1",
        "category_name": "Top Stories",
        "title": "PM OKs $1bn deal with US for 4 Poseidons",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53015423,width-400,resizemode-4/53015423.jpg",
        "source_date": "Fri, 01 Jul 2016 20:20:57 GMT"
      },
      {
        "article_id": "680",
        "category_id": "1",
        "category_name": "Top Stories",
        "title": "'Modi declares emergency in Delhi': Kejriwal after AAP MLA's arrest",
        "img": "http://timesofindia.indiatimes.com/photo/34824568.cms?width=100&amp;height=75",
        "source_date": "Sat, 25 Jun 2016 08:49:47 GMT"
      },
      {
        "article_id": "10",
        "category_id": "2",
        "category_name": "Most Recent Stories",
        "title": "Green court bans vehicles older than 15 years in Delhi",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-45290304,width-400,resizemode-4/45290304.jpg",
        "source_date": "Wed, 26 Nov 2014 20:57:42 GMT"
      },
      {
        "article_id": "11",
        "category_id": "2",
        "category_name": "Most Recent Stories",
        "title": "Chinks in security, heroin recovered from goods train form Pak",
        "img": "",
        "source_date": "Wed, 26 Nov 2014 15:25:00 GMT"
      },
      {
        "article_id": "12",
        "category_id": "2",
        "category_name": "Most Recent Stories",
        "title": "NCP attacks Maharashtra CM for not paying visit to 26/11 memorial",
        "img": "",
        "source_date": "Wed, 26 Nov 2014 14:58:03 GMT"
      },
      {
        "article_id": "13",
        "category_id": "2",
        "category_name": "Most Recent Stories",
        "title": "ULFA plot to trigger blasts ahead of Modi visit unearthed",
        "img": "",
        "source_date": "Wed, 26 Nov 2014 12:27:15 GMT"
      },
      {
        "article_id": "14",
        "category_id": "2",
        "category_name": "Most Recent Stories",
        "title": "Lilavati hospital's former trustee arrested in foreign exchange violation case",
        "img": "",
        "source_date": "Wed, 26 Nov 2014 09:04:27 GMT"
      },
      {
        "article_id": "15",
        "category_id": "2",
        "category_name": "Most Recent Stories",
        "title": "Vasan unveils party flag sporting images of Kamaraj, Moopanar",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-45282671,width-400,resizemode-4/45282671.jpg",
        "source_date": "Wed, 26 Nov 2014 08:56:40 GMT"
      },
      {
        "article_id": "36",
        "category_id": "3",
        "category_name": "National",
        "title": "Plot to kill Chhota Rajan foiled, 4 arrested",
        "img": "http://timesofindia.indiatimes.com/photo/34824568.cms?width=100&amp;height=75",
        "source_date": "Fri, 10 Jun 2016 04:51:40 GMT"
      },
      {
        "article_id": "37",
        "category_id": "3",
        "category_name": "National",
        "title": "Mamata readies plan to enter Left bastion of Tripura",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-52686062,width-400,resizemode-4/52686062.jpg",
        "source_date": "Fri, 10 Jun 2016 07:39:08 GMT"
      },
      {
        "article_id": "38",
        "category_id": "3",
        "category_name": "National",
        "title": "Congress preparing seat-based manifesto for UP",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-52685607,width-400,resizemode-4/52685607.jpg",
        "source_date": "Fri, 10 Jun 2016 07:12:51 GMT"
      },
      {
        "article_id": "39",
        "category_id": "3",
        "category_name": "National",
        "title": "Amit Shah hails PM's diplomatic feats",
        "img": "http://timesofindia.indiatimes.com/photo/34824568.cms?width=100&amp;height=75",
        "source_date": "Thu, 09 Jun 2016 21:51:30 GMT"
      },
      {
        "article_id": "40",
        "category_id": "3",
        "category_name": "National",
        "title": "Govt busy celebrating during drought: Rahul Gandhi",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-52483668,width-400,resizemode-4/52483668.jpg",
        "source_date": "Sat, 28 May 2016 16:59:20 GMT"
      },
      {
        "article_id": "41",
        "category_id": "3",
        "category_name": "National",
        "title": "AIMPLB against ban on triple talaq",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-52580636,width-400,resizemode-4/52580636.jpg",
        "source_date": "Sat, 04 Jun 2016 00:29:23 GMT"
      },
      {
        "article_id": "809",
        "category_id": "4",
        "category_name": "International",
        "title": "5 killed, 20 injured in cafe shooting in Serbia",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53019070,width-400,resizemode-4/53019070.jpg",
        "source_date": "Sat, 02 Jul 2016 06:41:19 GMT"
      },
      {
        "article_id": "810",
        "category_id": "4",
        "category_name": "International",
        "title": "Trump and Clinton looking for different things in a VP",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53019962,width-400,resizemode-4/53019962.jpg",
        "source_date": "Sat, 02 Jul 2016 08:13:20 GMT"
      },
      {
        "article_id": "811",
        "category_id": "4",
        "category_name": "International",
        "title": "Top ISIL leaders killed in US airstrike: Pentagon",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53018868,width-400,resizemode-4/53018868.jpg",
        "source_date": "Sat, 02 Jul 2016 06:30:26 GMT"
      },
      {
        "article_id": "812",
        "category_id": "4",
        "category_name": "International",
        "title": "Vietnam urges 'fair' ruling on South China Sea case",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53019351,width-400,resizemode-4/53019351.jpg",
        "source_date": "Sat, 02 Jul 2016 07:09:21 GMT"
      },
      {
        "article_id": "813",
        "category_id": "4",
        "category_name": "International",
        "title": "Australians head to polls in tight election contest",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53019230,width-400,resizemode-4/53019230.jpg",
        "source_date": "Sat, 02 Jul 2016 06:57:52 GMT"
      },
      {
        "article_id": "814",
        "category_id": "4",
        "category_name": "International",
        "title": "19 killed in landslides and heavy rains in China",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53018057,width-400,resizemode-4/53018057.jpg",
        "source_date": "Sat, 02 Jul 2016 05:26:13 GMT"
      },
      {
        "article_id": "828",
        "category_id": "5",
        "category_name": "Business",
        "title": "Silver hits two-year high on global cues",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53021659,width-400,resizemode-4/53021659.jpg",
        "source_date": "Sat, 02 Jul 2016 11:08:46 GMT"
      },
      {
        "article_id": "829",
        "category_id": "5",
        "category_name": "Business",
        "title": "Seeking post-Brexit calm, Obama walks back UK trade warning",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53020007,width-400,resizemode-4/53020007.jpg",
        "source_date": "Sat, 02 Jul 2016 08:19:22 GMT"
      },
      {
        "article_id": "830",
        "category_id": "5",
        "category_name": "Business",
        "title": "Market overcome Brexit jitters, gains over 700 points",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53019622,width-400,resizemode-4/53019622.jpg",
        "source_date": "Sat, 02 Jul 2016 07:34:51 GMT"
      },
      {
        "article_id": "831",
        "category_id": "5",
        "category_name": "Business",
        "title": "Car sales skid for 2nd mth in a row, slip 3% in June",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53016348,width-400,resizemode-4/53016348.jpg",
        "source_date": "Sat, 02 Jul 2016 01:33:18 GMT"
      },
      {
        "article_id": "832",
        "category_id": "5",
        "category_name": "Business",
        "title": "Rating agencies need to be more transparent: RBI",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53011456,width-400,resizemode-4/53011456.jpg",
        "source_date": "Fri, 01 Jul 2016 15:33:06 GMT"
      },
      {
        "article_id": "833",
        "category_id": "5",
        "category_name": "Business",
        "title": "US auto sales on track for best June since 2005",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53011569,width-400,resizemode-4/53011569.jpg",
        "source_date": "Fri, 01 Jul 2016 15:46:10 GMT"
      },
      {
        "article_id": "848",
        "category_id": "5",
        "category_name": "Business",
        "title": "Not easy to fill void created due to Dhoni retirement: Saha",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53006350,width-400,resizemode-4/53006350.jpg",
        "source_date": "Fri, 01 Jul 2016 10:13:46 GMT"
      },
      {
        "article_id": "849",
        "category_id": "5",
        "category_name": "Business",
        "title": "Coach Kumble wants us to take our own decisions: KL Rahul",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53004685,width-400,resizemode-4/53004685.jpg",
        "source_date": "Fri, 01 Jul 2016 08:10:34 GMT"
      },
      {
        "article_id": "850",
        "category_id": "5",
        "category_name": "Business",
        "title": "Looking forward to test myself against Kohli: Shardul",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-52992106,width-400,resizemode-4/52992106.jpg",
        "source_date": "Thu, 30 Jun 2016 13:34:49 GMT"
      },
      {
        "article_id": "851",
        "category_id": "5",
        "category_name": "Business",
        "title": "Vice-captaincy will bring the best out of me: Rahane",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-52959421,width-400,resizemode-4/52959421.jpg",
        "source_date": "Tue, 28 Jun 2016 14:46:45 GMT"
      },
      {
        "article_id": "94",
        "category_id": "5",
        "category_name": "Business",
        "title": "Axar Patel moves to career-best ranking of 13",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-52835863,width-400,resizemode-4/52835863.jpg",
        "source_date": "Mon, 20 Jun 2016 13:50:23 GMT"
      },
      {
        "article_id": "95",
        "category_id": "5",
        "category_name": "Business",
        "title": "Are Dhoni's finishing skills on the wane?",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-52820913,width-400,resizemode-4/52820913.jpg",
        "source_date": "Sun, 19 Jun 2016 12:57:51 GMT"
      },
      {
        "article_id": "853",
        "category_id": "6",
        "category_name": "Sports",
        "title": "Hamstrung Bolt hopes to prove fitness in London to secure Rio spot",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53018476,width-400,resizemode-4/53018476.jpg",
        "source_date": "Sat, 02 Jul 2016 05:57:49 GMT"
      },
      {
        "article_id": "854",
        "category_id": "6",
        "category_name": "Sports",
        "title": "Amla, Bravo in world record fifth-wicket T20 stand",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53021139,width-400,resizemode-4/53021139.jpg",
        "source_date": "Sat, 02 Jul 2016 10:04:38 GMT"
      },
      {
        "article_id": "706",
        "category_id": "6",
        "category_name": "Sports",
        "title": "Jitu Rai wins 10m Air Pistol silver in ISSF World Cup",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-52914492,width-400,resizemode-4/52914492.jpg",
        "source_date": "Sat, 25 Jun 2016 08:29:46 GMT"
      },
      {
        "article_id": "707",
        "category_id": "6",
        "category_name": "Sports",
        "title": "We have not yet signed Harmanpreet: Sydney Thunder",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-52915719,width-400,resizemode-4/52915719.jpg",
        "source_date": "Sat, 25 Jun 2016 11:04:24 GMT"
      },
      {
        "article_id": "708",
        "category_id": "6",
        "category_name": "Sports",
        "title": "Dutee Chand books Rio berth in women’s 100m",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-52914239,width-400,resizemode-4/52914239.jpg",
        "source_date": "Sat, 25 Jun 2016 07:54:58 GMT"
      },
      {
        "article_id": "709",
        "category_id": "6",
        "category_name": "Sports",
        "title": "Irfan, Parthiv and Tiwary back neutral Ranji venues",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-52911032,width-400,resizemode-4/52911032.jpg",
        "source_date": "Sat, 25 Jun 2016 02:47:53 GMT"
      },
      {
        "article_id": "126",
        "category_id": "9",
        "category_name": "Education",
        "title": "Prolonged repetitive manual work ups rheumatoid arthritis risk",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-52701029,width-400,resizemode-4/52701029.jpg",
        "source_date": "Sat, 11 Jun 2016 07:46:22 GMT"
      },
      {
        "article_id": "127",
        "category_id": "9",
        "category_name": "Education",
        "title": "Astronomers spot black hole devouring cold gas cloud",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-52667972,width-400,resizemode-4/52667972.jpg",
        "source_date": "Thu, 09 Jun 2016 06:02:05 GMT"
      },
      {
        "article_id": "128",
        "category_id": "9",
        "category_name": "Education",
        "title": "Oldest plant root stem cells discovered",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-52583849,width-400,resizemode-4/52583849.jpg",
        "source_date": "Sat, 04 Jun 2016 05:08:07 GMT"
      },
      {
        "article_id": "129",
        "category_id": "9",
        "category_name": "Education",
        "title": "Moon plays key role in maintaining Earth's magnetic field",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-51670462,width-400,resizemode-4/51670462.jpg",
        "source_date": "Sun, 03 Apr 2016 10:24:32 GMT"
      },
      {
        "article_id": "130",
        "category_id": "9",
        "category_name": "Education",
        "title": "Diminutive 'Hobbit' people vanished earlier than known",
        "img": "",
        "source_date": "Thu, 31 Mar 2016 03:15:03 GMT"
      },
      {
        "article_id": "131",
        "category_id": "9",
        "category_name": "Education",
        "title": "Laser cloaking device could hide us from aliens",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-51670797,width-400,resizemode-4/51670797.jpg",
        "source_date": "Sun, 03 Apr 2016 11:01:46 GMT"
      },
      {
        "article_id": "856",
        "category_id": "7",
        "category_name": "Technology",
        "title": "Android O to Z: 6 desi names Google can consider",
        "img": "http://timesofindia.indiatimes.com",
        "source_date": "Sat, 02 Jul 2016 11:26:20 GMT"
      },
      {
        "article_id": "857",
        "category_id": "7",
        "category_name": "Technology",
        "title": "10 must-have apps for your first Android smartphone",
        "img": "",
        "source_date": "Sat, 02 Jul 2016 05:12:57 GMT"
      },
      {
        "article_id": "858",
        "category_id": "7",
        "category_name": "Technology",
        "title": "Man sues Apple for billions for 'hijacking' iPhone idea",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53017826,width-400,resizemode-4/53017826.jpg",
        "source_date": "Sat, 02 Jul 2016 04:52:59 GMT"
      },
      {
        "article_id": "859",
        "category_id": "7",
        "category_name": "Technology",
        "title": "Apple says Spotify wanted 'preferential treatment'",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53018214,width-400,resizemode-4/53018214.jpg",
        "source_date": "Sat, 02 Jul 2016 05:18:57 GMT"
      },
      {
        "article_id": "860",
        "category_id": "7",
        "category_name": "Technology",
        "title": "Indian origin student develops software to control smartphone with eyes",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53021131,width-400,resizemode-4/53021131.jpg",
        "source_date": "Sat, 02 Jul 2016 09:29:29 GMT"
      },
      {
        "article_id": "861",
        "category_id": "7",
        "category_name": "Technology",
        "title": "Facebook asks for ID proof of a woman named Isis",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53020892,width-400,resizemode-4/53020892.jpg",
        "source_date": "Sat, 02 Jul 2016 07:22:29 GMT"
      },
      {
        "article_id": "181",
        "category_id": "9",
        "category_name": "Education",
        "title": "Artist opens fine arts college for the disabled in Tamil Nadu",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-48037801,width-400,resizemode-4/48037801.jpg",
        "source_date": "Sat, 11 Jul 2015 22:59:57 GMT"
      },
      {
        "article_id": "182",
        "category_id": "9",
        "category_name": "Education",
        "title": "Gujarat University MCA and MBA seats vacant",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-48001597,width-400,resizemode-4/48001597.jpg",
        "source_date": "Thu, 09 Jul 2015 09:09:00 GMT"
      },
      {
        "article_id": "183",
        "category_id": "9",
        "category_name": "Education",
        "title": "CBSE Board results by May end",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-47227301,width-400,resizemode-4/47227301.jpg",
        "source_date": "Sun, 10 May 2015 21:21:29 GMT"
      },
      {
        "article_id": "184",
        "category_id": "9",
        "category_name": "Education",
        "title": "No text books for students in Ganjam",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-46942985,width-400,resizemode-4/46942985.jpg",
        "source_date": "Thu, 16 Apr 2015 07:42:35 GMT"
      },
      {
        "article_id": "185",
        "category_id": "9",
        "category_name": "Education",
        "title": "18 central varsity introduce choice-based credit system",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-46453831,width-400,resizemode-4/46453831.jpg",
        "source_date": "Wed, 04 Mar 2015 08:13:54 GMT"
      },
      {
        "article_id": "166",
        "category_id": "9",
        "category_name": "Education",
        "title": "UGC to institutes: Refund fees and return certificates",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-52142821,width-400,resizemode-4/52142821.jpg",
        "source_date": "Fri, 06 May 2016 07:36:15 GMT"
      },
      {
        "article_id": "876",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "Then and now: Bittu Sardar from ‘Koi…Mil Gaya’",
        "img": "http://timesofindia.indiatimes.com",
        "source_date": "Sat, 02 Jul 2016 10:16:07 GMT"
      },
      {
        "article_id": "877",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "SRK responds to Suhana's viral bikini pics",
        "img": "http://timesofindia.indiatimes.com",
        "source_date": "Sat, 02 Jul 2016 07:14:33 GMT"
      },
      {
        "article_id": "878",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "Saif: Kareena and I are expecting our first child in December",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53019463,width-400,resizemode-4/53019463.jpg",
        "source_date": "Sat, 02 Jul 2016 07:20:06 GMT"
      },
      {
        "article_id": "879",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "Irrfan on animal killing controversy: Clerics don't scare me",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53018320,width-400,resizemode-4/53018320.jpg",
        "source_date": "Sat, 02 Jul 2016 05:42:28 GMT"
      },
      {
        "article_id": "880",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "Shah Rukh Khan and Salman Khan chat the night away",
        "img": "http://timesofindia.indiatimes.com/thumb/msid-53018502,width-400,resizemode-4/53018502.jpg",
        "source_date": "Sat, 02 Jul 2016 05:57:22 GMT"
      },
      {
        "article_id": "881",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "Movie Review: Shorgul",
        "img": "http://timesofindia.indiatimes.com",
        "source_date": "Fri, 01 Jul 2016 04:11:09 GMT"
      }
    ]
  },
  {
    "newspaper_id": "2",
    "newspaper_name": "Jagran",
    "articles": [
      {
        "article_id": "895",
        "category_id": "3",
        "category_name": "National",
        "title": "I LOVE U का मतलब ये नहीं कि लड़की शा‍रीरिक संबंध के लिए तैयार है:सुप्रीम कोर्ट",
        "img": "http://images.jagran.com/images/02_07_2016-sc28_s.jpg",
        "source_date": "2 Jul 2016 11:48:25 GMT"
      },
      {
        "article_id": "896",
        "category_id": "3",
        "category_name": "National",
        "title": "बांग्‍लादेश के आतंकी हमले में मारे गए 20 लोगों में एक भारतीय भी शामिल",
        "img": "http://images.jagran.com/images/02_07_2016-bangladeshattack_s.jpg",
        "source_date": "2 Jul 2016 11:19:58 GMT"
      },
      {
        "article_id": "897",
        "category_id": "3",
        "category_name": "National",
        "title": "महिला आरक्षी से IG बोले - तुम्हारा फिगर अच्छा है, तुमसे प्यार करना चाहता हूं!",
        "img": "http://images.jagran.com/images/02_07_2016-ig_s.jpg",
        "source_date": "2 Jul 2016 11:15:56 GMT"
      },
      {
        "article_id": "898",
        "category_id": "3",
        "category_name": "National",
        "title": "बांग्लादेश के बाद अब आतंकियों के निशाने पर कहींं भारत तो नहीं",
        "img": "http://images.jagran.com/images/02_07_2016-bangladesh2_s.jpg",
        "source_date": "2 Jul 2016 11:15:50 GMT"
      },
      {
        "article_id": "899",
        "category_id": "3",
        "category_name": "National",
        "title": "भारी बारिश के साथ मुंबई में हाई टाइड, गलियों में घुसा पानी",
        "img": "http://images.jagran.com/images/02_07_2016-high_tide_s.jpg",
        "source_date": "2 Jul 2016 11:06:58 GMT"
      },
      {
        "article_id": "900",
        "category_id": "3",
        "category_name": "National",
        "title": "जयपुर में विधायक की BMW कार ने छह लोगों को कुचला, तीन की मौत",
        "img": "http://images.jagran.com/images/02_07_2016-bmwhit02_s.jpg",
        "source_date": "2 Jul 2016 10:51:39 GMT"
      },
      {
        "article_id": "905",
        "category_id": "4",
        "category_name": "International",
        "title": "तालिबान ने सभी विदे‍शियों को अफगानिस्‍तान से बाहर जाने को कहा",
        "img": "http://images.jagran.com/images/02_07_2016-haibtullah_s.jpg",
        "source_date": "2 Jul 2016 11:42:20 GMT"
      },
      {
        "article_id": "906",
        "category_id": "4",
        "category_name": "International",
        "title": "हिलेरी भी पाकिस्तान के प्रति रुख कड़ा करेंगी",
        "img": "http://images.jagran.com/images/02_07_2016-hillary02_s.jpg",
        "source_date": "2 Jul 2016 11:30:33 GMT"
      },
      {
        "article_id": "907",
        "category_id": "4",
        "category_name": "International",
        "title": "आतंकी हमले के बाद बोलींं हसीना- देश को नहीं बनने देंगे आतंकियों का ठिकाना",
        "img": "http://images.jagran.com/images/02_07_2016-dhakaattack_s.jpg",
        "source_date": "2 Jul 2016 11:03:32 GMT"
      },
      {
        "article_id": "908",
        "category_id": "4",
        "category_name": "International",
        "title": "ढाका हमला: रेस्तरां में बंधक संकट खत्म, पकड़ा गया एक जिंदा आतंकी",
        "img": "http://images.jagran.com/images/01_07_2016-dhaka_s.jpg",
        "source_date": "2 Jul 2016 06:37:16 GMT"
      },
      {
        "article_id": "909",
        "category_id": "4",
        "category_name": "International",
        "title": "कादिरी की धमकी से ईद के बाद पाक में गहरा सकता है राजनीतिक संकट",
        "img": "http://images.jagran.com/images/02_07_2016-02tahir-qadri_s.jpg",
        "source_date": "2 Jul 2016 06:19:22 GMT"
      },
      {
        "article_id": "910",
        "category_id": "4",
        "category_name": "International",
        "title": "ढाका हमला: 12 घंटे से ज्यादा चला बंधक संकट खत्म, जानिए- दस बड़ी बातें",
        "img": "http://images.jagran.com/images/02_07_2016-attack_s.jpg",
        "source_date": "2 Jul 2016 04:52:25 GMT"
      },
      {
        "article_id": "915",
        "category_id": "5",
        "category_name": "Business",
        "title": "जून में कम बारिश से खरीफ की बुआई सुस्त, जुलाई में अच्छी बारिश की उम्मीद",
        "img": "http://images.jagran.com/images/02_07_2016-kharif_s.jpg",
        "source_date": "2 Jul 2016 07:58:24 GMT"
      },
      {
        "article_id": "916",
        "category_id": "5",
        "category_name": "Business",
        "title": "सुप्रीम कोर्ट ने पी-नोट्स पर आरबीआइ, सेबी से मांगा जवाब",
        "img": "http://images.jagran.com/images/02_07_2016-02sc_s.jpg",
        "source_date": "1 Jul 2016 23:51:50 GMT"
      },
      {
        "article_id": "917",
        "category_id": "5",
        "category_name": "Business",
        "title": "एसबीआइ में सहयोगी बैंकों के विलय के खिलाफ होगी हड़ताल",
        "img": "http://images.jagran.com/images/02_07_2016-2sbi_s.jpg",
        "source_date": "1 Jul 2016 21:57:15 GMT"
      },
      {
        "article_id": "918",
        "category_id": "5",
        "category_name": "Business",
        "title": "मारुति की बिक्री घटी,  मगर हुंडई की बढ़ी",
        "img": "http://images.jagran.com/images/01_07_2016-maruti_s.jpg",
        "source_date": "1 Jul 2016 17:16:01 GMT"
      },
      {
        "article_id": "919",
        "category_id": "5",
        "category_name": "Business",
        "title": "ज्वैलर्स के पंजीयन को एक माह का और समय",
        "img": "http://images.jagran.com/images/01_07_2016-jewellers1_s.jpg",
        "source_date": "1 Jul 2016 17:14:39 GMT"
      },
      {
        "article_id": "920",
        "category_id": "5",
        "category_name": "Business",
        "title": "कैग ऑडिट के दायरे में आए रिजर्व बैंकः शर्मा",
        "img": "http://images.jagran.com/images/01_07_2016-shashi1_s.jpg",
        "source_date": "1 Jul 2016 17:03:00 GMT"
      },
      {
        "article_id": "925",
        "category_id": "6",
        "category_name": "Sports",
        "title": "हैमस्ट्रिंग के चलते बोल्ट जमैका के राष्ट्रीय ओलंपिक परीक्षण से बाहर",
        "img": "http://images.jagran.com/images/02_07_2016-0bolt_s.jpg",
        "source_date": "2 Jul 2016 05:49:54 GMT"
      },
      {
        "article_id": "926",
        "category_id": "6",
        "category_name": "Sports",
        "title": "विक्टर ट्राइकी ने अंपायर को कहे अपशब्द",
        "img": "http://images.jagran.com/images/02_07_2016-2victor_s.jpg",
        "source_date": "1 Jul 2016 23:16:11 GMT"
      },
      {
        "article_id": "927",
        "category_id": "6",
        "category_name": "Sports",
        "title": "योग केे दम पर 29 साल मैदान पर टिका रहा ये खिलाड़ी, अब कहा 'अलविदा'",
        "img": "http://images.jagran.com/images/01_07_2016-giggs1_s.jpg",
        "source_date": "1 Jul 2016 22:02:14 GMT"
      },
      {
        "article_id": "928",
        "category_id": "6",
        "category_name": "Sports",
        "title": "युकी भांबरी चोटिल होने की वजह से डेविस कप मैच से हटे",
        "img": "http://images.jagran.com/images/01_07_2016-yuki5_s.jpg",
        "source_date": "1 Jul 2016 16:20:23 GMT"
      },
      {
        "article_id": "929",
        "category_id": "6",
        "category_name": "Sports",
        "title": "कनाडा ओपन बैडमिंटन: अजय और प्रणय क्वार्टर फाइनल में",
        "img": "http://images.jagran.com/images/01_07_2016-ajay5_s.jpg",
        "source_date": "1 Jul 2016 15:25:08 GMT"
      },
      {
        "article_id": "930",
        "category_id": "6",
        "category_name": "Sports",
        "title": "भारत को न्यूजीलैंड के हाथों मिली हार",
        "img": "http://images.jagran.com/images/01_07_2016-hockey2_s.jpg",
        "source_date": "1 Jul 2016 15:03:04 GMT"
      },
      {
        "article_id": "935",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "राखी सावंत ने कहा, बिना शादी बन के दिखाउंगी मां",
        "img": "http://images.jagran.com/images/02_07_2016-rakhisamant_s.jpg",
        "source_date": "2 Jul 2016 11:44:29 GMT"
      },
      {
        "article_id": "936",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "बेटी सुहाना की बिकनी फोटो पर शाहरुख ने दिया ये करारा जवाब",
        "img": "http://images.jagran.com/images/02_07_2016-srksuhana_s.jpg",
        "source_date": "2 Jul 2016 09:57:09 GMT"
      },
      {
        "article_id": "937",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "नसीरुद्दीन शाह ने सेक्‍स कॉमेडी फिल्‍मों को लेकर दिया चौंकानेवाला बयान",
        "img": "http://images.jagran.com/images/02_07_2016-naseeer_jagran_s.jpg",
        "source_date": "2 Jul 2016 09:39:24 GMT"
      },
      {
        "article_id": "938",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "रणबीर कपूर से ब्रेकअप के बाद कट्रीना उठाने जा रही हैं ये बड़ा कदम",
        "img": "http://images.jagran.com/images/02_07_2016-katreenakaif_s.jpg",
        "source_date": "2 Jul 2016 08:38:12 GMT"
      },
      {
        "article_id": "939",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "इस अभिनेत्री ने खोला राज, ऑडिशन के दौरान हुआ था यौन शोषण",
        "img": "http://images.jagran.com/images/02_07_2016-darkimage_s.jpg",
        "source_date": "2 Jul 2016 08:30:56 GMT"
      },
      {
        "article_id": "940",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "सैफ ने करीना की प्रेग्‍नेंसी पर तोड़ी चुप्‍पी, बताया बेबो कब बन रहीं मम्‍मी",
        "img": "http://images.jagran.com/images/02_07_2016-saif_kareenapregnency_s.jpg",
        "source_date": "2 Jul 2016 08:11:06 GMT"
      },
      {
        "article_id": "945",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "फिल्‍म रिव्‍यू 'शोरगुल' :  गुल होती इंसानियत, बचाने का शोर (2.5 स्‍टार)",
        "img": "http://images.jagran.com/images/01_07_2016-shorgul-movie_s.jpg",
        "source_date": "1 Jul 2016 10:32:26 GMT"
      },
      {
        "article_id": "256",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "फिल्‍म रिव्‍यू: 'जुनूनियत', प्यार व सुरक्षित भविष्य का द्वंद्व(3 स्‍टार)",
        "img": "http://images.jagran.com/images/24_06_2016-junoniyat_review_s.jpg",
        "source_date": "24 Jun 2016 09:42:23 GMT"
      },
      {
        "article_id": "257",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "फिल्‍म रिव्‍यू: 'रमन राघव 2.0', क्रूर हकीकतों का अफसाना (4 स्‍टार)",
        "img": "http://images.jagran.com/images/24_06_2016-raman-raghav24_s.jpg",
        "source_date": "24 Jun 2016 08:22:12 GMT"
      },
      {
        "article_id": "258",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "फिल्‍म रिव्‍यू: 'धनक', भाई-बहन की खूबसूरत कहानी (3.5  स्‍टार)",
        "img": "http://images.jagran.com/images/17_06_2016-dhanak-movie_s.jpg",
        "source_date": "17 Jun 2016 07:14:42 GMT"
      },
      {
        "article_id": "259",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "फिल्‍म रिव्‍यू : 'तीन' में है नयापन (3 स्‍टार)",
        "img": "http://images.jagran.com/images/10_06_2016-te3n_review_s.jpg",
        "source_date": "10 Jun 2016 08:19:24 GMT"
      },
      {
        "article_id": "260",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "फिल्म रिव्यू : 'दो लफ्जों की कहानी', बासी और घिसी-पिटी (1 स्‍टार)",
        "img": "http://images.jagran.com/images/10_06_2016-dolafzo_review_s.jpg",
        "source_date": "10 Jun 2016 06:13:54 GMT"
      },
      {
        "article_id": "784",
        "category_id": "5",
        "category_name": "Business",
        "title": "फैंस के बीच विराट ने खोला वो राज कि सब हक्के-बक्के रह गए",
        "img": "http://images.jagran.com/images/25_06_2016-virat903_s.jpg",
        "source_date": "25 Jun 2016 12:13:02 GMT"
      },
      {
        "article_id": "785",
        "category_id": "5",
        "category_name": "Business",
        "title": "जिम्बाब्वे के खिलाफ सीरीज जीतने के बाद धौनी को मिला था स्पेशल तोहफा",
        "img": "http://images.jagran.com/images/25_06_2016-ms-dhoni-07_s.jpg",
        "source_date": "25 Jun 2016 12:08:34 GMT"
      },
      {
        "article_id": "786",
        "category_id": "5",
        "category_name": "Business",
        "title": "विराट या धौनी नहीं, ये पूर्व भारतीय बल्लेबाज हैं मैकुलम की ऑल टाइम बेस्ट प्लेइंग इलेवन में",
        "img": "http://images.jagran.com/images/24_06_2016-mccullum1_s.jpg",
        "source_date": "25 Jun 2016 10:01:56 GMT"
      },
      {
        "article_id": "787",
        "category_id": "5",
        "category_name": "Business",
        "title": "रवि शास्त्री ने बताया मेरे इंटरव्यू के दौरान मौजूद नहीं थे गांगुली",
        "img": "http://images.jagran.com/images/25_06_2016-00gangulyvsravi_s.jpg",
        "source_date": "25 Jun 2016 09:21:24 GMT"
      },
      {
        "article_id": "788",
        "category_id": "5",
        "category_name": "Business",
        "title": "...तो बदल जाएगा भारतीय क्रिकेट कंट्रोल बोर्ड का नाम !",
        "img": "http://images.jagran.com/images/25_06_2016-bccianurag_s.jpg",
        "source_date": "25 Jun 2016 09:20:10 GMT"
      },
      {
        "article_id": "789",
        "category_id": "5",
        "category_name": "Business",
        "title": "...तो इस वजह से खास है इंग्लैंड टीम के लिए ये सीरीज",
        "img": "http://images.jagran.com/images/25_06_2016-0record_s.jpg",
        "source_date": "25 Jun 2016 05:29:44 GMT"
      },
      {
        "article_id": "275",
        "category_id": "9",
        "category_name": "Education",
        "title": "दर्शकों को लुभा रहा है वर्ल्ड बुक फेयर में नेशनल बुक ट्रस्ट का खास पवेलियन",
        "img": "http://images.jagran.com/images/12_01_2016-nbt_bookfair_prom_s.jpg",
        "source_date": "12 Jan 2016 07:38:25 GMT"
      },
      {
        "article_id": "276",
        "category_id": "9",
        "category_name": "Education",
        "title": "HOW TO CHOOSE  कोर्स  AND  कॉलेज?",
        "img": "http://images.jagran.com/images/14_05_2015-college-admission_s.jpg",
        "source_date": "14 May 2015 06:36:15 GMT"
      },
      {
        "article_id": "277",
        "category_id": "9",
        "category_name": "Education",
        "title": "Mock Questions for UGC-NET 2015",
        "img": "http://images.jagran.com/images/13_05_2015-mock_s.jpg",
        "source_date": "13 May 2015 11:25:41 GMT"
      },
      {
        "article_id": "278",
        "category_id": "9",
        "category_name": "Education",
        "title": "Clear Your Concept",
        "img": "http://images.jagran.com/images/13_05_2015-net_s.jpg",
        "source_date": "13 May 2015 11:19:21 GMT"
      },
      {
        "article_id": "279",
        "category_id": "9",
        "category_name": "Education",
        "title": "Mission  Admission 2015",
        "img": "http://images.jagran.com/images/13_05_2015-admission_s.jpg",
        "source_date": "13 May 2015 10:43:32 GMT"
      },
      {
        "article_id": "280",
        "category_id": "9",
        "category_name": "Education",
        "title": "काउंसलर कॉर्नर",
        "img": "http://images.jagran.com/images/13_05_2015-cc_s.jpg",
        "source_date": "13 May 2015 09:29:00 GMT"
      },
      {
        "article_id": "285",
        "category_id": "9",
        "category_name": "Education",
        "title": "Science and  tech",
        "img": "http://images.jagran.com/images/14_05_2015-science_s.jpg",
        "source_date": "14 May 2015 06:19:57 GMT"
      },
      {
        "article_id": "286",
        "category_id": "9",
        "category_name": "Education",
        "title": "WHAT? WHY? HOW?",
        "img": "http://images.jagran.com/images/13_05_2015-why_s.jpg",
        "source_date": "13 May 2015 05:58:23 GMT"
      },
      {
        "article_id": "287",
        "category_id": "9",
        "category_name": "Education",
        "title": "साइंस क्विज",
        "img": "http://images.jagran.com/images/29_04_2015-science_s.jpg",
        "source_date": "29 Apr 2015 10:46:17 GMT"
      },
      {
        "article_id": "949",
        "category_id": "13",
        "category_name": "Career",
        "title": "टाइम्स बी स्कूल के सर्वे में जीएलए का प्रबंधन सस्थान देश और प्रदेश में अग्रणी",
        "img": "http://images.jagran.com/images/30_06_2016-gla_university_management_institute_s.jpg",
        "source_date": "30 Jun 2016 13:18:21 GMT"
      },
      {
        "article_id": "950",
        "category_id": "13",
        "category_name": "Career",
        "title": "छात्रों के सर्वांगीण विकास तथा रोजगारोन्मुखी शिक्षा का उत्कृष्ट संस्थान है संस्कृति यूनिवर्सिटी",
        "img": "http://images.jagran.com/images/28_06_2016-sanskriti_university_mathura2_s.jpg",
        "source_date": "28 Jun 2016 12:58:52 GMT"
      },
      {
        "article_id": "290",
        "category_id": "13",
        "category_name": "Career",
        "title": "कैंसर के उपचार व रोकथाम के लिए होगा नैनो का उपयोग",
        "img": "http://images.jagran.com/images/10_06_2016-prof_s.jpg",
        "source_date": "10 Jun 2016 05:51:24 GMT"
      },
      {
        "article_id": "291",
        "category_id": "13",
        "category_name": "Career",
        "title": "जीएलए विवि उत्तर प्रदेश और उत्तर भारत का उभरता सितारा",
        "img": "http://images.jagran.com/images/07_06_2016-anup_s.jpg",
        "source_date": "7 Jun 2016 04:52:29 GMT"
      },
      {
        "article_id": "292",
        "category_id": "13",
        "category_name": "Career",
        "title": "जीएलए का एमसीए बना प्लेसमेंट की सीढ़ी",
        "img": "http://images.jagran.com/images/02_06_2016-mca_s.jpg",
        "source_date": "2 Jun 2016 09:53:29 GMT"
      },
      {
        "article_id": "293",
        "category_id": "13",
        "category_name": "Career",
        "title": "जे के लक्ष्मीपत यूनिवर्सिटी ने वार्षिक दीक्षांत समारोह में ग्रेजुएट्स को किया डिग्री के साथ सम्मानित",
        "img": "http://images.jagran.com/images/30_05_2016-jk-1_s.jpg",
        "source_date": "30 May 2016 12:28:23 GMT"
      },
      {
        "article_id": "795",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "सिद्धू की पंजाब की राजनीति में वापसी, कोर टीम में शामिल",
        "img": "http://images.jagran.com/images/25_06_2016-navjot-singh-siddu_s.jpg",
        "source_date": "25 Jun 2016 11:47:00 GMT"
      },
      {
        "article_id": "796",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "पंजाब में आप ने बनाया तिकोना मुकाबला, घर में चुनौतियां भी कम नहीं",
        "img": "http://images.jagran.com/images/25_06_2016-24punjab-politics_s.jpg",
        "source_date": "25 Jun 2016 11:46:46 GMT"
      },
      {
        "article_id": "797",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "मुख्यमंत्री तीर्थ दर्शन यात्रा दो जुलाई से, शेड्यूल जारी",
        "img": "http://images.jagran.com/images/25_06_2016-25theerthdharshan_s.jpg",
        "source_date": "25 Jun 2016 10:54:29 GMT"
      },
      {
        "article_id": "304",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "भाजपा कोर से जोशी, तीक्ष्ण समेत पांच की छुट्टी",
        "img": "http://images.jagran.com/images/23_06_2016-anil-joshi_s.jpg",
        "source_date": "23 Jun 2016 09:35:51 GMT"
      },
      {
        "article_id": "305",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "मेडिकल कॉलेजों में एनआरआइ कोटा के लिए 12वीं के अंक होंगे आधार : हाई कोर्ट",
        "img": "http://images.jagran.com/images/23_06_2016-hicourt_s.jpg",
        "source_date": "23 Jun 2016 06:24:06 GMT"
      },
      {
        "article_id": "306",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "पाक गजल गायक मोहम्मद अली के मल्टीपल एंट्री वीजा को मंजूरी",
        "img": "http://images.jagran.com/images/22_06_2016-23highcourt_s.jpg",
        "source_date": "22 Jun 2016 19:52:36 GMT"
      },
      {
        "article_id": "799",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "इस बार कबड़्डी कप में लगेगा बॉलीवुड का तड़का, डेढ़ गुना हुई इनाम ऱाशि",
        "img": "http://images.jagran.com/images/25_06_2016-25kabbdi_s.jpg",
        "source_date": "25 Jun 2016 09:15:24 GMT"
      },
      {
        "article_id": "309",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "बादल बाप-बेटे ने पंजाब को जी भरकर  लूटा  : अमरिंदर",
        "img": "http://images.jagran.com/images/22_06_2016-22amrinder1_s.jpg",
        "source_date": "22 Jun 2016 11:00:38 GMT"
      },
      {
        "article_id": "310",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "लुधियाना में कबाड़ के गोदाम में विस्फोट, दो बच्चे घायल",
        "img": "http://images.jagran.com/images/21_06_2016-21ludhianablast_s.jpg",
        "source_date": "22 Jun 2016 05:18:59 GMT"
      },
      {
        "article_id": "311",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "लुधियाना में महिला को गाेमांस बेचते पकड़ा, हिंदू संगठनों का हंगामा",
        "img": "http://images.jagran.com/images/19_06_2016-19ldh1n_s.jpg",
        "source_date": "19 Jun 2016 13:53:37 GMT"
      },
      {
        "article_id": "312",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "उड़ता पंजाब का लीक होना शर्मनाक बात : आमिर खान",
        "img": "http://images.jagran.com/images/16_06_2016-amir-khan_s.jpg",
        "source_date": "16 Jun 2016 13:07:51 GMT"
      },
      {
        "article_id": "313",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "पत्नी का भूत उतारना चाहता था पति और हो गया कत्ल",
        "img": "http://images.jagran.com/images/16_06_2016-throt_s.jpg",
        "source_date": "16 Jun 2016 09:37:39 GMT"
      },
      {
        "article_id": "319",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "दिल्ली की नवविवाहिता ने अमृतसर में पांचवीं मंजिल से कूदकर दी जान",
        "img": "http://images.jagran.com/images/24_06_2016-24death_s.jpg",
        "source_date": "24 Jun 2016 13:54:43 GMT"
      },
      {
        "article_id": "320",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "श्री हरिमंदिर साहिब में हर की पैड़ी की छत पर अब चमचमाएगा सोना",
        "img": "http://images.jagran.com/images/23_06_2016-23golden_temple_s.jpg",
        "source_date": "23 Jun 2016 13:43:03 GMT"
      },
      {
        "article_id": "321",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "देवर ने भतीजे के सामने की भाभी का गला घोंटकर हत्या",
        "img": "http://images.jagran.com/images/23_06_2016-murder2_s.jpg",
        "source_date": "23 Jun 2016 09:30:38 GMT"
      },
      {
        "article_id": "322",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "मनमानी फीस नहीं वसूल सकेंगे निजी स्कूल : स्‍मृति ईरानी",
        "img": "http://images.jagran.com/images/19_06_2016-20smriti_s.jpg",
        "source_date": "20 Jun 2016 04:35:26 GMT"
      },
      {
        "article_id": "323",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "भारत-पाक सीमा पर 'नशेड़ी' कबूतरों का खेल",
        "img": "http://images.jagran.com/images/17_06_2016-18pigeonm_s.jpg",
        "source_date": "18 Jun 2016 16:28:41 GMT"
      },
      {
        "article_id": "324",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "बेटे की चाह में फुसलाकर बच्चे काे ले गई महिला, फिर किया ये...",
        "img": "http://images.jagran.com/images/17_06_2016-17boy1_s.jpg",
        "source_date": "17 Jun 2016 15:15:25 GMT"
      }
    ]
  },
  {
    "newspaper_id": "3",
    "newspaper_name": "PunjabiJagran",
    "articles": [
      {
        "article_id": "329",
        "category_id": "3",
        "category_name": "National",
        "title": "ਸਵਾ ਲੱਖ ਸਾਲਾਨਾ ਹੋਈ ਐੱਨਆਈਟੀ ਦੀ ਫੀਸ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 10:14 PM (IST)"
      },
      {
        "article_id": "330",
        "category_id": "3",
        "category_name": "National",
        "title": "ਛੇੜਖਾਨੀ ਦੇ ਵਿਰੋਧ 'ਚ ਨਾਬਾਲਿਗਾ 'ਤੇ ਸੁੱਟਿਆ ਤੇਜ਼ਾਬ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 09:34 PM (IST)"
      },
      {
        "article_id": "331",
        "category_id": "3",
        "category_name": "National",
        "title": "ਪੁਲਸ ਭਰਤੀ 'ਚ ਦੋ ਨੌਜਵਾਨਾਂ ਦੀ ਮੌਤ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 09:24 PM (IST)"
      },
      {
        "article_id": "332",
        "category_id": "3",
        "category_name": "National",
        "title": "ਪੁਲਸ ਸੁਧਾਰ 'ਤੇ ਪ੍ਰਕਾਸ਼ ਸਿੰਘ ਤੋਂ ਰਿਪੋਰਟ ਨਹੀਂ ਲਵੇਗੀ ਸਰਕਾਰ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 09:24 PM (IST)"
      },
      {
        "article_id": "333",
        "category_id": "3",
        "category_name": "National",
        "title": "9 ਸਾਲ ਪਹਿਲੇ ਮਰੀ ਮਿਥਿਲੇਸ਼ ਜਿੱਤ ਗਈ ਪੰਚਾਇਤ ਚੋਣ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 09:04 PM (IST)"
      },
      {
        "article_id": "334",
        "category_id": "3",
        "category_name": "National",
        "title": "ਸ਼ਾਸਤਰੀ ਦਾ ਜੀਵਨ ਹਰ ਭਾਰਤੀ ਲਈ ਪ੍ਰੇਰਨਾ : ਮੋਦੀ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 08:54 PM (IST)"
      },
      {
        "article_id": "339",
        "category_id": "4",
        "category_name": "International",
        "title": "'ਮਿਰਜ਼ਿਆ' ਨਾਲ ਆਈਫਾ ਦਾ ਆਗਾਜ਼",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 08:14 PM (IST)"
      },
      {
        "article_id": "340",
        "category_id": "4",
        "category_name": "International",
        "title": "ਹੁਣ ਅਫਗਾਨਿਸਤਾਨ 'ਚ ਕੰਮ ਨਹੀਂ ਕਰਨਗੇ ਨੇਪਾਲੀ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 07:54 PM (IST)"
      },
      {
        "article_id": "341",
        "category_id": "4",
        "category_name": "International",
        "title": "ਸਿੱਖਿਆ ਦੇ ਖੇਤਰ 'ਚ ਗੋਰਿਆਂ ਦੀ ਧਰਤੀ 'ਤੇ ਚਮਕੇ ਕਪੂਰਥਲੀਏ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 07:30 PM (IST)"
      },
      {
        "article_id": "342",
        "category_id": "4",
        "category_name": "International",
        "title": "ਅਮਰੀਕਾ ਚਾਹੁੰਦਾ ਹੈ ਭਾਰਤ ਤੇ ਚੀਨ 'ਚ ਚੰਗੇ ਸਬੰਧ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 05:29 PM (IST)"
      },
      {
        "article_id": "343",
        "category_id": "4",
        "category_name": "International",
        "title": "ਭਾਰਤੀ ਕਾਰੋਬਾਰੀ ਜ਼ੁਬੈਦਾ ਬਾਈ ਯੂਐੱਨ 'ਚ ਸਨਮਾਨਿਤ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 05:20 PM (IST)"
      },
      {
        "article_id": "344",
        "category_id": "4",
        "category_name": "International",
        "title": "ਮਿਆਂਮਾਰ ਦੀ ਮਸਜਿਦ 'ਚ ਬੋਧੀਆਂ ਨੇ ਕੀਤੀ ਭੰਨਤੋੜ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 05:10 PM (IST)"
      },
      {
        "article_id": "355",
        "category_id": "5",
        "category_name": "Business",
        "title": "ਬ੍ਰੇਕਜਿਟ ਕਾਰਨ ਮੂਧੇ ਮੰੂਹ ਡਿੱਗੇ ਬਾਜ਼ਾਰ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 07:54 PM (IST)"
      },
      {
        "article_id": "356",
        "category_id": "5",
        "category_name": "Business",
        "title": "ਖਸਤਾ ਹਾਲਤ ਬਰਾਮਦ ਲਈ ਬੁਰੀ ਖ਼ਬਰ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 07:30 PM (IST)"
      },
      {
        "article_id": "357",
        "category_id": "5",
        "category_name": "Business",
        "title": "ਰਾਜਨ ਨੇ ਰਿਜ਼ਰਵ ਬੈਂਕ ਦੇ ਤਜ਼ੁਰਬੇ ਦਾ ਮਿਲੇਗਾ ਲਾਭ : ਸ਼ਿਕਾਗੋ ਯੂਨੀਵਰਸਿਟੀ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 06:39 PM (IST)"
      },
      {
        "article_id": "358",
        "category_id": "5",
        "category_name": "Business",
        "title": "ਇਨਕਮ ਟੈਕਸ ਵਿਭਾਗ ਨੇ ਪ੍ਰਕਾਸ਼ਿਤ ਕੀਤੀ ਐਸੈੱਟਸ ਵਲਿਊਅਰਜ਼ ਦੀ ਸੂਚੀ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 05:49 PM (IST)"
      },
      {
        "article_id": "349",
        "category_id": "5",
        "category_name": "Business",
        "title": "ਰਾਸ਼ਟਰ ਮੰਡਲ ਤੋਂ ਵੱਖ ਹੋਣ ਲਈ ਹੋਵੇ ਵੋਟਿੰਗ : ਕੋਲਾ ਸਕੱਤਰ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 10:04 PM (IST)"
      },
      {
        "article_id": "350",
        "category_id": "5",
        "category_name": "Business",
        "title": "ਚਾਰ ਕਾਰੋਬਾਰੀਆਂ ਨੇ ਸਰੈਂਡਰ ਕੀਤੀ 38 ਕਰੋੜ ਦੀ ਅਣ-ਐਲਾਨੀ ਆਮਦਨ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 09:44 PM (IST)"
      },
      {
        "article_id": "362",
        "category_id": "6",
        "category_name": "Sports",
        "title": "ਕੁੰਬਲੇ ਦੇ ਕੋਚ ਬਨਣ ਨਾਲ ਹੋਵੇਗਾ ਸੁਧਾਰ",
        "img": "",
        "source_date": "Updated on:&nbsp;Thu, 23 Jun 2016 09:31 PM (IST)"
      },
      {
        "article_id": "363",
        "category_id": "6",
        "category_name": "Sports",
        "title": "ਨਵੰਬਰ 'ਚ ਵਿਆਹ ਕਰਵਾਏਗੀ ਭਲਵਾਨ ਗੀਤਾ ਫੋਗਾਟ",
        "img": "",
        "source_date": "Updated on:&nbsp;Thu, 23 Jun 2016 09:01 PM (IST)"
      },
      {
        "article_id": "364",
        "category_id": "6",
        "category_name": "Sports",
        "title": "ਵਿਕਾਸ ਤੇ ਮਨੋਜ ਨੂੰ ਮਿਲੀ ਓਲੰਪਿਕ ਦੀ ਟਿਕਟ",
        "img": "",
        "source_date": "Updated on:&nbsp;Thu, 23 Jun 2016 08:41 PM (IST)"
      },
      {
        "article_id": "365",
        "category_id": "6",
        "category_name": "Sports",
        "title": "ਏਸ਼ੀਆ 'ਚ ਪਹਿਲਾ ਮਹਾਕੁੰਭ",
        "img": "",
        "source_date": "Updated on:&nbsp;Thu, 23 Jun 2016 08:00 PM (IST)"
      },
      {
        "article_id": "366",
        "category_id": "6",
        "category_name": "Sports",
        "title": "ਬੈਲਜੀਅਮ ਪੁੱਜਿਆ ਆਖ਼ਰੀ-16 'ਚ",
        "img": "",
        "source_date": "Updated on:&nbsp;Thu, 23 Jun 2016 07:31 PM (IST)"
      },
      {
        "article_id": "367",
        "category_id": "6",
        "category_name": "Sports",
        "title": "ਫਾਈਨਲ 'ਚ ਇਸ ਵਾਰ ਵੀ ਭਿੜਨਗੇ ਚਿਲੀ ਤੇ ਅਰਜਨਟੀਨਾ",
        "img": "",
        "source_date": "Updated on:&nbsp;Thu, 23 Jun 2016 07:21 PM (IST)"
      },
      {
        "article_id": "371",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "ਨੌਜਵਾਨ ਨੂੰ ਸੱਪ ਨੇ ਡੰਗਿਆ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 10:34 PM (IST)"
      },
      {
        "article_id": "372",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "ਪਾਵਰਕਾਮ ਮੁਲਾਜ਼ਮਾਂ ਨੇ ਰਾਜਨ ਅੰਗੂਰਾਲ ਦੀ ਗਿ੍ਰਫ਼ਤਾਰੀ ਲਈ ਕੀਤਾ ਰੋਸ ਮਾਰਚ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 10:14 PM (IST)"
      },
      {
        "article_id": "373",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "ਗੱਡੀ ਤੋਂ 500 ਗ੍ਰਾਮ ਨਸ਼ੀਲਾ ਪਦਾਰਥ ਬਰਾਮਦ, ਮੁਲਜ਼ਮ ਫ਼ਰਾਰ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 10:14 PM (IST)"
      },
      {
        "article_id": "374",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "ਢਾਈ ਏਕੜ ਤੋਂ ਘੱਟ ਜ਼ਮੀਨ ਵਾਲੇ ਕਿਸਾਨਾਂ ਨੂੰ ਪਹਿਲਾਂ ਮਿਲਣਗੇ ਟਿਊਬਵੈੱਲ ਕੁਨੈਕਸ਼ਨ-ਬਾਦਲ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 09:44 PM (IST)"
      },
      {
        "article_id": "375",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "ਗੁਰਦਵਾਰਾ ਦਿਲਬਾਗ ਨਗਰ 'ਚ ਨਸ਼ਿਆਂ ਖ਼ਿਲਾਫ਼ ਬੱਚਿਆਂ ਨੂੰ ਕੀਤਾ ਜਾਗਰੂਕ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 09:44 PM (IST)"
      },
      {
        "article_id": "376",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "ਸਰਕਾਰੀ ਮਿੱਟੀ ਦਾ ਤੇਲ ਵੇਚਣ 'ਤੇ ਅੱਠ ਖ਼ਿਲਾਫ਼ ਮਾਮਲਾ ਦਰਜ",
        "img": "",
        "source_date": "Updated on:&nbsp;Fri, 24 Jun 2016 09:44 PM (IST)"
      }
    ]
  },
  {
    "newspaper_id": "4",
    "newspaper_name": "PunjabKesari",
    "articles": [
      {
        "article_id": "384",
        "category_id": "5",
        "category_name": "Business",
        "title": "ब्रेग्जिट से भारत के मार्कीट को हुआ 4 लाख करोड़ का नुक्सान",
        "img": "http://static.punjabkesari.in/multimedia/2016_6image_16_05_502849127sen-l.jpg",
        "source_date": "June 24, 2016 04:06:PM"
      },
      {
        "article_id": "385",
        "category_id": "5",
        "category_name": "Business",
        "title": "स्मार्टफोन फ्रीडम 251 को लेकर कंपनी ने किया बड़ा ऐलान!",
        "img": "http://static.punjabkesari.in/multimedia/2016_6image_15_26_344338184ff-l.jpg",
        "source_date": "June 24, 2016 03:26:PM"
      },
      {
        "article_id": "386",
        "category_id": "5",
        "category_name": "Business",
        "title": "यूरोपियन संघ छोडऩे का ब्रिटेन पर होगा नकारात्मक असर: मूडीज ",
        "img": "http://static.punjabkesari.in/multimedia/2016_6image_15_21_443105978moody-l.jpg",
        "source_date": "June 24, 2016 03:21:PM"
      },
      {
        "article_id": "387",
        "category_id": "5",
        "category_name": "Business",
        "title": "अब किसान अपने खेतों में उगा पाएंगे पहले से दौगुनी अरहर की दाल",
        "img": "http://static.punjabkesari.in/multimedia/2016_6image_14_52_281119715dal-l.jpg",
        "source_date": "June 24, 2016 02:52:PM"
      },
      {
        "article_id": "388",
        "category_id": "5",
        "category_name": "Business",
        "title": "इंडियाबुल्स रियल एस्टेट करेगी डिबेंचर जारी",
        "img": "http://static.punjabkesari.in/multimedia/2016_6image_14_15_338905535bull-l.jpg",
        "source_date": "June 24, 2016 02:15:PM"
      },
      {
        "article_id": "389",
        "category_id": "5",
        "category_name": "Business",
        "title": "सब सामान्य है: जेएलआर ने ब्रेक्जिट पर कहा  ",
        "img": "http://static.punjabkesari.in/multimedia/2016_6image_13_41_186300785jlr-l.jpg",
        "source_date": "June 24, 2016 01:41:PM"
      },
      {
        "article_id": "403",
        "category_id": "6",
        "category_name": "Sports",
        "title": "अनुराग ठाकुर ने राहुल द्रविड़ को लेकर किया खुलासा ",
        "img": "http://static.punjabkesari.in/multimedia/2016_6image_16_09_368393558rahul-dravid-1-l.jpg",
        "source_date": "June 24, 2016 04:09:PM"
      },
      {
        "article_id": "404",
        "category_id": "6",
        "category_name": "Sports",
        "title": " जन्मदिन से एक दिन पहले मेसी को इस बात पर आया गुस्सा?",
        "img": "http://static.punjabkesari.in/multimedia/2016_6image_15_33_450479372messi_650x400_41466677178-l.jpg",
        "source_date": "June 24, 2016 03:34:PM"
      },
      {
        "article_id": "405",
        "category_id": "6",
        "category_name": "Sports",
        "title": " जानिए, टीम इंडिया के नए कोच अनिल कुंबले की कुछ खास बातें ",
        "img": "http://static.punjabkesari.in/multimedia/2016_6image_14_43_105630938363548-anil-kumble-broken-jaw-l.jpg",
        "source_date": "June 24, 2016 02:43:PM"
      },
      {
        "article_id": "406",
        "category_id": "6",
        "category_name": "Sports",
        "title": " Euro Cup 2016: क्रोएशियाई ‘शार्क’ को चित करने उतरेगी रोनाल्डो सेना  ",
        "img": "http://static.punjabkesari.in/multimedia/2016_6image_13_53_167622680960-l.jpg",
        "source_date": "June 24, 2016 01:53:PM"
      },
      {
        "article_id": "407",
        "category_id": "6",
        "category_name": "Sports",
        "title": "करमाकर ने बयां किया आेलंपिक पदक चूकने का दर्द ",
        "img": "http://static.punjabkesari.in/multimedia/2016_6image_13_46_2893931095-l.jpg",
        "source_date": "June 24, 2016 01:46:PM"
      },
      {
        "article_id": "408",
        "category_id": "6",
        "category_name": "Sports",
        "title": "पेशेवर मुक्केबाजों के लिए एआईबीए ओलंपिक क्वालीफायर्स में 3 भारतीय  ",
        "img": "http://static.punjabkesari.in/multimedia/2016_6image_13_26_334875008i-l.jpg",
        "source_date": "June 24, 2016 01:26:PM"
      },
      {
        "article_id": "420",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "ट्रेंडी अौर सिंपल हेयर स्टाइल (pics)",
        "img": "http://static.punjabkesari.in/multimedia/2016_6image_14_59_309574397h1-ll.jpg",
        "source_date": "June 24, 2016 03:14:PM"
      },
      {
        "article_id": "421",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "ग्लैडिएटर सैंडल्स का ट्रेंड, ऐसे दिखें कूल (pics)",
        "img": "http://static.punjabkesari.in/multimedia/2016_6image_16_09_233832917faat-ll.jpg",
        "source_date": "June 22, 2016 04:18:PM"
      },
      {
        "article_id": "422",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": " बॉलीवुड में चला साड़ी के डिफरैंट स्टाइल का जादू (pics)",
        "img": "http://static.punjabkesari.in/multimedia/2016_6image_11_03_422660901sn1-ll.jpg",
        "source_date": "June 21, 2016 11:10:AM"
      },
      {
        "article_id": "423",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "रिप्ड डेनिम, बॉलीवुड हीरोइनों का नया अंदाज(Pics)",
        "img": "http://static.punjabkesari.in/multimedia/2016_6image_16_59_390707508anu-ll.jpg",
        "source_date": "June 20, 2016 04:59:PM"
      },
      {
        "article_id": "424",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "अालिया के ग्लैमरस स्टाइल से बदलें अपना कॉलेज लुक (pics)",
        "img": "http://static.punjabkesari.in/multimedia/2016_6image_17_22_143999538fa1-ll.jpg",
        "source_date": "June 19, 2016 05:31:PM"
      },
      {
        "article_id": "425",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "फ्रेंड की शादी में लहंगा छोड़ पहनें गाउन(pics)",
        "img": "http://static.punjabkesari.in/multimedia/2016_6image_16_54_460868651gn1-ll.jpg",
        "source_date": "June 17, 2016 05:09:PM"
      }
    ]
  },
  {
    "newspaper_id": "5",
    "newspaper_name": "Dainik Bhaskar",
    "articles": [
      {
        "article_id": "436",
        "category_id": "1",
        "category_name": "Top Stories",
        "title": "महिलाओं से जुड़ी 7 कहानियां: कोमा में पड़े शख्स के लिए लड़ रहीं दो महिलाएं",
        "img": "",
        "source_date": "Fri, 24 Jun 2016 13:35:00 GMT"
      },
      {
        "article_id": "437",
        "category_id": "1",
        "category_name": "Top Stories",
        "title": "गूगल, फेसबुक और ट्विटर का वर्चस्व तोड़ने के प्रयास",
        "img": "",
        "source_date": "Fri, 24 Jun 2016 01:40:00 GMT"
      },
      {
        "article_id": "438",
        "category_id": "1",
        "category_name": "Top Stories",
        "title": "चेतन चौहान के काम करने के पहले यह शोर कैसा?",
        "img": "",
        "source_date": "Fri, 24 Jun 2016 01:40:00 GMT"
      },
      {
        "article_id": "439",
        "category_id": "1",
        "category_name": "Top Stories",
        "title": "रूस में चुनाव:  विरोधियों को देश छोड़ने पर किया मजबूर",
        "img": "",
        "source_date": "Fri, 24 Jun 2016 01:40:00 GMT"
      },
      {
        "article_id": "440",
        "category_id": "1",
        "category_name": "Top Stories",
        "title": "भारत में क्यों मुश्किल है मानसून की भविष्यवाणी",
        "img": "",
        "source_date": "Fri, 24 Jun 2016 01:40:00 GMT"
      },
      {
        "article_id": "441",
        "category_id": "1",
        "category_name": "Top Stories",
        "title": "कभी फूलन देवी के नाम से थर्रा उठा था चंबल, आज भुखमरी की कगार पर फैमिली",
        "img": "http://i9.dainikbhaskar.com/thumbnail/680x588/web2images/www.bhaskar.com/2016/06/19/phoolan1_1466287857.jpg",
        "source_date": "Thu, 23 Jun 2016 04:31:00 GMT"
      },
      {
        "article_id": "465",
        "category_id": "3",
        "category_name": "National",
        "title": "PAK-जर्मनी के बाद अब भारत में जन्मी ऐसी बच्ची, दुनिया का तीसरा मामला",
        "img": "http://i9.dainikbhaskar.com/thumbnail/680x588/web2images/www.bhaskar.com/2016/06/12/babay02_1465728767.jpg",
        "source_date": "Mon, 13 Jun 2016 13:10:00 GMT"
      },
      {
        "article_id": "466",
        "category_id": "3",
        "category_name": "National",
        "title": "JEE एडवांस्ड के टॉप-100 में पहली बार गर्ल्स नहीं, जयपुर के अमन रहे टॉपर",
        "img": "http://i9.dainikbhaskar.com/thumbnail/680x588/web2images/www.bhaskar.com/2016/06/12/pti6_12_2016_000130b_1465.jpg",
        "source_date": "Mon, 13 Jun 2016 13:09:00 GMT"
      },
      {
        "article_id": "467",
        "category_id": "3",
        "category_name": "National",
        "title": "\\'उड़ता...\\' को लेकर सेंसर बोर्ड का बना मजाक, ट्रेंड में आया #UdtaNihalani",
        "img": "",
        "source_date": "Fri, 10 Jun 2016 14:20:00 GMT"
      },
      {
        "article_id": "468",
        "category_id": "3",
        "category_name": "National",
        "title": "यहां मरीजों को खिलाई जाती है जिंदा मछली, 150 साल से कुछ यूं हो रहा इलाज",
        "img": "http://i9.dainikbhaskar.com/thumbnail/680x588/web2images/www.bhaskar.com/2016/06/08/fish07_1465395329.jpg",
        "source_date": "Fri, 10 Jun 2016 14:19:00 GMT"
      },
      {
        "article_id": "469",
        "category_id": "3",
        "category_name": "National",
        "title": "हेल्थ, एजुकेशन, अच्छी लाइफ स्टाइल में हम दुनिया के टॉप-100 में भी नहीं",
        "img": "http://i9.dainikbhaskar.com/thumbnail/680x588/web2images/www.bhaskar.com/2016/06/10/nnr01_1465549322.jpg",
        "source_date": "Fri, 10 Jun 2016 09:09:00 GMT"
      },
      {
        "article_id": "470",
        "category_id": "3",
        "category_name": "National",
        "title": "लुंगी में लड़कियों की PHOTOS हो रहीं वायरल, जानिए क्या है सच्चाई",
        "img": "http://i9.dainikbhaskar.com/thumbnail/680x588/web2images/www.bhaskar.com/2016/06/07/kerala12_1465280177.jpg",
        "source_date": "Tue, 07 Jun 2016 14:23:00 GMT"
      },
      {
        "article_id": "494",
        "category_id": "4",
        "category_name": "International",
        "title": "जिनपिंग से मिले मोदी, एनएसजी पर भारत के विरोध में 6 देश",
        "img": "http://i9.dainikbhaskar.com/thumbnail/680x588/web2images/www.bhaskar.com/2016/06/24/nsg_1466740864.jpg",
        "source_date": "Fri, 24 Jun 2016 03:56:00 GMT"
      },
      {
        "article_id": "495",
        "category_id": "4",
        "category_name": "International",
        "title": "ये है दुनिया की सबसे ठंडी जगह, माइनस 89.2 में यहां रहते हैं इंसान",
        "img": "http://i9.dainikbhaskar.com/thumbnail/680x588/web2images/www.bhaskar.com/2016/06/23/23-june-internation-sun-r.jpg",
        "source_date": "Fri, 24 Jun 2016 03:48:00 GMT"
      },
      {
        "article_id": "496",
        "category_id": "4",
        "category_name": "International",
        "title": "जर्मनी में 50 घायल: \\'जंगल बुक\\' देख रहे थे लोग, नकाबपोश ने सिनेमाहॉल में की फायरिंग",
        "img": "http://i9.dainikbhaskar.com/thumbnail/680x588/web2images/www.bhaskar.com/2016/06/23/germeny2_1466694201.jpg",
        "source_date": "Fri, 24 Jun 2016 01:13:00 GMT"
      },
      {
        "article_id": "497",
        "category_id": "4",
        "category_name": "International",
        "title": "दुबई में रमजान के दौरान दिन में भी मिलेगी शराब, रेवन्यू के लिए पहली बार बदला रूल",
        "img": "http://i9.dainikbhaskar.com/thumbnail/680x588/web2images/www.bhaskar.com/2016/06/23/duabi_1466677338.jpg",
        "source_date": "Thu, 23 Jun 2016 13:56:00 GMT"
      },
      {
        "article_id": "498",
        "category_id": "4",
        "category_name": "International",
        "title": "ब्रिटेन के कई एरिया बाढ़ की चपेट में, एक दिन में एक महीने जितनी बारिश",
        "img": "http://i9.dainikbhaskar.com/thumbnail/680x588/web2images/www.bhaskar.com/2016/06/23/flood_1466687034.jpg",
        "source_date": "Thu, 23 Jun 2016 13:03:00 GMT"
      },
      {
        "article_id": "499",
        "category_id": "4",
        "category_name": "International",
        "title": "33 हजार फीट से लगाई छलांग, 15 Photos में देखिए डेयरडेविल्स का रोमांच",
        "img": "http://i9.dainikbhaskar.com/thumbnail/680x588/web2images/www.bhaskar.com/2016/06/23/2-mount-bromo-fly-ne.jpg",
        "source_date": "Thu, 23 Jun 2016 12:12:00 GMT"
      },
      {
        "article_id": "525",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "सलमान का 3 महीने का भांजा, पहनता है डिजाइनर ड्रेस",
        "img": "",
        "source_date": "Thu, 23 Jun 2016 07:54:00 GMT"
      },
      {
        "article_id": "526",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "ये हैं श्रेया के हसबैंड शिलादित्य, इंस्टाग्राम पर शेयर की वेकेशन की फोटो",
        "img": "",
        "source_date": "Thu, 23 Jun 2016 07:33:00 GMT"
      },
      {
        "article_id": "527",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "कॉन्ट्रोवर्सी के बीच विदेश रवाना हुए सलमान, ये सेलेब्स भी एयरपोर्ट पर दिखे",
        "img": "http://i3.dainikbhaskar.com/thumbnail/655x588/web2images/www.bhaskar.com/2016/06/23/iifa_celebs_1466662858.jpg",
        "source_date": "Thu, 23 Jun 2016 07:17:00 GMT"
      },
      {
        "article_id": "528",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "मजबूत किरदारों की तलाश में अर्जुन कपूर, तीन फिल्में की रिजेक्ट",
        "img": "",
        "source_date": "Thu, 23 Jun 2016 06:44:00 GMT"
      },
      {
        "article_id": "529",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "सलमान-कैट सहित ये 10 स्टार्स, फ्लॉप फिल्मों से शुरुआत कर बने सुपरस्टार",
        "img": "",
        "source_date": "Thu, 23 Jun 2016 06:38:00 GMT"
      },
      {
        "article_id": "530",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "अगस्त में शुरू होगी अजय देवगन की 'बादशाहो'",
        "img": "",
        "source_date": "Thu, 23 Jun 2016 06:37:00 GMT"
      },
      {
        "article_id": "549",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "पानी की लड़ाई: विभाग ने राजस्थान को लेटर लिखा, जवाब आए बिना खुदाई शुरू",
        "img": "",
        "source_date": "Fri, 24 Jun 2016 00:43:00 GMT"
      },
      {
        "article_id": "550",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "टाइम से पहले खुले 83 ठेके पहली बार 2 दिन के लिए बंद",
        "img": "http://i9.dainikbhaskar.com/thumbnail/680x588/web2images/www.bhaskar.com/2016/06/24/jld-a3624870-large.jpg",
        "source_date": "Thu, 23 Jun 2016 23:30:04 GMT"
      },
      {
        "article_id": "551",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "पीरजादा के घर समेत 15 जगह सीबीआई की रेड",
        "img": "",
        "source_date": "Thu, 23 Jun 2016 23:30:04 GMT"
      },
      {
        "article_id": "552",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "नौ बजे से पहले खुले 83 ठेके  पहली बार 2 दिन के लिए बंद",
        "img": "http://i9.dainikbhaskar.com/thumbnail/680x588/web2images/www.bhaskar.com/2016/06/24/jld-a3624680-large.jpg",
        "source_date": "Thu, 23 Jun 2016 23:30:04 GMT"
      },
      {
        "article_id": "537",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "गले लगाकर शरीर में उतार दी 6 गोलियां, जानें कैसे दुश्मन बना गैंगस्टर दोस्त",
        "img": "http://i9.dainikbhaskar.com/thumbnail/680x588/web2images/www.bhaskar.com/2016/06/24/firing8_1466721507.jpg",
        "source_date": "Fri, 24 Jun 2016 16:48:00 GMT"
      },
      {
        "article_id": "538",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "सरिया काट बनाई गोली से गर्दन पर मारी थी चोट, अमित अरोड़ा समेत तीन गिरफ्तार",
        "img": "",
        "source_date": "Fri, 24 Jun 2016 01:39:00 GMT"
      }
    ]
  },
  {
    "newspaper_id": "6",
    "newspaper_name": "Daily Ashiana",
    "articles": [
      {
        "article_id": "557",
        "category_id": "3",
        "category_name": "National",
        "title": "ਹਿੰਦੁਸਤਾਨ ਦੁਨੀਆਂ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਲੋਕਤੰਤਰਿਕ ਦੇਸ਼: ਜੀ.ਕੇ. ਸਿੰਘ",
        "img": "http://dailyaashiana.com/newspaper/wp-content/uploads/2013/01/Photo-DC-Meeting-regarding-Republic-Day-1-Dt-8-1-13.jpg",
        "source_date": "January 8, 2013 "
      },
      {
        "article_id": "558",
        "category_id": "3",
        "category_name": "National",
        "title": "ਪ੍ਰਵਾਸੀ ਪੰਜਾਬੀਆਂ ਦੇ ਮਾਮਲਿਆਂ ਬਾਰੇ ਉਚ ਪੱਧਰੀ ਕਮੇਟੀ ਕਾਇਮ ਕੀਤੀ ਜਾਵੇਗੀ : ਬਾਦਲ",
        "img": "http://dailyaashiana.com/newspaper/wp-content/uploads/2013/01/badal.jpg",
        "source_date": "January 4, 2013 "
      },
      {
        "article_id": "559",
        "category_id": "3",
        "category_name": "National",
        "title": "ਸੋਨੀਆ ਨੇ 7 ਸਾਲ &#8216;ਚ 50 ਵਾਰ ਕੀਤੀ ਫੌਜ ਦੇ ਜਹਾਜ਼ਾਂ ਰਾਹੀਂ ਯਾਤਰਾ",
        "img": "http://dailyaashiana.com/newspaper/wp-content/uploads/2013/01/sonia-gandhi.jpg",
        "source_date": "January 4, 2013 "
      },
      {
        "article_id": "560",
        "category_id": "3",
        "category_name": "National",
        "title": "ਪੰਜਾਬ ਸਮੇਤ ਉਤਰ ਭਾਰਤ &#8216;ਚ ਠੰਢ ਤੋਂ ਕੋਈ ਰਾਹਤ ਨਹੀਂ &#8211; ਦਿੱਲੀ &#8216;ਚ ਤਾਪਮਾਨ 2.7 ਡਿਗਰੀ ਸੈਲਸੀਅਸ ਤੱਕ ਪਹੁੰਚਿਆ",
        "img": "http://dailyaashiana.com/newspaper/wp-content/uploads/2013/01/fog.jpg",
        "source_date": "January 4, 2013 "
      },
      {
        "article_id": "561",
        "category_id": "3",
        "category_name": "National",
        "title": "ਮਲਾਲਾ ਦੀ ਖੋਪੜੀ ਦਾ ਆਪਰੇਸ਼ਨ ਕੀਤਾ ਜਾਵੇਗਾ",
        "img": "http://dailyaashiana.com/newspaper/wp-content/uploads/2013/01/malala-yousafzai.jpg",
        "source_date": "January 4, 2013 "
      },
      {
        "article_id": "562",
        "category_id": "3",
        "category_name": "National",
        "title": "&#8216;ਸ਼ਰਾਬ ਪੀ ਕੇ ਗੱਡੀ ਨਾ ਚਲਾਓ, ਆਪਣੀ ਤੇ ਦੂਜਿਆਂ ਦੀ ਜਿੰਦਗੀ ਖਤਰੇ &#8216;ਚ ਨਾ ਪਾਓ&#8217;",
        "img": "http://dailyaashiana.com/newspaper/wp-content/uploads/2013/01/road-safety.jpg",
        "source_date": "January 3, 2013 "
      },
      {
        "article_id": "569",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "ਔਰਤਾਂ ਖਿਲਾਫ ਅਪਰਾਧਾਂ ਸਬੰਧੀ ਸਖ਼ਤ ਕਾਨੂੰਨ ਬਣਾਉਣ ਲਈ ਸੰਸਦ ਦਾ ਵਿਸੇਸ਼ ਸਮਾਗਮ ਸੱਦਿਆ ਜਾਵੇ‑ਹਰਸਿਮਰਤ ਕੌਰ ਬਾਦਲ",
        "img": "http://dailyaashiana.com/newspaper/wp-content/uploads/2013/01/8-MKT-02.jpg",
        "source_date": "January 8, 2013 "
      },
      {
        "article_id": "570",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "ਜ਼ਿਲ੍ਹਾ ਪੱਧਰ &#8216;ਤੇ ਗਣਤੰਤਰ ਦਿਵਸ ਧੂਮ ਧਾਮ ਨਾਲ ਮਨਾਇਆ ਜਾਵੇਗਾ: ਡਿਪਟੀ ਕਮਿਸ਼ਨਰ",
        "img": "http://dailyaashiana.com/newspaper/wp-content/uploads/2013/01/Photo-DC-Meeting-Reg-26-January-2013.jpg",
        "source_date": "January 8, 2013 "
      },
      {
        "article_id": "571",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "ਪੱਲਸ ਪੋਲੀਓ ਸਬੰਧੀ ਟਾਸਕ ਫੋਰਸ ਦੀ ਮੀਟਿੰਗ ਹੋਈ",
        "img": "http://dailyaashiana.com/newspaper/wp-content/uploads/2013/01/01.jpg",
        "source_date": "January 8, 2013 "
      },
      {
        "article_id": "572",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "ਸੂਚਨਾ ਤੇ ਸਹਾਇਕ ਸੂਚਨਾ ਅਧਿਕਾਰੀਆਂ ਨੂੰ ਦਿੱਤੀ ਸੂਚਨਾ ਅਧਿਕਾਰ ਐਕਟ ਦੀ ਸਿਖਲਾਈ",
        "img": "http://dailyaashiana.com/newspaper/wp-content/uploads/2013/01/DSC06285.jpg",
        "source_date": "January 8, 2013 "
      },
      {
        "article_id": "573",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "ਪੰਜਾਬ &#8216;ਚ ਪੈਂਦੇ ਕੰਢੀ ਇਲਾਕੇ ਦੇ ਲੋਕਾਂ ਦੀਆਂ ਮੁਸ਼ਿਕਲਾਂ ਨੂੰ ਪਹਿਲ ਦੇ ਅਧਾਰ ਤੇ ਹੱਲ ਕੀਤਾ ਜਾਵੇਗਾ : ਚੌਧਰੀ ਨੰਦ ਲਾਲ",
        "img": "http://dailyaashiana.com/newspaper/wp-content/uploads/2013/01/Photo-1-300x197.jpg",
        "source_date": "January 8, 2013 "
      },
      {
        "article_id": "574",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "ਹਰਸਿਮਰਤ ਬਾਦਲ ਵੱਲੋਂ ਲੋਕਾਂ ਨੂੰ ਯੂ.ਪੀ.ਏ ਸਰਕਾਰ ਤੋਂ ਮੁਲਕ ਨੂੰ ਛੁਟਕਾਰਾ ਦਿਵਾਉਣ ਦਾ ਸੱਦਾ",
        "img": "http://dailyaashiana.com/newspaper/wp-content/uploads/2013/01/harsimrat-kaur-badal2.jpg",
        "source_date": "January 8, 2013 "
      },
      {
        "article_id": "576",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "ਮੁੱਖ ਮੰਤਰੀ ਵਲੋਂ ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਕੇਂਦਰੀ ਜੇਲ੍ਹ &#8216;ਚੋਂ ਫਰਾਰ ਹੋਏ ਕੈਦੀਆਂ ਦੇ ਮਾਮਲੇ ਦੀ ਜਾਂਚ ਦੇ ਹੁਕਮ",
        "img": "",
        "source_date": "January 8, 2013 "
      }
    ]
  },
  {
    "newspaper_id": "7",
    "newspaper_name": "Daily Punjab Times",
    "articles": [
      {
        "article_id": "588",
        "category_id": "1",
        "category_name": "Top Stories",
        "title": "Permalink to ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਵੱਲੋਂ ‘ਮਨ ਕੀ ਬਾਤ’ ਦੌਰਾਨ ਕਿਸਾਨਾਂ ਤੇ ਨੌਜਵਾਨਾਂ ’ਤੇ ਭਰੋਸਾ ਪ੍ਰਗਟ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/02/man-ki-bat-150x150.jpg",
        "source_date": " February 1, 2016"
      },
      {
        "article_id": "589",
        "category_id": "1",
        "category_name": "Top Stories",
        "title": "Permalink to ਵਿਦੇਸ਼ ਸਕੱਤਰ ਪੱਧਰ ਦੀ ਗੱਲਬਾਤ ਲਈ ਭਾਰਤ-ਪਾਕਿ ਇੱਕ ਦੂਜੇ ਦੇ ਸੰਪਰਕ ’ਚ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/01/basit-150x150.jpg",
        "source_date": " January 30, 2016"
      },
      {
        "article_id": "590",
        "category_id": "1",
        "category_name": "Top Stories",
        "title": "Permalink to ਲੁਧਿਆਣਾ ਸਮਾਰਟ ਸਿਟੀ ਯੋਜਨਾ ਲਈ ਚੁਣੇ 20 ਸ਼ਹਿਰਾਂ ’ਚ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/01/nadu-150x150.jpg",
        "source_date": " January 29, 2016"
      },
      {
        "article_id": "581",
        "category_id": "1",
        "category_name": "Top Stories",
        "title": "Permalink to ਹੈਡਲੀ ਵੱਲੋਂ 26/11 ਹਮਲੇ ’ਚ ਪਾਕਿਸਤਾਨ ਦੀ ਭੂਮਿਕਾ ਬਾਰੇ ਸਨਸਨੀਖੇਜ਼ ਖੁਲਾਸੇ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/02/hedli-150x150.jpg",
        "source_date": " February 9, 2016"
      },
      {
        "article_id": "582",
        "category_id": "1",
        "category_name": "Top Stories",
        "title": "Permalink to ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਵੱਲੋਂ ‘ਕਾਂਗਰਸ ਰਾਜ’ ਦੌਰਾਨ ਵਿਕਾਸ ਯੋਜਨਾਵਾਂ ਲਟਕਾਉਣ ਦਾ ਦੋਸ਼",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/02/re-150x150.jpg",
        "source_date": " February 8, 2016"
      },
      {
        "article_id": "583",
        "category_id": "1",
        "category_name": "Top Stories",
        "title": "Permalink to ਮੋਦੀ ਵੱਲੋਂ ਗਾਂਧੀ ਪਰਿਵਾਰ ’ਤੇ ਨਿਸ਼ਾਨਾ ਇੱਕ ਪਰਿਵਾਰ ਨਹੀਂ ਚੱਲਣ ਦੇ ਰਿਹਾ ਸੰਸਦ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2015/12/Narendra_Modi_360x270_generic_PTI_thumb-150x150.jpg",
        "source_date": " February 6, 2016"
      },
      {
        "article_id": "591",
        "category_id": "3",
        "category_name": "National",
        "title": "Permalink to ਭਾਰਤ ਦੇ ਸਪੇਸ ਪ੍ਰੋਗਰਾਮ ਨੇ ਦੁਨੀਆ ’ਚ ਖ਼ਾਸ ਜਗ੍ਹਾ ਬਣਾਈ : ਪ੍ਰਧਾਨ ਮੰਤਰੀ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/02/images-8-150x150.jpg",
        "source_date": " February 8, 2016"
      },
      {
        "article_id": "592",
        "category_id": "3",
        "category_name": "National",
        "title": "Permalink to ਪੰਜਾਬ ਵੱਲੋਂ ਕੇਂਦਰ ਤੋਂ 15 ਹਜ਼ਾਰ ਕਰੋੜ ਦੇ ਵਿਸ਼ੇਸ਼ ਵਿੱਤੀ ਪੈਕੇਜ ਦੀ ਮੰਗ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/02/aurn-150x150.jpg",
        "source_date": " February 8, 2016"
      },
      {
        "article_id": "593",
        "category_id": "3",
        "category_name": "National",
        "title": "Permalink to ਪੀ.ਐਫ. ’ਤੇ 9 ਫੀਸਦੀ ਵਿਆਜ ਦੇਣ ਦਾ ਜਲਦ ਹੋ ਸਕਦੈ ਐਲਾਨ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/02/download-2-150x150.jpg",
        "source_date": " February 6, 2016"
      },
      {
        "article_id": "594",
        "category_id": "3",
        "category_name": "National",
        "title": "Permalink to ਰੇਲ ਬਜਟ 25 ਤੇ ਆਮ ਬਜਟ 29 ਫਰਵਰੀ ਨੂੰ ਹੋਵੇਗਾ ਪੇਸ਼",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/02/railway_budget_2016-2017-1-150x150.jpg",
        "source_date": " February 5, 2016"
      },
      {
        "article_id": "595",
        "category_id": "3",
        "category_name": "National",
        "title": "Permalink to ਦਿੱਲੀ ’ਚ ਰਾਸ਼ਟਰਪਤੀ ਰਾਜ ਲਾਗੂ ਕਰਨਾ ਚਾਹੁੰਦੀ ਹੈ ਮੋਦੀ ਸਰਕਾਰ : ਕੇਜਰੀਵਾਲ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2015/05/kejriwal_1700131f_thumb1-150x150.jpg",
        "source_date": " February 4, 2016"
      },
      {
        "article_id": "596",
        "category_id": "3",
        "category_name": "National",
        "title": "Permalink to ਹਾਈ ਕੋਰਟ ਵੱਲੋਂ ਸਿੱਖਿਆ ਬੋਰਡ ਨੂੰ ਜਾਰੀ ਹੁਕਮਾਂ ਦੇ ਮਾਮਲੇ ਦਾ ਸਿੱਖਿਆ ਮੰਤਰੀ ਨੇ ਵੀ ਲਿਆ ਨੋਟਿਸ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2015/05/DaljitSinghCheema000-150x150.jpg",
        "source_date": " February 3, 2016"
      },
      {
        "article_id": "601",
        "category_id": "4",
        "category_name": "International",
        "title": "Permalink to ﻿ਹਿੰਦੀ ਤੇ ਉਰਦੂ ਦੇ ਮਸ਼ਹੂਰ ਸ਼ਾਇਰ ਨਿਦਾ ਫਾਜ਼ਲੀ ਦਾ ਦਿਹਾਂਤ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/02/fazily-150x150.jpg",
        "source_date": " February 9, 2016"
      },
      {
        "article_id": "602",
        "category_id": "4",
        "category_name": "International",
        "title": "Permalink to ਅਧਿਆਪਕਾਂ ਦੀ ਸਿਖਲਾਈ ਬਾਰੇ ਪੰਜਾਬ ਦੀਆਂ ਕੋਸ਼ਿਸ਼ਾਂ ਨੂੰ ਭਾਰਤ ਸਰਕਾਰ ਨੇ ਸਲਾਹਿਆ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2015/06/15smritiirani_thumb-150x150.jpg",
        "source_date": " February 9, 2016"
      },
      {
        "article_id": "603",
        "category_id": "4",
        "category_name": "International",
        "title": "Permalink to ਉੱਤਰ ਕੋਰੀਆ ਦੇ ਰਾਕਟ ਪ੍ਰੀਖਣ ਨਾਲ ਦੁਨੀਆਂ ’ਚ ਵਿਸਫੋਟਕ ਹਾਲਾਤ ਬਣੇ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/02/mij-150x150.jpg",
        "source_date": " February 8, 2016"
      },
      {
        "article_id": "604",
        "category_id": "4",
        "category_name": "International",
        "title": "Permalink to ਏਸ਼ੀਆ ਕੱਪ ਤੇ ਵਰਲਡ ਕੱਪ ਟੀ-20 ਲਈ ਭਾਰਤੀ ਟੀਮ ਦਾ ਐਲਾਨ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/02/images-6-150x150.jpg",
        "source_date": " February 6, 2016"
      },
      {
        "article_id": "605",
        "category_id": "4",
        "category_name": "International",
        "title": "Permalink to ਛੇਵਾਂ ਵਿਸਾਖੀ ਮੇਲਾ 2016 ਮੈਟਰੋਪੁਿਲਟਨ ਵਿੱਚ ੲਿਤਿਹਾਸ ਸਿਰਜੇਗਾ : ਵੱਲਾ ,ਏਕ ਪੰਜਾਬੀ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/02/df-150x150.jpg",
        "source_date": " February 5, 2016"
      },
      {
        "article_id": "606",
        "category_id": "4",
        "category_name": "International",
        "title": "Permalink to ਮਿਸ਼ਨ 2017 ਦੇ ਮੱਦੇਨਜ਼ਰ ਸੁਖਬੀਰ ਬਾਦਲ ਨੇ ਸ਼੍ਰੋਮਣੀ ਅਕਾਲੀ ਦਲ ਅਮਰੀਕਾ ਨੂੰ ਰਣਨੀਤੀ ਘੜਨ ਲਈ ਪੰਜਾਬ ਆਉਣ ਦਾ ਦਿੱਤਾ ਸੱਦਾ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/02/akali-dal155-150x150.jpg",
        "source_date": " February 3, 2016"
      },
      {
        "article_id": "611",
        "category_id": "5",
        "category_name": "Business",
        "title": "Permalink to ਰਿਜ਼ਰਵ ਬੈਂਕ ਆਫ ਇੰਡੀਆ ਨੇ ਛਾਪੇ 1000 ਰੁਪਏ ਦੇ ਗਲਤ ਨੋਟ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/01/images-2-150x150.jpg",
        "source_date": " January 20, 2016"
      },
      {
        "article_id": "612",
        "category_id": "5",
        "category_name": "Business",
        "title": "Permalink to ਕੱਚੇ ਤੇਲ ਦੀ ਕੀਮਤ ਵਿੱਚ ਗਿਰਾਵਟ ਨਾਲ ਸੋਨਾ-ਚਾਂਦੀ ਦੀ ਕੀਮਤਾਂ ਵਿੱਚ ਵਾਧਾ",
        "img": "",
        "source_date": " January 7, 2016"
      },
      {
        "article_id": "613",
        "category_id": "5",
        "category_name": "Business",
        "title": "Permalink to &#8216;ਪ੍ਰੇਮ ਰਤਨ ਧਨ ਪਾਇਓ&#8217; &#8216;ਚ ਸੋਨਮ ਨੇ ਪਹਿਨੇ ਆਪਣੀ ਮਾਂ ਦੇ ਗਹਿਣੇ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2015/02/jjj-150x150.jpg",
        "source_date": " February 10, 2015"
      },
      {
        "article_id": "614",
        "category_id": "5",
        "category_name": "Business",
        "title": "Permalink to ਅਰਥਵਿਵਸਥਾ ਦੇ ਲਈ ਸਭ ਤੋਂ ਖ਼ਰਾਬ ਦੌਰ ਖ਼ਤਮ : ਮੂਡੀਜ਼ ਐਨਾਲਿਟਿਕਸ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2014/01/image145-150x150.png",
        "source_date": " January 23, 2014"
      },
      {
        "article_id": "615",
        "category_id": "5",
        "category_name": "Business",
        "title": "Permalink to ਪਿਆਜ਼ ਬਰਾਮਦ ਵਧ ਕੇ 2,532 ਕਰੋੜ ਰੁਪਏ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2014/01/image144-150x150.png",
        "source_date": " January 23, 2014"
      },
      {
        "article_id": "616",
        "category_id": "5",
        "category_name": "Business",
        "title": "Permalink to ਟਮਾਟਰਾਂ ਅਤੇ ਮਟਰਾਂ ਦੀ ਫ਼ਸਲ ਝੁਲਸ ਰੋਗ ਦਾ ਸ਼ਿਕਾਰ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2014/01/image143-150x150.png",
        "source_date": " January 23, 2014"
      },
      {
        "article_id": "620",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "Permalink to ਸ਼ੇਰਾਂ ਦੇ ਰਾਜ ਗੀਤ ਨਾਲ ਚਰਚਾ ਵਿੱਚ ਆਇਆ ਗੀਤਕਾਰ &#8211; ਰਵੀ ਢੰਢੋਲ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/05/12592444_911046589015426_4471835464515249409_n-150x150.jpg",
        "source_date": " May 28, 2016"
      },
      {
        "article_id": "621",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "Permalink to ਸੁਧਾ ਅਸਲੀ ਖੜੂਸ  : ਰਿਤਿਕਾ ਸਿੰਘ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/02/unnamed-150x150.jpg",
        "source_date": " February 2, 2016"
      },
      {
        "article_id": "622",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "Permalink to ਪੰਜਾਬੀ ਸੰਗੀਤ ਦਾ ਚਮਕਦਾ ਸਿਤਾਰਾ ਆਪਣੇ ਪਲੇਠੇ ਗੀਤ &#8220;ਲਵ ਮੈਰਿਜ&#8221; ਨਾਲ ਦਰਸ਼ਕਾਂ ਦੀ ਕਚਹਿਰੀ ਵਿੱਚ ਹਾਜ਼ਰ ਹੈ &#8211; ਜਗੀਰ ਸਿੰਘ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/01/jageer-1-150x150.jpg",
        "source_date": " January 30, 2016"
      },
      {
        "article_id": "623",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "Permalink to ਸੰਗੀਤਕ ਫ਼ਿਜ਼ਾਵਾਂ ਵਿਚ ਗੂੰਜਣ ਵਾਲੇ ਹਿੱਟ ਗੀਤਾਂ ਦਾ ਰਚੇਤਾ ਤੇ ਗਾਇਕ ਵੀਤ ਬਲਜੀਤ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/01/images-4-150x150.jpg",
        "source_date": " January 28, 2016"
      },
      {
        "article_id": "624",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "Permalink to ਅਥੀਆ ਸ਼ੈਟੀ : ਆਤਮ-ਵਿਸ਼ਵਾਸ ਦੀ ਕਮੀ ਨਹੀਂ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/01/athiya-150x150.jpg",
        "source_date": " January 28, 2016"
      },
      {
        "article_id": "625",
        "category_id": "8",
        "category_name": "Entertainment",
        "title": "Permalink to ਪਿਆਰ ਬਜ਼ੁਰਗਾਂ ਦਾ:ਦੀਪਿਕਾ ਪਾਦੂਕੋਨ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/01/depika-150x150.jpg",
        "source_date": " January 28, 2016"
      },
      {
        "article_id": "630",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "Permalink to ਸ਼੍ਰੀਮਤੀ ਪਰਮਪਾਲ ਕੌਰ ਸਿੱਧੂ ਨੇ ਏਡੀਸੀ ਬਠਿੰਡਾ ਵਜੋਂ ਕਾਰਜਭਾਰ ਸੰਭਾਲਿਆ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/02/parmpal-150x150.jpg",
        "source_date": " February 9, 2016"
      },
      {
        "article_id": "631",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "Permalink to ਬਾਦਲ ਵੱਲੋਂ ਖੇਤੀਬਾੜੀ ਤੇ ਸਬੰਧਤ ਧੰਦਿਆਂ ’ਚ ਲੱਗੇ ਅਗਾਂਹਵਧੂ ਕਿਸਾਨਾਂ ਨੂੰ ਸਨਮਾਨਿਤ ਕਰਨ ਵਾਲੀ ਸਕੀਮ ਨੂੰ ਪ੍ਰਵਾਨਗੀ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2015/12/109mnjobseekersneedtoupgradeParkashSinghBadal_thumb1-150x150.jpg",
        "source_date": " February 6, 2016"
      },
      {
        "article_id": "632",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "Permalink to ਚੋਣ ਮੈਦਾਨ ਵਿੱਚੋਂ ਭੱਜਣ ਨਾਲ ਕਾਂਗਰਸ ਤੇ ਆਪ ਦਾ ਕਿਰਦਾਰ ਲੋਕਾਂ ਸਾਹਮਣੇ ਆਇਆ : ਸੁਖਬੀਰ ਬਾਦਲ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/02/badal-150x150.jpg",
        "source_date": " February 4, 2016"
      },
      {
        "article_id": "633",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "Permalink to ਸਰਹੱਦੀ ਪਿੰਡ ਧੁੰਨ ਦੇ ਛੱਪੜ ਚੋਂ 2 ਮੈਗਜ਼ੀਨ ਏ.ਕੇ. 47, 150 ਰਾਉਂਡ ਤੇ 1 ਪਿਸਟਲ ਦਾ ਮੈਗਜ਼ੀਨ ਬਰਾਮਦ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/02/asla-150x150.jpg",
        "source_date": " February 3, 2016"
      },
      {
        "article_id": "634",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "Permalink to ਹੁਸ਼ਿਆਰ ਵਿਦਆਰਥੀਆਂ ਲਈ ਵਰਦਾਨ ਸਾਬਤ ਹੋ ਰਹੇ ਹਨ ਸੱਤ ਰਿਹਾਇਸ਼ੀ ਮੈਰੀਟੋਰੀਅਸ ਸਕੂਲ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/02/sc-150x150.jpg",
        "source_date": " February 2, 2016"
      },
      {
        "article_id": "635",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "Permalink to ਮੋਦੀ ਤੇ ਬਾਦਲ ਸਰਕਾਰ ਦੀ ਦਲਿਤ ਵਿਰੋਧੀ ਸੋਚ ’ਤੇ ਵਰ੍ਹੇ ਵਿਰੋਧੀ ਧਿਰ ਦੇ ਨੇਤਾ ਚੰਨੀ",
        "img": "http://www.dailypunjabtimes.com/wp-content/uploads/2016/02/96-150x150.jpg",
        "source_date": " February 1, 2016"
      }
    ]
  },
  {
    "newspaper_id": "8",
    "newspaper_name": "NawanZamana",
    "articles": [
      {
        "article_id": "654",
        "category_id": "3",
        "category_name": "National",
        "title": "ਉਪ ਰਾਜਪਾਲ ਨੇ ਮੁਲਾਕਾਤ ਦਾ ਸਮਾਂ ਨਾ ਦਿੱਤਾ ਆਪ ਦੇ ਵਿਧਾਇਕਾਂ ਨੂੰ",
        "img": "",
        "source_date": ""
      },
      {
        "article_id": "655",
        "category_id": "3",
        "category_name": "National",
        "title": "ਕਰੋ ਮੌਜਾਂ, 444 ਰੁਪਏ &#39;ਚ ਜਹਾਜ਼ ਦਾ ਝੂਟਾ ",
        "img": "",
        "source_date": ""
      },
      {
        "article_id": "656",
        "category_id": "3",
        "category_name": "National",
        "title": "ਪੱਤਰਕਾਰਾਂ ਸਾਹਮਣੇ ਰੋ ਪਿਆ ਗੱਦੀਓ ਲਾਇਆ ਬਲਰਾਮ ਯਾਦਵ",
        "img": "",
        "source_date": ""
      },
      {
        "article_id": "657",
        "category_id": "3",
        "category_name": "National",
        "title": "ਯੂ ਪੀ ਦੀ ਸਿਆਸਤ ਵਿੱਚ ਵੱਡਾ ਘਮਸਾਨ",
        "img": "",
        "source_date": ""
      },
      {
        "article_id": "658",
        "category_id": "3",
        "category_name": "National",
        "title": "ਕੈਬਨਿਟ ਵੱਲੋਂ ਸਭ ਤੋਂ ਵੱਡੀ ਸਪੈਕਟਰਮ ਨਿਲਾਮੀ ਨੂੰ ਮਨਜ਼ੂਰੀ",
        "img": "",
        "source_date": ""
      },
      {
        "article_id": "659",
        "category_id": "3",
        "category_name": "National",
        "title": "ਅਕਾਲੀ ਦਲ ਯੂ ਪੀ &#39;ਚ ਪੈਰ ਪਸਾਰਨ ਦੇ ਯਤਨਾਂ &#39;ਚ ",
        "img": "",
        "source_date": ""
      },
      {
        "article_id": "671",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "ਦੋ ਧਿਰਾਂ &#39;ਚ ਲੜਾਈ, ਫਾਈਰਿੰਗ ਕਾਰਨ ਦੋ ਜ਼ਖਮੀ",
        "img": "",
        "source_date": ""
      },
      {
        "article_id": "672",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "ਬੀ ਐੱਸ ਐੱਫ ਹੱਥੋਂ ਮਾਰੇ ਗਏ ਭਾਰਤੀ ਤਸਕਰਾਂ ਦੀ ਹੋਈ ਸ਼ਨਾਖਤ",
        "img": "",
        "source_date": ""
      },
      {
        "article_id": "673",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "ਪੰਚਾਇਤੀ ਜਗ੍ਹਾ &#39;ਤੇ ਨਜਾਇਜ਼ ਕਬਜ਼ੇ ਨੂੰ ਲੈ ਕੇ ਨਗਰ ਪੰਚਾਇਤ ਦਫ਼ਤਰ ਅੱਗੇ ਧਰਨਾ ਅੱਜ",
        "img": "",
        "source_date": ""
      },
      {
        "article_id": "674",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "ਆਲਟੋ ਕਾਰ ਨਹਿਰ &#39;ਚ ਡੁੱਬਣ ਦੇ ਮਾਮਲੇ ਨੇ ਨਵਾਂ ਮੋੜ ਲਿਆ",
        "img": "",
        "source_date": ""
      },
      {
        "article_id": "675",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "ਕਿਸਾਨ ਸੰਘਰਸ਼ ਕਮੇਟੀ ਦਾ ਮੋਰਚਾ ਗੋਇੰਦਵਾਲ ਸਾਹਿਬ ਪੁਲ &#39;ਤੇ ਤਬਦੀਲ ",
        "img": "",
        "source_date": ""
      },
      {
        "article_id": "676",
        "category_id": "12",
        "category_name": "Punjab",
        "title": "ਅਕਾਲ ਤਖਤ ਸਾਹਮਣੇ ਜਦੋਂ ਢਾਡੀ ਨੂੰ ਹੋਣਾ ਪਿਆ ਲੰਗਾਹ ਦੇ ਗੁੱਸੇ ਦਾ ਸ਼ਿਕਾਰ ",
        "img": "",
        "source_date": ""
      }
    ]
  }
]};

$scope.newsData = da.data[0].articles;
localStorage.newsData = JSON.stringify($scope.newsData);
console.log($scope.newsData);
  // apiService.getNewsData().then(function(da){
  //   $scope.newsData = da.data.articles;
  //   localStorage.newsData = JSON.stringify(da.data.articles);
  //   console.log($scope.newsData);
  // })
})

.controller('detailCtrl', function($scope, $stateParams) {
  console.log('detailctrl');
  console.log($stateParams);
  var newData = JSON.parse(localStorage.newsData);
  console.log(newData);
  for(var i = 0; i < newData.length; i++){
    if(newData[i].article_id == $stateParams.id) {
     $scope.news = newData[i];
     console.log(newData[i]);
     break;
    }
  }
});
