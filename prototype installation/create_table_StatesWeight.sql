CREATE TABLE `StatesWeight` (
  `state` text,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `class I` int(11) DEFAULT NULL,
  `class II` int(11) DEFAULT NULL,
  `class III` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;