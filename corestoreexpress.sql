-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 30, 2021 at 04:46 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `corestoreexpress`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `wasanalysed` varchar(50) DEFAULT NULL,
  `coretype` varchar(100) DEFAULT NULL,
  `storeidentifier` varchar(100) DEFAULT NULL,
  `catalogcorefromdepth` float DEFAULT NULL,
  `catalogcoretodepth` float DEFAULT NULL,
  `coresecurityflag` varchar(200) DEFAULT NULL,
  `catalogcorelength` float DEFAULT NULL,
  `hascorephotos` varchar(20) DEFAULT NULL,
  `wellborecorename` varchar(100) DEFAULT NULL,
  `topcoreformation` varchar(20) DEFAULT NULL,
  `bottomcoreformation` varchar(100) DEFAULT NULL,
  `catalogpicturename` varchar(20) DEFAULT NULL,
  `catalogpicturesoftcopypath` varchar(100) DEFAULT NULL,
  `catalogpicturehyperlink` varchar(200) DEFAULT NULL,
  `catalogreportsoftcopypath` varchar(100) DEFAULT NULL,
  `catalogreporthyperlink` varchar(200) DEFAULT NULL,
  `documentformat` varchar(100) DEFAULT NULL,
  `filesize` varchar(20) DEFAULT NULL,
  `securitygrade` varchar(100) DEFAULT NULL,
  `openduedate` varchar(20) DEFAULT NULL,
  `comments` varchar(100) DEFAULT NULL,
  `corecatalogname` varchar(200) DEFAULT NULL,
  `welloperator` varchar(100) DEFAULT NULL,
  `wellbore` varchar(200) DEFAULT NULL,
  `spuddate` varchar(100) DEFAULT NULL,
  `corename` varchar(200) DEFAULT NULL,
  `coredate` varchar(100) DEFAULT NULL,
  `createdby` varchar(100) DEFAULT NULL,
  `datecreated` varchar(20) DEFAULT NULL,
  `modifiedon` varchar(100) DEFAULT NULL,
  `modifiedby` varchar(200) DEFAULT NULL,
  `pictureuploaddate` varchar(100) DEFAULT NULL,
  `reportuploaddate` varchar(200) DEFAULT NULL,
  `recorddate` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(80) NOT NULL,
  `password` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`) VALUES
(1, 'mugisha@pau.go.ug', '$2b$12$XTNNQQ8KlEr6n5jnLZsNLe4ujRoGF65iRD37eb1t3aDxMR.cTykSq'),
(2, 'authority@pau.go.ug', '$2b$12$ziVovUvftGPDZhHtiML1se7Q7pnSxua251TWfxt/COuGhr3r7pXjO'),
(3, 'test@pau.go.ug', '$2b$12$FIdcMSRaddptJrgxhGrR5ea11hZA8V84ot7XE8rfwKsZiNP4p6VEO');

-- --------------------------------------------------------

--
-- Table structure for table `wellbore`
--

CREATE TABLE `wellbore` (
  `id` int(11) NOT NULL,
  `wellboreofficialname` varchar(80) NOT NULL,
  `wellborelocalname` varchar(80) DEFAULT NULL,
  `wellborealiasname` varchar(120) DEFAULT NULL,
  `wellborespuddate` varchar(120) DEFAULT NULL,
  `spudyear` varchar(120) DEFAULT NULL,
  `wellboretypeid` varchar(120) DEFAULT NULL,
  `initialwellborepurposeid` varchar(120) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `wellborecore`
--

CREATE TABLE `wellborecore` (
  `id` int(11) NOT NULL,
  `corenumber` float NOT NULL,
  `coredate` varchar(100) NOT NULL,
  `wellborename` varchar(200) NOT NULL,
  `coringcontractor` varchar(200) NOT NULL,
  `coretopmdrt` varchar(100) NOT NULL,
  `corebottommdrt` varchar(100) NOT NULL,
  `coretoptvd` varchar(100) NOT NULL,
  `corebottomtvd` varchar(100) NOT NULL,
  `cutlength` varchar(100) NOT NULL,
  `cutlengthtvd` varchar(100) DEFAULT NULL,
  `recoveredlength` varchar(100) DEFAULT NULL,
  `corerecovery` varchar(100) DEFAULT NULL,
  `topformation` varchar(200) NOT NULL,
  `bottomformation` varchar(100) DEFAULT NULL,
  `wellborecorename` varchar(100) DEFAULT NULL,
  `corepicturesoftcopypath` varchar(100) DEFAULT NULL,
  `corepicturehyperlink` varchar(200) DEFAULT NULL,
  `corereportsoftcopypath` varchar(100) DEFAULT NULL,
  `corereporthyperlink` varchar(200) DEFAULT NULL,
  `documentformat` varchar(100) DEFAULT NULL,
  `filesize` varchar(20) DEFAULT NULL,
  `securitygrade` varchar(100) DEFAULT NULL,
  `openduedate` varchar(20) DEFAULT NULL,
  `comments` varchar(100) DEFAULT NULL,
  `documenttitle` varchar(200) DEFAULT NULL,
  `receivedate` varchar(100) DEFAULT NULL,
  `documentdate` varchar(100) DEFAULT NULL,
  `documentname` varchar(200) DEFAULT NULL,
  `cored` varchar(100) DEFAULT NULL,
  `createdby` varchar(100) DEFAULT NULL,
  `datecreated` varchar(20) DEFAULT NULL,
  `modifiedon` varchar(100) DEFAULT NULL,
  `modifiedby` varchar(200) DEFAULT NULL,
  `pictureuploaddate` varchar(100) DEFAULT NULL,
  `reportuploaddate` varchar(200) DEFAULT NULL,
  `recorddate` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `wells`
--

CREATE TABLE `wells` (
  `id` int(11) NOT NULL,
  `sampletype` varchar(80) DEFAULT NULL,
  `layer` varchar(80) DEFAULT NULL,
  `initialdepth` varchar(120) DEFAULT NULL,
  `terminationdepth` varchar(120) DEFAULT NULL,
  `samplebucket` varchar(120) DEFAULT NULL,
  `wellname` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `password` (`password`);

--
-- Indexes for table `wellbore`
--
ALTER TABLE `wellbore`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wellborecore`
--
ALTER TABLE `wellborecore`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wells`
--
ALTER TABLE `wells`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `wellbore`
--
ALTER TABLE `wellbore`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wellborecore`
--
ALTER TABLE `wellborecore`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wells`
--
ALTER TABLE `wells`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
