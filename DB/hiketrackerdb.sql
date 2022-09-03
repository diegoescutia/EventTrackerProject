-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema hiketrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `hiketrackerdb` ;

-- -----------------------------------------------------
-- Schema hiketrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hiketrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `hiketrackerdb` ;

-- -----------------------------------------------------
-- Table `route`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `route` ;

CREATE TABLE IF NOT EXISTS `route` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(3000) NULL,
  `distance` VARCHAR(45) NOT NULL,
  `time` TIME NOT NULL,
  `pace` VARCHAR(45) NULL,
  `location` VARCHAR(200) NOT NULL,
  `date` DATE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS hiker@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'hiker'@'localhost' IDENTIFIED BY 'hiker';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'hiker'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `route`
-- -----------------------------------------------------
START TRANSACTION;
USE `hiketrackerdb`;
INSERT INTO `route` (`id`, `description`, `distance`, `time`, `pace`, `location`, `date`) VALUES (1, 'first', '2.0', '00:21:00 ', '8.2', 'lawrenceville', '2022-01-15');
INSERT INTO `route` (`id`, `description`, `distance`, `time`, `pace`, `location`, `date`) VALUES (2, 'walk in the park', '4.6', '01:02:00', '12.3', 'duluth', '2022-01-16');
INSERT INTO `route` (`id`, `description`, `distance`, `time`, `pace`, `location`, `date`) VALUES (3, 'run at the park', '5.0', '00:32:00', '7.2', 'Bethesda Park', '2022-03-18');
INSERT INTO `route` (`id`, `description`, `distance`, `time`, `pace`, `location`, `date`) VALUES (4, NULL, '8.9', '03:30:00', '14.0', 'Raven Cliff Falls', '2022-06-23');

COMMIT;

