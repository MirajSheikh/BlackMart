-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: ecomdb
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cart_id` bigint NOT NULL AUTO_INCREMENT,
  `quantity` bigint DEFAULT NULL,
  `prod_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `FK2plmw2d0mm06vmdnf1djpfn3b` (`prod_id`),
  KEY `FKg5uhi8vpsuy0lgloxk2h4w5o6` (`user_id`),
  CONSTRAINT `FK2plmw2d0mm06vmdnf1djpfn3b` FOREIGN KEY (`prod_id`) REFERENCES `products` (`prod_id`),
  CONSTRAINT `FKg5uhi8vpsuy0lgloxk2h4w5o6` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (52,1,9,252),(56,2,19,1),(59,2,10,1),(61,1,15,1),(62,1,13,1),(65,1,7,1);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `prod_id` bigint NOT NULL,
  `prod_name` varchar(255) NOT NULL,
  `prod_price` float NOT NULL,
  `available` bit(1) NOT NULL,
  `prod_cat` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`prod_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (4,'Red Tape Men\'s Solid Sneakers',1300,_binary '','sneakers'),(5,'Men Puma Smashic Unisex Sneakers',2000,_binary '','sneakers'),(6,'Red Tape Men\'s Soft Cushioned Insole Slip-Resistance Sneakers',1100,_binary '','sneakers'),(7,'adidas Samba OG',11000,_binary '','sneakers'),(8,'Puma Court Ultra Lite Unisex Sneakers',3500,_binary '','sneakers'),(9,'Casio Men G-Shock Watch',6900,_binary '','watches'),(10,'Fossil Flynn Brown Watch',7800,_binary '','watches'),(11,'Casio EDIFICE',10900,_binary '','watches'),(12,'Sapphero Men\'s Waterproof Luminous Date Dial',4500,_binary '','watches'),(13,'Titan Smart Heritage Premium Smartwatch',12700,_binary '','watches'),(14,'H&M Men\'s Regular Fit T-shirt',400,_binary '','tshirts'),(15,'boffi Unisex Oversized Drop Shoulder T-Shirt',549,_binary '','tshirts'),(16,'Levi\'s Men Solid Round Neck T-Shirt',429,_binary '','tshirts'),(17,'Snitch Cupid Touch Brown Oversized Fit T-Shirt For Men',999,_binary '','tshirts'),(18,'The Souled Store Men\'s Graphic Printed Oversized T-Shirt',1199,_binary '','tshirts'),(19,'H&M Men\'s Loose Fit T-shirt',699,_binary '','tshirts'),(20,'Bewakoof Men\'s Hangin Astronaut',549,_binary '','tshirts'),(21,'Mydesignation Koi Embroidered Oversized Tshirt',999,_binary '','tshirts'),(52,'Pull Back Ford Mustang DIE CAST Metal Toy CAR',499,_binary '','toycars'),(53,'BDTCTK 1/24 Rolls-Royce Phantom Model Car',1299,_binary '','toycars'),(54,'Aryan Toys Innova Crysta Toy Car',299,_binary '','toycars'),(55,'Invite Enterprise 1:24 B.M.W XM SUV Model Car',1699,_binary '','toycars'),(56,'DieCast Metal Model Car',459,_binary '','toycars'),(57,'G63 Die-Cast 1:24 Scale Collectible Toy Car Model',1499,_binary '','toycars'),(58,'FEXXA Lambirghini Sian 1.32 Scale',929,_binary '','toycars'),(59,'Umadiya Range Rover Defender 1:32 Scale Model Car',899,_binary '','toycars'),(60,'MTG Metro Lambo Urus Sport Die-cast Model',999,_binary '','toycars'),(61,'DEUSON ECOM 1:32 Scale RR Cullinan Toy Car',1099,_binary '','toycars'),(62,'Bata Oxford For Men',1249,_binary '','mshoes'),(63,'Red Tape Men\'s Formal Horsebit Loafers',1129,_binary '','mshoes'),(64,'Red Tape Men\'s Formal Oxford Shoes',1369,_binary '','mshoes'),(65,'Bata Derby For Men',879,_binary '','mshoes'),(66,'Myntra Men\'s Formal Lace-up Shoes',1049,_binary '','mshoes'),(67,'Anouk Men\'s Square Toe Formal Oxfords',889,_binary '','mshoes'),(68,'Liberty Fortune Hol-125e Lacing Brogue Shoes',1249,_binary '','mshoes'),(69,'HERE&NOW Men Leather Formal Brogues by Myntra',919,_binary '','mshoes'),(70,'Women Puma Softfoam Smashic Unisex Sneakers',899,_binary '','wshoes'),(71,'Nike Women\'s Court Vision Low Next Nature Shoes',4999,_binary '','wshoes'),(102,'Park Avenue Men\'s Voyage Amazon Woods Premium Perfume',139,_binary '','perfumes'),(103,'Bella Vita Unisex Woody & Spicy Fragrance Kit',319,_binary '','perfumes'),(104,'Beardo Godfather Perfume',220,_binary '','perfumes'),(105,'AQ 365 Perfume Spray',649,_binary '','perfumes'),(106,'DENVER Hamilton Gift Set',309,_binary '','perfumes'),(107,'The Souled Store Galactic Long Lasting Perfume',799,_binary '','perfumes'),(108,'Wild Stone Edge Eau De Parfum',235,_binary '','perfumes'),(109,'Beardo Whisky Smoke Long Lasting Perfume Eau De Parfum',179,_binary '','perfumes'),(110,'Bella Vita Luxury Ceo Man Perfume',449,_binary '','perfumes'),(111,'Bella Vita Luxury G.O.A.T. Man Eau De Perfume',519,_binary '','perfumes'),(112,'Arabian Aroma Seduction Perfume For Men',420,_binary '','perfumes'),(113,'Redmi Watch 5 Active',1799,_binary '','smartwatches'),(114,'Realme Watch S2 Smartwatch',2899,_binary '','smartwatches'),(115,'Noise Colorfit Icon 2 Smart Watch',1099,_binary '','smartwatches'),(116,'Noise Vortex Plus Smartwatch',2399,_binary '','smartwatches'),(117,'boAt Lunar Orb Smart Watch',1599,_binary '','smartwatches'),(118,'Fastrack Xtreme Pro Smartwatch',3299,_binary '','smartwatches'),(119,'OnePlus Watch 2R',13499,_binary '','smartwatches'),(120,'OnePlus Nord Watch',3098,_binary '','smartwatches'),(121,'Samsung Galaxy Watch Ultra',35699,_binary '','smartwatches'),(122,'Apple Watch SE (2nd Gen, 2023)',20999,_binary '','smartwatches'),(123,'Google Pixel 9a',49999,_binary '','mobilephones'),(124,'Nothing Phone Pro 5G',27999,_binary '','mobilephones'),(125,'Motorola Edge 50 Fusion',21999,_binary '','mobilephones'),(126,'iQOO Neo 10R 5G Smartphone',27999,_binary '','mobilephones'),(127,'CMF by Nothing Phone 1 5G',13999,_binary '','mobilephones'),(128,'Redmi A5',6499,_binary '','mobilephones'),(129,'Apple iPhone 15',54999,_binary '','mobilephones'),(130,'Motorola Moto G85 5G',15599,_binary '','mobilephones'),(131,'Redmi Note 13 5g',13999,_binary '','mobilephones'),(132,'Redmi 14c 5g',9499,_binary '','mobilephones'),(133,'Motorola G05',6999,_binary '','mobilephones'),(134,'Samsung Galaxy S24 Ultra 5G',84999,_binary '','mobilephones'),(135,'Oppo Reno13 5G',37999,_binary '','mobilephones'),(136,'Samsung Galaxy Z Fold6',144999,_binary '','mobilephones'),(137,'Vivo V50 5G',36999,_binary '','mobilephones'),(138,'Realme Buds T110 With Ai Enc',1099,_binary '','earbuds'),(139,'Boat Airdopes 131',699,_binary '','earbuds'),(140,'Noise Buds N1 Truly Wireless Earbuds',899,_binary '','earbuds'),(141,'CMF by Nothing Buds 42 dB Active Noise Cancellation',1799,_binary '','earbuds'),(142,'OnePlus Nord Buds 2r True Wireless',1599,_binary '','earbuds'),(143,'Redmi Buds 5A True Wireless Earbuds',999,_binary '','earbuds'),(144,'Portronics Harmonics Twins S16',609,_binary '','earbuds');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_seq`
--

DROP TABLE IF EXISTS `products_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_seq`
--

LOCK TABLES `products_seq` WRITE;
/*!40000 ALTER TABLE `products_seq` DISABLE KEYS */;
INSERT INTO `products_seq` VALUES (201);
/*!40000 ALTER TABLE `products_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'mirajsheikh@gmail.com','miraj12345'),(2,'gousimsheikh@gmail.com','gousim12345'),(3,'moinsheikh@gmail.com','moin12345'),(4,'abdul@gmail.com','abdulabdul'),(5,'arjun@gmail.com','arjunarjun'),(52,'kabir@gmail.com','kabirkabir'),(102,'bilal@gmail.com','bilalbilal'),(152,'abdul@muslim.com','abdulabdul'),(202,'akbar@babar.in','akbarakbar'),(252,'sample@gmail.com','sample');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_seq`
--

DROP TABLE IF EXISTS `users_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_seq`
--

LOCK TABLES `users_seq` WRITE;
/*!40000 ALTER TABLE `users_seq` DISABLE KEYS */;
INSERT INTO `users_seq` VALUES (351);
/*!40000 ALTER TABLE `users_seq` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-06 12:52:39
