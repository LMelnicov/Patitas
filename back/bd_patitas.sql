-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: patitas
-- ------------------------------------------------------
-- Server version	9.7.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `titulo` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `descripcion` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `img_id` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (11,'al','Perro Adulto Grande','Alimento para perro adulto de tamaño grande marca Purina','ndrzyx3rakvgosxmbxfo'),(12,'al','Perro Adulto Pequeño','Alimento para perro adulto de tamaño chico marca Royal Canin','pyjks3nmwf0lcepqxfic'),(13,'al','Perro Cachorro Grande','Alimento para perro cachorro de tamaño grande marca Sieger','e4wvld6ptpcybtnq6bvu'),(14,'al','Perro Cachorro Pequeño','Alimento para perro cachorro de tamaño chico marca Agility','gbwvyacv2jjpmywqh87q'),(15,'al','Perro Adulto Control de peso','Alimento para perro adulto control de peso marca Balanced','f2da6ph22n6pj4mfdwqe'),(16,'acc','Pelota Smart','Pelota Contenedora de Alimento Grande','avmctn0gy3hbli5oor5v'),(17,'acc','Soga Juguete','Hueso de Soga Fun 43cm marca CanCat con 3 nudos','ejzjucdhxq1rsrexzjbl'),(18,'acc','Hueso de goma','Hueso CanCat de goma antimicrobial sabor pollo','uaiqmj9rnwmffhcmz4ia'),(19,'acc','Bolsa sanitaria','Bolsitas sanitarias para recoger excremento. 10 bolsas por rollo','mmfew03lrqrybsf9g9lw'),(20,'acc','Pala plástica ','Pala plástica para recoger excremento','iql041ad377lod4ls6xm'),(21,'con','Comedero','Comedero marca Pets Plast','fkqua12q5jhrars4ccqa'),(22,'con','Bebedero','Bebedero de plástico marca Ferplast tamaño mediano.','wkvigqsohkyv3yab7vgq'),(23,'con','Cama ','Cama Antiestrés marca DogLove','faobxrjpctsgwlhdor3j'),(24,'con','Collar','Collar de nylon acolchado','k8qdgnxomhqugttvp0dw'),(25,'con','Ropa','Ropa para perros distintos tamaños y colores','fet7pehnmtwmhlzejbfg');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'flavia','81dc9bdb52d04dc20036dbd8313ed055'),(2,'lucas','81dc9bdb52d04dc20036dbd8313ed055');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'patitas'
--
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-11-27 12:00:06
