-- MySQL dump 10.13  Distrib 5.7.32, for Linux (x86_64)
--
-- Host: mysql    Database: strapi
-- ------------------------------------------------------
-- Server version	5.7.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Blog`
--

DROP TABLE IF EXISTS `Blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Blog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `content` longtext,
  `published_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Blog`
--

LOCK TABLES `Blog` WRITE;
/*!40000 ALTER TABLE `Blog` DISABLE KEYS */;
/*!40000 ALTER TABLE `Blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Blog_components`
--

DROP TABLE IF EXISTS `Blog_components`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Blog_components` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `field` varchar(255) NOT NULL,
  `order` int(10) unsigned NOT NULL,
  `component_type` varchar(255) NOT NULL,
  `component_id` int(11) NOT NULL,
  `Blog_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Blog_components`
--

LOCK TABLES `Blog_components` WRITE;
/*!40000 ALTER TABLE `Blog_components` DISABLE KEYS */;
/*!40000 ALTER TABLE `Blog_components` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `avDevelopers`
--

DROP TABLE IF EXISTS `avDevelopers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `avDevelopers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `published_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `content` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avDevelopers`
--

LOCK TABLES `avDevelopers` WRITE;
/*!40000 ALTER TABLE `avDevelopers` DISABLE KEYS */;
INSERT INTO `avDevelopers` VALUES (1,'Grzegorz, DevOps / Senior Developer','2020-11-30 14:03:01',1,1,'2020-11-30 14:02:49','2020-11-30 14:03:01','**Focus:** Grzegorz was working for multiple years as Senior Developer / Team Leader and then he moved to DevOps position.\n\n**Programming languages and technologies:**\n\nC#, PHP, Java, Java Script, .NET\n\n**Tools:**\n\nAWS\nKubernetes\nDocker\nGIT\nPrometheus\n\n**Experience in year:**\n\n12+\n\n**Languages:**\n\nEnglish - C1 level\n'),(2,'Agata, Art Director','2020-11-30 14:32:58',1,1,'2020-11-30 14:32:55','2020-11-30 14:32:58','\n\n**Focus:** Agata is highly skilled and passionate graphic, UX/UI designer. Her great attitude shows up when she works with customers.\n\n**Skills:**\n\nGraphic Design\n3D\nUX/UI\nDigital Marketing\nBranding\nAnimations\n\n**Tools:**\n\nAdobe\nFigma\nCanva\nBlender\n\n**Experience in year:**\n\n6+\n\n**Languages:**\n\nEnglish - C2 level\n'),(3,'Chris, Senior PHP / Java / JS developer','2020-11-30 14:34:19',1,1,'2020-11-30 14:34:17','2020-11-30 14:37:35','**Focus:** Chris is Senior Developer, passionate about tech and engineering. He is also an Architect, with multiple certificates.\n\n**Programming languages and technologies:**\n\nPHP, Java, Java Script, NodeJS, HTML, CSS, Symfony, Laravel, Slim, Zend Framework, Spring Framework, Vertx.io, MySQL, MongoDB, Redis, PostgreSQL, Elastic Search, InfluxDB, Linux/Unix, Apache, Nginx, Tomcat, Haproxy, VarnishCache\n\n**Tools:**\n\nGit, Maven, Gradle, Sbt, Vagrant, Docker, Gulp, Bower, Composer, Jenkins, Fabric, Phing, Bitbucket pipelines, Gitlab CI\n\n**Experience in year:**\n\nPHP (10 years)\nJava (3 years)\n\n**Languages:**\n\nEnglish - B2 Level\n'),(4,'Radek, Senior Ruby on Rails developer','2020-11-30 14:40:05',1,1,'2020-11-30 14:38:46','2020-11-30 14:40:05','**Focus:** Radoslaw is a Senior Developer, with 15+ years of experience in IT\n\n**Programming languages and technologies:**\n\nRuby(v1 and newer), HTML5/XML/HAML, CSS3, Javascript, C++, Postgresql, MySQL, SQLite, MongoDB, Ruby on Rails(v2/3/4/5), C++Builder, Wordpress, Bootstrap, Foundation, Materialize, jQuery, ReactJS, Node.js, Backbone, Ember, Git, Bitbucket, Trello, Asana\n\n**Tools:**\n\nApache, Nginx, AJAX, SOAP, REST, XML, JSON, GIMP, RSpec, Capybara, Amazon AWS, ElasticSearch, CoffeeScript, Redux\n\n**Experience in year:**\n\n15+\n\n**Languages:**\n\nEnglish - C1 Level\n'),(5,'Adam, Senior PHP / Vue.js developer','2020-11-30 14:40:08',1,1,'2020-11-30 14:39:58','2020-11-30 14:40:08','**Focus:** Experienced developer, specialised in web applications. Capable to work with many tools including back-end and front-end programming.\n\n**Programming languages and technologies:**\n\nPHP, Java Script, Laravel, Yii2, Vue.js, jQuery, MySQL, PostgreSQL + PostGIS, MongoDb, DynamoDb, Redis\n\n**Tools:**\n\nAWS, Docker, Git, SVN, PHPUnit, Codeception, Qunit\n\n**Experience in year:**\n\n8+\n\n**Languages:**\n\nEnglish - B2 level\n');
/*!40000 ALTER TABLE `avDevelopers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `content` longtext,
  `published_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
INSERT INTO `blog` VALUES (2,'Human-Centered Design in a pill and why it is the way to build websites and applications ',NULL,NULL,'2020-12-16 12:13:46',1,1,'2020-11-17 11:20:21','2020-12-16 12:13:46','2020-11-17'),(3,'3 most common mistakes to avoid, choosing software house ',NULL,NULL,'2020-11-17 18:40:41',1,1,'2020-11-17 11:24:31','2020-12-16 12:11:33','2020-06-01'),(4,'Darth Vader - lodowa planeta',NULL,NULL,NULL,1,1,'2020-11-17 18:35:33','2020-12-16 12:13:28','2020-06-02'),(5,'Darth Vader - czarne tlo',NULL,NULL,NULL,1,1,'2020-11-17 18:36:30','2020-12-16 12:13:22','2019-03-15'),(6,'Luke vs Darth Vader',NULL,NULL,NULL,1,1,'2020-11-17 18:37:26','2020-12-16 12:13:57','2020-08-12'),(7,'Jakas laska z light saber',NULL,NULL,NULL,1,1,'2020-11-17 18:38:10','2020-12-16 12:13:52','2020-11-23'),(8,'Avengers: End Game',NULL,NULL,NULL,1,1,'2020-11-17 18:38:36','2020-12-16 12:13:17','2020-11-05'),(10,'Iron man',NULL,NULL,NULL,1,1,'2020-11-17 18:40:34','2020-12-16 12:13:40','2020-11-01');
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_components`
--

DROP TABLE IF EXISTS `blog_components`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog_components` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `field` varchar(255) NOT NULL,
  `order` int(10) unsigned NOT NULL,
  `component_type` varchar(255) NOT NULL,
  `component_id` int(11) NOT NULL,
  `blog_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `blog_id_fk` (`blog_id`),
  CONSTRAINT `blog_id_fk` FOREIGN KEY (`blog_id`) REFERENCES `blog` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_components`
--

LOCK TABLES `blog_components` WRITE;
/*!40000 ALTER TABLE `blog_components` DISABLE KEYS */;
INSERT INTO `blog_components` VALUES (6,'content',1,'components_blog_simple_texts',24,2),(7,'content',2,'components_blog_simple_texts',25,2),(8,'content',3,'components_blog_paragraphs',63,2),(10,'content',4,'components_blog_paragraphs',65,2),(11,'content',5,'components_blog_paragraphs',66,2),(12,'content',1,'components_blog_simple_texts',26,3),(13,'content',2,'components_blog_paragraphs',67,3),(14,'content',3,'components_blog_paragraphs',68,3),(15,'content',4,'components_blog_paragraphs',69,3),(16,'content',1,'components_blog_paragraphs',70,10);
/*!40000 ALTER TABLE `blog_components` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `components_blog_authors`
--

DROP TABLE IF EXISTS `components_blog_authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `components_blog_authors` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components_blog_authors`
--

LOCK TABLES `components_blog_authors` WRITE;
/*!40000 ALTER TABLE `components_blog_authors` DISABLE KEYS */;
INSERT INTO `components_blog_authors` VALUES (1,'test');
/*!40000 ALTER TABLE `components_blog_authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `components_blog_blogs`
--

DROP TABLE IF EXISTS `components_blog_blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `components_blog_blogs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `publishAt` date DEFAULT NULL,
  `content` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components_blog_blogs`
--

LOCK TABLES `components_blog_blogs` WRITE;
/*!40000 ALTER TABLE `components_blog_blogs` DISABLE KEYS */;
/*!40000 ALTER TABLE `components_blog_blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `components_blog_custom_metas`
--

DROP TABLE IF EXISTS `components_blog_custom_metas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `components_blog_custom_metas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components_blog_custom_metas`
--

LOCK TABLES `components_blog_custom_metas` WRITE;
/*!40000 ALTER TABLE `components_blog_custom_metas` DISABLE KEYS */;
INSERT INTO `components_blog_custom_metas` VALUES (1,'test','test'),(2,'test1','1'),(3,'test2','2'),(4,'image','whatever.jpg');
/*!40000 ALTER TABLE `components_blog_custom_metas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `components_blog_enumerated_lists`
--

DROP TABLE IF EXISTS `components_blog_enumerated_lists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `components_blog_enumerated_lists` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components_blog_enumerated_lists`
--

LOCK TABLES `components_blog_enumerated_lists` WRITE;
/*!40000 ALTER TABLE `components_blog_enumerated_lists` DISABLE KEYS */;
/*!40000 ALTER TABLE `components_blog_enumerated_lists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `components_blog_metas`
--

DROP TABLE IF EXISTS `components_blog_metas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `components_blog_metas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components_blog_metas`
--

LOCK TABLES `components_blog_metas` WRITE;
/*!40000 ALTER TABLE `components_blog_metas` DISABLE KEYS */;
/*!40000 ALTER TABLE `components_blog_metas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `components_blog_paragraphs`
--

DROP TABLE IF EXISTS `components_blog_paragraphs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `components_blog_paragraphs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `text` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components_blog_paragraphs`
--

LOCK TABLES `components_blog_paragraphs` WRITE;
/*!40000 ALTER TABLE `components_blog_paragraphs` DISABLE KEYS */;
INSERT INTO `components_blog_paragraphs` VALUES (1,'Star wars ipsum','Lucas ipsum dolor sit amet saché jinn gunray stele boltrunians kast borsk kamino gricho ferroans. Senex luminara mygeeto max tierce vagaari. Subterrel kendal vos paploo sebulba kal. D8 cliegg kanos binks rattataki. Tib farlander conan crynyd. Klatooinian selonian maul amidala hapan. Nikto dressellian teevan porkins maul codru-ji olié. Gwurran mon jarael panaka galen ka jaina luke yuvernian. Hobbie massans vaathkree allie kohl hutt wampa. Plagueis ubese nas nar vedder terrik ongree. Veknoid defel ishi bibble sing raa tierce kor-uj ubb. '),(2,'Yoda','Lucas ipsum dolor sit amet saché jinn gunray stele boltrunians kast borsk kamino gricho ferroans. Senex luminara mygeeto max tierce vagaari. Subterrel kendal vos paploo sebulba kal. D8 cliegg kanos binks rattataki. Tib farlander conan crynyd. Klatooinian selonian maul amidala hapan. Nikto dressellian teevan porkins maul codru-ji olié. Gwurran mon jarael panaka galen ka jaina luke yuvernian. Hobbie massans vaathkree allie kohl hutt wampa. Plagueis ubese nas nar vedder terrik ongree. Veknoid defel ishi bibble sing raa tierce kor-uj ubb. Lucas ipsum dolor sit amet saché jinn gunray stele boltrunians kast borsk kamino gricho ferroans. Senex luminara mygeeto max tierce vagaari. Subterrel kendal vos paploo sebulba kal. D8 cliegg kanos binks rattataki. Tib farlander conan crynyd. Klatooinian selonian maul amidala hapan. Nikto dressellian teevan porkins maul codru-ji olié. Gwurran mon jarael panaka galen ka jaina luke yuvernian. Hobbie massans vaathkree allie kohl hutt wampa. Plagueis ubese nas nar vedder terrik ongree. Veknoid defel ishi bibble sing raa tierce kor-uj ubb. '),(3,'Yoda Master','Rishi fode piett calamari amidala. Melodie cadavine desann wedge ranat bibble shmi. Rishii besalisk jaina geonosis clawdite kyp solo. Sikan terrik leia myneyrsh mod bespin cathar. Davin kast wedge wroonian skywalker sio coway dodonna. Utai rakata solo kamino. Joruus jettster zev gungan. Mccool jettster rotta gora jan. Gordin ki-adi-mundi moff gand kor-uj cordé tierce moddell. Skywalker moff boba shi\'ido dorvalla. Sikan brak orus arkanian ithorian codru-ji. Cassio zeltron droopy secura bel h\'nemthean. Rishi fode piett calamari amidala. Melodie cadavine desann wedge ranat bibble shmi. Rishii besalisk jaina geonosis clawdite kyp solo. Sikan terrik leia myneyrsh mod bespin cathar. Davin kast wedge wroonian skywalker sio coway dodonna. Utai rakata solo kamino. Joruus jettster zev gungan. Mccool jettster rotta gora jan. Gordin ki-adi-mundi moff gand kor-uj cordé tierce moddell. Skywalker moff boba shi\'ido dorvalla. Sikan brak orus arkanian ithorian codru-ji. Cassio zeltron droopy secura bel h\'nemthean. Rishi fode piett calamari amidala. Melodie cadavine desann wedge ranat bibble shmi. Rishii besalisk jaina geonosis clawdite kyp solo. Sikan terrik leia myneyrsh mod bespin cathar. Davin kast wedge wroonian skywalker sio coway dodonna. Utai rakata solo kamino. Joruus jettster zev gungan. Mccool jettster rotta gora jan. Gordin ki-adi-mundi moff gand kor-uj cordé tierce moddell. Skywalker moff boba shi\'ido dorvalla. Sikan brak orus arkanian ithorian codru-ji. Cassio zeltron droopy secura bel h\'nemthean. '),(21,'Human-Centered Design versus Design Thinking ','There are a few concepts that are misunderstood or should not be connected toHuman-Centered Design. One of them is Design Thinking. True, both methods have a lot incommon, yet in the practice, we use different processes. The biggest common trait is the factthat a particular meaning of Human-Centered Design and Design Thinking is to set humanusers as the most important part of the project. Although the difference between them is thatHuman-Centered Design scopes for highly usable products, whereas Design Thinking strivesfor innovative and creative solutions for complex problems - so-called “wicked problems”. '),(58,' Human-Centered Design methods - what about practice? ',' The effectiveness of Human-Centered Design comes from deep and direct cooperation between the team and the customer. \n1. **Understanding** - to know who is the final user persona and what is the purpose of the product.\n2. **Defining** - what are the requirements and expectations of the user persona.\n3. **Designing** - solutions pitched towards a use persona.\n4. **Evaluating** - project rating based on requirements.\n'),(59,'What elements of Human-Centered Design are used with project methodologies? ','1. **Personas** are fictional characters that are created to represent the user of the product.Human-Centered Design allows creating personas with different traits within the sametarget group (i.e. teenagers from cities and from the countryside). How is it helpful? Themain goal is to simplify the decision-making process and for example, do not work ongood but unnecessary features.\n2. **Scenarios** help to crystallize context why our product is used, together with goals ofusers (i.e. teenagers are going to visit our science blog for school help).\n3. **Use cases** those are lists of actions and interactions that are included in scenarios. The purpose ofuse cases is to confirm how users are reaching the goals set in scenarios. Use caseshelp to simplify and to keep track of scenarios.\n4. **Prototypes** are used to build test models that confirm our pivot and approach. Thanks tothe Human-Centered Design approach, this takes a minimal amount of effort and a shorttime to deliver by creating low and high-fidelity prototypes.\n5. **User testing** allows us to make a final confirmation that our product works well, users arehappy with it and are using it the way that we expected. Depending on this step resultsin the Human-Centered Design approach we iterate the product process once more totest again or build the final product.'),(60,' Mistake 1: Software house that will do the best, cheapest and tomorrow ','A mobile application and website is not created in one day. Well, a professional software housedoes not create a good application or website in one day. If the project is to meet yourrequirements, work flawlessly and have modern design - a team of probably several specialistswho needs time and appropriate resources will work on it. The decision between a softwarehouse that does \"good\" and one that does \"quickly\" is not at all difficult. Choosing the “good” willpay over time. What will speed up the cooperation process? Certainly, defined at the startrequirements that the expert team will efficiently answer. '),(61,'Mistake 2: Not paying attention to the portfolio ','I bet the project you need to complete should be tailor-made. Created to meet the needs of yourtarget users, and at the same time unique. If this is the case, do not trust software houses thatcannot boast of any portfolio or when their projects look suspiciously similar. This probablymeans that they do not treat each customer individually. Even if they offer a slightly lower priceor shorter time to deliver - you probably don\'t want to get a copy of a copy? Use portfolio andreferences to evaluate a software development company. '),(62,'Mistake 3: Choosing the software house mainly by location ','Searching in the hope of finding the perfect software house - do you automatically add the nameof your town? In the age of video conferencing and remote work, this has no justification. Canyou imagine the scenario, where you are going to your partner\'s office with a burning topic? Ormaybe you just call? Experts are not made by location. The best software houses often workwith global companies. You will find a professional software development partner by portfolio,technologies and references, not by location. '),(63,'  Human-Centered Design methods - what about practice? ',' The effectiveness of Human-Centered Design comes from deep and direct cooperation between the team and the customer.\n\n1. **Understanding** - to know who is the final user persona and what is the purpose of the product.\n2. **Defining** -lkajsdfljkalfjalkflkaljkjkf\n3. **Designing** - lkadfkkjluij[3rw2p0frw3jipu2jwr3p2u[iju[wr32ipfj[rufi\n4. **Evaluating** - lajksfjklagjlkoi4tpgjfaergjhoaip;ejga\n'),(65,' What elements of Human-Centered Design are used with project methodologies? ','1. Personas are fictional characters that are created to represent the user of the product.Human-Centered Design allows creating personas with different traits within the sametarget group (i.e. teenagers from cities and from the countryside). How is it helpful? Themain goal is to simplify the decision-making process and for example, do not work ongood but unnecessary features.\n2. Scenarios help to crystallize context why our product is used, together with goals ofusers (i.e. teenagers are going to visit our science blog for school help).\n3. Those are lists of actions and interactions that are included in scenarios. The purpose ofuse cases is to confirm how users are reaching the goals set in scenarios. Use caseshelp to simplify and to keep track of scenarios.\n4. Prototypes are used to build test models that confirm our pivot and approach. Thanks tothe Human-Centered Design approach, this takes a minimal amount of effort and a shorttime to deliver by creating low and high-fidelity prototypes.\n5. User testing allows us to make a final confirmation that our product works well, users arehappy with it and are using it the way that we expected. Depending on this step resultsin the Human-Centered Design approach we iterate the product process once more totest again or build the final product.'),(66,'Human-Centered Design versus Design Thinking ','There are a few concepts that are misunderstood or should not be connected toHuman-Centered Design. One of them is Design Thinking. True, both methods have a lot incommon, yet in the practice, we use different processes. The biggest common trait is the factthat a particular meaning of Human-Centered Design and Design Thinking is to set humanusers as the most important part of the project. Although the difference between them is thatHuman-Centered Design scopes for highly usable products, whereas Design Thinking strivesfor innovative and creative solutions for complex problems - so-called “wicked problems”. '),(67,'Mistake 1: Software house that will do the best, cheapest and tomorrow ',' A mobile application and website is not created in one day. Well, a professional software housedoes not create a good application or website in one day. If the project is to meet yourrequirements, work flawlessly and have modern design - a team of probably several specialistswho needs time and appropriate resources will work on it. The decision between a softwarehouse that does \"good\" and one that does \"quickly\" is not at all difficult. Choosing the “good” willpay over time. What will speed up the cooperation process? Certainly, defined at the startrequirements that the expert team will efficiently answer. '),(68,' Mistake 2: Not paying attention to the portfolio ',' I bet the project you need to complete should be tailor-made. Created to meet the needs of yourtarget users, and at the same time unique. If this is the case, do not trust software houses thatcannot boast of any portfolio or when their projects look suspiciously similar. This probablymeans that they do not treat each customer individually. Even if they offer a slightly lower priceor shorter time to deliver - you probably don\'t want to get a copy of a copy? Use portfolio andreferences to evaluate a software development company. '),(69,' Mistake 3: Choosing the software house mainly by location ',' Searching in the hope of finding the perfect software house - do you automatically add the nameof your town? In the age of video conferencing and remote work, this has no justification. Canyou imagine the scenario, where you are going to your partner\'s office with a burning topic? Ormaybe you just call? Experts are not made by location. The best software houses often workwith global companies. You will find a professional software development partner by portfolio,technologies and references, not by location. '),(70,'Dojebanie Thanosa','no dojebal');
/*!40000 ALTER TABLE `components_blog_paragraphs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `components_blog_simple_texts`
--

DROP TABLE IF EXISTS `components_blog_simple_texts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `components_blog_simple_texts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `text` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components_blog_simple_texts`
--

LOCK TABLES `components_blog_simple_texts` WRITE;
/*!40000 ALTER TABLE `components_blog_simple_texts` DISABLE KEYS */;
INSERT INTO `components_blog_simple_texts` VALUES (1,'Lucas ipsum dolor sit amet saché jinn gunray stele boltrunians kast borsk kamino gricho ferroans. Senex luminara mygeeto max tierce vagaari. Subterrel kendal vos paploo sebulba kal. D8 cliegg kanos binks rattataki. Tib farlander conan crynyd. Klatooinian selonian maul amidala hapan. Nikto dressellian teevan porkins maul codru-ji olié. Gwurran mon jarael panaka galen ka jaina luke yuvernian. Hobbie massans vaathkree allie kohl hutt wampa. Plagueis ubese nas nar vedder terrik ongree. Veknoid defel ishi bibble sing raa tierce kor-uj ubb. Lucas ipsum dolor sit amet saché jinn gunray stele boltrunians kast borsk kamino gricho ferroans. Senex luminara mygeeto max tierce vagaari. Subterrel kendal vos paploo sebulba kal. D8 cliegg kanos binks rattataki. Tib farlander conan crynyd. Klatooinian selonian maul amidala hapan. Nikto dressellian teevan porkins maul codru-ji olié. Gwurran mon jarael panaka galen ka jaina luke yuvernian. Hobbie massans vaathkree allie kohl hutt wampa. Plagueis ubese nas nar vedder terrik ongree. Veknoid defel ishi bibble sing raa tierce kor-uj ubb. Lucas ipsum dolor sit amet saché jinn gunray stele boltrunians kast borsk kamino gricho ferroans. Senex luminara mygeeto max tierce vagaari. Subterrel kendal vos paploo sebulba kal. D8 cliegg kanos binks rattataki. Tib farlander conan crynyd. Klatooinian selonian maul amidala hapan. Nikto dressellian teevan porkins maul codru-ji olié. Gwurran mon jarael panaka galen ka jaina luke yuvernian. Hobbie massans vaathkree allie kohl hutt wampa. Plagueis ubese nas nar vedder terrik ongree. Veknoid defel ishi bibble sing raa tierce kor-uj ubb. Lucas ipsum dolor sit amet saché jinn gunray stele boltrunians kast borsk kamino gricho ferroans. Senex luminara mygeeto max tierce vagaari. Subterrel kendal vos paploo sebulba kal. D8 cliegg kanos binks rattataki. Tib farlander conan crynyd. Klatooinian selonian maul amidala hapan. Nikto dressellian teevan porkins maul codru-ji olié. Gwurran mon jarael panaka galen ka jaina luke yuvernian. Hobbie massans vaathkree allie kohl hutt wampa. Plagueis ubese nas nar vedder terrik ongree. Veknoid defel ishi bibble sing raa tierce kor-uj ubb. '),(2,'Rishi fode piett calamari amidala. Melodie cadavine desann wedge ranat bibble shmi. Rishii besalisk jaina geonosis clawdite kyp solo. Sikan terrik leia myneyrsh mod bespin cathar. Davin kast wedge wroonian skywalker sio coway dodonna. Utai rakata solo kamino. Joruus jettster zev gungan. Mccool jettster rotta gora jan. Gordin ki-adi-mundi moff gand kor-uj cordé tierce moddell. Skywalker moff boba shi\'ido dorvalla. Sikan brak orus arkanian ithorian codru-ji. Cassio zeltron droopy secura bel h\'nemthean. '),(21,'Human-Centered Design is one of the most popular buzzwords in nowadays projects. It can be virtually applied to any field: from products, websites, applications, or numerous services. But currently, IT is the area to explore it the most. What is Human-Centered Design and how can we benefit from adopting this method? '),(22,'\n\nHuman in the center of every project phase - in a shortcut this is the clue of Human-Centered Design. The final user (not product owner) decides on the pitch of product development. He’s engaged in the process starting from research, thorough testing of every iteration, and evaluating solutions. His remarks and tips have an impact on product functionality, resulting in a product deeply oriented to fulfill end-user requirements. '),(23,'I know where you are right now. You have an idea, maybe already an investor and a vision ofimplementation, but you lack the element that will put the whole thing into reality - the software.You enter \"software house\" into search in your browser, and the number of search resultsscares you, it’s overwhelming. And yet the success of your project depends on this decision,same as the quality. Will it be user friendly and adapted to the target group? Effective andproblem-free? You are in good hands! Let’s learn how to avoid the worst mistakes whenchoosing the right software development partner.'),(24,'Human-Centered Design is one of the most popular buzzwords in nowadays projects. It can be virtually applied to any field: from products, websites, applications, or numerous services. But currently, IT is the area to explore it the most. What is Human-Centered Design and how can we benefit from adopting this method? '),(25,'Human in the center of every project phase - in a shortcut this is the clue of Human-Centered Design. The final user (not product owner) decides on the pitch of product development. He’s engaged in the process starting from research, thorough testing of every iteration, and evaluating solutions. His remarks and tips have an impact on product functionality, resulting in a product deeply oriented to fulfill end-user requirements. '),(26,'I know where you are right now. You have an idea, maybe already an investor and a vision ofimplementation, but you lack the element that will put the whole thing into reality - the software.You enter \"software house\" into search in your browser, and the number of search resultsscares you, it’s overwhelming. And yet the success of your project depends on this decision,same as the quality. Will it be user friendly and adapted to the target group? Effective andproblem-free? You are in good hands! Let’s learn how to avoid the worst mistakes whenchoosing the right software development partner.');
/*!40000 ALTER TABLE `components_blog_simple_texts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `core_store`
--

DROP TABLE IF EXISTS `core_store`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `core_store` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(255) DEFAULT NULL,
  `value` longtext,
  `type` varchar(255) DEFAULT NULL,
  `environment` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_store`
--

LOCK TABLES `core_store` WRITE;
/*!40000 ALTER TABLE `core_store` DISABLE KEYS */;
INSERT INTO `core_store` VALUES (1,'model_def_strapi::core-store','{\"uid\":\"strapi::core-store\",\"collectionName\":\"core_store\",\"info\":{\"name\":\"core_store\",\"description\":\"\"},\"options\":{\"timestamps\":false},\"attributes\":{\"key\":{\"type\":\"string\"},\"value\":{\"type\":\"text\"},\"type\":{\"type\":\"string\"},\"environment\":{\"type\":\"string\"},\"tag\":{\"type\":\"string\"}}}','object',NULL,NULL),(2,'model_def_strapi::webhooks','{\"uid\":\"strapi::webhooks\",\"collectionName\":\"strapi_webhooks\",\"info\":{\"name\":\"Strapi webhooks\",\"description\":\"\"},\"options\":{\"timestamps\":false},\"attributes\":{\"name\":{\"type\":\"string\"},\"url\":{\"type\":\"text\"},\"headers\":{\"type\":\"json\"},\"events\":{\"type\":\"json\"},\"enabled\":{\"type\":\"boolean\"}}}','object',NULL,NULL),(3,'model_def_strapi::permission','{\"uid\":\"strapi::permission\",\"collectionName\":\"strapi_permission\",\"kind\":\"collectionType\",\"info\":{\"name\":\"Permission\",\"description\":\"\"},\"options\":{\"timestamps\":[\"created_at\",\"updated_at\"]},\"attributes\":{\"action\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true},\"subject\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":false},\"fields\":{\"type\":\"json\",\"configurable\":false,\"required\":false,\"default\":[]},\"conditions\":{\"type\":\"json\",\"configurable\":false,\"required\":false,\"default\":[]},\"role\":{\"configurable\":false,\"model\":\"role\",\"plugin\":\"admin\"}}}','object',NULL,NULL),(4,'model_def_strapi::role','{\"uid\":\"strapi::role\",\"collectionName\":\"strapi_role\",\"kind\":\"collectionType\",\"info\":{\"name\":\"Role\",\"description\":\"\"},\"options\":{\"timestamps\":[\"created_at\",\"updated_at\"]},\"attributes\":{\"name\":{\"type\":\"string\",\"minLength\":1,\"unique\":true,\"configurable\":false,\"required\":true},\"code\":{\"type\":\"string\",\"minLength\":1,\"unique\":true,\"configurable\":false,\"required\":true},\"description\":{\"type\":\"string\",\"configurable\":false},\"users\":{\"configurable\":false,\"collection\":\"user\",\"via\":\"roles\",\"plugin\":\"admin\",\"attribute\":\"user\",\"column\":\"id\",\"isVirtual\":true},\"permissions\":{\"configurable\":false,\"plugin\":\"admin\",\"collection\":\"permission\",\"via\":\"role\",\"isVirtual\":true}}}','object',NULL,NULL),(5,'model_def_strapi::user','{\"uid\":\"strapi::user\",\"collectionName\":\"strapi_administrator\",\"kind\":\"collectionType\",\"info\":{\"name\":\"User\",\"description\":\"\"},\"options\":{\"timestamps\":false},\"attributes\":{\"firstname\":{\"type\":\"string\",\"unique\":false,\"minLength\":1,\"configurable\":false,\"required\":false},\"lastname\":{\"type\":\"string\",\"unique\":false,\"minLength\":1,\"configurable\":false,\"required\":false},\"username\":{\"type\":\"string\",\"unique\":false,\"configurable\":false,\"required\":false},\"email\":{\"type\":\"email\",\"minLength\":6,\"configurable\":false,\"required\":true,\"unique\":true,\"private\":true},\"password\":{\"type\":\"password\",\"minLength\":6,\"configurable\":false,\"required\":false,\"private\":true},\"resetPasswordToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true},\"registrationToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true},\"isActive\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false,\"private\":true},\"roles\":{\"collection\":\"role\",\"collectionName\":\"strapi_users_roles\",\"via\":\"users\",\"dominant\":true,\"plugin\":\"admin\",\"configurable\":false,\"private\":true,\"attribute\":\"role\",\"column\":\"id\",\"isVirtual\":true},\"blocked\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false,\"private\":true}}}','object',NULL,NULL),(6,'model_def_plugins::users-permissions.permission','{\"uid\":\"plugins::users-permissions.permission\",\"collectionName\":\"users-permissions_permission\",\"kind\":\"collectionType\",\"info\":{\"name\":\"permission\",\"description\":\"\"},\"options\":{\"timestamps\":false},\"attributes\":{\"type\":{\"type\":\"string\",\"required\":true,\"configurable\":false},\"controller\":{\"type\":\"string\",\"required\":true,\"configurable\":false},\"action\":{\"type\":\"string\",\"required\":true,\"configurable\":false},\"enabled\":{\"type\":\"boolean\",\"required\":true,\"configurable\":false},\"policy\":{\"type\":\"string\",\"configurable\":false},\"role\":{\"model\":\"role\",\"via\":\"permissions\",\"plugin\":\"users-permissions\",\"configurable\":false},\"created_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true},\"updated_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true}}}','object',NULL,NULL),(7,'model_def_plugins::users-permissions.role','{\"uid\":\"plugins::users-permissions.role\",\"collectionName\":\"users-permissions_role\",\"kind\":\"collectionType\",\"info\":{\"name\":\"role\",\"description\":\"\"},\"options\":{\"timestamps\":false},\"attributes\":{\"name\":{\"type\":\"string\",\"minLength\":3,\"required\":true,\"configurable\":false},\"description\":{\"type\":\"string\",\"configurable\":false},\"type\":{\"type\":\"string\",\"unique\":true,\"configurable\":false},\"permissions\":{\"collection\":\"permission\",\"via\":\"role\",\"plugin\":\"users-permissions\",\"configurable\":false,\"isVirtual\":true},\"users\":{\"collection\":\"user\",\"via\":\"role\",\"configurable\":false,\"plugin\":\"users-permissions\",\"isVirtual\":true},\"created_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true},\"updated_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true}}}','object',NULL,NULL),(8,'model_def_plugins::users-permissions.user','{\"uid\":\"plugins::users-permissions.user\",\"collectionName\":\"users-permissions_user\",\"kind\":\"collectionType\",\"info\":{\"name\":\"user\",\"description\":\"\"},\"options\":{\"draftAndPublish\":false,\"timestamps\":[\"created_at\",\"updated_at\"]},\"attributes\":{\"username\":{\"type\":\"string\",\"minLength\":3,\"unique\":true,\"configurable\":false,\"required\":true},\"email\":{\"type\":\"email\",\"minLength\":6,\"configurable\":false,\"required\":true},\"provider\":{\"type\":\"string\",\"configurable\":false},\"password\":{\"type\":\"password\",\"minLength\":6,\"configurable\":false,\"private\":true},\"resetPasswordToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true},\"confirmationToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true},\"confirmed\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false},\"blocked\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false},\"role\":{\"model\":\"role\",\"via\":\"users\",\"plugin\":\"users-permissions\",\"configurable\":false},\"created_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true},\"updated_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true}}}','object',NULL,NULL),(9,'model_def_plugins::upload.file','{\"uid\":\"plugins::upload.file\",\"collectionName\":\"upload_file\",\"kind\":\"collectionType\",\"info\":{\"name\":\"file\",\"description\":\"\"},\"options\":{\"timestamps\":[\"created_at\",\"updated_at\"]},\"attributes\":{\"name\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"alternativeText\":{\"type\":\"string\",\"configurable\":false},\"caption\":{\"type\":\"string\",\"configurable\":false},\"width\":{\"type\":\"integer\",\"configurable\":false},\"height\":{\"type\":\"integer\",\"configurable\":false},\"formats\":{\"type\":\"json\",\"configurable\":false},\"hash\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"ext\":{\"type\":\"string\",\"configurable\":false},\"mime\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"size\":{\"type\":\"decimal\",\"configurable\":false,\"required\":true},\"url\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"previewUrl\":{\"type\":\"string\",\"configurable\":false},\"provider\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"provider_metadata\":{\"type\":\"json\",\"configurable\":false},\"related\":{\"collection\":\"*\",\"filter\":\"field\",\"configurable\":false},\"created_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true},\"updated_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true}}}','object',NULL,NULL),(10,'plugin_users-permissions_grant','{\"email\":{\"enabled\":true,\"icon\":\"envelope\"},\"discord\":{\"enabled\":false,\"icon\":\"discord\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/discord/callback\",\"scope\":[\"identify\",\"email\"]},\"facebook\":{\"enabled\":false,\"icon\":\"facebook-square\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/facebook/callback\",\"scope\":[\"email\"]},\"google\":{\"enabled\":false,\"icon\":\"google\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/google/callback\",\"scope\":[\"email\"]},\"github\":{\"enabled\":false,\"icon\":\"github\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/github/callback\",\"scope\":[\"user\",\"user:email\"]},\"microsoft\":{\"enabled\":false,\"icon\":\"windows\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/microsoft/callback\",\"scope\":[\"user.read\"]},\"twitter\":{\"enabled\":false,\"icon\":\"twitter\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/twitter/callback\"},\"instagram\":{\"enabled\":false,\"icon\":\"instagram\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/instagram/callback\"},\"vk\":{\"enabled\":false,\"icon\":\"vk\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/vk/callback\",\"scope\":[\"email\"]},\"twitch\":{\"enabled\":false,\"icon\":\"twitch\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/twitch/callback\",\"scope\":[\"user:read:email\"]},\"linkedin\":{\"enabled\":false,\"icon\":\"linkedin\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/linkedin/callback\",\"scope\":[\"r_liteprofile\",\"r_emailaddress\"]},\"cognito\":{\"enabled\":false,\"icon\":\"aws\",\"key\":\"\",\"secret\":\"\",\"subdomain\":\"my.subdomain.com\",\"callback\":\"/auth/cognito/callback\",\"scope\":[\"email\",\"openid\",\"profile\"]}}','object','',''),(11,'plugin_upload_settings','{\"sizeOptimization\":true,\"responsiveDimensions\":true}','object','development',''),(12,'plugin_content_manager_configuration_content_types::strapi::permission','{\"uid\":\"strapi::permission\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"action\",\"defaultSortBy\":\"action\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"action\":{\"edit\":{\"label\":\"Action\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Action\",\"searchable\":true,\"sortable\":true}},\"subject\":{\"edit\":{\"label\":\"Subject\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Subject\",\"searchable\":true,\"sortable\":true}},\"fields\":{\"edit\":{\"label\":\"Fields\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Fields\",\"searchable\":false,\"sortable\":false}},\"conditions\":{\"edit\":{\"label\":\"Conditions\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Conditions\",\"searchable\":false,\"sortable\":false}},\"role\":{\"edit\":{\"label\":\"Role\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"Role\",\"searchable\":false,\"sortable\":false}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"action\",\"subject\",\"created_at\"],\"editRelations\":[\"role\"],\"edit\":[[{\"name\":\"action\",\"size\":6},{\"name\":\"subject\",\"size\":6}],[{\"name\":\"fields\",\"size\":12}],[{\"name\":\"conditions\",\"size\":12}]]}}','object','',''),(13,'plugin_content_manager_configuration_content_types::strapi::role','{\"uid\":\"strapi::role\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"Name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Name\",\"searchable\":true,\"sortable\":true}},\"code\":{\"edit\":{\"label\":\"Code\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Code\",\"searchable\":true,\"sortable\":true}},\"description\":{\"edit\":{\"label\":\"Description\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Description\",\"searchable\":true,\"sortable\":true}},\"users\":{\"edit\":{\"label\":\"Users\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"Users\",\"searchable\":false,\"sortable\":false}},\"permissions\":{\"edit\":{\"label\":\"Permissions\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"action\"},\"list\":{\"label\":\"Permissions\",\"searchable\":false,\"sortable\":false}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"name\",\"code\",\"description\"],\"editRelations\":[\"users\",\"permissions\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"code\",\"size\":6}],[{\"name\":\"description\",\"size\":6}]]}}','object','',''),(14,'plugin_content_manager_configuration_content_types::plugins::users-permissions.role','{\"uid\":\"plugins::users-permissions.role\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"Name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Name\",\"searchable\":true,\"sortable\":true}},\"description\":{\"edit\":{\"label\":\"Description\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Description\",\"searchable\":true,\"sortable\":true}},\"type\":{\"edit\":{\"label\":\"Type\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Type\",\"searchable\":true,\"sortable\":true}},\"permissions\":{\"edit\":{\"label\":\"Permissions\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"type\"},\"list\":{\"label\":\"Permissions\",\"searchable\":false,\"sortable\":false}},\"users\":{\"edit\":{\"label\":\"Users\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"username\"},\"list\":{\"label\":\"Users\",\"searchable\":false,\"sortable\":false}}},\"layouts\":{\"list\":[\"id\",\"name\",\"description\",\"type\"],\"editRelations\":[\"permissions\",\"users\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"description\",\"size\":6}],[{\"name\":\"type\",\"size\":6}]]}}','object','',''),(15,'plugin_content_manager_configuration_content_types::plugins::upload.file','{\"uid\":\"plugins::upload.file\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"Name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Name\",\"searchable\":true,\"sortable\":true}},\"alternativeText\":{\"edit\":{\"label\":\"AlternativeText\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"AlternativeText\",\"searchable\":true,\"sortable\":true}},\"caption\":{\"edit\":{\"label\":\"Caption\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Caption\",\"searchable\":true,\"sortable\":true}},\"width\":{\"edit\":{\"label\":\"Width\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Width\",\"searchable\":true,\"sortable\":true}},\"height\":{\"edit\":{\"label\":\"Height\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Height\",\"searchable\":true,\"sortable\":true}},\"formats\":{\"edit\":{\"label\":\"Formats\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Formats\",\"searchable\":false,\"sortable\":false}},\"hash\":{\"edit\":{\"label\":\"Hash\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Hash\",\"searchable\":true,\"sortable\":true}},\"ext\":{\"edit\":{\"label\":\"Ext\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Ext\",\"searchable\":true,\"sortable\":true}},\"mime\":{\"edit\":{\"label\":\"Mime\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Mime\",\"searchable\":true,\"sortable\":true}},\"size\":{\"edit\":{\"label\":\"Size\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Size\",\"searchable\":true,\"sortable\":true}},\"url\":{\"edit\":{\"label\":\"Url\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Url\",\"searchable\":true,\"sortable\":true}},\"previewUrl\":{\"edit\":{\"label\":\"PreviewUrl\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"PreviewUrl\",\"searchable\":true,\"sortable\":true}},\"provider\":{\"edit\":{\"label\":\"Provider\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Provider\",\"searchable\":true,\"sortable\":true}},\"provider_metadata\":{\"edit\":{\"label\":\"Provider_metadata\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Provider_metadata\",\"searchable\":false,\"sortable\":false}},\"related\":{\"edit\":{\"label\":\"Related\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"id\"},\"list\":{\"label\":\"Related\",\"searchable\":false,\"sortable\":false}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"name\",\"alternativeText\",\"caption\"],\"editRelations\":[\"related\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"alternativeText\",\"size\":6}],[{\"name\":\"caption\",\"size\":6},{\"name\":\"width\",\"size\":4}],[{\"name\":\"height\",\"size\":4}],[{\"name\":\"formats\",\"size\":12}],[{\"name\":\"hash\",\"size\":6},{\"name\":\"ext\",\"size\":6}],[{\"name\":\"mime\",\"size\":6},{\"name\":\"size\",\"size\":4}],[{\"name\":\"url\",\"size\":6},{\"name\":\"previewUrl\",\"size\":6}],[{\"name\":\"provider\",\"size\":6}],[{\"name\":\"provider_metadata\",\"size\":12}]]}}','object','',''),(16,'plugin_content_manager_configuration_content_types::plugins::users-permissions.user','{\"uid\":\"plugins::users-permissions.user\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"username\",\"defaultSortBy\":\"username\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"username\":{\"edit\":{\"label\":\"Username\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Username\",\"searchable\":true,\"sortable\":true}},\"email\":{\"edit\":{\"label\":\"Email\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Email\",\"searchable\":true,\"sortable\":true}},\"provider\":{\"edit\":{\"label\":\"Provider\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Provider\",\"searchable\":true,\"sortable\":true}},\"password\":{\"edit\":{\"label\":\"Password\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Password\",\"searchable\":true,\"sortable\":true}},\"resetPasswordToken\":{\"edit\":{\"label\":\"ResetPasswordToken\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"ResetPasswordToken\",\"searchable\":true,\"sortable\":true}},\"confirmationToken\":{\"edit\":{\"label\":\"ConfirmationToken\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"ConfirmationToken\",\"searchable\":true,\"sortable\":true}},\"confirmed\":{\"edit\":{\"label\":\"Confirmed\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Confirmed\",\"searchable\":true,\"sortable\":true}},\"blocked\":{\"edit\":{\"label\":\"Blocked\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Blocked\",\"searchable\":true,\"sortable\":true}},\"role\":{\"edit\":{\"label\":\"Role\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"Role\",\"searchable\":false,\"sortable\":false}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"username\",\"email\",\"confirmed\"],\"editRelations\":[\"role\"],\"edit\":[[{\"name\":\"username\",\"size\":6},{\"name\":\"email\",\"size\":6}],[{\"name\":\"password\",\"size\":6},{\"name\":\"confirmed\",\"size\":4}],[{\"name\":\"blocked\",\"size\":4}]]}}','object','',''),(17,'plugin_content_manager_configuration_content_types::plugins::users-permissions.permission','{\"uid\":\"plugins::users-permissions.permission\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"type\",\"defaultSortBy\":\"type\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"type\":{\"edit\":{\"label\":\"Type\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Type\",\"searchable\":true,\"sortable\":true}},\"controller\":{\"edit\":{\"label\":\"Controller\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Controller\",\"searchable\":true,\"sortable\":true}},\"action\":{\"edit\":{\"label\":\"Action\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Action\",\"searchable\":true,\"sortable\":true}},\"enabled\":{\"edit\":{\"label\":\"Enabled\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Enabled\",\"searchable\":true,\"sortable\":true}},\"policy\":{\"edit\":{\"label\":\"Policy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Policy\",\"searchable\":true,\"sortable\":true}},\"role\":{\"edit\":{\"label\":\"Role\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"Role\",\"searchable\":false,\"sortable\":false}}},\"layouts\":{\"list\":[\"id\",\"type\",\"controller\",\"action\"],\"editRelations\":[\"role\"],\"edit\":[[{\"name\":\"type\",\"size\":6},{\"name\":\"controller\",\"size\":6}],[{\"name\":\"action\",\"size\":6},{\"name\":\"enabled\",\"size\":4}],[{\"name\":\"policy\",\"size\":6}]]}}','object','',''),(18,'plugin_content_manager_configuration_content_types::strapi::user','{\"uid\":\"strapi::user\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"firstname\",\"defaultSortBy\":\"firstname\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"firstname\":{\"edit\":{\"label\":\"Firstname\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Firstname\",\"searchable\":true,\"sortable\":true}},\"lastname\":{\"edit\":{\"label\":\"Lastname\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Lastname\",\"searchable\":true,\"sortable\":true}},\"username\":{\"edit\":{\"label\":\"Username\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Username\",\"searchable\":true,\"sortable\":true}},\"email\":{\"edit\":{\"label\":\"Email\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Email\",\"searchable\":true,\"sortable\":true}},\"password\":{\"edit\":{\"label\":\"Password\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Password\",\"searchable\":true,\"sortable\":true}},\"resetPasswordToken\":{\"edit\":{\"label\":\"ResetPasswordToken\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"ResetPasswordToken\",\"searchable\":true,\"sortable\":true}},\"registrationToken\":{\"edit\":{\"label\":\"RegistrationToken\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"RegistrationToken\",\"searchable\":true,\"sortable\":true}},\"isActive\":{\"edit\":{\"label\":\"IsActive\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"IsActive\",\"searchable\":true,\"sortable\":true}},\"roles\":{\"edit\":{\"label\":\"Roles\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"Roles\",\"searchable\":false,\"sortable\":false}},\"blocked\":{\"edit\":{\"label\":\"Blocked\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Blocked\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"firstname\",\"lastname\",\"username\"],\"editRelations\":[\"roles\"],\"edit\":[[{\"name\":\"firstname\",\"size\":6},{\"name\":\"lastname\",\"size\":6}],[{\"name\":\"username\",\"size\":6},{\"name\":\"email\",\"size\":6}],[{\"name\":\"password\",\"size\":6},{\"name\":\"resetPasswordToken\",\"size\":6}],[{\"name\":\"registrationToken\",\"size\":6},{\"name\":\"isActive\",\"size\":4}],[{\"name\":\"blocked\",\"size\":4}]]}}','object','',''),(19,'plugin_users-permissions_email','{\"reset_password\":{\"display\":\"Email.template.reset_password\",\"icon\":\"sync\",\"options\":{\"from\":{\"name\":\"Administration Panel\",\"email\":\"no-reply@strapi.io\"},\"response_email\":\"\",\"object\":\"Reset password\",\"message\":\"<p>We heard that you lost your password. Sorry about that!</p>\\n\\n<p>But don’t worry! You can use the following link to reset your password:</p>\\n<p><%= URL %>?code=<%= TOKEN %></p>\\n\\n<p>Thanks.</p>\"}},\"email_confirmation\":{\"display\":\"Email.template.email_confirmation\",\"icon\":\"check-square\",\"options\":{\"from\":{\"name\":\"Administration Panel\",\"email\":\"no-reply@strapi.io\"},\"response_email\":\"\",\"object\":\"Account confirmation\",\"message\":\"<p>Thank you for registering!</p>\\n\\n<p>You have to confirm your email address. Please click on the link below.</p>\\n\\n<p><%= URL %>?confirmation=<%= CODE %></p>\\n\\n<p>Thanks.</p>\"}}}','object','',''),(20,'plugin_users-permissions_advanced','{\"unique_email\":true,\"allow_register\":true,\"email_confirmation\":false,\"email_reset_password\":null,\"email_confirmation_redirection\":null,\"default_role\":\"authenticated\"}','object','',''),(21,'model_def_blog.blog','{\"uid\":\"blog.blog\",\"collectionName\":\"components_blog_blogs\",\"info\":{\"name\":\"blog\",\"icon\":\"feather-alt\"},\"options\":{\"timestamps\":false},\"attributes\":{\"title\":{\"type\":\"string\"},\"createdAt\":{\"type\":\"date\"},\"publishAt\":{\"type\":\"date\"},\"content\":{\"type\":\"richtext\"}}}','object',NULL,NULL),(23,'model_def_application::footer.footer','{\"uid\":\"application::footer.footer\",\"collectionName\":\"footers\",\"kind\":\"singleType\",\"info\":{\"name\":\"footer\"},\"options\":{\"increments\":true,\"timestamps\":[\"created_at\",\"updated_at\"],\"draftAndPublish\":true},\"attributes\":{\"content\":{\"type\":\"richtext\"},\"published_at\":{\"type\":\"datetime\",\"configurable\":false},\"created_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true},\"updated_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true}}}','object',NULL,NULL),(24,'plugin_content_manager_configuration_content_types::application::footer.footer','{\"uid\":\"application::footer.footer\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"id\",\"defaultSortBy\":\"id\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"content\":{\"edit\":{\"label\":\"Content\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Content\",\"searchable\":false,\"sortable\":false}},\"published_at\":{\"edit\":{\"label\":\"Published_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Published_at\",\"searchable\":true,\"sortable\":true}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"published_at\",\"created_at\",\"updated_at\"],\"editRelations\":[],\"edit\":[[{\"name\":\"content\",\"size\":12}]]}}','object','',''),(25,'model_def_blog.author','{\"uid\":\"blog.author\",\"collectionName\":\"components_blog_authors\",\"info\":{\"name\":\"author\",\"icon\":\"meh\"},\"options\":{\"timestamps\":false},\"attributes\":{\"Name\":{\"type\":\"string\"},\"picture\":{\"model\":\"file\",\"via\":\"related\",\"allowedTypes\":[\"images\",\"files\",\"videos\"],\"plugin\":\"upload\",\"required\":false}}}','object',NULL,NULL),(26,'plugin_content_manager_configuration_components::blog.author','{\"uid\":\"blog.author\",\"isComponent\":true,\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"Name\",\"defaultSortBy\":\"Name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":false,\"sortable\":false}},\"Name\":{\"edit\":{\"label\":\"Name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Name\",\"searchable\":true,\"sortable\":true}},\"picture\":{\"edit\":{\"label\":\"Picture\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Picture\",\"searchable\":false,\"sortable\":false}}},\"layouts\":{\"list\":[\"id\",\"Name\",\"picture\"],\"edit\":[[{\"name\":\"Name\",\"size\":6},{\"name\":\"picture\",\"size\":6}]],\"editRelations\":[]}}','object','',''),(27,'model_def_application::blog-post.blog-post','{\"uid\":\"application::blog-post.blog-post\",\"collectionName\":\"blog\",\"kind\":\"collectionType\",\"info\":{\"name\":\"Blog post\",\"description\":\"\"},\"options\":{\"increments\":true,\"timestamps\":[\"created_at\",\"updated_at\"],\"draftAndPublish\":true},\"attributes\":{\"title\":{\"type\":\"string\",\"required\":true},\"date\":{\"type\":\"date\",\"required\":true},\"picture\":{\"model\":\"file\",\"via\":\"related\",\"allowedTypes\":[\"images\",\"files\",\"videos\"],\"plugin\":\"upload\",\"required\":false},\"content\":{\"type\":\"dynamiczone\",\"components\":[\"blog.paragraph\",\"blog.simple-text\"],\"required\":true},\"published_at\":{\"type\":\"datetime\",\"configurable\":false},\"created_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true},\"updated_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true}}}','object',NULL,NULL),(28,'plugin_content_manager_configuration_content_types::application::blog-post.blog-post','{\"uid\":\"application::blog-post.blog-post\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"title\",\"defaultSortBy\":\"title\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"title\":{\"edit\":{\"label\":\"Title\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Title\",\"searchable\":true,\"sortable\":true}},\"date\":{\"edit\":{\"label\":\"Date\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Date\",\"searchable\":true,\"sortable\":true}},\"picture\":{\"edit\":{\"label\":\"Picture\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Picture\",\"searchable\":false,\"sortable\":false}},\"content\":{\"edit\":{\"label\":\"Content\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Content\",\"searchable\":false,\"sortable\":false}},\"published_at\":{\"edit\":{\"label\":\"Published_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Published_at\",\"searchable\":true,\"sortable\":true}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"published_at\",\"title\",\"date\"],\"edit\":[[{\"name\":\"content\",\"size\":12}],[{\"name\":\"title\",\"size\":6},{\"name\":\"date\",\"size\":4}],[{\"name\":\"picture\",\"size\":6}]],\"editRelations\":[]}}','object','',''),(29,'model_def_blog.custom-meta','{\"uid\":\"blog.custom-meta\",\"collectionName\":\"components_blog_custom_metas\",\"info\":{\"name\":\"custom-meta\",\"icon\":\"rss-square\"},\"options\":{\"timestamps\":false},\"attributes\":{\"key\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}}}','object',NULL,NULL),(30,'plugin_content_manager_configuration_components::blog.custom-meta','{\"uid\":\"blog.custom-meta\",\"isComponent\":true,\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"key\",\"defaultSortBy\":\"key\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":false,\"sortable\":false}},\"key\":{\"edit\":{\"label\":\"Key\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Key\",\"searchable\":true,\"sortable\":true}},\"value\":{\"edit\":{\"label\":\"Value\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Value\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"key\",\"value\"],\"edit\":[[{\"name\":\"key\",\"size\":6},{\"name\":\"value\",\"size\":6}]],\"editRelations\":[]}}','object','',''),(31,'model_def_blog.meta','{\"uid\":\"blog.meta\",\"collectionName\":\"components_blog_metas\",\"info\":{\"name\":\"meta\",\"icon\":\"asterisk\"},\"options\":{\"timestamps\":false},\"attributes\":{}}','object',NULL,NULL),(32,'model_def_blog.enumerated-list','{\"uid\":\"blog.enumerated-list\",\"collectionName\":\"components_blog_enumerated_lists\",\"info\":{\"name\":\"enumerated-list\",\"icon\":\"list-ol\",\"description\":\"\"},\"options\":{\"timestamps\":false},\"attributes\":{}}','object',NULL,NULL),(33,'model_def_blog.paragraph','{\"uid\":\"blog.paragraph\",\"collectionName\":\"components_blog_paragraphs\",\"info\":{\"name\":\"paragraph\",\"icon\":\"align-justify\",\"description\":\"\"},\"options\":{\"timestamps\":false},\"attributes\":{\"title\":{\"type\":\"string\"},\"text\":{\"type\":\"richtext\"}}}','object',NULL,NULL),(34,'model_def_blog.simple-text','{\"uid\":\"blog.simple-text\",\"collectionName\":\"components_blog_simple_texts\",\"info\":{\"name\":\"simpleText\",\"icon\":\"meteor\"},\"options\":{\"timestamps\":false},\"attributes\":{\"text\":{\"type\":\"richtext\"}}}','object',NULL,NULL),(35,'plugin_content_manager_configuration_components::blog.enumerated-list','{\"uid\":\"blog.enumerated-list\",\"isComponent\":true,\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"id\",\"defaultSortBy\":\"id\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":false,\"sortable\":false}}},\"layouts\":{\"list\":[\"id\"],\"edit\":[],\"editRelations\":[]}}','object','',''),(36,'plugin_content_manager_configuration_components::blog.paragraph','{\"uid\":\"blog.paragraph\",\"isComponent\":true,\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"title\",\"defaultSortBy\":\"title\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":false,\"sortable\":false}},\"title\":{\"edit\":{\"label\":\"Title\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Title\",\"searchable\":true,\"sortable\":true}},\"text\":{\"edit\":{\"label\":\"Text\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Text\",\"searchable\":false,\"sortable\":false}}},\"layouts\":{\"list\":[\"id\",\"title\"],\"edit\":[[{\"name\":\"title\",\"size\":6}],[{\"name\":\"text\",\"size\":12}]],\"editRelations\":[]}}','object','',''),(37,'plugin_content_manager_configuration_components::blog.simple-text','{\"uid\":\"blog.simple-text\",\"isComponent\":true,\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"id\",\"defaultSortBy\":\"id\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":false,\"sortable\":false}},\"text\":{\"edit\":{\"label\":\"Text\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Text\",\"searchable\":false,\"sortable\":false}}},\"layouts\":{\"list\":[\"id\"],\"edit\":[[{\"name\":\"text\",\"size\":12}]],\"editRelations\":[]}}','object','',''),(38,'model_def_application::faq.faq','{\"uid\":\"application::faq.faq\",\"collectionName\":\"faqs\",\"kind\":\"collectionType\",\"info\":{\"name\":\"Faq\"},\"options\":{\"increments\":true,\"timestamps\":[\"created_at\",\"updated_at\"],\"draftAndPublish\":true},\"attributes\":{\"title\":{\"type\":\"string\",\"required\":true},\"content\":{\"type\":\"richtext\"},\"published_at\":{\"type\":\"datetime\",\"configurable\":false},\"created_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true},\"updated_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true}}}','object',NULL,NULL),(42,'plugin_content_manager_configuration_content_types::application::faq.faq','{\"uid\":\"application::faq.faq\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"title\",\"defaultSortBy\":\"title\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"title\":{\"edit\":{\"label\":\"Title\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Title\",\"searchable\":true,\"sortable\":true}},\"content\":{\"edit\":{\"label\":\"Content\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Content\",\"searchable\":false,\"sortable\":false}},\"published_at\":{\"edit\":{\"label\":\"Published_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Published_at\",\"searchable\":true,\"sortable\":true}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"title\",\"published_at\",\"created_at\"],\"editRelations\":[],\"edit\":[[{\"name\":\"title\",\"size\":6}],[{\"name\":\"content\",\"size\":12}]]}}','object','',''),(43,'model_def_application::available-developers.available-developers','{\"uid\":\"application::available-developers.available-developers\",\"collectionName\":\"avDevelopers\",\"kind\":\"collectionType\",\"info\":{\"name\":\"Available developers\",\"description\":\"\"},\"options\":{\"increments\":true,\"timestamps\":[\"created_at\",\"updated_at\"],\"draftAndPublish\":true},\"attributes\":{\"title\":{\"type\":\"string\",\"required\":true},\"content\":{\"type\":\"richtext\"},\"published_at\":{\"type\":\"datetime\",\"configurable\":false},\"created_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true},\"updated_by\":{\"model\":\"user\",\"plugin\":\"admin\",\"configurable\":false,\"writable\":false,\"private\":true}}}','object',NULL,NULL),(44,'plugin_content_manager_configuration_content_types::application::available-developers.available-developers','{\"uid\":\"application::available-developers.available-developers\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"title\",\"defaultSortBy\":\"title\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"title\":{\"edit\":{\"label\":\"Title\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Title\",\"searchable\":true,\"sortable\":true}},\"content\":{\"edit\":{\"label\":\"Content\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Content\",\"searchable\":false,\"sortable\":false}},\"published_at\":{\"edit\":{\"label\":\"Published_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Published_at\",\"searchable\":true,\"sortable\":true}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"title\",\"published_at\",\"created_at\"],\"edit\":[[{\"name\":\"title\",\"size\":6}],[{\"name\":\"content\",\"size\":12}]],\"editRelations\":[]}}','object','','');
/*!40000 ALTER TABLE `core_store` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faqs`
--

DROP TABLE IF EXISTS `faqs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `faqs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` longtext,
  `published_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faqs`
--

LOCK TABLES `faqs` WRITE;
/*!40000 ALTER TABLE `faqs` DISABLE KEYS */;
INSERT INTO `faqs` VALUES (1,'In what kind of projects do we feel the best?','We are **always** pleased to welcome a new challenge, that\'s why we have worked in various projects.\n\nStarting with custom **CRM/ERP** class solutions development, through **B2B and B2C** web systems, mobile apps to small, simple but **beautiful** websites.\n\nWe love interesting project and we also work in blockchain **technology**, created online games and also hardware projects.\n','2020-11-19 11:07:27',1,1,'2020-11-19 11:07:17','2020-11-19 11:07:27'),(2,'What spinbits brings to the project?','We want to build complete project together with you. That\'s why we bring our experience on analysis, **solutions** and flow. Of course, you can decide about the approach applied on every step.\n\nTogether with experience we bring resources. From **developers**, to management, testers and designers.\n\nLast but not least we bring **technology**. We\'re up-to-date with latest solutions and tools that we can trust in and used them multiple times.\n','2020-11-19 15:33:54',1,1,'2020-11-19 15:33:50','2020-11-19 15:33:54'),(3,'What happens when project is finished?','You will receive all **results** of our work for your disposal - no matter if it\'s a code, hardware, documentation. We also will give you a **warranty** for all elements.','2020-11-19 15:34:35',1,1,'2020-11-19 15:34:33','2020-11-19 15:34:35'),(4,'Why should I consider outsourcing?','Cost **optimization** - you can decide to work with us based on time&material approach, full-time or half-time. Based on your needs we can help you pick the best **solution** to optimize your costs.\n\nScalability - New project next week? You don\'t need to worry, since we have the resources. Thanks to our management **results** and procedures your new member of the team will be **onboarded** and ready to work in no time.\n\nRecruitment - We will take care of it - you will receive only the best and well suited **applications** that were earlier evaluated by us.\n','2020-11-19 15:35:45',1,1,'2020-11-19 15:35:43','2020-11-19 15:35:45');
/*!40000 ALTER TABLE `faqs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `footers`
--

DROP TABLE IF EXISTS `footers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `footers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `content` longtext,
  `published_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `footers`
--

LOCK TABLES `footers` WRITE;
/*!40000 ALTER TABLE `footers` DISABLE KEYS */;
/*!40000 ALTER TABLE `footers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `strapi_administrator`
--

DROP TABLE IF EXISTS `strapi_administrator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `strapi_administrator` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `resetPasswordToken` varchar(255) DEFAULT NULL,
  `registrationToken` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  `blocked` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `strapi_administrator_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `strapi_administrator`
--

LOCK TABLES `strapi_administrator` WRITE;
/*!40000 ALTER TABLE `strapi_administrator` DISABLE KEYS */;
INSERT INTO `strapi_administrator` VALUES (1,'Admin','Admin','admin','admin@spinbits.io','$2a$10$4CvNVGQqJLTZcb7KFZA0OObLxCUGMzaJJ3P6pHwqGefUzNJ/36IZG',NULL,NULL,1,NULL);
/*!40000 ALTER TABLE `strapi_administrator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `strapi_permission`
--

DROP TABLE IF EXISTS `strapi_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `strapi_permission` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `action` varchar(255) NOT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `fields` longtext,
  `conditions` longtext,
  `role` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `strapi_permission`
--

LOCK TABLES `strapi_permission` WRITE;
/*!40000 ALTER TABLE `strapi_permission` DISABLE KEYS */;
INSERT INTO `strapi_permission` VALUES (1,'plugins::upload.read',NULL,NULL,'[]',2,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(2,'plugins::upload.assets.create',NULL,NULL,'[]',2,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(3,'plugins::upload.assets.update',NULL,NULL,'[]',2,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(4,'plugins::upload.assets.download',NULL,NULL,'[]',2,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(5,'plugins::upload.assets.copy-link',NULL,NULL,'[]',2,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(6,'plugins::upload.read',NULL,NULL,'[\"admin::is-creator\"]',3,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(7,'plugins::upload.assets.create',NULL,NULL,'[]',3,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(8,'plugins::upload.assets.update',NULL,NULL,'[\"admin::is-creator\"]',3,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(9,'plugins::upload.assets.download',NULL,NULL,'[]',3,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(10,'plugins::upload.assets.copy-link',NULL,NULL,'[]',3,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(11,'plugins::content-manager.explorer.create','plugins::users-permissions.user','[\"username\",\"email\",\"provider\",\"password\",\"resetPasswordToken\",\"confirmationToken\",\"confirmed\",\"blocked\",\"role\"]','[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(12,'plugins::content-manager.explorer.read','plugins::users-permissions.user','[\"username\",\"email\",\"provider\",\"password\",\"resetPasswordToken\",\"confirmationToken\",\"confirmed\",\"blocked\",\"role\"]','[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(13,'plugins::content-manager.explorer.update','plugins::users-permissions.user','[\"username\",\"email\",\"provider\",\"password\",\"resetPasswordToken\",\"confirmationToken\",\"confirmed\",\"blocked\",\"role\"]','[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(14,'plugins::content-manager.explorer.delete','plugins::users-permissions.user',NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(15,'plugins::content-type-builder.read',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(16,'plugins::upload.read',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(17,'plugins::upload.assets.create',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(18,'plugins::upload.assets.update',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(19,'plugins::upload.assets.download',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(20,'plugins::upload.assets.copy-link',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(21,'plugins::upload.settings.read',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(22,'plugins::content-manager.single-types.configure-view',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(23,'plugins::content-manager.collection-types.configure-view',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(24,'plugins::content-manager.components.configure-layout',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(25,'plugins::users-permissions.roles.create',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(26,'plugins::users-permissions.roles.read',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(27,'plugins::users-permissions.roles.update',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(28,'plugins::users-permissions.roles.delete',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(29,'plugins::users-permissions.providers.read',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(30,'plugins::users-permissions.providers.update',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(31,'plugins::users-permissions.email-templates.read',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(32,'plugins::users-permissions.email-templates.update',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(33,'plugins::users-permissions.advanced-settings.read',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(34,'plugins::users-permissions.advanced-settings.update',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(35,'admin::marketplace.read',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(36,'admin::marketplace.plugins.install',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(37,'admin::marketplace.plugins.uninstall',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(38,'admin::webhooks.create',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(39,'admin::webhooks.read',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(40,'admin::webhooks.update',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(41,'admin::webhooks.delete',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(42,'admin::users.create',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:56'),(43,'admin::users.read',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:57'),(44,'admin::users.update',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:57'),(45,'admin::users.delete',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:57'),(46,'admin::roles.create',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:57'),(47,'admin::roles.read',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:57'),(48,'admin::roles.update',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:57'),(49,'admin::roles.delete',NULL,NULL,'[]',1,'2020-11-03 14:04:56','2020-11-03 14:04:57'),(50,'plugins::content-manager.explorer.create','application::footer.footer','[\"content\"]','[]',1,'2020-11-03 14:47:45','2020-11-03 14:47:45'),(51,'plugins::content-manager.explorer.read','application::footer.footer','[\"content\"]','[]',1,'2020-11-03 14:47:45','2020-11-03 14:47:45'),(52,'plugins::content-manager.explorer.update','application::footer.footer','[\"content\"]','[]',1,'2020-11-03 14:47:45','2020-11-03 14:47:45'),(53,'plugins::content-manager.explorer.delete','application::footer.footer',NULL,'[]',1,'2020-11-03 14:47:45','2020-11-03 14:47:45'),(54,'plugins::content-manager.explorer.publish','application::footer.footer',NULL,'[]',1,'2020-11-03 14:47:45','2020-11-03 14:47:45'),(58,'plugins::content-manager.explorer.delete','application::blog-post.blog-post',NULL,'[]',1,'2020-11-03 14:52:45','2020-11-03 14:52:45'),(59,'plugins::content-manager.explorer.publish','application::blog-post.blog-post',NULL,'[]',1,'2020-11-03 14:52:45','2020-11-03 14:52:45'),(69,'plugins::content-manager.explorer.create','application::blog-post.blog-post','[\"title\",\"date\",\"picture\",\"content\"]','[]',1,'2020-11-17 11:00:31','2020-11-17 11:00:31'),(70,'plugins::content-manager.explorer.read','application::blog-post.blog-post','[\"title\",\"date\",\"picture\",\"content\"]','[]',1,'2020-11-17 11:00:31','2020-11-17 11:00:31'),(71,'plugins::content-manager.explorer.update','application::blog-post.blog-post','[\"title\",\"date\",\"picture\",\"content\"]','[]',1,'2020-11-17 11:00:31','2020-11-17 11:00:31'),(87,'plugins::content-manager.explorer.create','application::faq.faq','[\"title\",\"content\"]','[]',1,'2020-11-19 14:04:14','2020-11-19 14:04:14'),(88,'plugins::content-manager.explorer.read','application::faq.faq','[\"title\",\"content\"]','[]',1,'2020-11-19 14:04:14','2020-11-19 14:04:14'),(89,'plugins::content-manager.explorer.update','application::faq.faq','[\"title\",\"content\"]','[]',1,'2020-11-19 14:04:14','2020-11-19 14:04:14'),(90,'plugins::content-manager.explorer.delete','application::faq.faq',NULL,'[]',1,'2020-11-19 14:04:14','2020-11-19 14:04:14'),(91,'plugins::content-manager.explorer.publish','application::faq.faq',NULL,'[]',1,'2020-11-19 14:04:14','2020-11-19 14:04:14'),(95,'plugins::content-manager.explorer.delete','application::available-developers.available-developers',NULL,'[]',1,'2020-11-30 13:57:20','2020-11-30 13:57:20'),(96,'plugins::content-manager.explorer.publish','application::available-developers.available-developers',NULL,'[]',1,'2020-11-30 13:57:20','2020-11-30 13:57:20'),(97,'plugins::content-manager.explorer.create','application::available-developers.available-developers','[\"title\",\"content\"]','[]',1,'2020-11-30 13:57:55','2020-11-30 13:57:55'),(98,'plugins::content-manager.explorer.read','application::available-developers.available-developers','[\"title\",\"content\"]','[]',1,'2020-11-30 13:57:55','2020-11-30 13:57:55'),(99,'plugins::content-manager.explorer.update','application::available-developers.available-developers','[\"title\",\"content\"]','[]',1,'2020-11-30 13:57:55','2020-11-30 13:57:55');
/*!40000 ALTER TABLE `strapi_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `strapi_role`
--

DROP TABLE IF EXISTS `strapi_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `strapi_role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `strapi_role_name_unique` (`name`),
  UNIQUE KEY `strapi_role_code_unique` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `strapi_role`
--

LOCK TABLES `strapi_role` WRITE;
/*!40000 ALTER TABLE `strapi_role` DISABLE KEYS */;
INSERT INTO `strapi_role` VALUES (1,'Super Admin','strapi-super-admin','Super Admins can access and manage all features and settings.','2020-11-03 14:04:56','2020-11-03 14:04:56'),(2,'Editor','strapi-editor','Editors can manage and publish contents including those of other users.','2020-11-03 14:04:56','2020-11-03 14:04:56'),(3,'Author','strapi-author','Authors can manage the content they have created.','2020-11-03 14:04:56','2020-11-03 14:04:56');
/*!40000 ALTER TABLE `strapi_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `strapi_users_roles`
--

DROP TABLE IF EXISTS `strapi_users_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `strapi_users_roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `strapi_users_roles`
--

LOCK TABLES `strapi_users_roles` WRITE;
/*!40000 ALTER TABLE `strapi_users_roles` DISABLE KEYS */;
INSERT INTO `strapi_users_roles` VALUES (1,1,1);
/*!40000 ALTER TABLE `strapi_users_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `strapi_webhooks`
--

DROP TABLE IF EXISTS `strapi_webhooks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `strapi_webhooks` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `url` longtext,
  `headers` longtext,
  `events` longtext,
  `enabled` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `strapi_webhooks`
--

LOCK TABLES `strapi_webhooks` WRITE;
/*!40000 ALTER TABLE `strapi_webhooks` DISABLE KEYS */;
/*!40000 ALTER TABLE `strapi_webhooks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `upload_file`
--

DROP TABLE IF EXISTS `upload_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `upload_file` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `alternativeText` varchar(255) DEFAULT NULL,
  `caption` varchar(255) DEFAULT NULL,
  `width` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `formats` longtext,
  `hash` varchar(255) NOT NULL,
  `ext` varchar(255) DEFAULT NULL,
  `mime` varchar(255) NOT NULL,
  `size` decimal(10,2) NOT NULL,
  `url` varchar(255) NOT NULL,
  `previewUrl` varchar(255) DEFAULT NULL,
  `provider` varchar(255) NOT NULL,
  `provider_metadata` longtext,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `upload_file`
--

LOCK TABLES `upload_file` WRITE;
/*!40000 ALTER TABLE `upload_file` DISABLE KEYS */;
INSERT INTO `upload_file` VALUES (10,'human-centered-design.webp','','',1274,713,'{\"thumbnail\":{\"name\":\"thumbnail_human-centered-design.webp\",\"hash\":\"thumbnail_human_centered_design_53aeee303b\",\"ext\":\".webp\",\"mime\":\"image/webp\",\"width\":245,\"height\":137,\"size\":1.12,\"path\":null,\"url\":\"/uploads/thumbnail_human_centered_design_53aeee303b.webp\"},\"large\":{\"name\":\"large_human-centered-design.webp\",\"hash\":\"large_human_centered_design_53aeee303b\",\"ext\":\".webp\",\"mime\":\"image/webp\",\"width\":1000,\"height\":560,\"size\":5.04,\"path\":null,\"url\":\"/uploads/large_human_centered_design_53aeee303b.webp\"},\"medium\":{\"name\":\"medium_human-centered-design.webp\",\"hash\":\"medium_human_centered_design_53aeee303b\",\"ext\":\".webp\",\"mime\":\"image/webp\",\"width\":750,\"height\":420,\"size\":3.61,\"path\":null,\"url\":\"/uploads/medium_human_centered_design_53aeee303b.webp\"},\"small\":{\"name\":\"small_human-centered-design.webp\",\"hash\":\"small_human_centered_design_53aeee303b\",\"ext\":\".webp\",\"mime\":\"image/webp\",\"width\":500,\"height\":280,\"size\":2.3,\"path\":null,\"url\":\"/uploads/small_human_centered_design_53aeee303b.webp\"}}','human_centered_design_53aeee303b','.webp','image/webp',6.81,'/uploads/human_centered_design_53aeee303b.webp',NULL,'local',NULL,1,1,'2020-12-16 12:10:32','2020-12-16 12:10:32'),(11,'3-most-common-mistakes.webp','','',2048,1150,'{\"thumbnail\":{\"name\":\"thumbnail_3-most-common-mistakes.webp\",\"hash\":\"thumbnail_3_most_common_mistakes_f68335cb61\",\"ext\":\".webp\",\"mime\":\"image/webp\",\"width\":245,\"height\":138,\"size\":6.07,\"path\":null,\"url\":\"/uploads/thumbnail_3_most_common_mistakes_f68335cb61.webp\"},\"large\":{\"name\":\"large_3-most-common-mistakes.webp\",\"hash\":\"large_3_most_common_mistakes_f68335cb61\",\"ext\":\".webp\",\"mime\":\"image/webp\",\"width\":1000,\"height\":562,\"size\":45.34,\"path\":null,\"url\":\"/uploads/large_3_most_common_mistakes_f68335cb61.webp\"},\"medium\":{\"name\":\"medium_3-most-common-mistakes.webp\",\"hash\":\"medium_3_most_common_mistakes_f68335cb61\",\"ext\":\".webp\",\"mime\":\"image/webp\",\"width\":750,\"height\":421,\"size\":30.08,\"path\":null,\"url\":\"/uploads/medium_3_most_common_mistakes_f68335cb61.webp\"},\"small\":{\"name\":\"small_3-most-common-mistakes.webp\",\"hash\":\"small_3_most_common_mistakes_f68335cb61\",\"ext\":\".webp\",\"mime\":\"image/webp\",\"width\":500,\"height\":281,\"size\":16.17,\"path\":null,\"url\":\"/uploads/small_3_most_common_mistakes_f68335cb61.webp\"}}','3_most_common_mistakes_f68335cb61','.webp','image/webp',146.99,'/uploads/3_most_common_mistakes_f68335cb61.webp',NULL,'local',NULL,1,1,'2020-12-16 12:10:32','2020-12-16 12:10:32');
/*!40000 ALTER TABLE `upload_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `upload_file_morph`
--

DROP TABLE IF EXISTS `upload_file_morph`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `upload_file_morph` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `upload_file_id` int(11) DEFAULT NULL,
  `related_id` int(11) DEFAULT NULL,
  `related_type` longtext,
  `field` longtext,
  `order` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `upload_file_morph`
--

LOCK TABLES `upload_file_morph` WRITE;
/*!40000 ALTER TABLE `upload_file_morph` DISABLE KEYS */;
INSERT INTO `upload_file_morph` VALUES (15,10,2,'blog','picture',1),(16,11,3,'blog','picture',1);
/*!40000 ALTER TABLE `upload_file_morph` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users-permissions_permission`
--

DROP TABLE IF EXISTS `users-permissions_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users-permissions_permission` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `controller` varchar(255) NOT NULL,
  `action` varchar(255) NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `policy` varchar(255) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=223 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users-permissions_permission`
--

LOCK TABLES `users-permissions_permission` WRITE;
/*!40000 ALTER TABLE `users-permissions_permission` DISABLE KEYS */;
INSERT INTO `users-permissions_permission` VALUES (1,'content-manager','components','findcomponent',1,'',1,NULL,NULL),(2,'content-manager','components','findcomponent',0,'',2,NULL,NULL),(3,'content-manager','components','listcomponents',0,'',1,NULL,NULL),(4,'content-manager','components','updatecomponent',0,'',1,NULL,NULL),(5,'content-manager','components','updatecomponent',0,'',2,NULL,NULL),(6,'content-manager','contentmanager','checkuidavailability',0,'',1,NULL,NULL),(7,'content-manager','components','listcomponents',0,'',2,NULL,NULL),(8,'content-manager','contentmanager','checkuidavailability',0,'',2,NULL,NULL),(9,'content-manager','contentmanager','count',0,'',1,NULL,NULL),(10,'content-manager','contentmanager','count',0,'',2,NULL,NULL),(11,'content-manager','contentmanager','create',0,'',1,NULL,NULL),(12,'content-manager','contentmanager','create',0,'',2,NULL,NULL),(13,'content-manager','contentmanager','delete',0,'',1,NULL,NULL),(14,'content-manager','contentmanager','delete',0,'',2,NULL,NULL),(15,'content-manager','contentmanager','deletemany',0,'',1,NULL,NULL),(16,'content-manager','contentmanager','deletemany',0,'',2,NULL,NULL),(17,'content-manager','contentmanager','find',1,'',1,NULL,NULL),(18,'content-manager','contentmanager','find',0,'',2,NULL,NULL),(19,'content-manager','contentmanager','findone',1,'',1,NULL,NULL),(20,'content-manager','contentmanager','findone',0,'',2,NULL,NULL),(21,'content-manager','contentmanager','findrelationlist',0,'',1,NULL,NULL),(22,'content-manager','contentmanager','findrelationlist',0,'',2,NULL,NULL),(23,'content-manager','contentmanager','generateuid',0,'',1,NULL,NULL),(24,'content-manager','contentmanager','generateuid',0,'',2,NULL,NULL),(25,'content-manager','contentmanager','publish',0,'',1,NULL,NULL),(26,'content-manager','contentmanager','publish',0,'',2,NULL,NULL),(27,'content-manager','contentmanager','unpublish',0,'',1,NULL,NULL),(28,'content-manager','contentmanager','unpublish',0,'',2,NULL,NULL),(29,'content-manager','contentmanager','update',0,'',1,NULL,NULL),(30,'content-manager','contentmanager','update',0,'',2,NULL,NULL),(31,'content-manager','contenttypes','findcontenttype',0,'',1,NULL,NULL),(32,'content-manager','contenttypes','findcontenttype',0,'',2,NULL,NULL),(33,'content-manager','contenttypes','listcontenttypes',0,'',1,NULL,NULL),(34,'content-manager','contenttypes','listcontenttypes',0,'',2,NULL,NULL),(35,'content-manager','contenttypes','updatecontenttype',0,'',1,NULL,NULL),(36,'content-manager','contenttypes','updatecontenttype',0,'',2,NULL,NULL),(37,'content-type-builder','builder','getreservednames',0,'',1,NULL,NULL),(38,'content-type-builder','builder','getreservednames',0,'',2,NULL,NULL),(39,'content-type-builder','componentcategories','deletecategory',0,'',1,NULL,NULL),(40,'content-type-builder','componentcategories','deletecategory',0,'',2,NULL,NULL),(41,'content-type-builder','componentcategories','editcategory',0,'',1,NULL,NULL),(42,'content-type-builder','componentcategories','editcategory',0,'',2,NULL,NULL),(43,'content-type-builder','components','createcomponent',0,'',1,NULL,NULL),(44,'content-type-builder','components','createcomponent',0,'',2,NULL,NULL),(45,'content-type-builder','components','deletecomponent',0,'',1,NULL,NULL),(46,'content-type-builder','components','deletecomponent',0,'',2,NULL,NULL),(47,'content-type-builder','components','getcomponent',0,'',1,NULL,NULL),(48,'content-type-builder','components','getcomponent',0,'',2,NULL,NULL),(49,'content-type-builder','components','getcomponents',0,'',1,NULL,NULL),(50,'content-type-builder','components','getcomponents',0,'',2,NULL,NULL),(51,'content-type-builder','components','updatecomponent',0,'',1,NULL,NULL),(52,'content-type-builder','components','updatecomponent',0,'',2,NULL,NULL),(53,'content-type-builder','connections','getconnections',0,'',1,NULL,NULL),(54,'content-type-builder','connections','getconnections',0,'',2,NULL,NULL),(55,'content-type-builder','contenttypes','createcontenttype',0,'',1,NULL,NULL),(56,'content-type-builder','contenttypes','createcontenttype',0,'',2,NULL,NULL),(57,'content-type-builder','contenttypes','deletecontenttype',0,'',1,NULL,NULL),(58,'content-type-builder','contenttypes','deletecontenttype',0,'',2,NULL,NULL),(59,'content-type-builder','contenttypes','getcontenttype',0,'',1,NULL,NULL),(60,'content-type-builder','contenttypes','getcontenttype',0,'',2,NULL,NULL),(61,'content-type-builder','contenttypes','getcontenttypes',0,'',1,NULL,NULL),(62,'content-type-builder','contenttypes','getcontenttypes',0,'',2,NULL,NULL),(63,'content-type-builder','contenttypes','updatecontenttype',0,'',1,NULL,NULL),(64,'content-type-builder','contenttypes','updatecontenttype',0,'',2,NULL,NULL),(65,'email','email','send',0,'',1,NULL,NULL),(66,'email','email','send',0,'',2,NULL,NULL),(67,'upload','upload','count',0,'',1,NULL,NULL),(68,'upload','upload','count',0,'',2,NULL,NULL),(69,'upload','upload','destroy',0,'',1,NULL,NULL),(70,'upload','upload','destroy',0,'',2,NULL,NULL),(71,'upload','upload','find',0,'',1,NULL,NULL),(72,'upload','upload','find',0,'',2,NULL,NULL),(73,'upload','upload','findone',0,'',1,NULL,NULL),(74,'upload','upload','findone',0,'',2,NULL,NULL),(75,'upload','upload','getsettings',0,'',1,NULL,NULL),(76,'upload','upload','getsettings',0,'',2,NULL,NULL),(77,'upload','upload','search',0,'',1,NULL,NULL),(78,'upload','upload','search',0,'',2,NULL,NULL),(79,'upload','upload','updatesettings',0,'',1,NULL,NULL),(80,'upload','upload','updatesettings',0,'',2,NULL,NULL),(81,'upload','upload','upload',0,'',1,NULL,NULL),(82,'upload','upload','upload',0,'',2,NULL,NULL),(83,'users-permissions','auth','callback',0,'',1,NULL,NULL),(84,'users-permissions','auth','callback',1,'',2,NULL,NULL),(85,'users-permissions','auth','connect',1,'',1,NULL,NULL),(86,'users-permissions','auth','connect',1,'',2,NULL,NULL),(87,'users-permissions','auth','emailconfirmation',0,'',1,NULL,NULL),(88,'users-permissions','auth','emailconfirmation',1,'',2,NULL,NULL),(89,'users-permissions','auth','forgotpassword',0,'',1,NULL,NULL),(90,'users-permissions','auth','forgotpassword',1,'',2,NULL,NULL),(91,'users-permissions','auth','register',0,'',1,NULL,NULL),(92,'users-permissions','auth','register',1,'',2,NULL,NULL),(93,'users-permissions','auth','resetpassword',0,'',1,NULL,NULL),(94,'users-permissions','auth','resetpassword',1,'',2,NULL,NULL),(95,'users-permissions','auth','sendemailconfirmation',0,'',1,NULL,NULL),(96,'users-permissions','auth','sendemailconfirmation',0,'',2,NULL,NULL),(97,'users-permissions','user','count',0,'',1,NULL,NULL),(98,'users-permissions','user','count',0,'',2,NULL,NULL),(99,'users-permissions','user','create',0,'',1,NULL,NULL),(100,'users-permissions','user','create',0,'',2,NULL,NULL),(101,'users-permissions','user','destroy',0,'',1,NULL,NULL),(102,'users-permissions','user','destroy',0,'',2,NULL,NULL),(103,'users-permissions','user','destroyall',0,'',1,NULL,NULL),(104,'users-permissions','user','destroyall',0,'',2,NULL,NULL),(105,'users-permissions','user','find',0,'',1,NULL,NULL),(106,'users-permissions','user','find',0,'',2,NULL,NULL),(107,'users-permissions','user','findone',0,'',1,NULL,NULL),(108,'users-permissions','user','findone',0,'',2,NULL,NULL),(109,'users-permissions','user','me',1,'',1,NULL,NULL),(110,'users-permissions','user','me',1,'',2,NULL,NULL),(111,'users-permissions','user','update',0,'',1,NULL,NULL),(112,'users-permissions','user','update',0,'',2,NULL,NULL),(113,'users-permissions','userspermissions','createrole',0,'',1,NULL,NULL),(114,'users-permissions','userspermissions','createrole',0,'',2,NULL,NULL),(115,'users-permissions','userspermissions','deleterole',0,'',1,NULL,NULL),(116,'users-permissions','userspermissions','deleterole',0,'',2,NULL,NULL),(117,'users-permissions','userspermissions','getadvancedsettings',0,'',1,NULL,NULL),(118,'users-permissions','userspermissions','getadvancedsettings',0,'',2,NULL,NULL),(119,'users-permissions','userspermissions','getemailtemplate',0,'',1,NULL,NULL),(120,'users-permissions','userspermissions','getemailtemplate',0,'',2,NULL,NULL),(121,'users-permissions','userspermissions','getpermissions',0,'',1,NULL,NULL),(122,'users-permissions','userspermissions','getpermissions',0,'',2,NULL,NULL),(123,'users-permissions','userspermissions','getpolicies',0,'',1,NULL,NULL),(124,'users-permissions','userspermissions','getpolicies',0,'',2,NULL,NULL),(125,'users-permissions','userspermissions','getproviders',0,'',1,NULL,NULL),(126,'users-permissions','userspermissions','getproviders',0,'',2,NULL,NULL),(127,'users-permissions','userspermissions','getrole',0,'',1,NULL,NULL),(128,'users-permissions','userspermissions','getrole',0,'',2,NULL,NULL),(129,'users-permissions','userspermissions','getroles',0,'',1,NULL,NULL),(130,'users-permissions','userspermissions','getroles',0,'',2,NULL,NULL),(131,'users-permissions','userspermissions','getroutes',0,'',1,NULL,NULL),(132,'users-permissions','userspermissions','getroutes',0,'',2,NULL,NULL),(133,'users-permissions','userspermissions','index',0,'',1,NULL,NULL),(134,'users-permissions','userspermissions','index',0,'',2,NULL,NULL),(135,'users-permissions','userspermissions','searchusers',0,'',1,NULL,NULL),(136,'users-permissions','userspermissions','searchusers',0,'',2,NULL,NULL),(137,'users-permissions','userspermissions','updateadvancedsettings',0,'',1,NULL,NULL),(138,'users-permissions','userspermissions','updateadvancedsettings',0,'',2,NULL,NULL),(139,'users-permissions','userspermissions','updateemailtemplate',0,'',1,NULL,NULL),(140,'users-permissions','userspermissions','updateemailtemplate',0,'',2,NULL,NULL),(141,'users-permissions','userspermissions','updateproviders',0,'',1,NULL,NULL),(142,'users-permissions','userspermissions','updateproviders',0,'',2,NULL,NULL),(143,'users-permissions','userspermissions','updaterole',0,'',1,NULL,NULL),(144,'users-permissions','userspermissions','updaterole',0,'',2,NULL,NULL),(145,'application','footer','delete',0,'',1,NULL,NULL),(146,'application','footer','delete',0,'',2,NULL,NULL),(147,'application','footer','find',0,'',1,NULL,NULL),(148,'application','footer','find',0,'',2,NULL,NULL),(149,'application','footer','update',0,'',1,NULL,NULL),(150,'application','footer','update',0,'',2,NULL,NULL),(151,'application','blog-post','count',0,'',1,NULL,NULL),(152,'application','blog-post','count',0,'',2,NULL,NULL),(153,'application','blog-post','create',0,'',1,NULL,NULL),(154,'application','blog-post','create',0,'',2,NULL,NULL),(155,'application','blog-post','delete',0,'',1,NULL,NULL),(156,'application','blog-post','delete',0,'',2,NULL,NULL),(157,'application','blog-post','find',1,'',1,NULL,NULL),(158,'application','blog-post','find',0,'ratelimit',2,NULL,NULL),(159,'application','blog-post','findone',1,'',1,NULL,NULL),(160,'application','blog-post','findone',0,'',2,NULL,NULL),(161,'application','blog-post','update',0,'',1,NULL,NULL),(162,'application','blog-post','update',0,'',2,NULL,NULL),(199,'application','faq','count',0,'',1,NULL,NULL),(200,'application','faq','count',0,'',2,NULL,NULL),(201,'application','faq','create',0,'',1,NULL,NULL),(202,'application','faq','create',0,'',2,NULL,NULL),(203,'application','faq','delete',0,'',1,NULL,NULL),(204,'application','faq','delete',0,'',2,NULL,NULL),(205,'application','faq','find',1,'',1,NULL,NULL),(206,'application','faq','find',0,'',2,NULL,NULL),(207,'application','faq','findone',1,'',1,NULL,NULL),(208,'application','faq','findone',0,'',2,NULL,NULL),(209,'application','faq','update',0,'',1,NULL,NULL),(210,'application','faq','update',0,'',2,NULL,NULL),(211,'application','available-developers','count',0,'',1,NULL,NULL),(212,'application','available-developers','count',0,'',2,NULL,NULL),(213,'application','available-developers','create',0,'',1,NULL,NULL),(214,'application','available-developers','create',0,'',2,NULL,NULL),(215,'application','available-developers','delete',0,'',1,NULL,NULL),(216,'application','available-developers','delete',0,'',2,NULL,NULL),(217,'application','available-developers','find',1,'',1,NULL,NULL),(218,'application','available-developers','find',0,'',2,NULL,NULL),(219,'application','available-developers','findone',1,'',1,NULL,NULL),(220,'application','available-developers','findone',0,'',2,NULL,NULL),(221,'application','available-developers','update',0,'',1,NULL,NULL),(222,'application','available-developers','update',0,'',2,NULL,NULL);
/*!40000 ALTER TABLE `users-permissions_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users-permissions_role`
--

DROP TABLE IF EXISTS `users-permissions_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users-permissions_role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users-permissions_role_type_unique` (`type`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users-permissions_role`
--

LOCK TABLES `users-permissions_role` WRITE;
/*!40000 ALTER TABLE `users-permissions_role` DISABLE KEYS */;
INSERT INTO `users-permissions_role` VALUES (1,'Authenticated','Default role given to authenticated user.','authenticated',NULL,NULL),(2,'Public','Default role given to unauthenticated user.','public',NULL,NULL);
/*!40000 ALTER TABLE `users-permissions_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users-permissions_user`
--

DROP TABLE IF EXISTS `users-permissions_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users-permissions_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `resetPasswordToken` varchar(255) DEFAULT NULL,
  `confirmationToken` varchar(255) DEFAULT NULL,
  `confirmed` tinyint(1) DEFAULT NULL,
  `blocked` tinyint(1) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users-permissions_user_username_unique` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users-permissions_user`
--

LOCK TABLES `users-permissions_user` WRITE;
/*!40000 ALTER TABLE `users-permissions_user` DISABLE KEYS */;
INSERT INTO `users-permissions_user` VALUES (1,'api','api@spinbits.io','local','$2a$10$g1apNDIrD7pe.V0wUj6mseVauYVKOuGRN3AOtemVmZ1zZ97kVrcRi',NULL,NULL,1,0,1,1,1,'2020-11-03 15:47:27','2020-11-03 15:47:27');
/*!40000 ALTER TABLE `users-permissions_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-16 12:29:39
