/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : localhost:3306
 Source Schema         : orderfood

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 20/03/2021 15:13:08
*/
create database orderfood;
use orderfood;
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `updatedAt` bigint(0) NULL DEFAULT NULL,
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1616224827483, 1616224827483, 1, 'Lã Minh Đức');
INSERT INTO `admin` VALUES (1616224932571, 1616224932571, 2, 'Lã Minh Đức');

-- ----------------------------
-- Table structure for archive
-- ----------------------------
DROP TABLE IF EXISTS `archive`;
CREATE TABLE `archive`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `fromModel` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `originalRecord` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `originalRecordId` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for banner
-- ----------------------------
DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner`  (
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `updatedAt` bigint(0) NULL DEFAULT NULL,
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isActive` tinyint(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of banner
-- ----------------------------
INSERT INTO `banner` VALUES (41241421, 124214214, 1, 'Banner1', 'dâdwdwdwd', 1);
INSERT INTO `banner` VALUES (24124124, 124124, 2, 'Banner 2', '124124214', 0);

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `updatedAt` bigint(0) NULL DEFAULT NULL,
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `customerId` int(0) NULL DEFAULT NULL,
  `storeId` int(0) NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  INDEX `FK_CUSTOMER_COMMENT`(`customerId`) USING BTREE,
  INDEX `FK_STORE_COMMENT`(`storeId`) USING BTREE,
  CONSTRAINT `FK_CUSTOMER_COMMENT` FOREIGN KEY (`customerId`) REFERENCES `customer` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_STORE_COMMENT` FOREIGN KEY (`storeId`) REFERENCES `store` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for customer
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer`  (
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `updatedAt` bigint(0) NULL DEFAULT NULL,
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` double NULL DEFAULT NULL,
  `birth` bigint(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of customer
-- ----------------------------
INSERT INTO `customer` VALUES (14214214124, 124124214, 1, 'Lã Minh Đức', 'Cầu Giấy', 'ffalfjsdlkfjslkfja', 1, NULL);
INSERT INTO `customer` VALUES (2414214214, 2414214214, 2, 'ăf', NULL, NULL, 1, 12412421412421);
INSERT INTO `customer` VALUES (1615437641782, 1615437641782, 3, 'Duc', NULL, NULL, 1, 124124124);

-- ----------------------------
-- Table structure for food
-- ----------------------------
DROP TABLE IF EXISTS `food`;
CREATE TABLE `food`  (
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `updatedAt` bigint(0) NULL DEFAULT NULL,
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `initPrice` double NULL DEFAULT NULL,
  `typeOfFoodId` int(0) NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `salePrice` double NULL DEFAULT NULL,
  `storeId` int(0) NULL DEFAULT NULL,
  `menuId` int(0) NULL DEFAULT NULL,
  `totalSold` double NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  INDEX `typeOfFoodId`(`typeOfFoodId`) USING BTREE,
  INDEX `menuId`(`menuId`) USING BTREE,
  INDEX `storeId`(`storeId`) USING BTREE,
  CONSTRAINT `food_ibfk_1` FOREIGN KEY (`typeOfFoodId`) REFERENCES `food` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `food_ibfk_2` FOREIGN KEY (`menuId`) REFERENCES `menu` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `food_ibfk_3` FOREIGN KEY (`storeId`) REFERENCES `store` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of food
-- ----------------------------
INSERT INTO `food` VALUES (4141242421, 14124242, 2, 'Cơm rang dưa bò', 20000, 2, 'đạwdwdwd', 'Cơm rang dưa bò', 'Cơm rang dưa bò ngon nhất vịnh bắc bộ', 30000, 1, 1, 0);
INSERT INTO `food` VALUES (124214214, 124124, 3, 'Cơm rang đùi gà', 20000, 2, 'adwdwad', 'Cơm rang đùi gà', 'Cơm rang đùi gà ngon', 30000, 1, 1, 0);
INSERT INTO `food` VALUES (124124124, 124124124, 4, 'Phở truyền thống', 20000, 3, '124124124', 'Phở truyền thống', 'Phở truyền thống ở việt nam', 30000, 1, 2, 0);
INSERT INTO `food` VALUES (12412414214, 141412421, 5, 'Cocacola', 6000, NULL, '1241241', 'Đồ ống', 'Ccocal', 10000, 1, 3, 0);

-- ----------------------------
-- Table structure for imageofstore
-- ----------------------------
DROP TABLE IF EXISTS `imageofstore`;
CREATE TABLE `imageofstore`  (
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `updatedAt` bigint(0) NULL DEFAULT NULL,
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `storeId` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  INDEX `storeId`(`storeId`) USING BTREE,
  CONSTRAINT `imageofstore_ibfk_1` FOREIGN KEY (`storeId`) REFERENCES `store` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for likestore
-- ----------------------------
DROP TABLE IF EXISTS `likestore`;
CREATE TABLE `likestore`  (
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `updatedAt` bigint(0) NULL DEFAULT NULL,
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `customerId` int(0) NULL DEFAULT NULL,
  `storeId` int(0) NULL DEFAULT NULL,
  `isActive` tinyint(0) NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  INDEX `customerId`(`customerId`) USING BTREE,
  INDEX `storeId`(`storeId`) USING BTREE,
  CONSTRAINT `likestore_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `customer` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `likestore_ibfk_2` FOREIGN KEY (`storeId`) REFERENCES `store` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of likestore
-- ----------------------------
INSERT INTO `likestore` VALUES (124124214, 124124214, 5, 3, 2, 1);
INSERT INTO `likestore` VALUES (1616211594245, 1616211594245, 13, 3, 1, 1);

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu`  (
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `updatedAt` bigint(0) NULL DEFAULT NULL,
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `storeId` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  INDEX `storeId`(`storeId`) USING BTREE,
  CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`storeId`) REFERENCES `store` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES (124124, 124124, 1, 'Cơm', 1);
INSERT INTO `menu` VALUES (124124, 124124, 2, 'Phở', 1);
INSERT INTO `menu` VALUES (124124124, 124124124, 3, 'Đồ uống', 1);

-- ----------------------------
-- Table structure for orderaddress
-- ----------------------------
DROP TABLE IF EXISTS `orderaddress`;
CREATE TABLE `orderaddress`  (
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `updatedAt` bigint(0) NULL DEFAULT NULL,
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `customerId` int(0) NULL DEFAULT NULL,
  `type` tinyint(0) NULL DEFAULT NULL,
  `isActive` tinyint(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  INDEX `customerId`(`customerId`) USING BTREE,
  CONSTRAINT `orderaddress_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `customer` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orderaddress
-- ----------------------------
INSERT INTO `orderaddress` VALUES (124214214, 12414214214, 1, 'Cầu Giấy', 1, 1, 0);
INSERT INTO `orderaddress` VALUES (124124214214, 124124214214, 2, '1afawfwf', 1, 1, 1);
INSERT INTO `orderaddress` VALUES (1615256784459, 1615256784459, 3, 'đường Thành Công, Hà Nội', 1, 1, 0);
INSERT INTO `orderaddress` VALUES (1615448674699, 1615448674699, 4, 'đường Thành Công, Hà Nội', 3, 1, 0);
INSERT INTO `orderaddress` VALUES (1615448698727, 1615448698727, 5, 'đường Thành Công, Hà Nội', 3, 1, 1);

-- ----------------------------
-- Table structure for rate
-- ----------------------------
DROP TABLE IF EXISTS `rate`;
CREATE TABLE `rate`  (
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `updatedAt` bigint(0) NULL DEFAULT NULL,
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `customerId` int(0) NULL DEFAULT NULL,
  `storeId` int(0) NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `star` double NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  INDEX `customerId`(`customerId`) USING BTREE,
  INDEX `storeId`(`storeId`) USING BTREE,
  CONSTRAINT `rate_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `customer` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `rate_ibfk_2` FOREIGN KEY (`storeId`) REFERENCES `store` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for saledetail
-- ----------------------------
DROP TABLE IF EXISTS `saledetail`;
CREATE TABLE `saledetail`  (
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `updatedAt` bigint(0) NULL DEFAULT NULL,
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `foodId` int(0) NULL DEFAULT NULL,
  `saleId` int(0) NULL DEFAULT NULL,
  `totalCostOfGood` double NULL DEFAULT NULL,
  `quantity` double NULL DEFAULT NULL,
  `price` double NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  INDEX `foodId`(`foodId`) USING BTREE,
  INDEX `saleheader_idx`(`saleId`) USING BTREE,
  CONSTRAINT `saledetail_ibfk_2` FOREIGN KEY (`foodId`) REFERENCES `food` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `saleheader` FOREIGN KEY (`saleId`) REFERENCES `saleheader` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 33 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of saledetail
-- ----------------------------
INSERT INTO `saledetail` VALUES (124124124124, 124124124124, 10, 2, 21, 20000, 2, 10000);
INSERT INTO `saledetail` VALUES (124124124124, 124124124124, 11, 3, 21, 30000, 3, 10000);
INSERT INTO `saledetail` VALUES (124124124124, 124124124124, 12, 2, 22, 20000, 2, 10000);
INSERT INTO `saledetail` VALUES (124124124124, 124124124124, 13, 3, 22, 30000, 3, 10000);
INSERT INTO `saledetail` VALUES (124124124124, 124124124124, 14, 2, 23, 20000, 2, 10000);
INSERT INTO `saledetail` VALUES (124124124124, 124124124124, 15, 3, 23, 30000, 3, 10000);
INSERT INTO `saledetail` VALUES (1616208168075, 1616208168075, 16, 2, 30, 30000, 1, 30000);
INSERT INTO `saledetail` VALUES (1616208168075, 1616208168075, 17, 3, 30, 60000, 2, 30000);
INSERT INTO `saledetail` VALUES (1616208423460, 1616208423460, 18, 2, 31, 30000, 1, 30000);
INSERT INTO `saledetail` VALUES (1616208423460, 1616208423460, 19, 3, 31, 60000, 2, 30000);
INSERT INTO `saledetail` VALUES (1616208433823, 1616208433823, 20, 2, 32, 30000, 1, 30000);
INSERT INTO `saledetail` VALUES (1616208433823, 1616208433823, 21, 3, 32, 60000, 2, 30000);
INSERT INTO `saledetail` VALUES (1616208782910, 1616208782910, 28, 2, 36, 30000, 1, 30000);
INSERT INTO `saledetail` VALUES (1616208782910, 1616208782910, 29, 3, 36, 60000, 2, 30000);
INSERT INTO `saledetail` VALUES (1616208816006, 1616208816006, 30, 2, 37, 30000, 1, 30000);
INSERT INTO `saledetail` VALUES (1616208816006, 1616208816006, 31, 3, 37, 60000, 2, 30000);

-- ----------------------------
-- Table structure for saleheader
-- ----------------------------
DROP TABLE IF EXISTS `saleheader`;
CREATE TABLE `saleheader`  (
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `updatedAt` bigint(0) NULL DEFAULT NULL,
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `customerId` int(0) NULL DEFAULT NULL,
  `shipperId` int(0) NULL DEFAULT NULL,
  `typeOfSaleId` int(0) NULL DEFAULT NULL,
  `storeBranchId` int(0) NULL DEFAULT NULL,
  `totalPrice` double NULL DEFAULT NULL,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `discountCode` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  INDEX `shipperId`(`shipperId`) USING BTREE,
  INDEX `customerId`(`customerId`) USING BTREE,
  INDEX `typeOfSaleId`(`typeOfSaleId`) USING BTREE,
  INDEX `storeBranchId`(`storeBranchId`) USING BTREE,
  CONSTRAINT `saleheader_ibfk_1` FOREIGN KEY (`shipperId`) REFERENCES `shipper` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `saleheader_ibfk_2` FOREIGN KEY (`customerId`) REFERENCES `customer` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `saleheader_ibfk_3` FOREIGN KEY (`typeOfSaleId`) REFERENCES `typeofsale` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `saleheader_ibfk_4` FOREIGN KEY (`storeBranchId`) REFERENCES `storebranch` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 38 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of saleheader
-- ----------------------------
INSERT INTO `saleheader` VALUES (124124124124, 124124124124, 1, 'Hoàn Kiếm', 1, NULL, 1, 1, 10000, 'adkskw', '20');
INSERT INTO `saleheader` VALUES (124124124124, 124124124124, 11, 'Hoàn Kiếm', 1, NULL, 1, 1, 10000, 'adkskw', '20');
INSERT INTO `saleheader` VALUES (124124124124, 124124124124, 12, 'Hoàn Kiếm', 1, NULL, 1, 1, 10000, 'adkskw', '20');
INSERT INTO `saleheader` VALUES (21421, 12512515, 20, NULL, 1, NULL, 1, 1, NULL, NULL, '20');
INSERT INTO `saleheader` VALUES (124124124124, 124124124124, 21, 'Hoàn Kiếm', 1, NULL, 1, 1, 10000, 'adkskw', '20');
INSERT INTO `saleheader` VALUES (124124124124, 124124124124, 22, 'Hoàn Kiếm', 1, NULL, 1, 1, 10000, 'adkskw', '20');
INSERT INTO `saleheader` VALUES (124124124124, 124124124124, 23, 'Hoàn Kiếm', 1, NULL, 1, 1, 10000, 'adkskw', '20');
INSERT INTO `saleheader` VALUES (1616208168075, 1616208168075, 30, NULL, 3, NULL, 1, 1, 90000, 'test', '0');
INSERT INTO `saleheader` VALUES (1616208423460, 1616208423460, 31, NULL, 3, NULL, 1, 1, 90000, 'test', '0');
INSERT INTO `saleheader` VALUES (1616208433823, 1616208433823, 32, NULL, 3, NULL, 7, 1, 90000, 'test', '0');
INSERT INTO `saleheader` VALUES (1616208782910, 1616208782910, 36, NULL, 3, NULL, 1, 1, 90000, 'test', '0');
INSERT INTO `saleheader` VALUES (1616208816006, 1616208816006, 37, NULL, 3, NULL, 2, 1, 90000, 'test', '0');

-- ----------------------------
-- Table structure for service
-- ----------------------------
DROP TABLE IF EXISTS `service`;
CREATE TABLE `service`  (
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `updatedAt` bigint(0) NULL DEFAULT NULL,
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `typeOfServiceId` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  INDEX `typeOfServiceId`(`typeOfServiceId`) USING BTREE,
  CONSTRAINT `service_ibfk_1` FOREIGN KEY (`typeOfServiceId`) REFERENCES `typeofservice` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of service
-- ----------------------------
INSERT INTO `service` VALUES (124214124, 124214214, 1, 'Trà sữa', 1);
INSERT INTO `service` VALUES (1241242, 124124, 2, 'Cơm', 1);
INSERT INTO `service` VALUES (124124, 124214124, 3, 'Phở', 1);
INSERT INTO `service` VALUES (124214124, 124124124124, 4, 'Bún', 1);
INSERT INTO `service` VALUES (1241414214, 12412412412, 5, 'Trà chanh', 1);
INSERT INTO `service` VALUES (141241421, 21414124, 6, 'Kem', 1);
INSERT INTO `service` VALUES (124124124124, 12412421, 7, 'Đồ chay', 1);
INSERT INTO `service` VALUES (21412412, 1242142, 8, 'Healthy Food', 1);

-- ----------------------------
-- Table structure for shipper
-- ----------------------------
DROP TABLE IF EXISTS `shipper`;
CREATE TABLE `shipper`  (
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `updatedAt` bigint(0) NULL DEFAULT NULL,
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` double NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for store
-- ----------------------------
DROP TABLE IF EXISTS `store`;
CREATE TABLE `store`  (
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `updatedAt` bigint(0) NULL DEFAULT NULL,
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `rateOne` double NULL DEFAULT 0,
  `rateTwo` double NULL DEFAULT 0,
  `rateThree` double NULL DEFAULT 0,
  `rateFour` double NULL DEFAULT 0,
  `rateFive` double NULL DEFAULT 0,
  `totalSold` double NULL DEFAULT 0,
  `totalLike` int(0) NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of store
-- ----------------------------
INSERT INTO `store` VALUES (14124124, 12412412, 1, 'Cơm ngon', 0, 0, 0, 0, 0, 0, 2);

-- ----------------------------
-- Table structure for storebranch
-- ----------------------------
DROP TABLE IF EXISTS `storebranch`;
CREATE TABLE `storebranch`  (
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `updatedAt` bigint(0) NULL DEFAULT NULL,
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` double NULL DEFAULT NULL,
  `storeId` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  INDEX `storeId`(`storeId`) USING BTREE,
  CONSTRAINT `storebranch_ibfk_1` FOREIGN KEY (`storeId`) REFERENCES `store` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of storebranch
-- ----------------------------
INSERT INTO `storebranch` VALUES (12414124, 2414124, 1, 'Chi nhánh 1', 'Hoàn kiếm', '214124', 1, 1);

-- ----------------------------
-- Table structure for typeoffood
-- ----------------------------
DROP TABLE IF EXISTS `typeoffood`;
CREATE TABLE `typeoffood`  (
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `updatedAt` bigint(0) NULL DEFAULT NULL,
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `serviceId` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  INDEX `serviceId`(`serviceId`) USING BTREE,
  CONSTRAINT `typeoffood_ibfk_1` FOREIGN KEY (`serviceId`) REFERENCES `service` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of typeoffood
-- ----------------------------
INSERT INTO `typeoffood` VALUES (14124124, 12412414, 1, 'Trà sữa', 1);
INSERT INTO `typeoffood` VALUES (241241242, 124124, 2, 'Cơm', 2);
INSERT INTO `typeoffood` VALUES (1241242, 124124, 3, 'Phở', 3);
INSERT INTO `typeoffood` VALUES (12414124, 12414124, 4, 'Bún', 4);
INSERT INTO `typeoffood` VALUES (12412414, 1241424124, 5, 'Trà chanh', 5);
INSERT INTO `typeoffood` VALUES (12414141, 124124124, 6, 'Kem', 6);
INSERT INTO `typeoffood` VALUES (1421421412, 12414124, 7, 'Đồ chay', 7);
INSERT INTO `typeoffood` VALUES (12414124, 124141241, 8, 'Healthy Food', 8);

-- ----------------------------
-- Table structure for typeofsale
-- ----------------------------
DROP TABLE IF EXISTS `typeofsale`;
CREATE TABLE `typeofsale`  (
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `updatedAt` bigint(0) NULL DEFAULT NULL,
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of typeofsale
-- ----------------------------
INSERT INTO `typeofsale` VALUES (124124124, 1241421, 1, 'Tạo đơn hàng');
INSERT INTO `typeofsale` VALUES (24124214, 124124, 2, 'Tạo đơn hàng thành công');

-- ----------------------------
-- Table structure for typeofservice
-- ----------------------------
DROP TABLE IF EXISTS `typeofservice`;
CREATE TABLE `typeofservice`  (
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `updatedAt` bigint(0) NULL DEFAULT NULL,
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of typeofservice
-- ----------------------------
INSERT INTO `typeofservice` VALUES (14124124124, 14124142, 1, 'Danh mục đồ ăn');
INSERT INTO `typeofservice` VALUES (414214124, 124214, 2, 'Đi chợ online');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `updatedAt` bigint(0) NULL DEFAULT NULL,
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `userGroupId` int(0) NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `objectId` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (41241242, 124124, 1, 1, '0356798938', '123455', 'laminhduc2610@gmail.com', 1);
INSERT INTO `user` VALUES (2414214214, 2414214214, 2, 1, NULL, 'ădawdưd', 'ldlđl', 2);
INSERT INTO `user` VALUES (1615437641782, 1615437641782, 3, 1, NULL, '$2b$10$flY9XL4lbcLVX4i243.fzOv9XsIn/iF1igNV8gIpOLjaPjjXEaOPm', 'laduc43@gmail.com', 3);
INSERT INTO `user` VALUES (1616224827483, 1616224827483, 4, 0, NULL, '$2b$10$2tY3QGtnv.i6r8wqwkTBjeGzrbbn.LyfpwNrg/24PYw6pWAftgvxm', 'laminhduc2610@gmail.com', 1);
INSERT INTO `user` VALUES (1616224932571, 1616224932571, 5, 0, NULL, '$2b$10$vj8cMsxcv7/ZesoVZFtp7.kp56bNhQ/78FpSpDCPjj0Tuc/fM8lEy', 'laminhduc26101@gmail.com', 2);

-- ----------------------------
-- Table structure for usergroup
-- ----------------------------
DROP TABLE IF EXISTS `usergroup`;
CREATE TABLE `usergroup`  (
  `createdAt` bigint(0) NULL DEFAULT NULL,
  `updatedAt` bigint(0) NULL DEFAULT NULL,
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of usergroup
-- ----------------------------
INSERT INTO `usergroup` VALUES (1242525515, 124124214, 1, 'Khách hàng');
INSERT INTO `usergroup` VALUES (12512512525, 5215215215, 2, 'Người giao hàng');

-- ----------------------------
-- Procedure structure for CREATE_LIKE
-- ----------------------------
DROP PROCEDURE IF EXISTS `CREATE_LIKE`;
delimiter ;;
CREATE PROCEDURE `CREATE_LIKE`(IN storeId1 int,
    in customerId1 int,
    IN timeCreate bigint(20))
BEGIN

    DECLARE errno INT;
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
    GET CURRENT DIAGNOSTICS CONDITION 1 errno = MYSQL_ERRNO;
    SELECT errno AS MYSQL_ERROR;
    ROLLBACK;
    END;

    START TRANSACTION;
	INSERT INTO likestore(createdAt, updatedAt, customerId, storeId,isActive)
    values (timeCreate,timeCreate,customerId1, storeId1, 1);
	update store set totalLike = totalLike + 1  where id = storeId1;
    COMMIT WORK;

END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for DIS_LIKE
-- ----------------------------
DROP PROCEDURE IF EXISTS `DIS_LIKE`;
delimiter ;;
CREATE PROCEDURE `DIS_LIKE`(IN storeId1 int,
    in customerId1 int,
    IN timeCreate bigint(20),
    in isActive1 tinyint(4))
BEGIN
	declare `check` int;
    DECLARE errno INT;
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
    GET CURRENT DIAGNOSTICS CONDITION 1 errno = MYSQL_ERRNO;
    SELECT errno AS MYSQL_ERROR;
    ROLLBACK;
    END;

    START TRANSACTION;
    update likestore set isActive = isActive1  where storeId = storeId1 and customerId = customerId1;
    if isActive1 = 1 then
		update store set totalLike = totalLike - 1  where id = storeId1;
	else
		update store set totalLike = totalLike + 1  where id = storeId1;
    end if;
	select totalLike from store where id = storeId1;
    set `check` = (select totalLike from store where id = storeId1);
     IF `check` < 0  THEN
      ROLLBACK ;
	END IF;
    COMMIT WORK;

END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for INSERT_SALE
-- ----------------------------
DROP PROCEDURE IF EXISTS `INSERT_SALE`;
delimiter ;;
CREATE PROCEDURE `INSERT_SALE`(IN customer_id         int,
  IN type_of_sale_id    int,
  IN store_branch_id     int,
  IN total_price        float,
  IN code_voucher varchar(10),
  IN discount_code   int,
  IN sale_detail        TEXT,
  in address1 varchar(255),
  in create_date bigint(20))
BEGIN
    DECLARE strLen    INT DEFAULT 0;
    DECLARE SubStrLen INT DEFAULT 0;
    declare i int default 1;
    declare subStr varchar(50);
    declare sslength int default 1;
    declare fid int;
    declare ttcofg double;
    declare qtt double;
    declare p double;
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
      ROLLBACK;
    END;
    START TRANSACTION;

    INSERT INTO saleheader (
      createdAt,
      updatedAt,
      address,
      customerId,
      typeOfSaleId,
      totalPrice,
      `code`,
      discountCode,
      storeBranchId
    )
    VALUES (
    create_date,
    create_date,
    address1,
    customer_id,
    type_of_sale_id,
    total_price,
    code_voucher,
    discount_code,
    store_branch_id
    
      );
   
    SELECT last_insert_id()
      INTO @newId;
    do_this:
      LOOP
        SET strLen = CHAR_LENGTH(sale_detail);
        set subStr = SUBSTRING_INDEX(sale_detail, ';', 1);
        
        set fid =  SUBSTRING_INDEX(subStr, ',', 1);
        
		SET sslength = CHAR_LENGTH(SUBSTRING_INDEX(subStr, ',', 1))+2;
        SET subStr = MID(subStr, sslength, CHAR_LENGTH(subStr));
        
        set ttcofg =  SUBSTRING_INDEX(subStr, ',', 1);
       
		SET sslength = CHAR_LENGTH(SUBSTRING_INDEX(subStr, ',', 1))+2;
        SET subStr = MID(subStr, sslength, CHAR_LENGTH(subStr));
        
        set qtt =  SUBSTRING_INDEX(subStr, ',', 1);
        
		SET sslength = CHAR_LENGTH(SUBSTRING_INDEX(subStr, ',', 1))+2;
        SET subStr = MID(subStr, sslength, CHAR_LENGTH(subStr));
        
        set p =  SUBSTRING_INDEX(subStr, ',', 1);
        
		SET sslength = CHAR_LENGTH(SUBSTRING_INDEX(subStr, ',', 1))+2;
        SET subStr = MID(subStr, sslength, CHAR_LENGTH(subStr));
       
        INSERT INTO saledetail (createdAt,updatedAt,saleId, foodId, totalCostOfGood, quantity, price) 
        VALUES(create_date,create_date,@newId,fid,ttcofg,qtt,p);
		
        SET SubStrLen = CHAR_LENGTH(SUBSTRING_INDEX(sale_detail, ';', 1))+2;
    
        SET sale_detail = MID(sale_detail, SubStrLen, strLen); -- cut the 1st list item out
       
	
        IF sale_detail = '' THEN
          LEAVE do_this;
        END IF;
      END LOOP do_this;
		select @newId - 1 
    COMMIT;
  END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PT_IMP_ODR_ADR
-- ----------------------------
DROP PROCEDURE IF EXISTS `PT_IMP_ODR_ADR`;
delimiter ;;
CREATE PROCEDURE `PT_IMP_ODR_ADR`(in address1 varchar(255),
in type1 tinyint(4),
in customerId1 int,
in timeCreate bigint(20))
BEGIN

    DECLARE errno INT;
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
    GET CURRENT DIAGNOSTICS CONDITION 1 errno = MYSQL_ERRNO;
    SELECT errno AS MYSQL_ERROR;
    ROLLBACK;
    END;

    START TRANSACTION;

	update orderaddress set isActive = 0 where customerId = customerId1;
	INSERT INTO orderaddress(createdAt, updatedAt, address, type, isActive, customerId)
    values (timeCreate,timeCreate,address1,type1,1,customerId1);
    COMMIT WORK;

END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PT_UPD_ODR_ADR
-- ----------------------------
DROP PROCEDURE IF EXISTS `PT_UPD_ODR_ADR`;
delimiter ;;
CREATE PROCEDURE `PT_UPD_ODR_ADR`(IN orderAddressId int,
    in customerId1 int)
BEGIN

    DECLARE errno INT;
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
    GET CURRENT DIAGNOSTICS CONDITION 1 errno = MYSQL_ERRNO;
    SELECT errno AS MYSQL_ERROR;
    ROLLBACK;
    END;

    START TRANSACTION;

	update orderaddress set isActive = 0 where customerId = customerId1 and isActive = 1;
	update orderaddress set isActive = 1 where id = orderAddressId;
    COMMIT WORK;

END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for REGISTER_ADMIN
-- ----------------------------
DROP PROCEDURE IF EXISTS `REGISTER_ADMIN`;
delimiter ;;
CREATE PROCEDURE `REGISTER_ADMIN`(IN name1 varchar(255),
    IN password1 varchar(255),
    in email varchar(255),
    in time1 bigint(20))
BEGIN

    DECLARE errno INT;
    declare v_user_id int default 0;
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    
    BEGIN
    GET CURRENT DIAGNOSTICS CONDITION 1 errno = MYSQL_ERRNO;
    SELECT errno AS MYSQL_ERROR;
    ROLLBACK;
    END;
	
    START TRANSACTION;
    
	INSERT INTO admin(createdAt, updatedAt, name)
    values (time1,time1,name1);
    set v_user_id = last_insert_id();
    insert into user(createdAt,updatedAt,userGroupId,password,email,objectId)
    values (time1,time1,0,password1,email,v_user_id);
    select v_user_id;
    COMMIT WORK;

END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for REGISTER_CUSTOMER
-- ----------------------------
DROP PROCEDURE IF EXISTS `REGISTER_CUSTOMER`;
delimiter ;;
CREATE PROCEDURE `REGISTER_CUSTOMER`(IN name1 varchar(255),
    in birth1 bigint(20),
    IN password1 varchar(255),
    in email varchar(255),
    in time1 bigint(20))
BEGIN

    DECLARE errno INT;
    declare v_user_id int default 0;
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    
    BEGIN
    GET CURRENT DIAGNOSTICS CONDITION 1 errno = MYSQL_ERRNO;
    SELECT errno AS MYSQL_ERROR;
    ROLLBACK;
    END;
	
    START TRANSACTION;
    
	INSERT INTO customer(createdAt, updatedAt, name, birth,status)
    values (time1,time1,name1, birth1, 1);
    set v_user_id = last_insert_id();
    insert into user(createdAt,updatedAt,userGroupId,password,email,objectId)
    values (time1,time1,1,password1,email,v_user_id);
    select v_user_id;
    COMMIT WORK;

END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for REGISTER_SHIPPER
-- ----------------------------
DROP PROCEDURE IF EXISTS `REGISTER_SHIPPER`;
delimiter ;;
CREATE PROCEDURE `REGISTER_SHIPPER`(IN name1 varchar(255),
    IN address1 varchar(255),
    IN image1 varchar(255),
    IN password1 varchar(255),
    in email varchar(255),
    in time1 bigint(20))
BEGIN

    DECLARE errno INT;
    declare v_user_id int default 0;
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    
    BEGIN
    GET CURRENT DIAGNOSTICS CONDITION 1 errno = MYSQL_ERRNO;
    SELECT errno AS MYSQL_ERROR;
    ROLLBACK;
    END;
	
    START TRANSACTION;
    
	INSERT INTO shipper(createdAt, updatedAt, name,address,image, status)
    values (time1,time1,name1,address1,image1,1);
    set v_user_id = last_insert_id();
    insert into user(createdAt,updatedAt,userGroupId,password,email,objectId)
    values (time1,time1,2,password1,email,v_user_id);
    select v_user_id;
    COMMIT WORK;

END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for REGISTER_STORE
-- ----------------------------
DROP PROCEDURE IF EXISTS `REGISTER_STORE`;
delimiter ;;
CREATE PROCEDURE `REGISTER_STORE`(IN name1 varchar(255),
    IN password1 varchar(255),
    in email varchar(255),
    in time1 bigint(20))
BEGIN

    DECLARE errno INT;
    declare v_user_id int default 0;
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    
    BEGIN
    GET CURRENT DIAGNOSTICS CONDITION 1 errno = MYSQL_ERRNO;
    SELECT errno AS MYSQL_ERROR;
    ROLLBACK;
    END;
	
    START TRANSACTION;
    
	INSERT INTO store(createdAt, updatedAt, name)
    values (time1,time1,name1);
    set v_user_id = last_insert_id();
    insert into user(createdAt,updatedAt,userGroupId,password,email,objectId)
    values (time1,time1,3,password1,email,v_user_id);
    select v_user_id;
    COMMIT WORK;

END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
