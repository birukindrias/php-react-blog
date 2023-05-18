USE `groioio-313839e596`;
-- MariaDB dump 10.19  Distrib 10.11.2-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: mvc
-- ------------------------------------------------------
-- Server version	10.11.2-MariaDB-1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `follow`
--

DROP TABLE IF EXISTS `follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `follow` (
  `fid` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`fid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follow`
--

LOCK TABLES `follow` WRITE;
/*!40000 ALTER TABLE `follow` DISABLE KEYS */;
/*!40000 ALTER TABLE `follow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `likes` (
  `lid` int(11) NOT NULL AUTO_INCREMENT,
  `litem` varchar(50) DEFAULT NULL,
  `post_id` varchar(50) DEFAULT NULL,
  `user_id` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`lid`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES
(1,'1','9','19'),
(2,'1','9','19'),
(3,'1','2','19'),
(4,'1','11','19'),
(5,'1','11','19'),
(6,'1','11','19'),
(7,'1','11','19'),
(8,'1','11','19'),
(9,'1','8','19'),
(10,'1','8','19'),
(11,'1','8','19'),
(12,'1','8','19'),
(13,'1','6','19'),
(14,'1','10','19'),
(15,'1','58','19'),
(16,'1','58','19');
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `migration_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES
(1,'Likes.php'),
(2,'Posts.php'),
(3,'Users.php'),
(4,'follow.php');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(1050) DEFAULT NULL,
  `post` varchar(1050) DEFAULT NULL,
  `img` varchar(1050) DEFAULT NULL,
  `user_id` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES
(51,'','','',''),
(52,'','','',''),
(53,'','','',''),
(54,'','','',''),
(55,'','','',''),
(56,'','','',''),
(57,'','','',''),
(58,'asdfsd','sadfsdf','','19'),
(59,'Iusto officiis vel q','Architecto harum exp','10088hq720.jpg','19'),
(60,'Sunt hic voluptate i','Ipsa ullam voluptat','28041Screenshot_2023-05-03_09_27_35.png','19'),
(61,'Perspiciatis mollit','Neque consequatur q','','20'),
(62,'Rerum magni sed sint','Quod autem temporibu','',''),
(63,'Biruk Dev','Assumenda ex ea quos','23365file_name8492','27'),
(64,'Birukweb','Inventore voluptate ','717file_name4195','27');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `pimg` varchar(250) DEFAULT NULL,
  `bio` varchar(250) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1,'sexywit','bedyzuga@mailinator.com','Pa$$w0rd!','','','401862870'),
(2,'zoxalupoji','gewybed@mailinator.com','Pa$$w0rd!','','','1889445535'),
(3,'qizapa','fojag@mailinator.com','Pa$$w0rd!','','iasdfosadfasf','2066219559'),
(4,'jymy@mailinator.com','Pa$$w0rd!','','','','1477876982'),
(5,'Beatae non nulla qua','zovicugyl@mailinator.com','Pa$$w0rd!','','','185027032'),
(6,'noqagyvu','qodururewi@mailinator.com','Pa$$w0rd!','','','1543767534'),
(7,'gezezywoq','vumiv@mailinator.com','Pa$$w0rd!','','','495815954'),
(8,'gezezywoqs','vumiv@mailinator.cosm','Pa$$w0rd!','','','536492544'),
(9,'wosisuvobe','vozuxubyne@mailinator.com','Pa$$w0rd!','','','854624133'),
(10,'ralixoda','zuqogi@mailinator.com','Pa$$w0rd!','','','1726888632'),
(11,'lusiryfux','tiqaz@mailinator.com','Pa$$w0rd!','','','1919629512'),
(12,'sabymaqew','teso@mailinator.com','Pa$$w0rd!','','','1014919389'),
(13,'fakotafowe','batujen@mailinator.com','Pa$$w0rd!','','','1915563328'),
(14,'wezomyqyw','potoliw@mailinator.com','Pa$$w0rd!','','','1463978962'),
(15,'turybiqex','mowibeb@mailinator.com','Pa$$w0rd!','','','686145365'),
(16,'felyfily','nonubilab@mailinator.com','Pa$$w0rd!','','','1998585533'),
(17,'mymerud','pufuvomaku@mailinator.com','Pa$$w0rd!','','','1410203511'),
(18,'fotalegeru','loculi@mailinator.com','Pa$$w0rd!','','','387250663'),
(19,'gykukubo','nafipimuf@mailinator.com','Pa$$w0rd!','15057file_name24041','Eius porro in rerum ','704493683'),
(20,'zopoxi','legomaniqo@mailinator.com','Pa$$w0rd!','','','208271531'),
(21,'telehadu','kuti@mailinator.com','Pa$$w0rd!','','','2095874929'),
(22,'vitymok','jolusu@mailinator.com','Pa$$w0rd!','','','347980633'),
(23,'giqary','hyfonibi@mailinator.com','Pa$$w0rd!','','','968444488'),
(24,'pepytixin','qimynyxew@mailinator.com','Pa$$w0rd!','','','70098238'),
(25,'novuzuwi','rapabeboc@mailinator.com','Pa$$w0rd!','8325file_name6303','','411992468'),
(26,'kymimukox','wakiseli@mailinator.com','Pa$$w0rd!','','','1694868505'),
(27,'birukweb','kamagala@mailinator.com','Pa$$w0rd!','9814file_name240','Fuliorising stack','45163664');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-18  3:41:49
